import Banner from "@/component/Banner"
import FeatureSection from "@/component/FeatureSection"
import HowItWorks from "@/component/HowItWorks"
import OurImpact from "@/component/OurImpact"

function Home() {
    return (
        <>
            <Banner />
            <OurImpact />
            <HowItWorks />
            <FeatureSection />
        </>
    )
}

export default Home