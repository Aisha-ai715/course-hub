import React from 'react'
import Header from "../../components/Header/Header"
import HeroSection from '../../components/HeroSection/HeroSection'
import AboutSection from '../../components/AboutSection/AboutSection'
import SchoolNum from '../../components/SchoolNumSection/SchoolNum'
import ChooseUs from '../../components/ChooseUs/ChooseUs'
import Testimonial from '../../components/TestimonialSection/Testimonial'
import Instructor from '../../components/InstructorsSection/Instructor'
import Popular from '../../components/PopularPosts/Popular'

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SchoolNum />
        <ChooseUs />
        <Testimonial />
        <Instructor />
        <Popular />
      </main>
    </div>
  )
}
