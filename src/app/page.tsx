import React from 'react'
import Hero from './components/hero'
import Marketplace from './components/marketplace'
import Customize from './components/customize'
import Expert from './components/expert'
import Testimonials from './components/testimonals'
import CallToAction from './components/calltoaction'
import Navbar from './components/navbar'
import Footer from './components/footer'
function Home() {
  return (
   <>
   <div>
    <Navbar/>
    <Hero/>
    <Marketplace/>
    <Customize/>
    <Expert/>
    <Testimonials/>
    <CallToAction/>
    <Footer/>
   </div>
   </>
  )
}

export default Home