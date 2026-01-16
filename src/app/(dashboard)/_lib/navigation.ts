import { LayoutDashboard, Heart, Users, Plug } from 'lucide-react'

export const navigation = [
    {
        title: 'Dashboard',
        icon: LayoutDashboard,
        href: '/dashboard',
    },
    {
        title: 'Loyalty Programs',
        icon: Heart,
        href: '/loyalty',
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
    navigation.map((item) => [item.href.slice(1), item.title])
)
