import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import BookingSteps from './BookingSteps/BookingSteps'
import TopDestination from './TopDestination/TopDestination'
import TourGuide from './TourGuide/TourGuide'
import TourCategories from './TourCategories/TourCategories'
import Testimonials from './Testimonials/Testimonials'
import Banner from './Banner/Banner'
import Counter from './Counter/Counter'
import Tours from './Tours/Tours'
import Blogs from './Blogs/Blogs'
import SectionTransition from '../SectionTransition/SectionTransition'

const Index = () => {
  return (
    <>
        <Hero/>
        <SectionTransition from="teal" to="cream" />
        <About/>
        <SectionTransition from="cream" to="white" />
        <BookingSteps/>
        <SectionTransition from="white" to="blue" />
        <TopDestination/>
        <SectionTransition from="blue" to="white" />
        <TourGuide/>
        <SectionTransition from="white" to="cyan" />
        <TourCategories/>
        <Testimonials/>
        <SectionTransition from="cyan" to="teal" />
        <Banner/>
        <Counter/>
        <SectionTransition from="teal" to="cyan" />
        <Tours/>
        <SectionTransition from="cyan" to="teal" />
        <Blogs/>
        <SectionTransition from="teal" to="cream" />
    </>
  )
}

export default Index