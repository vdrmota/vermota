import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface SendEmailOptions {
    to: string
    subject: string
    text: string
    html?: string
}

export async function sendEmail({ to, subject, text, html }: SendEmailOptions): Promise<void> {
    await resend.emails.send({
        from: 'Vermota <noreply@vermota.com>',
        to,
        subject,
        text,
        html: html ?? undefined,
    })
}
