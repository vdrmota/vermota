import { Plus, TrendingUp, Users, Coins, Percent, DollarSign, Heart } from 'lucide-react'
import Link from 'next/link'
import { card } from '../_lib/styles'

const stats = [
    { label: 'Active Members', value: '2,847', change: '+12%', icon: Users },
    { label: 'Points Issued', value: '145.2K', change: '+8%', icon: Coins },
    { label: 'Redemption Rate', value: '34%', change: '+3%', icon: Percent },
    { label: 'Program Revenue', value: '$12,450', change: '+18%', icon: DollarSign },
]

const memberGrowth = [
    { month: 'Aug', members: 1850 },
    { month: 'Sep', members: 2100 },
    { month: 'Oct', members: 2340 },
    { month: 'Nov', members: 2520 },
    { month: 'Dec', members: 2680 },
    { month: 'Jan', members: 2847 },
]

const topPrograms = [
    { name: 'Points & Rewards', members: 1842, revenue: '$8,240', color: 'bg-[#002FA7]' },
    { name: 'Punch Card', members: 623, revenue: '$2,890', color: 'bg-emerald-500' },
    { name: 'VIP Tiers', members: 382, revenue: '$1,320', color: 'bg-purple-500' },
]

const recentActivity = [
    { initials: 'SM', name: 'Sarah Mitchell', action: 'Earned 50 points', time: '2 min ago', color: 'bg-blue-500' },
    { initials: 'JW', name: 'James Wilson', action: 'Redeemed free coffee', time: '5 min ago', color: 'bg-emerald-500' },
    { initials: 'EC', name: 'Emily Chen', action: 'Joined loyalty program', time: '12 min ago', color: 'bg-purple-500' },
    { initials: 'MB', name: 'Michael Brown', action: 'Earned 25 points', time: '18 min ago', color: 'bg-orange-500' },
    { initials: 'LA', name: 'Lisa Anderson', action: 'Referred a friend', time: '24 min ago', color: 'bg-pink-500' },
    { initials: 'DK', name: 'David Kim', action: 'Earned 75 points', time: '31 min ago', color: 'bg-cyan-500' },
]

const campaigns = [
    {
        name: 'Summer Double Points',
        status: 'Active',
        statusColor: 'bg-emerald-100 text-emerald-700',
        reach: '2,847',
        conversion: '24%',
    },
    {
        name: 'New Member Welcome',
        status: 'Active',
        statusColor: 'bg-emerald-100 text-emerald-700',
        reach: '1,234',
        conversion: '67%',
    },
    {
        name: 'Win-back Campaign',
        status: 'Scheduled',
        statusColor: 'bg-amber-100 text-amber-700',
        reach: '—',
        conversion: '—',
    },
]

export default function AnalyticsPage() {
    const maxMembers = Math.max(...memberGrowth.map(m => m.members))

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-semibold text-zinc-900">Analytics</h1>
                <p className="mt-1 text-zinc-500">Track activity and campaign performance</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <div key={stat.label} className={`${card.base} p-5`}>
                        <div className="flex items-center justify-between">
                            <stat.icon className="h-5 w-5 text-zinc-400" />
                            <span className="text-xs font-medium text-emerald-600">{stat.change}</span>
                        </div>
                        <p className="mt-3 text-2xl font-semibold text-zinc-900">{stat.value}</p>
                        <p className="text-sm text-zinc-500">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <div className={`${card.base} p-6`}>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-medium text-zinc-900">Member Growth</h2>
                        <span className="text-xs text-zinc-500">Last 6 months</span>
                    </div>
                    <div className="flex items-end gap-3 h-40">
                        {memberGrowth.map((item) => (
                            <div key={item.month} className="flex-1 flex flex-col items-center gap-2">
                                <div
                                    className="w-full rounded-t-lg bg-gradient-to-t from-[#002FA7] to-[#002FA7]/60"
                                    style={{ height: `${(item.members / maxMembers) * 100}%` }}
                                />
                                <span className="text-xs text-zinc-500">{item.month}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`${card.base} p-6`}>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-medium text-zinc-900">Top Programs</h2>
                        <Heart className="h-4 w-4 text-zinc-400" />
                    </div>
                    <div className="space-y-4">
                        {topPrograms.map((program) => (
                            <div key={program.name} className="flex items-center gap-4">
                                <div className={`h-10 w-10 rounded-xl ${program.color} flex items-center justify-center`}>
                                    <Heart className="h-5 w-5 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-zinc-900">{program.name}</p>
                                    <p className="text-sm text-zinc-500">{program.members.toLocaleString()} members</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-zinc-900">{program.revenue}</p>
                                    <p className="text-xs text-zinc-500">revenue</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <div className={`${card.base} overflow-hidden`}>
                    <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100">
                        <h2 className="font-medium text-zinc-900">Recent Activity</h2>
                        <Link href="/dashboard/activity" className="text-sm text-[#002FA7] hover:underline">
                            View all
                        </Link>
                    </div>
                    <div className="divide-y divide-zinc-100">
                        {recentActivity.map((item, i) => (
                            <div key={i} className="flex items-center gap-3 px-6 py-3 hover:bg-zinc-50">
                                <div className={`h-9 w-9 rounded-full ${item.color} flex items-center justify-center text-white text-sm font-medium`}>
                                    {item.initials}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-zinc-900 truncate">{item.name}</p>
                                    <p className="text-sm text-zinc-500 truncate">{item.action}</p>
                                </div>
                                <span className="text-xs text-zinc-400 whitespace-nowrap">{item.time}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`${card.base} overflow-hidden`}>
                    <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100">
                        <h2 className="font-medium text-zinc-900">Active Campaigns</h2>
                        <Link
                            href="/dashboard/campaigns/new"
                            className="flex items-center gap-1.5 rounded-lg bg-[#002FA7] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#002FA7]/90"
                        >
                            <Plus className="h-4 w-4" />
                            New Campaign
                        </Link>
                    </div>
                    <div className="divide-y divide-zinc-100">
                        {campaigns.map((campaign, i) => (
                            <div key={i} className="px-6 py-4 hover:bg-zinc-50">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="font-medium text-zinc-900">{campaign.name}</p>
                                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${campaign.statusColor}`}>
                                        {campaign.status}
                                    </span>
                                </div>
                                <div className="flex items-center gap-6 text-sm">
                                    <div className="flex items-center gap-1.5 text-zinc-500">
                                        <Users className="h-4 w-4" />
                                        <span>Reach: <span className="font-medium text-zinc-700">{campaign.reach}</span></span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-zinc-500">
                                        <TrendingUp className="h-4 w-4" />
                                        <span>Conversion: <span className="font-medium text-zinc-700">{campaign.conversion}</span></span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="h-32" />
        </div>
    )
}
