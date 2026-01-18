import { ArrowRight } from 'lucide-react'
import Logo from '@/components/Logo'

const navLinks = [
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: 'mailto:vojta@vermota.com' },
]

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 border-b border-zinc-200/50 bg-white/80 shadow-sm shadow-zinc-900/5 backdrop-blur-md">
            <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-8">
                    <Logo />

                    <nav className="hidden items-center gap-6 md:flex">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>

                <a
                    href="/book-a-demo"
                    className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
                >
                    Book a demo
                    <ArrowRight className="h-3.5 w-3.5" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar
