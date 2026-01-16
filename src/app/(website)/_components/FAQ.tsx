'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
    {
        question: 'Do I need to be technical?',
        answer: 'No. If you can explain it, you can build it.',
    },
    {
        question: 'Can we do unusual rules?',
        answer: 'Yes. Product combos, time windows, visit patterns, referrals. Everything works.',
    },
    {
        question: 'Will this spam customers?',
        answer: 'We default to restraint and consent. But frequency and messaging is up to you.',
    },
    {
        question: 'Does Vermota replace our POS?',
        answer: 'No. Vermota sits on top as your loyalty and growth layer. No need to migrate or make changes.',
    },
    {
        question: 'Do you do payments too?',
        answer: 'Yes. Some businesses enable it later, but you can start creating loyalty programs without it.',
    },
]

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="faq" className="scroll-mt-16 bg-gradient-to-b from-white to-zinc-100 py-10 sm:py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-center text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">FAQ</h2>

                    <div className="mt-8 space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="rounded-2xl border border-zinc-200 bg-white shadow-sm">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="flex w-full cursor-pointer items-center justify-between p-6 text-left"
                                >
                                    <span className="font-medium text-zinc-900">{faq.question}</span>
                                    <ChevronDown
                                        className={`h-5 w-5 text-zinc-500 transition-transform ${
                                            openIndex === index ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>
                                {openIndex === index && (
                                    <div className="border-t border-zinc-200 px-6 pb-6 pt-4">
                                        <p className="text-zinc-600">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ
