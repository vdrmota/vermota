'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUp, TrendingUp, Users, Zap, Check } from 'lucide-react'

const QUICK_PROMPTS = [
    {
        icon: TrendingUp,
        text: 'Analyze metrics',
        prompt: 'Analyze my customer growth metrics and provide actionable insights to improve retention.',
    },
    {
        icon: Users,
        text: 'Segment customers',
        prompt: 'Help me create customer segments based on purchase behavior and engagement levels.',
    },
    {
        icon: Zap,
        text: 'Campaign ideas',
        prompt: 'Suggest loyalty campaign ideas to increase customer engagement this month.',
    },
]

export default function AIPrompt() {
    const [inputValue, setInputValue] = useState('')
    const [isFocused, setIsFocused] = useState(false)
    const [isDesktop, setIsDesktop] = useState(false)
    const inputRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        const checkScreenSize = () => setIsDesktop(window.innerWidth >= 640)
        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)
        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    const handlePromptClick = (prompt: string) => {
        if (inputRef.current) {
            inputRef.current.value = prompt
            setInputValue(prompt)
            inputRef.current.focus()
        }
    }

    const handleSubmit = () => {
        if (inputValue.trim()) {
            console.log('Submitting:', inputValue)
            setInputValue('')
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSubmit()
        }
        if (e.key === 'Escape') {
            e.preventDefault()
            inputRef.current?.blur()
        }
    }

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value)
        e.target.style.height = 'auto'
        e.target.style.height = `${Math.min(e.target.scrollHeight, 160)}px`
    }

    useEffect(() => {
        const handleGlobalKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                inputRef.current?.focus()
            }
        }
        window.addEventListener('keydown', handleGlobalKeyDown)
        return () => window.removeEventListener('keydown', handleGlobalKeyDown)
    }, [])

    return (
        <div className="fixed left-0 right-0 lg:left-56 z-40 flex justify-center px-4 bottom-2 sm:bottom-3">
            <div className={`flex w-full max-w-[572px] flex-col transition-all duration-300 ease-out ${isFocused ? 'gap-3' : 'gap-0'}`}>
                <div
                    className={`
                        relative flex flex-col rounded-[28px] overflow-hidden transition-all duration-500
                        ${isFocused
                            ? 'backdrop-blur-xl shadow-[0_4px_16px_rgba(0,0,0,0.15)] sm:shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_12px_48px_rgba(0,47,167,0.5),0_4px_16px_rgba(0,0,0,0.15)]'
                            : 'backdrop-blur-sm shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,47,167,0.2),0_2px_8px_rgba(0,0,0,0.06)]'
                        }
                    `}
                    style={{
                        background: isFocused
                            ? 'linear-gradient(135deg, #002FA7 0%, #002FA7 100%)'
                            : isDesktop
                                ? 'linear-gradient(135deg, rgba(0,47,167,0.55) 0%, rgba(0,35,130,0.6) 100%)'
                                : 'linear-gradient(135deg, rgba(0,47,167,0.85) 0%, rgba(0,35,130,0.88) 100%)',
                        transition: 'background 0.4s ease, box-shadow 0.4s ease, backdrop-filter 0.4s ease',
                    }}
                >
                    <div
                        className="absolute inset-x-0 top-0 h-[1px] rounded-t-[28px]"
                        style={{
                            background: 'rgba(255,255,255,0.5)',
                        }}
                    />

                    <div
                        className="absolute left-0 top-0 bottom-0 w-[1px] rounded-l-[28px]"
                        style={{
                            background: 'rgba(255,255,255,0.5)',
                        }}
                    />

                    <div
                        className="absolute inset-x-0 bottom-0 h-[1px] rounded-b-[28px]"
                        style={{
                            background: 'rgba(0,0,0,0.3)',
                        }}
                    />

                    <div
                        className="absolute right-0 top-0 bottom-0 w-[1px] rounded-r-[28px]"
                        style={{
                            background: 'rgba(0,0,0,0.3)',
                        }}
                    />

                    <div
                        className="absolute inset-0 rounded-[28px] pointer-events-none transition-opacity duration-500"
                        style={{
                            background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 40%, transparent 100%)',
                            opacity: isFocused ? 0.5 : 1,
                        }}
                    />

                    <div className="relative flex-1">
                        <textarea
                            ref={inputRef}
                            value={inputValue}
                            onChange={handleInput}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            onKeyDown={handleKeyDown}
                            placeholder="Ask AI anything about your business... (⌘K)"
                            rows={1}
                            className="w-full resize-none bg-transparent px-5 py-4 text-[15px] text-white placeholder-white/90 outline-none"
                            style={{ minHeight: '56px' }}
                        />
                    </div>

                    <div className="relative flex items-center justify-between border-t border-white/15 px-4 py-2.5">
                        <div className="flex items-center gap-2 text-xs text-white">
                            <Check className="h-3.5 w-3.5" />
                            <span>Data synced just now</span>
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={!inputValue.trim()}
                            className={`
                                flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-all duration-200
                                ${inputValue.trim()
                                    ? 'bg-white text-[#002FA7] shadow-[0_2px_8px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)]'
                                    : 'bg-white/20 text-white/40 cursor-not-allowed'
                                }
                            `}
                        >
                            <ArrowUp className="h-4 w-4" />
                        </button>
                    </div>

                </div>

                <div className={`hidden sm:flex justify-center gap-1.5 transition-all duration-300 overflow-hidden ${isFocused ? 'opacity-100 max-h-12' : 'opacity-0 max-h-0 pointer-events-none'}`}>
                    {QUICK_PROMPTS.map((item) => {
                        const IconComponent = item.icon
                        return (
                            <button
                                key={item.text}
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={() => handlePromptClick(item.prompt)}
                                className="
                                    group relative flex cursor-pointer items-center gap-1 rounded-full overflow-hidden
                                    px-2 py-1 text-[11px] sm:text-xs sm:px-2.5 sm:py-1 sm:gap-1.5 text-white font-medium
                                    backdrop-blur-sm transition-all duration-300
                                    shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_4px_16px_rgba(0,47,167,0.2)]
                                    hover:backdrop-blur-lg
                                    hover:shadow-[0_0_0_1px_rgba(255,255,255,0.3),0_6px_24px_rgba(0,47,167,0.4)]
                                    hover:scale-[1.03]
                                "
                                style={{
                                    background: 'linear-gradient(135deg, rgba(0,47,167,0.45) 0%, rgba(0,35,130,0.5) 100%)',
                                }}
                            >
                                <div className="absolute inset-x-0 top-0 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.5) 50%, transparent 90%)' }} />
                                <IconComponent className="h-3 w-3 text-white" />
                                <span>{item.text}</span>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
