'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type MobileMenuContextType = {
    open: boolean
    setOpen: (open: boolean) => void
    toggle: () => void
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(undefined)

export function MobileMenuProvider({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(false)

    const toggle = () => setOpen(prev => !prev)

    return (
        <MobileMenuContext.Provider value={{ open, setOpen, toggle }}>
            {children}
        </MobileMenuContext.Provider>
    )
}

export function useMobileMenu() {
    const context = useContext(MobileMenuContext)
    if (!context) {
        throw new Error('useMobileMenu must be used within a MobileMenuProvider')
    }
    return context
}
