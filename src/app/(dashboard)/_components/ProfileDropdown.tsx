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
                <div className="h-6 w-6 rounded-full bg-zinc-300" />
            </button>

            {open && (
                <div className={`absolute right-0 top-12 w-48 p-1.5 ${floatingPanel.base}`}>
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
