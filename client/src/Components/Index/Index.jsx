import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import BookingSteps from './BookingSteps/BookingSteps'
import TopDestination from './TopDestination/TopDestination'
import TourGuide from './TourGuide/TourGuide'
import TourCategories from './TourCategories/TourCategories'
import Testimonials from './Testimonials/Testimonials'

const Index = () => {
  return (
    <>
        <Hero/>
        <About/>
        <BookingSteps/>
        <TopDestination/>
        <TourGuide/>
        <TourCategories/>
        <Testimonials/>
    </>
  )
}

export default Index