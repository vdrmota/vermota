import Hero from './_components/Hero'
import CustomerProfiles from './_components/CustomerProfiles'
import ProgramExamples from './_components/ProgramExamples'
import Integrations from './_components/Integrations'
import Comparator from './_components/Comparator'
import FAQ from './_components/FAQ'
import FinalCTA from './_components/FinalCTA'

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
