import { useState } from "react"
import Footer from "../components/Footer/Footer"
import LoveYourselfHomeSection from "../components/LoveYourselfPage/LoveYourselfHomeSection/LoveYourselfHomeSection"
import LoveYourselfPrices from "../components/LoveYourselfPage/LoveYourselfPrices/LoveYourselfPrices"
import LoveYourselfSecondImageSection from "../components/LoveYourselfPage/LoveYourselfSecondImageSection/LoveYourselfSecondImageSection"
import LoveYourselfServices from "../components/LoveYourselfPage/LoveYourselfServices/LoveYourselfServices"
import LoveYourselfThirdImageSection from "../components/LoveYourselfPage/LoveYourselfThirdImage/LoveYourselfThirdImage"


const LoveYourselfPage = () => {

    return (
        <div>
            <LoveYourselfHomeSection/>
            <LoveYourselfServices/>
            <LoveYourselfSecondImageSection/>
            <LoveYourselfPrices/>
            <LoveYourselfThirdImageSection/>
            <Footer/>
        </div>
    )
}

export default LoveYourselfPage