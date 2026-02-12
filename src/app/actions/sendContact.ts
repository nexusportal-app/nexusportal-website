'use server'

import {Resend} from 'resend'
import {appConf} from '@/core/conf'

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function sendContact(_: any, formData: FormData) {
  try {
    const email = (formData.get('email') as string)?.trim()
    const orgName = (formData.get('orgName') as string)?.trim()
    const role = (formData.get('role') as string)?.trim()
    const tools = formData.getAll('tools') as string[]
    const message = (formData.get('message') as string)?.trim()
    const wantsDemo = formData.get('demo') === 'yes'

    if (!email) throw new Error('Missing email')

    const toolsText = tools.length ? tools.join(', ') : '—'
    const orgText = orgName || '—'
    const roleText = role || '—'
    const messageText = message || '—'
    const demoText = wantsDemo ? 'Yes ✅' : 'No'

    await resend.emails.send({
      from: 'NexusPortal <contact@nexusportal.app>',
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

    await resend.emails.send({
      from: 'NexusPortal <contact@nexusportal.app>',
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
    })

    return {success: true}
  } catch (err) {
    console.error('sendContact error:', err)
    return {success: false}
  }
}
