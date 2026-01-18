import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'

export const metadata: Metadata = {
    title: {
        default: 'Vermota | Loyalty without the rule builders',
        template: '%s | Vermota',
    },
    description:
        'Write what you want in plain English. Vermota turns it into rules, rewards, messages, and reporting your team can run today.',
    openGraph: {
        title: 'Vermota | Loyalty without the rule builders',
        description:
            'Write what you want in plain English. Vermota turns it into rules, rewards, messages, and reporting your team can run today.',
        siteName: 'Vermota',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Vermota | Loyalty without the rule builders',
        description:
            'Write what you want in plain English. Vermota turns it into rules, rewards, messages, and reporting your team can run today.',
    },
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={GeistSans.className}>
            <body className="antialiased">{children}</body>
        </html>
    )
}
