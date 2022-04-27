import { useState } from "react"
import AboutUsSection from "../components/AboutUsSection/AboutUsSection"
import HomeSection from "../components/HomeSection/HomeSection"
import MainPageFooterSection from "../components/MainPageFooterSection/MainPageFooterSection"
import SecondImageSection from "../components/SecondImageSection/SecondImageSection"

const Index = () => {

    return (
        <div>
            <HomeSection/>
            <AboutUsSection/>
            <SecondImageSection/>
            <MainPageFooterSection/>
        </div>
    )
}

export default Index