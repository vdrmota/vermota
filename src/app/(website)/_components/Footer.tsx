const footerLinks = [
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: 'mailto:vojta@vermota.com' },
]

const Footer = () => {
    return (
        <footer className="border-t border-zinc-200/50 bg-zinc-50 py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    {/* Logo + Links */}
                    <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900">
                                <span className="text-sm font-bold text-white">V</span>
                            </div>
                            <span className="text-lg font-semibold text-zinc-900">Vermota</span>
                        </div>

                        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                            {footerLinks.map((link, index) => (
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

                    {/* Copyright */}
                    <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Vermota</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
