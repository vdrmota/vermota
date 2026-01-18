'use client'

import { Star, Clock, Eye } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const bullets = [
    { icon: Star, text: 'VIP and lapsed segments' },
    { icon: Clock, text: 'Real-time status' },
    { icon: Eye, text: 'Staff-friendly view' },
]

const CustomerProfiles = () => {
    const [visits, setVisits] = useState(0)
    const [spend, setSpend] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true)

                    setTimeout(() => {
                        const duration = 2000
                        const targetVisits = 24
                        const targetSpend = 486
                        const steps = 30
                        const interval = duration / steps

                        let step = 0
                        const timer = setInterval(() => {
                            step++
                            const progress = step / steps
                            const eased = 1 - Math.pow(1 - progress, 3)

                            setVisits(Math.round(targetVisits * eased))
                            setSpend(Math.round(targetSpend * eased))

                            if (step >= steps) {
                                clearInterval(timer)
                                setVisits(targetVisits)
                                setSpend(targetSpend)
                            }
                        }, interval)
                    }, 500)
                }
            },
            { threshold: 0.5 },
        )

        if (cardRef.current) {
            observer.observe(cardRef.current)
        }

        return () => observer.disconnect()
    }, [hasAnimated])

    return (
        <section className="relative bg-gradient-to-b from-zinc-50 to-white py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <h2 className="text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
                            Know your customers without digging.
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed text-zinc-600">
                            Every customer has a living profile: visits, spend, rewards, last seen, and what they
                            respond to.
                        </p>

                        <ul className="mt-8 space-y-4">
                            {bullets.map((bullet, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#002FA7] text-white">
                                        <bullet.icon className="h-4 w-4" />
                                    </div>
                                    <span className="text-sm font-medium text-zinc-700">{bullet.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div
                        ref={cardRef}
                        className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xl shadow-zinc-900/5"
                    >
                        <div className="rounded-xl bg-zinc-50 p-6">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-lg font-semibold text-white">
                                        JD
                                    </div>
                                    <div>
                                        <p className="font-semibold text-zinc-900">Jane Doe</p>
                                        <p className="text-sm text-zinc-500">High-value customer</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4 border-t border-zinc-200 pt-4">
                                    <div>
                                        <p className="text-xs text-zinc-500">Visits</p>
                                        <p className="text-lg font-semibold text-zinc-900">{visits}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-500">Total Spend</p>
                                        <p className="text-lg font-semibold text-zinc-900">${spend}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-500">Last Seen</p>
                                        <p className="text-lg font-semibold text-zinc-900">2d ago</p>
                                    </div>
                                </div>
                                <div className="border-t border-zinc-200 pt-4">
                                    <p className="mb-2 text-xs text-zinc-500">Active Rewards</p>
                                    <div className="flex gap-2">
                                        <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs text-white">
                                            $5 Credit
                                        </span>
                                        <span className="rounded-full border border-zinc-300 px-3 py-1 text-xs text-zinc-700">
                                            Free Coffee
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomerProfiles
