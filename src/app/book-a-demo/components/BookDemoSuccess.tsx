import { ArrowRight, Check } from 'lucide-react'

interface BookDemoSuccessProps {
    firstName: string
}

export const BookDemoSuccess = ({ firstName }: BookDemoSuccessProps) => {
    return (
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-xl text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-8 w-8 text-green-600" />
                </div>
                <h1 className="text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
                    Thanks, {firstName}!
                </h1>
                <p className="mt-4 text-lg text-zinc-600">
                    We&apos;ve received your request and will reach out ASAP to schedule your demo.
                </p>
                <a
                    href="/"
                    className="mt-8 inline-flex cursor-pointer items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
                >
                    Back to home
                    <ArrowRight className="ml-2 h-4 w-4" />
                </a>
            </div>
        </div>
    )
}
