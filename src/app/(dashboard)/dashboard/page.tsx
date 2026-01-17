import Link from 'next/link'
import { TrendingUp, TrendingDown, Users, Gift, Repeat, DollarSign, ArrowUpRight, MoreHorizontal } from 'lucide-react'
import { card } from '../_lib/styles'

const stats = [
    { title: 'Active Members', value: '12,847', change: '+12.5%', trend: 'up', icon: Users },
    { title: 'Points Issued', value: '2.4M', change: '+8.2%', trend: 'up', icon: Gift },
    { title: 'Redemption Rate', value: '34.2%', change: '+2.1%', trend: 'up', icon: Repeat },
    { title: 'Program Revenue', value: '$847K', change: '-3.4%', trend: 'down', icon: DollarSign },
]

const recentActivity = [
    { customer: 'Sarah Mitchell', action: 'Redeemed 500 points', reward: 'Free Coffee', time: '2 min ago', avatar: 'SM' },
    { customer: 'James Wilson', action: 'Earned 150 points', reward: 'Purchase', time: '5 min ago', avatar: 'JW' },
    { customer: 'Emily Chen', action: 'Joined loyalty program', reward: 'Welcome Bonus', time: '12 min ago', avatar: 'EC' },
    { customer: 'Michael Brown', action: 'Reached Gold tier', reward: 'Tier Upgrade', time: '18 min ago', avatar: 'MB' },
    { customer: 'Lisa Anderson', action: 'Redeemed 1,200 points', reward: '$20 Gift Card', time: '24 min ago', avatar: 'LA' },
    { customer: 'David Kim', action: 'Referred a friend', reward: 'Referral Bonus', time: '31 min ago', avatar: 'DK' },
]

const topPrograms = [
    { name: 'Points Rewards', members: 8420, growth: 15.2, color: 'bg-[#002FA7]' },
    { name: 'VIP Tiers', members: 3210, growth: 22.8, color: 'bg-emerald-500' },
    { name: 'Referral Program', members: 1217, growth: 8.4, color: 'bg-amber-500' },
]

const campaigns = [
    { name: 'Summer Double Points', status: 'Active', reach: '4,521', conversion: '12.3%' },
    { name: 'New Member Welcome', status: 'Active', reach: '892', conversion: '45.2%' },
    { name: 'Win-back Campaign', status: 'Scheduled', reach: '—', conversion: '—' },
]

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-semibold text-zinc-900">Welcome back</h1>
                <p className="mt-1 text-zinc-500">Here's what's happening with your loyalty programs today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => {
                    const Icon = stat.icon
                    return (
                        <div key={stat.title} className={`${card.base} p-5`}>
                            <div className="flex items-center justify-between">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100">
                                    <Icon className="h-5 w-5 text-zinc-600" />
                                </div>
                                <span className={`flex items-center gap-1 text-sm font-medium ${stat.trend === 'up' ? 'text-emerald-600' : 'text-red-500'}`}>
                                    {stat.trend === 'up' ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                                    {stat.change}
                                </span>
                            </div>
                            <p className="mt-4 text-2xl font-semibold text-zinc-900">{stat.value}</p>
                            <p className="mt-1 text-sm text-zinc-500">{stat.title}</p>
                        </div>
                    )
                })}
            </div>

            {/* Main Content Grid */}
            <div className="grid gap-6 lg:grid-cols-3">
                {/* Chart Placeholder */}
                <div className={`lg:col-span-2 ${card.base} p-6`}>
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-zinc-900">Member Growth</h2>
                            <p className="text-sm text-zinc-500">Last 6 months performance</p>
                        </div>
                        <button className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600">
                            <MoreHorizontal className="h-5 w-5" />
                        </button>
                    </div>
                    {/* Chart bars placeholder */}
                    <div className="mt-6 flex h-48 items-end justify-between gap-3">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                            <div key={i} className="flex-1 rounded-t-lg bg-gradient-to-t from-[#002FA7] to-[#002FA7]/60" style={{ height: `${height}%` }} />
                        ))}
                    </div>
                    <div className="mt-4 flex justify-between text-xs text-zinc-400">
                        <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                    </div>
                </div>

                {/* Top Programs */}
                <div className={`${card.base} p-6`}>
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-zinc-900">Top Programs</h2>
                        <Link href="/dashboard/top-programs" className="flex items-center gap-1 text-sm text-[#002FA7] hover:underline">
                            View all <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <div className="mt-6 space-y-4">
                        {topPrograms.map((program) => (
                            <div key={program.name} className="flex items-center gap-4">
                                <div className={`h-10 w-10 rounded-xl ${program.color} flex items-center justify-center`}>
                                    <Gift className="h-5 w-5 text-white" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium text-zinc-900">{program.name}</p>
                                    <p className="text-sm text-zinc-500">{program.members.toLocaleString()} members</p>
                                </div>
                                <span className="text-sm font-medium text-emerald-600">+{program.growth}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recent Activity & Campaigns */}
            <div className="grid gap-6 lg:grid-cols-2">
                {/* Recent Activity */}
                <div className={`${card.base} p-6`}>
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-zinc-900">Recent Activity</h2>
                        <button className="flex items-center gap-1 text-sm text-[#002FA7] hover:underline">
                            View all <ArrowUpRight className="h-4 w-4" />
                        </button>
                    </div>
                    <div className="mt-4 space-y-4">
                        {recentActivity.map((activity, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-xs font-medium text-zinc-600">
                                    {activity.avatar}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="truncate text-sm font-medium text-zinc-900">{activity.customer}</p>
                                    <p className="truncate text-sm text-zinc-500">{activity.action}</p>
                                </div>
                                <span className="shrink-0 text-xs text-zinc-400">{activity.time}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Active Campaigns */}
                <div className={`${card.base} p-6`}>
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-zinc-900">Active Campaigns</h2>
                        <button className="rounded-lg bg-[#002FA7] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#002FA7]/90">
                            New Campaign
                        </button>
                    </div>
                    <div className="mt-4 space-y-3">
                        {campaigns.map((campaign) => (
                            <div key={campaign.name} className="rounded-xl border border-zinc-100 bg-zinc-50 p-4">
                                <div className="flex items-center justify-between">
                                    <p className="font-medium text-zinc-900">{campaign.name}</p>
                                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${campaign.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                                        {campaign.status}
                                    </span>
                                </div>
                                <div className="mt-3 flex gap-6 text-sm">
                                    <div>
                                        <p className="text-zinc-500">Reach</p>
                                        <p className="font-medium text-zinc-900">{campaign.reach}</p>
                                    </div>
                                    <div>
                                        <p className="text-zinc-500">Conversion</p>
                                        <p className="font-medium text-zinc-900">{campaign.conversion}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Spacer for AI prompt */}
            <div className="h-32" />
        </div>
    )
}
