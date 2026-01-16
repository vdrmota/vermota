'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PanelLeftClose, PanelLeft } from 'lucide-react'
import Logo from '@/components/Logo'
import { navigation } from '../_lib/navigation'

export default function Sidebar() {
    const pathname = usePathname()
    const [collapsed, setCollapsed] = useState(false)

    return (
        <aside className={`hidden flex-col bg-zinc-100 lg:flex ${collapsed ? 'w-14' : 'w-48'} transition-all duration-200`}>
            {/* Header */}
            <div className={`flex h-14 items-center px-4 ${collapsed ? 'justify-center' : 'justify-between'}`}>
                {!collapsed && <Logo linked={false} />}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="cursor-pointer rounded-md p-1.5 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-700"
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
                                    className={`flex items-center gap-2 rounded-md px-2.5 py-2 text-sm font-medium transition-all duration-300 ease-in-out ${
                                        isActive
                                            ? 'bg-[#002FA7]/5 text-[#002FA7]'
                                            : 'text-zinc-600 hover:bg-zinc-200/50 hover:text-zinc-900'
                                    }`}
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
        </aside>
    )
}
