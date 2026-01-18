import Link from 'next/link'
import { Coffee, Sparkles, Users, Gift, Clock, Cake, TrendingUp, ChevronRight, UserMinus, BarChart3 } from 'lucide-react'
import { card } from '../_lib/styles'

const todayStats = [
    { label: 'Customers today', value: '127', subtext: '23 new members' },
    { label: 'Rewards redeemed', value: '34', subtext: '12 free drinks' },
    { label: 'Points earned', value: '4,280', subtext: 'across 89 visits' },
]

const insights = [
    {
        type: 'opportunity',
        icon: Users,
        title: '18 customers are 1 drink away from a free reward',
        description: 'Send them a reminder to come back this week',
        action: 'Send reminder',
        href: '/dashboard/close-to-reward',
        color: 'bg-blue-100 text-blue-600',
    },
    {
        type: 'trend',
        icon: TrendingUp,
        title: 'Tuesday afternoons are 40% slower than average',
        description: 'Consider a happy hour promotion for Tuesdays 2-4pm',
        action: 'Create campaign',
        href: '/dashboard/campaigns/new',
        color: 'bg-amber-100 text-amber-600',
    },
    {
        type: 'win',
        icon: Gift,
        title: 'Referral program drove 12 new sign-ups this week',
        description: "That's 3x more than last week",
        action: 'View details',
        href: '/dashboard/referrals',
        color: 'bg-emerald-100 text-emerald-600',
    },
    {
        type: 'winback',
        icon: UserMinus,
        title: '47 customers haven\'t visited in 30+ days',
        description: 'Re-engage them with a special win-back offer',
        action: 'Start win-back',
        href: '/dashboard/win-back',
        color: 'bg-orange-100 text-orange-600',
    },
    {
        type: 'insight',
        icon: BarChart3,
        title: 'Oat milk lattes are up 25% this month',
        description: 'Consider featuring them in your next promotion',
        action: 'See trends',
        href: '/dashboard/trends',
        color: 'bg-purple-100 text-purple-600',
    },
]

const liveActivity = [
    { customer: 'Marcus C.', action: 'Redeemed free latte', time: 'Just now' },
    { customer: 'Priya S.', action: 'Earned 45 points', time: '2 min ago' },
    { customer: 'Alex R.', action: 'Joined loyalty program', time: '8 min ago' },
    { customer: 'Sophie L.', action: 'Reached Gold status', time: '15 min ago' },
    { customer: 'Jordan P.', action: 'Claimed birthday reward', time: '22 min ago' },
]

const upcoming = [
    { type: 'birthday', icon: Cake, label: '6 customer birthdays', timeframe: 'This week' },
    { type: 'expiring', icon: Clock, label: '23 rewards expiring', timeframe: 'Next 7 days' },
    { type: 'campaign', icon: Gift, label: 'Winter Warm-Up launches', timeframe: 'Monday' },
]

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-semibold text-zinc-900">Good morning</h1>
                <p className="mt-1 text-zinc-500">Friday, January 17 — Here's what's happening at Acme Coffee today.</p>
            </div>

            <div className={`${card.base} p-6`}>
                <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 mb-4">
                    <Coffee className="h-4 w-4" />
                    Today so far
                </div>
                <div className="grid gap-6 sm:grid-cols-3">
                    {todayStats.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-3xl font-semibold text-zinc-900">{stat.value}</p>
                            <p className="text-sm text-zinc-500 mt-1">{stat.label}</p>
                            <p className="text-xs text-emerald-600 mt-0.5">{stat.subtext}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={`${card.base} p-6`}>
                <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 mb-4">
                    <Sparkles className="h-4 w-4" />
                    Insights for you
                </div>
                <div className="space-y-3">
                    {insights.map((insight, i) => {
                        const Icon = insight.icon
                        return (
                            <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                                <div className={`shrink-0 h-8 w-8 rounded-lg flex items-center justify-center ${insight.color}`}>
                                    <Icon className="h-4 w-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-zinc-900">{insight.title}</p>
                                    <p className="text-sm text-zinc-500 mt-0.5">{insight.description}</p>
                                </div>
                                <Link href={insight.href} className="shrink-0 text-sm font-medium text-[#002FA7] hover:underline">
                                    {insight.action}
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <div className={`${card.base} p-6`}>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-sm font-medium text-zinc-500">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Live activity
                        </div>
                        <Link href="/dashboard/activity" className="text-sm text-[#002FA7] hover:underline">View all</Link>
                    </div>
                    <div className="space-y-3">
                        {liveActivity.map((activity, i) => (
                            <div key={i} className="flex items-center justify-between py-2 border-b border-zinc-100 last:border-0">
                                <div>
                                    <span className="font-medium text-zinc-900">{activity.customer}</span>
                                    <span className="text-zinc-500"> {activity.action}</span>
                                </div>
                                <span className="text-xs text-zinc-400">{activity.time}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`${card.base} p-6`}>
                    <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 mb-4">
                        <Clock className="h-4 w-4" />
                        Coming up
                    </div>
                    <div className="space-y-3">
                        {upcoming.map((item, i) => {
                            const Icon = item.icon
                            return (
                                <button key={i} className="w-full flex items-center gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-100 hover:bg-zinc-100 transition-colors text-left cursor-pointer">
                                    <div className="shrink-0 h-10 w-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center">
                                        <Icon className="h-5 w-5 text-zinc-600" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-zinc-900">{item.label}</p>
                                        <p className="text-sm text-zinc-500">{item.timeframe}</p>
                                    </div>
                                    <ChevronRight className="h-5 w-5 text-zinc-400" />
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="h-32" />
        </div>
    )
}
