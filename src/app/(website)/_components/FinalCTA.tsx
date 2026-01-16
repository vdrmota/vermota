import { ArrowRight } from 'lucide-react'

const FinalCTA = () => {
    return (
        <section id="request-access" className="bg-gradient-to-b from-zinc-100 to-zinc-50 py-10 sm:py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <div className="rounded-2xl bg-[#002FA7] p-12 text-center sm:p-16">
                        <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
                            Bring your best loyalty idea.
                            <br />
                            We&apos;ll help you ship it.
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
                            Book a demo and tell us what you want to build. We&apos;ll set up your first program with
                            you.
                        </p>

                        <div className="mt-10">
                            <a
                                href="/book-a-demo"
                                className="inline-flex items-center rounded-full bg-white px-6 py-2.5 text-sm font-medium text-[#002FA7] transition-all hover:scale-105 hover:bg-zinc-100"
                            >
                                Book a demo
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </div>

                        <p className="mt-6 text-sm text-white/50">Private beta. White-glove onboarding.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FinalCTA
