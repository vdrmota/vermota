'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PanelLeftClose, PanelLeft } from 'lucide-react'
import Logo from '@/components/Logo'
import { navigation } from '../_lib/navigation'
import { floatingPanel, menuItem } from '../_lib/styles'
import { useSidebar } from '../_context/SidebarContext'
import AccountSwitcher from './AccountSwitcher'

export default function Sidebar() {
    const pathname = usePathname()
    const { collapsed, toggle } = useSidebar()

    return (
        <aside className={`fixed left-3 top-3 bottom-3 hidden flex-col ${floatingPanel.base} lg:flex ${collapsed ? 'w-14' : 'w-52'} transition-all duration-200 z-40`}>
            {/* Header */}
            <div className={`flex h-14 items-center px-4 ${collapsed ? 'justify-center' : 'justify-between'}`}>
                {!collapsed && <Logo linked={false} />}
                <button
                    onClick={toggle}
                    className="cursor-pointer rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600"
                >
                    {collapsed ? <PanelLeft className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-2">
                <ul className="space-y-0.5">
                    {navigation.map((item) => {
                        const isActive = item.href === '/dashboard'
                            ? pathname === '/dashboard'
                            : pathname.startsWith(item.href)
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`${menuItem.base} ${isActive ? menuItem.active : menuItem.inactive}`}
                                    title={collapsed ? item.title : undefined}
                                >
                                    <item.icon className="h-4 w-4 shrink-0" />
                                    {!collapsed && item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            {/* Account Switcher */}
            <AccountSwitcher />
        </aside>
    )
}
