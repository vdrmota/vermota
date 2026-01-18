'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { X } from 'lucide-react'
import Logo from '@/components/Logo'
import { navigation } from '../_lib/navigation'
import { floatingPanel, menuItem } from '../_lib/styles'
import { useMobileMenu } from '../_context/MobileMenuContext'
import AccountSwitcher from './AccountSwitcher'

export default function MobileMenu() {
    const pathname = usePathname()
    const { open, setOpen } = useMobileMenu()

    return (
        <>
            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 z-[100] bg-black/20 lg:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Drawer */}
            <div
                className={`fixed bottom-3 left-3 top-3 z-[110] flex w-64 flex-col ${floatingPanel.base} transition-transform duration-200 ease-in-out lg:hidden ${
                    open ? 'translate-x-0' : '-translate-x-[calc(100%+12px)]'
                }`}
            >
                {/* Header */}
                <div className="flex h-14 items-center justify-between px-4">
                    <Logo linked={false} />
                    <button
                        onClick={() => setOpen(false)}
                        className="cursor-pointer rounded-lg p-1.5 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-700"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-3 py-2">
                    <ul className="space-y-1">
                        {navigation.map((item) => {
                            const isActive = item.href === '/dashboard'
                                ? pathname === '/dashboard'
                                : pathname.startsWith(item.href)
                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className={`${menuItem.base} ${isActive ? menuItem.active : menuItem.inactive}`}
                                    >
                                        <item.icon className="h-4 w-4 shrink-0" />
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                {/* Account Switcher */}
                <AccountSwitcher />
            </div>
        </>
    )
}
