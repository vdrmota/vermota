import { Card, CardContent, CardHeader } from './card'
import { Gift, Users, TrendingUp, Clock } from 'lucide-react'

const examples = [
    {
        title: 'The Winback Sequence',
        description:
            'After 14 days, send 10% off. After 30 days, bump it to 20%. Spaced out, low-pressure, and stops the moment they return.',
        icon: Gift,
        illustration: (
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#002FA7]/10 text-xs font-medium text-[#002FA7]">14</div>
                    <span className="text-sm text-zinc-600">days</span>
                    <span className="rounded-full bg-[#002FA7]/10 px-2 py-0.5 text-xs font-medium text-[#002FA7]">10% OFF</span>
                </div>
                <div className="ml-4 flex flex-col items-center">
                    <div className="h-3 w-px bg-[#002FA7]/20" />
                    <div className="h-0 w-0 border-x-[3px] border-t-4 border-x-transparent border-t-[#002FA7]/20" />
                </div>
                <div className="flex items-center gap-2 pl-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#002FA7]/20 text-xs font-medium text-[#002FA7]">30</div>
                    <span className="text-sm text-zinc-600">days</span>
                    <span className="rounded-full bg-[#002FA7]/20 px-2 py-0.5 text-xs font-medium text-[#002FA7]">20% OFF</span>
                </div>
                <div className="ml-8 flex flex-col items-center">
                    <div className="h-3 w-px bg-zinc-300" />
                    <div className="h-0 w-0 border-x-[3px] border-t-4 border-x-transparent border-t-zinc-300" />
                </div>
                <div className="flex items-center gap-2 pl-8">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-xs font-medium text-white">✓</div>
                    <span className="text-sm text-zinc-600">Return</span>
                    <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600">STOP</span>
                </div>
            </div>
        ),
    },
    {
        title: 'The Referral That Works',
        description:
            'When a friend makes their first purchase, both people get credit. No codes to remember, no awkward sharing. It just works.',
        icon: Users,
        illustration: (
            <div className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#002FA7] text-xs font-medium text-white">JD</div>
                    <span className="mt-1 text-xs text-zinc-600">You</span>
                    <span className="mt-0.5 rounded-full bg-[#002FA7]/10 px-1.5 py-0.5 text-[10px] font-medium text-[#002FA7]">+$10</span>
                </div>
                <div className="flex items-center">
                    <div className="h-px w-6 bg-zinc-300" />
                    <div className="h-0 w-0 border-y-[3px] border-l-4 border-y-transparent border-l-zinc-300" />
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 text-xs font-medium text-zinc-600">SK</div>
                    <span className="mt-1 text-xs text-zinc-600">Friend</span>
                    <span className="mt-0.5 rounded-full bg-[#002FA7]/10 px-1.5 py-0.5 text-[10px] font-medium text-[#002FA7]">+$10</span>
                </div>
            </div>
        ),
    },
    {
        title: 'The Midweek Boost',
        description:
            'Give double points for Tuesday or Wednesday visits. A simple way to fill your slower days without cutting into weekend margins.',
        icon: TrendingUp,
        illustration: (
            <div className="flex items-end gap-1.5">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                        <div
                            className={`w-6 rounded-t-md ${
                                i === 1 || i === 2
                                    ? 'h-16 bg-[#002FA7]'
                                    : 'h-8 bg-zinc-200'
                            }`}
                        />
                        <span className={`text-xs ${i === 1 || i === 2 ? 'font-medium text-[#002FA7]' : 'text-zinc-400'}`}>
                            {day}
                        </span>
                    </div>
                ))}
            </div>
        ),
    },
    {
        title: 'The Off-Peak Perk',
        description:
            'Unlock a bonus reward for visits between 2 and 5pm. Helps spread traffic throughout the day and keeps your afternoon crowd coming back.',
        icon: Clock,
        illustration: (
            <div className="rounded-xl border border-zinc-200 bg-white p-3 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-zinc-800">Off-Peak Bonus</span>
                    <span className="ml-4 text-[10px] text-zinc-400">2:00 PM — 5:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-[#002FA7]/10" />
                    <span className="text-xs text-zinc-600">+50 bonus points</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-[#002FA7]/20" />
                    <span className="text-xs text-zinc-600">Free coffee upgrade</span>
                </div>
            </div>
        ),
    },
]

const ProgramExamples = () => {
    return (
        <section id="examples" className="bg-zinc-50 py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-6">
                {/* Section Header */}
                <div className="text-center">
                    <h2 className="text-balance text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
                        Use high-performing templates.
                    </h2>
                    <p className="mt-4 text-zinc-600">
                        Start with these pre-made templates, then make them yours.
                    </p>
                </div>

                {/* Cards */}
                <Card className="mx-auto mt-12 grid max-w-sm divide-y overflow-hidden shadow-zinc-950/5 md:mt-16 md:max-w-full md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
                    {examples.map((example, index) => (
                        <div key={index} className="group text-center">
                            <CardHeader className="pb-3">
                                {/* Illustration */}
                                <div className="mx-auto flex min-h-32 items-center justify-center">
                                    {example.illustration}
                                </div>
                                <h3 className="mt-4 font-medium text-zinc-900">{example.title}</h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-zinc-500">{example.description}</p>
                            </CardContent>
                        </div>
                    ))}
                </Card>
            </div>
        </section>
    )
}

export default ProgramExamples
