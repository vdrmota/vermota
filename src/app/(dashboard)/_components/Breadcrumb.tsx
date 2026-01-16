'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { routeNames } from '../_lib/navigation'

export default function Breadcrumb() {
    const pathname = usePathname()
    const segments = pathname.split('/').filter(Boolean)

    return (
        <nav className="flex items-center gap-1 text-sm">
            {segments.map((segment, index) => {
                const href = '/' + segments.slice(0, index + 1).join('/')
                const isLast = index === segments.length - 1
                const name = routeNames[segment] || segment

                return (
                    <span key={href} className="flex items-center gap-1">
                        {index > 0 && <ChevronRight className="h-4 w-4 text-zinc-400" />}
                        {isLast ? (
                            <span className="text-zinc-900">{name}</span>
                        ) : (
                            <Link href={href} className="text-zinc-500 hover:text-zinc-700">
                                {name}
                            </Link>
                        )}
                    </span>
                )
            })}
        </nav>
    )
}
