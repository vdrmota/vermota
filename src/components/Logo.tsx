import Link from 'next/link'

interface LogoProps {
    linked?: boolean
}

export default function Logo({ linked = true }: LogoProps) {
    const content = (
        <>
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900">
                <span className="text-xs font-bold text-white">V</span>
            </div>
            <span className="font-semibold text-zinc-900">Vermota</span>
        </>
    )

    if (linked) {
        return (
            <Link href="/" className="flex items-center gap-2">
                {content}
            </Link>
        )
    }

    return <div className="flex items-center gap-2">{content}</div>
}
