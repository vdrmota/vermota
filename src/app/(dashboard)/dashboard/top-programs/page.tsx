import { Gift, Users, TrendingUp, ArrowUpRight } from 'lucide-react'
import { card } from '../../_lib/styles'

const programs = [
    { name: 'Points Rewards', members: 8420, growth: 15.2, color: 'bg-[#002FA7]', description: 'Earn points on every purchase and redeem for rewards' },
    { name: 'VIP Tiers', members: 3210, growth: 22.8, color: 'bg-emerald-500', description: 'Exclusive benefits for your most loyal customers' },
    { name: 'Referral Program', members: 1217, growth: 8.4, color: 'bg-amber-500', description: 'Reward customers for bringing in new business' },
    { name: 'Birthday Rewards', members: 2891, growth: 12.1, color: 'bg-pink-500', description: 'Special offers on customer birthdays' },
    { name: 'Early Access', members: 956, growth: 31.5, color: 'bg-purple-500', description: 'Give loyal customers first dibs on new products' },
    { name: 'Cashback Program', members: 1543, growth: 18.9, color: 'bg-teal-500', description: 'Return a percentage of purchases as store credit' },
]

export default function TopProgramsPage() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-semibold text-zinc-900">Top Programs</h1>
                <p className="mt-1 text-zinc-500">Overview of all your loyalty programs and their performance.</p>
            </div>

            {/* Stats Summary */}
            <div className="grid gap-4 sm:grid-cols-3">
                <div className={`${card.base} p-5`}>
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#002FA7]/10">
                            <Gift className="h-5 w-5 text-[#002FA7]" />
                        </div>
                        <div>
                            <p className="text-2xl font-semibold text-zinc-900">6</p>
                            <p className="text-sm text-zinc-500">Active Programs</p>
                        </div>
                    </div>
                </div>
                <div className={`${card.base} p-5`}>
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
                            <Users className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div>
                            <p className="text-2xl font-semibold text-zinc-900">18,237</p>
                            <p className="text-sm text-zinc-500">Total Enrolled</p>
                        </div>
                    </div>
                </div>
                <div className={`${card.base} p-5`}>
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100">
                            <TrendingUp className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                            <p className="text-2xl font-semibold text-zinc-900">+18.2%</p>
                            <p className="text-sm text-zinc-500">Avg. Growth</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Programs Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {programs.map((program) => (
                    <div key={program.name} className={`${card.base} p-6`}>
                        <div className="flex items-start justify-between">
                            <div className={`h-12 w-12 rounded-xl ${program.color} flex items-center justify-center`}>
                                <Gift className="h-6 w-6 text-white" />
                            </div>
                            <span className="flex items-center gap-1 text-sm font-medium text-emerald-600">
                                <TrendingUp className="h-4 w-4" />
                                +{program.growth}%
                            </span>
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-zinc-900">{program.name}</h3>
                        <p className="mt-1 text-sm text-zinc-500">{program.description}</p>
                        <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-4">
                            <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-zinc-400" />
                                <span className="text-sm text-zinc-600">{program.members.toLocaleString()} members</span>
                            </div>
                            <button className="flex items-center gap-1 text-sm text-[#002FA7] hover:underline">
                                Details <ArrowUpRight className="h-3 w-3" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Spacer for AI prompt */}
            <div className="h-32" />
        </div>
    )
}
