import { card } from '../../_lib/styles'

const activity = [
    { customer: 'Marcus C.', action: 'Redeemed free latte', time: 'Just now' },
    { customer: 'Priya S.', action: 'Earned 45 points', time: '2 min ago' },
    { customer: 'Alex R.', action: 'Joined loyalty program', time: '8 min ago' },
    { customer: 'Sophie L.', action: 'Reached Gold status', time: '15 min ago' },
    { customer: 'Jordan P.', action: 'Claimed birthday reward', time: '22 min ago' },
    { customer: 'Emma T.', action: 'Referred a friend', time: '28 min ago' },
    { customer: 'Liam K.', action: 'Earned 30 points', time: '34 min ago' },
    { customer: 'Olivia M.', action: 'Redeemed 50% off pastry', time: '41 min ago' },
    { customer: 'Noah B.', action: 'Joined loyalty program', time: '48 min ago' },
    { customer: 'Ava W.', action: 'Earned 60 points', time: '55 min ago' },
    { customer: 'Ethan D.', action: 'Reached Silver status', time: '1 hr ago' },
    { customer: 'Isabella G.', action: 'Redeemed free drink', time: '1 hr ago' },
]

export default function ActivityPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-semibold text-zinc-900">Live Activity</h1>
                <p className="mt-1 text-zinc-500">Real-time customer activity at Acme Coffee</p>
            </div>

            <div className={`${card.base} p-6`}>
                <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 mb-4">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Live
                </div>
                <div className="space-y-3">
                    {activity.map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-3 border-b border-zinc-100 last:border-0">
                            <div>
                                <span className="font-medium text-zinc-900">{item.customer}</span>
                                <span className="text-zinc-500"> {item.action}</span>
                            </div>
                            <span className="text-sm text-zinc-400">{item.time}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="h-32" />
        </div>
    )
}
