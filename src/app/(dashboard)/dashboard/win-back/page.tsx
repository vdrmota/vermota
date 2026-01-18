import { Send, Clock } from 'lucide-react'
import { card } from '../../_lib/styles'

const customers = [
    { name: 'Tom Harrison', lastVisit: '45 days ago', totalVisits: 23, lifetimeSpend: '$287' },
    { name: 'Nina Patel', lastVisit: '42 days ago', totalVisits: 18, lifetimeSpend: '$234' },
    { name: 'Ryan O\'Connor', lastVisit: '38 days ago', totalVisits: 31, lifetimeSpend: '$412' },
    { name: 'Grace Kim', lastVisit: '36 days ago', totalVisits: 15, lifetimeSpend: '$189' },
    { name: 'Derek Foster', lastVisit: '35 days ago', totalVisits: 27, lifetimeSpend: '$356' },
    { name: 'Michelle Wong', lastVisit: '34 days ago', totalVisits: 12, lifetimeSpend: '$156' },
    { name: 'Brandon Lee', lastVisit: '33 days ago', totalVisits: 19, lifetimeSpend: '$245' },
    { name: 'Samantha Cruz', lastVisit: '31 days ago', totalVisits: 22, lifetimeSpend: '$298' },
]

export default function WinBackPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-zinc-900">Win Back Customers</h1>
                    <p className="mt-1 text-zinc-500">47 customers haven't visited in 30+ days</p>
                </div>
                <button className="flex items-center gap-2 rounded-xl bg-[#002FA7] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#002FA7]/90">
                    <Send className="h-4 w-4" />
                    Send win-back offer to all
                </button>
            </div>

            <div className={`${card.base} p-6`}>
                <div className="grid gap-6 sm:grid-cols-3">
                    <div>
                        <p className="text-3xl font-semibold text-zinc-900">47</p>
                        <p className="text-sm text-zinc-500 mt-1">Customers at risk</p>
                    </div>
                    <div>
                        <p className="text-3xl font-semibold text-zinc-900">$6,234</p>
                        <p className="text-sm text-zinc-500 mt-1">Combined lifetime value</p>
                    </div>
                    <div>
                        <p className="text-3xl font-semibold text-zinc-900">38 days</p>
                        <p className="text-sm text-zinc-500 mt-1">Avg. days since last visit</p>
                    </div>
                </div>
            </div>

            <div className={`${card.base} overflow-hidden`}>
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-zinc-100 bg-zinc-50">
                            <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Customer</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Last Visit</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Total Visits</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Lifetime Spend</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-zinc-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                        {customers.map((customer, i) => (
                            <tr key={i} className="hover:bg-zinc-50">
                                <td className="px-6 py-4 font-medium text-zinc-900">{customer.name}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2 text-amber-600">
                                        <Clock className="h-4 w-4" />
                                        <span className="text-sm">{customer.lastVisit}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-zinc-600">{customer.totalVisits}</td>
                                <td className="px-6 py-4 text-zinc-600">{customer.lifetimeSpend}</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-sm font-medium text-[#002FA7] hover:underline">Send offer</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="h-32" />
        </div>
    )
}
