import { CreditCard, Mail, Database, Users } from 'lucide-react'
import { ReactNode } from 'react'

const integrations = [
    {
        icon: CreditCard,
        name: 'POS Systems',
        description: 'Square, Toast, Clover, Shopify, and more.',
        status: 'available',
    },
    {
        icon: Mail,
        name: 'Email & SMS',
        description: 'Comes built in.',
        status: 'available',
    },
    {
        icon: Users,
        name: 'CRM',
        description: 'HubSpot, Salesforce, Klaviyo, Intercom.',
        status: 'available',
    },
    {
        icon: Database,
        name: 'Data Warehouse',
        description: 'Snowflake, BigQuery, Redshift.',
        status: 'coming',
    },
]

const IntegrationCard = ({
    title,
    description,
    children,
    comingSoon = false,
}: {
    title: string
    description: string
    children: ReactNode
    comingSoon?: boolean
}) => {
    return (
        <div className="relative rounded-2xl border border-zinc-200 bg-zinc-50/50 p-4">
            <div className="*:h-8 *:w-8 *:text-[#002FA7]">{children}</div>

            <div className="mt-3 space-y-1">
                <div className="flex items-center gap-2">
                    <h3 className="text-lg font-medium text-zinc-900">{title}</h3>
                    {comingSoon && (
                        <span className="rounded-full bg-zinc-200 px-2 py-0.5 text-xs font-medium text-zinc-600">
                            Soon
                        </span>
                    )}
                </div>
                <p className="line-clamp-2 text-zinc-600">{description}</p>
            </div>
        </div>
    )
}

const Integrations = () => {
    return (
        <section className="py-12 sm:py-16 bg-white">
            <div className="mx-auto max-w-5xl px-6">
                <div>
                    <h2 className="text-balance text-3xl font-medium text-zinc-900 md:text-4xl">
                        Connect the tools you already use.
                    </h2>
                    <p className="mt-3 text-lg text-zinc-600">
                        Vermota keeps the loyalty layer clean. Your data stays in sync.
                    </p>
                </div>

                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {integrations.map((integration, index) => (
                        <IntegrationCard
                            key={index}
                            title={integration.name}
                            description={integration.description}
                            comingSoon={integration.status === 'coming'}
                        >
                            <integration.icon />
                        </IntegrationCard>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Integrations
