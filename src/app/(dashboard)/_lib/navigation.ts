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

// Additional routes not in sidebar (profile menu, etc.)
const additionalRoutes: Record<string, string> = {
    'account-settings': 'Account Settings',
    'billing': 'Billing',
    'top-programs': 'Top Programs',
}

// Derived mapping for breadcrumbs: slug -> title
export const routeNames: Record<string, string> = {
    ...Object.fromEntries(navigation.map(item => [item.href.slice(1), item.title])),
    ...additionalRoutes,
}
