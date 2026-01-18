import { TrendingUp, TrendingDown, Coffee } from 'lucide-react'
import { card } from '../../_lib/styles'

const trendingUp = [
    { item: 'Oat milk latte', change: '+25%', orders: 342 },
    { item: 'Cold brew', change: '+18%', orders: 287 },
    { item: 'Matcha latte', change: '+15%', orders: 156 },
    { item: 'Avocado toast', change: '+12%', orders: 98 },
]

const trendingDown = [
    { item: 'Hot chocolate', change: '-8%', orders: 67 },
    { item: 'Chai latte', change: '-5%', orders: 89 },
    { item: 'Blueberry muffin', change: '-3%', orders: 54 },
]

const peakHours = [
    { time: '7-8am', orders: 89, label: 'Morning rush' },
    { time: '8-9am', orders: 124, label: 'Peak hour' },
    { time: '9-10am', orders: 98, label: 'Strong' },
    { time: '10-11am', orders: 67, label: 'Moderate' },
    { time: '11am-12pm', orders: 45, label: 'Slower' },
    { time: '12-1pm', orders: 78, label: 'Lunch bump' },
    { time: '1-2pm', orders: 56, label: 'Moderate' },
    { time: '2-3pm', orders: 34, label: 'Slow' },
    { time: '3-4pm', orders: 42, label: 'Slow' },
    { time: '4-5pm', orders: 67, label: 'Afternoon pick-up' },
]

export default function TrendsPage() {
    const maxOrders = Math.max(...peakHours.map(h => h.orders))

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-semibold text-zinc-900">Trends & Insights</h1>
                <p className="mt-1 text-zinc-500">What's popular at Acme Coffee this month</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <div className={`${card.base} p-6`}>
                    <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 mb-4">
                        <TrendingUp className="h-4 w-4" />
                        Trending up this month
                    </div>
                    <div className="space-y-3">
                        {trendingUp.map((item, i) => (
                            <div key={i} className="flex items-center justify-between py-2 border-b border-zinc-100 last:border-0">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                                        <Coffee className="h-4 w-4 text-emerald-600" />
                                    </div>
                                    <span className="font-medium text-zinc-900">{item.item}</span>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-emerald-600">{item.change}</p>
                                    <p className="text-xs text-zinc-500">{item.orders} orders</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`${card.base} p-6`}>
                    <div className="flex items-center gap-2 text-sm font-medium text-red-500 mb-4">
                        <TrendingDown className="h-4 w-4" />
                        Trending down this month
                    </div>
                    <div className="space-y-3">
                        {trendingDown.map((item, i) => (
                            <div key={i} className="flex items-center justify-between py-2 border-b border-zinc-100 last:border-0">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-lg bg-red-100 flex items-center justify-center">
                                        <Coffee className="h-4 w-4 text-red-500" />
                                    </div>
                                    <span className="font-medium text-zinc-900">{item.item}</span>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-red-500">{item.change}</p>
                                    <p className="text-xs text-zinc-500">{item.orders} orders</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={`${card.base} p-6`}>
                <h2 className="font-medium text-zinc-900 mb-4">Orders by hour today</h2>
                <div className="flex items-end gap-2 h-40">
                    {peakHours.map((hour, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                            <div
                                className="w-full rounded-t-lg bg-gradient-to-t from-[#002FA7] to-[#002FA7]/60"
                                style={{ height: `${(hour.orders / maxOrders) * 100}%` }}
                            />
                            <span className="text-[10px] text-zinc-400 truncate w-full text-center">{hour.time}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="h-32" />
        </div>
    )
}
