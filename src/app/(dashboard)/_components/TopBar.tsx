'use client'

import { Menu } from 'lucide-react'
import Breadcrumb from './Breadcrumb'
import ProfileDropdown from './ProfileDropdown'
import { floatingPanel } from '../_lib/styles'
import { useMobileMenu } from '../_context/MobileMenuContext'

export default function TopBar() {
    const { setOpen } = useMobileMenu()

    return (
        <div className="sticky top-0 z-30 flex items-center justify-between p-3 pb-0">
            <div className={`flex h-10 items-center gap-3 px-4 ${floatingPanel.small}`}>
                <button
                    onClick={() => setOpen(true)}
                    className="cursor-pointer rounded-lg p-1.5 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-700 lg:hidden"
                >
                    <Menu className="h-5 w-5" />
                </button>
                <span className="hidden sm:block"><Breadcrumb /></span>
            </div>
            <ProfileDropdown />
        </div>
    )
}
