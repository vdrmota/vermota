export default function DashboardPage() {
    return (
        <div>
            <h1 className="text-2xl font-medium text-zinc-900">Dashboard</h1>
            <p className="mt-2 text-zinc-600">
                Welcome to your Vermota dashboard. This is where you&apos;ll manage your loyalty programs.
            </p>

            {/* Placeholder content */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {['Active Programs', 'Total Customers', 'Rewards Redeemed'].map((title) => (
                    <div key={title} className="rounded-xl border border-zinc-200 bg-white p-6">
                        <p className="text-sm text-zinc-500">{title}</p>
                        <p className="mt-2 text-3xl font-semibold text-zinc-900">—</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
