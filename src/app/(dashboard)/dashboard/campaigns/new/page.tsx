import { Sparkles } from 'lucide-react'
import { card } from '../../../_lib/styles'

const suggestions = [
    {
        title: 'Tuesday Happy Hour',
        description: 'Double points on all drinks between 2-4pm on Tuesdays',
        reason: 'Based on your slow Tuesday afternoons',
    },
    {
        title: 'Morning Rush Bonus',
        description: 'Extra 10 points for orders before 8am',
        reason: 'Encourage early visits during peak hours',
    },
    {
        title: 'Bring a Friend Week',
        description: 'Both customers get 50 bonus points when visiting together',
        reason: 'Your referral program is performing well',
    },
]

export default function NewCampaignPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-semibold text-zinc-900">Create Campaign</h1>
                <p className="mt-1 text-zinc-500">Start a new loyalty campaign for Acme Coffee</p>
            </div>

            <div className={`${card.base} p-6`}>
                <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 mb-4">
                    <Sparkles className="h-4 w-4" />
                    Suggested campaigns based on your data
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                    {suggestions.map((suggestion, i) => (
                        <button key={i} className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-[#002FA7] hover:bg-blue-50/50 transition-colors text-left">
                            <p className="font-medium text-zinc-900">{suggestion.title}</p>
                            <p className="text-sm text-zinc-500 mt-1">{suggestion.description}</p>
                            <p className="text-xs text-[#002FA7] mt-3">{suggestion.reason}</p>
                        </button>
                    ))}
                </div>
            </div>

            <div className={`${card.base} p-6`}>
                <h2 className="font-medium text-zinc-900 mb-4">Or describe your campaign</h2>
                <div className="space-y-4">
                    <textarea
                        placeholder="Describe what you want to achieve... e.g., 'I want to reward customers who visit 3 times in a week with a free pastry'"
                        className="w-full h-32 px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900 placeholder-zinc-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#002FA7] focus:border-transparent"
                    />
                    <div className="flex justify-end">
                        <button className="flex items-center gap-2 rounded-xl bg-[#002FA7] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#002FA7]/90">
                            <Sparkles className="h-4 w-4" />
                            Generate campaign
                        </button>
                    </div>
                </div>
            </div>

            <div className="h-32" />
        </div>
    )
}
