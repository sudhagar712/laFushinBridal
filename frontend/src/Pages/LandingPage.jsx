import React from 'react'
import Banner from '../Components/Banner'
import PhotographySection from '../Components/PhotographySection'
import SpaBenefits from '../Components/SpaBenefits'
import BackToTop from '../Components/BackToTop'
import ShotOfTheDay from '../Components/ShotOfTheDay'

const LandingPage = () => {
  return (
    <div>
      <Banner />

      <PhotographySection />
      <ShotOfTheDay/>
      <SpaBenefits />
      <BackToTop/>
    </div>
  );
}

export default LandingPage
