import Sidebar from './_components/Sidebar'
import Breadcrumb from './_components/Breadcrumb'
import MobileMenu from './_components/MobileMenu'

export const metadata = {
    title: 'Dashboard',
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-zinc-50">
            <Sidebar />

            {/* Main content area */}
            <div className="flex flex-1 flex-col">
                {/* Floating top bar elements */}
                <div className="flex items-center justify-between p-3 pb-0">
                    {/* Breadcrumbs container */}
                    <div className="flex h-10 items-center gap-3 rounded-2xl bg-zinc-100 px-4 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_6px_20px_rgba(0,0,0,0.15)]">
                        <MobileMenu />
                        <Breadcrumb />
                    </div>
                    {/* Profile container */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-100 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_6px_20px_rgba(0,0,0,0.15)]">
                        <div className="h-6 w-6 rounded-full bg-zinc-300" />
                    </div>
                </div>

                <main className="flex-1 overflow-auto p-6">{children}</main>
            </div>
        </div>
    )
}
