'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

const prompts = [
    {
        input: 'After 3 visits in 14 days, give $5 credit. Expires in 7 days.',
        output: {
            condition: '3 visits within 14 days',
            reward: '$5 credit',
            expires: '7 days',
            messages: 'Unlock SMS + expiry reminder',
        },
    },
    {
        input: 'If someone buys coffee + pastry, unlock 10% off next visit.',
        output: {
            condition: 'Purchase includes coffee + pastry',
            reward: '10% off next visit',
            expires: '30 days',
            messages: 'Discount unlocked notification',
        },
    },
    {
        input: "Referral: both people get a free item after the friend's first purchase.",
        output: {
            condition: 'Referred friend completes first purchase',
            reward: 'Free item for both',
            expires: 'No expiry',
            messages: 'Referral success notification',
        },
    },
    {
        input: 'On their birthday month, give customers 20% off one order.',
        output: {
            condition: "Customer's birthday month",
            reward: '20% off one order',
            expires: 'End of birthday month',
            messages: 'Birthday reward unlocked',
        },
    },
    {
        input: "If someone hasn't visited in 30 days, send a $3 comeback credit.",
        output: {
            condition: 'No visits for 30 days',
            reward: '$3 comeback credit',
            expires: '14 days',
            messages: 'We miss you + credit notification',
        },
    },
]

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const [displayedText, setDisplayedText] = useState('')
    const [isTyping, setIsTyping] = useState(true)
    const [showOutput, setShowOutput] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const justResumed = useRef(false)

    useEffect(() => {
        const fullText = prompts[currentIndex].input
        setDisplayedText('')
        setIsTyping(true)
        setShowOutput(false)

        let charIndex = 0
        const typingInterval = setInterval(() => {
            if (charIndex < fullText.length) {
                setDisplayedText(fullText.slice(0, charIndex + 1))
                charIndex++
            } else {
                setIsTyping(false)
                clearInterval(typingInterval)
                setTimeout(() => setShowOutput(true), 1000)
            }
        }, 35)

        return () => clearInterval(typingInterval)
    }, [currentIndex])

    useEffect(() => {
        if (isPaused) return

        const delay = justResumed.current ? 1000 : 10000
        justResumed.current = false

        const timeout = setTimeout(() => {
            setIsAnimating(true)
            setTimeout(() => {
                setCurrentIndex(prev => (prev + 1) % prompts.length)
                setIsAnimating(false)
            }, 350)
        }, delay)

        return () => clearTimeout(timeout)
    }, [currentIndex, isPaused])

    const goToPrevious = () => {
        setIsAnimating(true)
        setTimeout(() => {
            setCurrentIndex(prev => (prev - 1 + prompts.length) % prompts.length)
            setIsAnimating(false)
        }, 200)
    }

    const goToNext = () => {
        setIsAnimating(true)
        setTimeout(() => {
            setCurrentIndex(prev => (prev + 1) % prompts.length)
            setIsAnimating(false)
        }, 200)
    }

    const current = prompts[currentIndex]

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white from-50% to-zinc-50">
            <div className="mx-auto max-w-7xl px-4 pt-10 pb-12 sm:px-6 sm:pb-16 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="relative mb-6 inline-flex rounded-full p-[1px] overflow-hidden bg-zinc-200">
                        <span className="absolute top-1/2 left-1/2 aspect-square w-[500%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_330deg,#002FA7_360deg)]" />
                        <div className="relative inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5">
                            <Sparkles className="h-4 w-4 text-[#002FA7]" />
                            <span className="text-xs text-zinc-700">
                                Private beta. We onboard a few businesses each week.
                            </span>
                        </div>
                    </div>

                    <h1 className="text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
                        Loyalty without the rule builders.
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
                        Write what you want in plain English. Vermota turns it into rules, rewards, messages, and
                        reporting your team can run today.
                    </p>

                    <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a
                            href="/book-a-demo"
                            className="inline-flex items-center rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
                        >
                            Book a demo
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                        <a
                            href="mailto:vojta@vermota.com"
                            className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-5 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
                        >
                            Contact us
                        </a>
                    </div>

                    <p className="mt-4 text-xs text-zinc-500">No code. No messy rule builders.</p>
                </div>

                <div className="mx-auto mt-10 max-w-4xl">
                    <div className="relative">
                        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl shadow-zinc-900/5">
                            <div className="grid md:grid-cols-2">
                                <div
                                    className={`border-b border-zinc-200 p-6 md:border-b-0 md:border-r transition-opacity duration-700 ease-in-out ${
                                        isAnimating ? 'opacity-60' : 'opacity-100'
                                    }`}
                                >
                                    <div className="mb-3 flex items-center justify-between">
                                        <span className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                                            You write
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <button
                                                onClick={() => {
                                                    if (isPaused) justResumed.current = true
                                                    setIsPaused(!isPaused)
                                                }}
                                                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700"
                                            >
                                                {isPaused ? (
                                                    <Play className="h-3.5 w-3.5" />
                                                ) : (
                                                    <Pause className="h-3.5 w-3.5" />
                                                )}
                                            </button>
                                            <button
                                                onClick={goToPrevious}
                                                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700"
                                            >
                                                <ChevronLeft className="h-4 w-4" />
                                            </button>
                                            <button
                                                onClick={goToNext}
                                                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700"
                                            >
                                                <ChevronRight className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                    <p className="font-mono text-sm leading-relaxed text-zinc-700">
                                        {displayedText}
                                        <span
                                            className={`inline-block w-[2px] h-[1em] bg-zinc-400 ml-[1px] align-middle ${
                                                isTyping ? 'animate-pulse' : 'animate-[blink_1s_infinite]'
                                            }`}
                                        />
                                    </p>
                                </div>

                                <div className="bg-[#002FA7] p-6 relative">
                                    <div className="mb-3 inline-block rounded-full bg-white px-3 py-1 text-xs font-medium text-[#002FA7]">
                                        Vermota builds
                                    </div>

                                    <div
                                        className={`absolute left-6 top-20 flex items-center gap-1.5 transition-opacity duration-300 ${
                                            !showOutput ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                        }`}
                                    >
                                        <span
                                            className="h-2 w-2 rounded-full bg-white"
                                            style={{ animation: 'ai-dot 1.2s ease-in-out infinite' }}
                                        />
                                        <span
                                            className="h-2 w-2 rounded-full bg-white"
                                            style={{ animation: 'ai-dot 1.2s ease-in-out infinite 0.2s' }}
                                        />
                                        <span
                                            className="h-2 w-2 rounded-full bg-white"
                                            style={{ animation: 'ai-dot 1.2s ease-in-out infinite 0.4s' }}
                                        />
                                    </div>

                                    <div
                                        className={`space-y-2 text-sm text-white/70 ${
                                            showOutput
                                                ? 'opacity-100 transition-opacity duration-500 ease-in-out'
                                                : 'opacity-0'
                                        }`}
                                    >
                                        <div className="flex items-start">
                                            <span className="w-24 flex-shrink-0 font-medium text-white">Condition</span>
                                            <span>{current.output.condition}</span>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="w-24 flex-shrink-0 font-medium text-white">Reward</span>
                                            <span>{current.output.reward}</span>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="w-24 flex-shrink-0 font-medium text-white">Expires</span>
                                            <span>{current.output.expires}</span>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="w-24 flex-shrink-0 font-medium text-white">Messages</span>
                                            <span>{current.output.messages}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 flex justify-center gap-2">
                            {prompts.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-2 w-2 cursor-pointer rounded-full transition-colors ${
                                        idx === currentIndex ? 'bg-[#002FA7]' : 'bg-zinc-300'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
