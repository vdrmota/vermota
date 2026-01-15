import Hero from '@/components/sections/Hero'
import CustomerProfiles from '@/components/sections/CustomerProfiles'
import ProgramExamples from '@/components/sections/ProgramExamples'
import Integrations from '@/components/sections/Integrations'
import Comparator from '@/components/sections/Comparator'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'

const HomePage = () => {
    return (
        <>
            <Hero />
            <Comparator />
            <CustomerProfiles />
            <ProgramExamples />
            <Integrations />
            <FAQ />
            <FinalCTA />
        </>
    )
}

export default HomePage
