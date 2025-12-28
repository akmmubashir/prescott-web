import React from 'react'
import Header from '../components/header'
import HeroSection from './components/heroSection'
import AboutSection from './components/aboutSection'
import ServicesSection from './components/servicesSection'
import DifferentiatorsSection from './components/differentiatorsSection'
import ProjectsSection from './components/projectsSection'
import TestimonialsSection from './components/testimonialsSection'
import ContactSection from './components/contactSection'
import Footer from '../components/footer'

// type Props = {}

const HomePage = () => {
    return (
        <div className='min-h-screen bg-white'>
            <Header />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <DifferentiatorsSection />
            <ProjectsSection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
        </div>
    )
}

export default HomePage