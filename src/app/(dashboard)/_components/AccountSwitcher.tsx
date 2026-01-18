'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronsUpDown, Check, Coffee, User } from 'lucide-react'
import { useSidebar } from '../_context/SidebarContext'

type Account = {
    id: string
    name: string
    plan: string
    type: 'business' | 'personal'
}

const accounts: Account[] = [
    { id: '1', name: 'Acme Coffee', plan: 'Business', type: 'business' },
    { id: '2', name: 'Jane Doe', plan: 'Personal', type: 'personal' },
]

export default function AccountSwitcher() {
    const { collapsed } = useSidebar()
    const [isOpen, setIsOpen] = useState(false)
    const [selectedAccount, setSelectedAccount] = useState(accounts[0])
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    const handleSelect = (account: Account) => {
        setSelectedAccount(account)
        setIsOpen(false)
    }

    return (
        <div ref={containerRef} className="relative px-3 pb-3">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex w-full cursor-pointer items-center gap-3 rounded-xl bg-zinc-100 p-2 transition-colors hover:bg-zinc-200 ${collapsed ? 'justify-center' : ''}`}
                title={collapsed ? `${selectedAccount.name} - ${selectedAccount.plan}` : undefined}
            >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                    {selectedAccount.type === 'business' ? (
                        <Coffee className="h-5 w-5 text-zinc-900" />
                    ) : (
                        <User className="h-5 w-5 text-zinc-900" />
                    )}
                </div>

                {!collapsed && (
                    <>
                        <div className="min-w-0 flex-1 text-left">
                            <div className="truncate text-xs font-medium text-zinc-900">{selectedAccount.name}</div>
                            <div className="truncate text-xs text-zinc-500">{selectedAccount.plan}</div>
                        </div>

                        <ChevronsUpDown className="h-4 w-4 text-zinc-400" />
                    </>
                )}
            </button>

            {isOpen && !collapsed && (
                <div className="absolute bottom-full left-3 right-3 mb-2 rounded-xl bg-white p-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
                    {accounts.map((account) => (
                        <button
                            key={account.id}
                            onClick={() => handleSelect(account)}
                            className="flex w-full cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors hover:bg-zinc-100"
                        >
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-100">
                                {account.type === 'business' ? (
                                    <Coffee className="h-5 w-5 text-zinc-900" />
                                ) : (
                                    <User className="h-5 w-5 text-zinc-900" />
                                )}
                            </div>
                            <div className="min-w-0 flex-1 text-left">
                                <div className="truncate text-xs font-medium text-zinc-900">{account.name}</div>
                                <div className="truncate text-xs text-zinc-500">{account.plan}</div>
                            </div>
                            {selectedAccount.id === account.id && (
                                <Check className="h-4 w-4 text-[#002FA7]" />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
