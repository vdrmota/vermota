import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'

export const metadata: Metadata = {
    title: 'Vermota - Loyalty Programs with Taste',
    description:
        'Build your loyalty program using natural language. Write what you want in plain English. Vermota turns it into rules, rewards, and messages your team can run today.',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en" className={GeistSans.className}>
            <body className="antialiased">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout
