import { Check, X } from 'lucide-react'

const comparisonData = [
    {
        feature: 'Rule creation',
        typical: 'Stacks of toggles and edge cases',
        vermota: 'Describe rules in plain English',
    },
    {
        feature: 'Flexibility',
        typical: 'Rules get fragile fast',
        vermota: 'Any condition, any trigger',
    },
    {
        feature: 'Program overview',
        typical: 'Reporting becomes exports',
        vermota: 'Readable program summaries',
    },
    {
        feature: 'Insights',
        typical: 'Customization needs specialist help',
        vermota: 'Ask questions in natural language',
    },
    {
        feature: 'Scalability',
        typical: 'Rigid, hard to change',
        vermota: 'Extensible over time',
    },
]

const Comparator = () => {
    return (
        <section className="relative bg-zinc-50 py-12 sm:py-16">
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="mb-10 text-center text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
                    More loyalty = More revenue.
                </h2>

                <div className="grid gap-6 md:hidden">
                    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                        <div className="mb-5 inline-block rounded-full bg-zinc-100 px-4 py-1.5 text-sm font-medium text-zinc-600">
                            Typical tools
                        </div>
                        <ul className="space-y-4">
                            {comparisonData.map((row, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-zinc-200 text-zinc-500">
                                        <X className="h-3 w-3" />
                                    </div>
                                    <span className="text-sm text-zinc-500">{row.typical}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                        <div className="mb-5 inline-block rounded-full bg-[#002FA7] px-4 py-1.5 text-sm font-medium text-white">
                            Vermota
                        </div>
                        <ul className="space-y-4">
                            {comparisonData.map((row, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#002FA7] text-white">
                                        <Check className="h-3 w-3" />
                                    </div>
                                    <span className="text-sm text-zinc-700">{row.vermota}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="hidden md:block">
                    <table className="w-full border-separate border-spacing-x-3">
                        <thead className="sticky top-0 bg-zinc-50">
                            <tr className="*:py-4 *:text-left *:font-medium">
                                <th className="w-1/4"></th>
                                <th>
                                    <span className="text-zinc-600">Typical tools</span>
                                </th>
                                <th className="rounded-t-xl bg-[#002FA7]/5 px-4">
                                    <span className="text-[#002FA7]">Vermota</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {comparisonData.map((row, index) => (
                                <tr key={index} className="*:py-4 *:align-top">
                                    <td className="border-b font-medium text-zinc-900">{row.feature}</td>
                                    <td className="border-b">
                                        <div className="flex items-start gap-2">
                                            <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-zinc-200 text-zinc-500">
                                                <X className="h-3 w-3" />
                                            </div>
                                            <span className="text-zinc-500">{row.typical}</span>
                                        </div>
                                    </td>
                                    <td className="border-b border-[#002FA7]/10 bg-[#002FA7]/5 px-4">
                                        <div className="flex items-start gap-2">
                                            <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#002FA7] text-white">
                                                <Check className="h-3 w-3" />
                                            </div>
                                            <span className="text-zinc-700">{row.vermota}</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td></td>
                                <td></td>
                                <td className="rounded-b-xl bg-[#002FA7]/5 px-4 py-4"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Comparator
