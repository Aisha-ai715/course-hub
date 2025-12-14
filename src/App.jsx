import React from 'react'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import AboutSection from './components/AboutSection/AboutSection'

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
      </main>
    </div>
  )
}
