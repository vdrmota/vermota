import Sidebar from './_components/Sidebar'
import Breadcrumb from './_components/Breadcrumb'
import MobileMenu from './_components/MobileMenu'

export const metadata = {
    title: 'Dashboard',
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />

            {/* Inset main content */}
            <div className="flex flex-1 flex-col bg-zinc-100 p-2">
                <div className="flex flex-1 flex-col overflow-hidden rounded-xl bg-zinc-50 shadow-sm">
                    {/* Top bar */}
                    <header className="flex h-14 items-center justify-between border-b border-zinc-200 px-4 lg:px-6">
                        <div className="flex items-center gap-3">
                            <MobileMenu />
                            <Breadcrumb />
                        </div>
                        <div className="h-8 w-8 rounded-full bg-zinc-200" />
                    </header>

                    <main className="flex-1 overflow-auto p-6">{children}</main>
                </div>
            </div>
        </div>
    )
}
