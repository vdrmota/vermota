'use client'

import { useRef, useState } from 'react'
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
    const inputRef = useRef<HTMLTextAreaElement>(null)

    const handlePromptClick = (prompt: string) => {
        if (inputRef.current) {
            inputRef.current.value = prompt
            setInputValue(prompt)
            inputRef.current.focus()
        }
    }

    const handleSubmit = () => {
        if (inputValue.trim()) {
            // Handle submit logic here
            console.log('Submitting:', inputValue)
            setInputValue('')
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSubmit()
        }
    }

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value)
        // Auto-resize
        e.target.style.height = 'auto'
        e.target.style.height = `${Math.min(e.target.scrollHeight, 160)}px`
    }

    return (
        <div className="fixed left-0 right-0 lg:left-56 z-40 flex justify-center px-4 bottom-3 sm:bottom-6">
            <div className={`flex w-full max-w-[572px] flex-col gap-3 transition-transform duration-300 ease-out ${isFocused ? '' : 'translate-y-[52px] sm:translate-y-0'}`}>
                {/* Main input container - True Apple Liquid Glass */}
                <div
                    className={`
                        relative flex flex-col rounded-[28px] overflow-hidden transition-all duration-500
                        ${isFocused
                            ? 'backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_12px_48px_rgba(0,47,167,0.5),0_4px_16px_rgba(0,0,0,0.15)]'
                            : 'backdrop-blur-sm shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,47,167,0.2),0_2px_8px_rgba(0,0,0,0.06)]'
                        }
                    `}
                    style={{
                        background: isFocused
                            ? 'linear-gradient(135deg, rgba(0,47,167,0.9) 0%, rgba(0,35,130,0.93) 100%)'
                            : 'linear-gradient(135deg, rgba(0,47,167,0.55) 0%, rgba(0,35,130,0.6) 100%)',
                        transition: 'background 0.4s ease, box-shadow 0.4s ease, backdrop-filter 0.4s ease',
                    }}
                >
                    {/* Glass rim highlight - top edge */}
                    <div
                        className="absolute inset-x-0 top-0 h-[1px] transition-opacity duration-500"
                        style={{
                            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 20%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.6) 80%, transparent 100%)',
                            opacity: isFocused ? 0.6 : 1,
                        }}
                    />

                    {/* Inner glow / specular */}
                    <div
                        className="absolute inset-0 rounded-[28px] pointer-events-none transition-opacity duration-500"
                        style={{
                            background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 50%, transparent 100%)',
                            opacity: isFocused ? 0.5 : 1,
                        }}
                    />

                    {/* Left edge highlight */}
                    <div
                        className="absolute left-0 top-4 bottom-4 w-[1px] transition-opacity duration-500"
                        style={{
                            background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.4) 30%, rgba(255,255,255,0.4) 70%, transparent 100%)',
                            opacity: isFocused ? 0.4 : 1,
                        }}
                    />

                    {/* Right edge highlight */}
                    <div
                        className="absolute right-0 top-4 bottom-4 w-[1px] transition-opacity duration-500"
                        style={{
                            background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.2) 70%, transparent 100%)',
                            opacity: isFocused ? 0.3 : 1,
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
                            placeholder="Ask AI anything about your business..."
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

                    {/* Bottom inner shadow for depth */}
                    <div className="absolute inset-x-0 bottom-0 h-[1px] bg-black/10" />
                </div>

                {/* Quick prompt buttons - Liquid Glass pills */}
                <div className={`flex justify-center gap-2 transition-all duration-300 ${isFocused ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none sm:opacity-100 sm:translate-y-0 sm:pointer-events-auto'}`}>
                    {QUICK_PROMPTS.map((item) => {
                        const IconComponent = item.icon
                        return (
                            <button
                                key={item.text}
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={() => handlePromptClick(item.prompt)}
                                className="
                                    group relative flex cursor-pointer items-center gap-1.5 rounded-full overflow-hidden
                                    px-2.5 py-1.5 text-xs sm:text-sm sm:px-4 sm:py-2 sm:gap-2 text-white font-medium
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
                                {/* Pill highlight */}
                                <div className="absolute inset-x-0 top-0 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.5) 50%, transparent 90%)' }} />
                                <IconComponent className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                                <span>{item.text}</span>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
