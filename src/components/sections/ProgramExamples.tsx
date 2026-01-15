const examples = [
    {
        title: 'The Winback Sequence',
        description:
            'After 14 days, send 10% off. After 30 days, bump it to 20%. Spaced out, low-pressure, and stops the moment they return.',
    },
    {
        title: 'The Referral That Works',
        description:
            'When a friend makes their first purchase, both people get credit. No codes to remember, no awkward sharing. It just works.',
    },
    {
        title: 'The Midweek Boost',
        description:
            'Give double points for Tuesday or Wednesday visits. A simple way to fill your slower days without cutting into weekend margins.',
    },
    {
        title: 'The Off-Peak Perk',
        description:
            'Unlock a bonus reward for visits between 2 and 5pm. Helps spread traffic throughout the day and keeps your afternoon crowd coming back.',
    },
]

const ProgramExamples = () => {
    return (
        <section id="examples" className="py-12 sm:py-16 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
                        Use high-performing templates.
                    </h2>
                    <p className="mt-4 text-lg text-zinc-600">
                        Start with these pre-made templates, then make them yours.
                    </p>
                </div>

                {/* Cards */}
                <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
                    {examples.map((example, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:shadow-lg hover:shadow-zinc-900/5"
                        >
                            <h3 className="mb-3 text-lg font-medium text-zinc-900">{example.title}</h3>
                            <p className="text-sm leading-relaxed text-zinc-600">{example.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProgramExamples
