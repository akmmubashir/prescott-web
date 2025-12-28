import React from 'react'
import Header from '../components/header'
import HeroSection from './components/heroSection'
import AboutSection from './components/aboutSection'
import ServicesSection from './components/servicesSection'
import DifferentiatorsSection from './components/differentiatorsSection'
import TestimonialsSection from './components/testimonialsSection'
import ContactSection from './components/contactSection'
import Footer from '../components/footer'

// type Props = {}

const HomePage = () => {
    return (
        <div className='min-h-screen overflow-hidden bg-white'>
            <Header />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <DifferentiatorsSection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
        </div>
    )
}

export default HomePage