import { sendEmail } from '@/lib/emailClient'

interface DemoRequestData {
    firstName: string
    lastName: string
    company: string
    phone: string
    email: string
    source: string
}

export async function sendDemoRequestEmail(data: DemoRequestData): Promise<void> {
    const { firstName, lastName, company, phone, email, source } = data

    const emailBody = `
            New demo request from website:

            Name: ${firstName} ${lastName}
            Company: ${company}
            Phone: ${phone}
            Email: ${email}
            How they found us: ${source}
    `.trim()

    try {
        await sendEmail({
            to: 'vojta@vermota.com',
            subject: 'Demo requested from website',
            text: emailBody,
        })
    } catch (error) {
        console.error('Failed to send demo request email:', { error, data })
    }
}
