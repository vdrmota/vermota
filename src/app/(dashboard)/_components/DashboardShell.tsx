'use client'

import { SidebarProvider, useSidebar } from '../_context/SidebarContext'
import { MobileMenuProvider } from '../_context/MobileMenuContext'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import AIPrompt from './AIPrompt'
import MobileMenu from './MobileMenu'

function DashboardContent({ children }: { children: React.ReactNode }) {
    const { collapsed } = useSidebar()

    return (
        <>
            <MobileMenu />

            <div className="flex min-h-screen bg-[#fcfcfc]">
                <Sidebar />

                <div className={`flex flex-1 flex-col transition-all duration-200 ${collapsed ? 'lg:ml-24' : 'lg:ml-56'}`}>
                    <TopBar />
                    <main className="flex-1 overflow-auto p-6 pb-40">{children}</main>
                </div>

                <AIPrompt />
            </div>
        </>
    )
}

export default function DashboardShell({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <MobileMenuProvider>
                <DashboardContent>{children}</DashboardContent>
            </MobileMenuProvider>
        </SidebarProvider>
    )
}
