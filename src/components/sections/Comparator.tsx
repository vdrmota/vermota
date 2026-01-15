import { Check, X } from 'lucide-react'

const vermotaFeatures = [
    'Describe rules in plain English',
    'Any condition, any trigger',
    'Readable program summaries',
    'Ask questions in natural language',
    'Extensible over time',
]

const typicalFeatures = [
    'Stacks of toggles and edge cases',
    'Rules get fragile fast',
    'Reporting becomes exports',
    'Customization needs specialist help',
]

const Comparator = () => {
    return (
        <section className="relative bg-zinc-50 py-10 sm:py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="mb-8 text-center text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
                    More loyalty = More revenue.
                </h2>
                <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
                    {/* Typical Tools */}
                    <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
                        <div className="mb-6 inline-block rounded-full bg-zinc-100 px-4 py-1.5 text-sm font-medium text-zinc-600">
                            Typical tools
                        </div>
                        <ul className="space-y-4">
                            {typicalFeatures.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-zinc-200 text-zinc-500">
                                        <X className="h-3 w-3" />
                                    </div>
                                    <span className="text-sm text-zinc-500">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Vermota */}
                    <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
                        <div className="mb-6 inline-block rounded-full bg-[#002FA7] px-4 py-1.5 text-sm font-medium text-white">
                            Vermota
                        </div>
                        <ul className="space-y-4">
                            {vermotaFeatures.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#002FA7] text-white">
                                        <Check className="h-3 w-3" />
                                    </div>
                                    <span className="text-sm text-zinc-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Comparator
