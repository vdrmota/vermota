import Sidebar from './_components/Sidebar'
import Breadcrumb from './_components/Breadcrumb'
import MobileMenu from './_components/MobileMenu'
import ProfileDropdown from './_components/ProfileDropdown'
import { floatingPanel } from './_lib/styles'

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
                    <div className={`flex h-10 items-center gap-3 px-4 ${floatingPanel.small}`}>
                        <MobileMenu />
                        <span className="hidden sm:block"><Breadcrumb /></span>
                    </div>
                    {/* Profile dropdown */}
                    <ProfileDropdown />
                </div>

                <main className="flex-1 overflow-auto p-6">{children}</main>
            </div>
        </div>
    )
}
