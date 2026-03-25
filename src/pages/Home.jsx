import React from 'react'
import TopBanner from '../components/TopBanner'
import Hero from '../components/Hero'
import YouTubeCarousel from '../components/YouTubeCarousel'
import Banner from '../components/Banner'
import NewMusic from '../components/NewMusic'
import MixtapeBanner from '../components/MixtapeBanner'


const Home = () => {
  return (
    <>
        <TopBanner />
        <Hero />
        {/* <Banner /> */}
        <NewMusic />
        <YouTubeCarousel />
        <MixtapeBanner />
    </>
  )
}

export default Home