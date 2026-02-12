'use server'
import {Resend} from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function sendContact(formData: FormData) {
  try {
    const email = formData.get('email') as string
    const orgName = formData.get('orgName') as string
    const role = formData.get('role') as string
    const message = formData.get('message') as string

    const tools = formData.getAll('tools') as string[]

    const res = await resend.emails.send({
      from: 'NexusPortal <contact@nexusportal.app>',
      to: 'contact@nexusportal.app',
      replyTo: email,
      subject: '[APPCONTACT]',
      html: `
        <h2>New contact request</h2>
        <p><b>Email:</b> ${email}</p>
        <p><b>Organisation:</b> ${orgName || '-'}</p>
        <p><b>Role:</b> ${role || '-'}</p>
        <p><b>Tools:</b> ${tools.join(', ') || '-'}</p>
        <p><b>Message:</b></p>
        <p>${message || '-'}</p>
      `,
    })
    console.log(res)
  } catch (err) {
    console.error(err)
  }
}
