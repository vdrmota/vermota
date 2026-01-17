import { Sparkles, Heart, Rocket, Users, Plug } from 'lucide-react'

export const navigation = [
    {
        title: 'Home',
        icon: Sparkles,
        href: '/dashboard',
    },
    {
        title: 'Loyalty Suite',
        icon: Heart,
        href: '/loyalty',
    },
    {
        title: 'Growth Suite',
        icon: Rocket,
        href: '/growth',
    },
    {
        title: 'CRM',
        icon: Users,
        href: '/crm',
    },
    {
        title: 'POS Connection',
        icon: Plug,
        href: '/pos',
    },
]

// Derived mapping for breadcrumbs: slug -> title
export const routeNames: Record<string, string> = Object.fromEntries(
    navigation.map(item => [item.href.slice(1), item.title]),
)
