import { Send, Coffee } from 'lucide-react'
import { card } from '../../_lib/styles'

const customers = [
    { name: 'Sarah Mitchell', drinks: 9, lastVisit: '2 days ago', email: 's.mitchell@email.com' },
    { name: 'James Wilson', drinks: 9, lastVisit: '3 days ago', email: 'j.wilson@email.com' },
    { name: 'Emily Chen', drinks: 9, lastVisit: '4 days ago', email: 'e.chen@email.com' },
    { name: 'Michael Brown', drinks: 9, lastVisit: '5 days ago', email: 'm.brown@email.com' },
    { name: 'Lisa Anderson', drinks: 9, lastVisit: '1 week ago', email: 'l.anderson@email.com' },
    { name: 'David Kim', drinks: 9, lastVisit: '1 week ago', email: 'd.kim@email.com' },
    { name: 'Rachel Green', drinks: 9, lastVisit: '1 week ago', email: 'r.green@email.com' },
    { name: 'Chris Taylor', drinks: 9, lastVisit: '2 weeks ago', email: 'c.taylor@email.com' },
]

export default function CloseToRewardPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-zinc-900">Close to Reward</h1>
                    <p className="mt-1 text-zinc-500">18 customers are 1 drink away from a free reward</p>
                </div>
                <button className="flex items-center gap-2 rounded-xl bg-[#002FA7] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#002FA7]/90">
                    <Send className="h-4 w-4" />
                    Send reminder to all
                </button>
            </div>

            <div className={`${card.base} overflow-hidden`}>
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-zinc-100 bg-zinc-50">
                            <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Customer</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Progress</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Last Visit</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-zinc-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                        {customers.map((customer, i) => (
                            <tr key={i} className="hover:bg-zinc-50">
                                <td className="px-6 py-4">
                                    <div>
                                        <p className="font-medium text-zinc-900">{customer.name}</p>
                                        <p className="text-sm text-zinc-500">{customer.email}</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-0.5">
                                            {[...Array(10)].map((_, j) => (
                                                <Coffee key={j} className={`h-4 w-4 ${j < customer.drinks ? 'text-[#002FA7]' : 'text-zinc-200'}`} />
                                            ))}
                                        </div>
                                        <span className="text-sm text-zinc-500">{customer.drinks}/10</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-zinc-500">{customer.lastVisit}</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-sm font-medium text-[#002FA7] hover:underline">Send reminder</button>
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
