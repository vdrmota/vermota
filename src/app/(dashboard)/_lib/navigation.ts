import { Sparkles, Heart, Rocket, Users, Plug, CreditCard, BarChart3 } from 'lucide-react'

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
        title: 'Payments',
        icon: CreditCard,
        href: '/payments',
    },
    {
        title: 'Analytics',
        icon: BarChart3,
        href: '/analytics',
    },
    {
        title: 'POS Connection',
        icon: Plug,
        href: '/pos',
    },
]

const additionalRoutes: Record<string, string> = {
    'account-settings': 'Account Settings',
    'billing': 'Billing',
    'activity': 'Activity',
    'close-to-reward': 'Close to Reward',
    'campaigns': 'Campaigns',
    'new': 'New',
    'referrals': 'Referrals',
    'win-back': 'Win Back',
    'trends': 'Trends',
}

export const routeNames: Record<string, string> = {
    ...Object.fromEntries(navigation.map(item => [item.href.slice(1), item.title])),
    ...additionalRoutes,
}
