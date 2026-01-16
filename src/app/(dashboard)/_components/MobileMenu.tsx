'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Logo from '@/components/Logo'
import { navigation } from '../_lib/navigation'

export default function MobileMenu() {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    return (
        <>
            {/* Hamburger button */}
            <button
                onClick={() => setOpen(true)}
                className="cursor-pointer rounded-md p-1.5 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700 lg:hidden"
            >
                <Menu className="h-5 w-5" />
            </button>

            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 z-40 bg-black/20 lg:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Drawer */}
            <div
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-zinc-100 transition-transform duration-200 ease-in-out lg:hidden ${
                    open ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                {/* Header */}
                <div className="flex h-14 items-center justify-between px-4">
                    <Logo linked={false} />
                    <button
                        onClick={() => setOpen(false)}
                        className="cursor-pointer rounded-md p-1.5 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-700"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="px-3 py-2">
                    <ul className="space-y-0.5">
                        {navigation.map((item) => {
                            const isActive = item.href === '/dashboard'
                                ? pathname === '/dashboard'
                                : pathname.startsWith(item.href)
                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className={`flex items-center gap-2 rounded-md px-2.5 py-2 text-sm font-medium transition-all duration-300 ease-in-out ${
                                            isActive
                                                ? 'bg-[#002FA7]/5 text-[#002FA7]'
                                                : 'text-zinc-600 hover:bg-zinc-200/50 hover:text-zinc-900'
                                        }`}
                                    >
                                        <item.icon className="h-4 w-4 shrink-0" />
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </>
    )
}
