import { Users, TrendingUp, Gift } from 'lucide-react'
import { card } from '../../_lib/styles'

const stats = [
    { label: 'Total referrals this week', value: '12', change: '+200%' },
    { label: 'New members from referrals', value: '12', change: '+200%' },
    { label: 'Referral rewards given', value: '24', change: '+200%' },
]

const recentReferrals = [
    { referrer: 'Emma Thompson', referred: 'Lucas Martinez', date: 'Today', status: 'Completed' },
    { referrer: 'Sophie Laurent', referred: 'Mia Johnson', date: 'Today', status: 'Completed' },
    { referrer: 'Marcus Chen', referred: 'Oliver Smith', date: 'Yesterday', status: 'Completed' },
    { referrer: 'Priya Sharma', referred: 'Ava Williams', date: 'Yesterday', status: 'Completed' },
    { referrer: 'Alex Rivera', referred: 'Ethan Brown', date: '2 days ago', status: 'Completed' },
    { referrer: 'Jordan Park', referred: 'Isabella Davis', date: '3 days ago', status: 'Completed' },
    { referrer: 'Emma Thompson', referred: 'Noah Wilson', date: '4 days ago', status: 'Completed' },
    { referrer: 'Liam Kim', referred: 'Sophia Taylor', date: '5 days ago', status: 'Completed' },
]

export default function ReferralsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-semibold text-zinc-900">Referral Program</h1>
                <p className="mt-1 text-zinc-500">Track referrals and rewards at Acme Coffee</p>
            </div>

            <div className={`${card.base} p-6`}>
                <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 mb-4">
                    <TrendingUp className="h-4 w-4" />
                    This week vs last week
                </div>
                <div className="grid gap-6 sm:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-3xl font-semibold text-zinc-900">{stat.value}</p>
                            <p className="text-sm text-zinc-500 mt-1">{stat.label}</p>
                            <p className="text-xs text-emerald-600 mt-0.5">{stat.change} vs last week</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={`${card.base} overflow-hidden`}>
                <div className="px-6 py-4 border-b border-zinc-100">
                    <h2 className="font-medium text-zinc-900">Recent Referrals</h2>
                </div>
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-zinc-100 bg-zinc-50">
                            <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Referrer</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">New Member</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                        {recentReferrals.map((referral, i) => (
                            <tr key={i} className="hover:bg-zinc-50">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-zinc-100 flex items-center justify-center">
                                            <Users className="h-4 w-4 text-zinc-500" />
                                        </div>
                                        <span className="font-medium text-zinc-900">{referral.referrer}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-zinc-600">{referral.referred}</td>
                                <td className="px-6 py-4 text-sm text-zinc-500">{referral.date}</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                                        <Gift className="h-3 w-3" />
                                        {referral.status}
                                    </span>
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
