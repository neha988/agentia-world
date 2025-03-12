import React from 'react'
import Hero from './components/hero'
import Marketplace from './components/marketplace'
import Customize from './components/customize'
import Expert from './components/expert'
import Testimonials from './components/testimonals'
import CallToAction from './components/calltoaction'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { AnimatedTestimonials } from './components/ui/animated-testimonials'

const testimonials = [
  {
    quote: "I've been using Agentia World for a few months now, and it's been a game-changer for my business. The AI agents are incredibly helpful and the platform is user-friendly.",
    name: "Sarah Johnson",
    designation: "Marketing Director at Growth Co",
    src: "/images/image1.jpg",
  },
  {
    quote: "The AI agents on Agentia World have transformed how we handle customer support. The efficiency gains have been remarkable and our customers love the instant responses.",
    name: "Michael Chen",
    designation: "Founder of AI Solutions",
    src: "/images/image3.jpg"
  },
  {
    quote: "What impressed me most about Agentia World is how intuitive it is to customize the AI agents. We've seen a 40% increase in productivity since implementing it.",
    name: "Emily Rodriguez",
    designation: "CTO of Tech Innovate",
    src: "/images/image4.jpg"
  }
]
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
    <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    <CallToAction/>
    <Footer/>
   </div>
   </>
  )
}

export default Home