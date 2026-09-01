'use server'

import {Resend} from 'resend'
import {appConf} from '@/core/conf'
import {headers} from 'next/headers'

const resend = new Resend(process.env.RESEND_API_KEY!)

export type ContactState = {success: true} | {success: false; error: 'captcha' | 'send'}

const esc = (s = '') =>
  s.trim().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const verifyCaptcha = async (token: unknown): Promise<boolean> => {
  if (typeof token !== 'string' || !token) return false
  const h = await headers()
  const ip = h.get('cf-connecting-ip') ?? h.get('x-forwarded-for')?.split(',')[0]?.trim()

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: token,
      ...(ip ? {remoteip: ip} : {}),
    }),
    cache: 'no-store',
  })
  const data = await res.json()
  return data.success === true
}

export async function sendContact(_: ContactState | null, formData: FormData): Promise<ContactState> {
  if (!await verifyCaptcha(formData.get('cf-turnstile-response'))) {
    return {success: false, error: 'captcha'}
  }

  const email = esc(formData.get('email') as string)
  const orgText = esc(formData.get('orgName') as string) || '—'
  const roleText = esc(formData.get('role') as string) || '—'
  const messageText = esc(formData.get('message') as string).replace(/\n/g, '<br/>') || '—'
  const toolsText = (formData.getAll('tools') as string[]).map(esc).join(', ') || '—'
  const wantsDemo = formData.get('demo') === 'yes'
  const demoText = wantsDemo ? 'Yes ✅' : 'No'

  if (!email) return {success: false, error: 'send'}

  const from = 'NexusPortal <contact@nexusportal.app>'

  try {
    const {error} = await resend.emails.send({
      from,
      to: 'contact@nexusportal.app',
      replyTo: email,
      subject: `[CONTACT] ${wantsDemo ? '🔥 Demo request' : 'New message'}`,
      html: `
        <h2>New contact request</h2>

        <p><b>Email:</b> ${email}</p>
        <p><b>Organisation:</b> ${orgText}</p>
        <p><b>Role:</b> ${roleText}</p>
        <p><b>Tools:</b> ${toolsText}</p>
        <p><b>Requested demo:</b> ${demoText}</p>

        <p><b>Message:</b></p>
        <p>${messageText}</p>
      `,
    })
    if (error) throw error
  } catch (err) {
    console.error('sendContact error:', err)
    return {success: false, error: 'send'}
  }

  // Best-effort : une adresse invalide ne doit pas faire échouer la soumission
  resend.emails.send({
    from,
    to: email,
    replyTo: 'contact@nexusportal.app',
    subject: 'We received your message ✔',
    html: `
      <h2>Thanks for contacting NexusPortal 🙌</h2>
      <p>We've received your request and will get back to you within ${appConf.replyDelayDelay}.</p>

      <h3>Your message summary</h3>

      <p><b>Email:</b> ${email}</p>
      <p><b>Organisation:</b> ${orgText}</p>
      <p><b>Role:</b> ${roleText}</p>
      <p><b>Tools mentioned:</b> ${toolsText}</p>
      <p><b>Requested demo:</b> ${demoText}</p>

      <p><b>Your message:</b></p>
      <p>${messageText}</p>

      <br/>
      <p>You can reply directly to this email if you want to add anything.</p>
      <hr/>
      <p><b>— NexusPortal Team</b></p>
    `,
  }).catch(err => console.error('sendContact confirmation error:', err))

  return {success: true}
}