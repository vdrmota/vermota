'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Settings, CreditCard, LogOut } from 'lucide-react'
import { floatingPanel, menuItem } from '../_lib/styles'

export default function ProfileDropdown() {
    const [open, setOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const menuItems = [
        { label: 'Account Settings', href: '/account-settings', icon: Settings },
        { label: 'Billing', href: '/billing', icon: CreditCard },
    ]

    return (
        <div ref={dropdownRef} className="relative">
            <button
                onClick={() => setOpen(!open)}
                className={`flex h-10 w-10 cursor-pointer items-center justify-center ${floatingPanel.small} transition-colors hover:bg-zinc-200`}
            >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-300 text-xs font-medium text-zinc-600">A</div>
            </button>

            {open && (
                <div
                    className="absolute right-0 top-12 w-48 p-1.5 rounded-2xl backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_12px_48px_rgba(0,0,0,0.2)]"
                    style={{ background: 'rgba(255,255,255,0.55)' }}
                >
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={`${menuItem.base} ${menuItem.inactive}`}
                        >
                            <item.icon className="h-4 w-4" />
                            {item.label}
                        </Link>
                    ))}
                    <div className="my-1.5 border-t border-zinc-200" />
                    <button
                        onClick={() => {
                            setOpen(false)
                            // Handle sign out logic here
                        }}
                        className={`w-full cursor-pointer ${menuItem.base} ${menuItem.inactive}`}
                    >
                        <LogOut className="h-4 w-4" />
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    )
}
