"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const projects = [
    {
        id: 1,
        title: 'Serenity Towers',
        location: 'Dubai Hills Estate',
        type: 'Luxury Residence',
        description:
            'An iconic 45-story residential tower featuring world-class amenities, smart home integration, and panoramic views of the Arabian Gulf. Each unit is meticulously designed with premium finishes and sustainable building practices.',
        image: '/assets/common/hero-img.webp',
        highlights: ['45 Floors', '350+ Units', 'Smart Home', 'Gym & Spa'],
    },
    {
        id: 2,
        title: 'Marina Central',
        location: 'Dubai Marina',
        type: 'Mixed-Use Development',
        description:
            'A vibrant mixed-use development combining residential apartments, retail spaces, and fine dining restaurants. Designed to create a dynamic urban lifestyle with direct beach access and world-class entertainment venues.',
        image: '/assets/common/hero-img.webp',
        highlights: ['500+ Residences', 'Retail Spaces', 'Beachfront', 'Fine Dining'],
    },
    {
        id: 3,
        title: 'Prestige Villas',
        location: 'Jumeirah Golf Estate',
        type: 'Ultra-Luxury Villas',
        description:
            'Exclusive collection of ultra-luxury villas with private pools, smart automation, and lush landscaping. Each villa is a masterpiece of architectural excellence overlooking pristine golf courses and the Emirates Golf Club.',
        image: '/assets/common/hero-img.webp',
        highlights: ['Limited Units', 'Private Pools', 'Golf Views', 'Smart Living'],
    },
    {
        id: 4,
        title: 'Downtown Essence',
        location: 'Downtown Dubai',
        type: 'Premium Apartments',
        description:
            'Strategic location in the heart of Downtown Dubai, offering modern apartments with contemporary design, sustainable features, and direct access to shopping, dining, and business districts. Urban living redefined.',
        image: '/assets/common/hero-img.webp',
        highlights: ['200+ Units', 'City View', 'Modern Design', 'Central Location'],
    },
]

const ProjectsSection = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [currentSlide, setCurrentSlide] = React.useState(0)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const mm = gsap.matchMedia()

        function setup(opts: { y: number; scaleOut: number; scaleIn: number; step: number }) {
            if (!containerRef.current) return

            const slides = gsap.utils.toArray<HTMLElement>(containerRef.current.querySelectorAll('.project-slide'))

            gsap.set(slides, { willChange: 'transform', transformPerspective: 1000 })
            gsap.set(slides.slice(1), { autoAlpha: 0 })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: `+=${Math.max(slides.length - 1, 0) * opts.step}`,
                    pin: true,
                    pinSpacing: true,
                    scrub: 0.25,
                    anticipatePin: 1,
                    snap: { snapTo: 1 / Math.max(slides.length - 1, 1), duration: 0.35, ease: 'power2.out', directional: true },
                    onUpdate: (self) => {
                        const progress = self.progress
                        const index = Math.round(progress * (slides.length - 1))
                        setCurrentSlide(index)
                    },
                },
            })

            slides.forEach((slide, i) => {
                if (i === slides.length - 1) return
                const next = slides[i + 1]
                tl.to(slide, { autoAlpha: 0, yPercent: -100, duration: 0.6, ease: 'power2.inOut' }, `step-${i}`)
                    .fromTo(next, { autoAlpha: 0, yPercent: 100 }, { autoAlpha: 1, yPercent: 0, duration: 0.6, ease: 'power2.inOut' }, `step-${i}`)

                const inner = Array.from(next.querySelectorAll('.anim-in')) as HTMLElement[]
                if (inner.length) {
                    tl.from(inner, { autoAlpha: 0, y: 20, duration: 0.4, ease: 'power2.out', stagger: 0.05 }, `step-${i}+=0.2`)
                }
            })

            return () => {
                tl.scrollTrigger?.kill()
                tl.kill()
            }
        }

        mm.add('(max-width: 768px)', () => setup({ y: 4, scaleOut: 0.97, scaleIn: 0.99, step: Math.round(window.innerHeight * 0.9) }))
        mm.add('(min-width: 769px)', () => setup({ y: 5, scaleOut: 0.96, scaleIn: 0.99, step: Math.round(window.innerHeight * 0.85) }))

        return () => mm.revert()
    }, [])

    return (
        <section id="projects" className="relative w-full bg-[#0f1a1c] z-51">
            {/* Pinned container; ScrollTrigger adds pin spacing for scroll length */}
            <div ref={containerRef} className="sticky top-0 h-screen w-full overflow-hidden">
                {projects.map((project, idx) => (
                    <div key={project.id} className="project-slide absolute inset-0">
                            {/* Background image */}
                        <div className="absolute inset-0 bg-media">
                            <Image src={project.image} alt={project.title} fill className="object-cover" priority={idx === 0} />
                            <div className="absolute inset-0 bg-linear-to-r from-[#0f1a1c]/95 via-[#0f1a1c]/70 to-transparent" />
                        </div>

                            {/* Content */}
                            <div className="relative h-full max-w-300 mx-auto p-8 max-lg:p-6 max-md:p-5 flex flex-col justify-between">
                                {/* Header meta */}
                                <div className="flex items-center justify-between">
                                    <p className="anim-in text-white uppercase tracking-[0.2em] text-sm font-semibold">
                                        Featured Project
                                    </p>
                                    <div className="anim-in flex items-center gap-3 text-white/70 text-sm font-medium">
                                        <span className='text-[60px] text-white'>{String(project.id).padStart(2, '0')}</span>
                                        {/* <div className="h-px w-8 bg-white/30" />
                                        <span>{String(projects.length).padStart(2, '0')}</span> */}
                                    </div>
                                </div>

                                {/* Main block */}
                                <div className="space-y-6 max-lg:space-y-4">
                                    <span className="anim-in inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium backdrop-blur-sm">
                                        {project.type}
                                    </span>
                                    <h2 className="anim-in text-[56px] max-lg:text-[42px] max-md:text-[32px] font-semibold text-white leading-tight">
                                        {project.title}
                                    </h2>
                                    <div className="anim-in flex items-center gap-3">
                                        <svg className="w-6 h-6 text-white/70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 13.43a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M12 1.5c-5 0-9 3.56-9 8.13 0 3.67 1.87 6.86 4.6 8.35L12 22.5l4.4-4.52c2.73-1.49 4.6-4.68 4.6-8.35 0-4.57-4-8.13-9-8.13z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <p className="text-white/80 text-[18px] max-md:text-[16px] font-medium">{project.location}</p>
                                    </div>
                                    <p className="anim-in text-white/70 text-[18px] max-lg:text-[16px] max-md:text-[15px] leading-relaxed max-w-2xl">
                                        {project.description}
                                    </p>
                                    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3 pt-4">
                                        {project.highlights.map((highlight) => (
                                            <div key={highlight} className="anim-in flex items-center gap-2 text-white/80 text-sm">
                                                <div className="h-1.5 w-1.5 rounded-full bg-white/50" />
                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Footer actions */}
                                <div className="flex items-center justify-between flex-wrap gap-4">
                                    <button className="px-6 py-3 rounded-full border border-white/30 text-white font-medium flex items-center gap-2 hover:bg-white/10 transition-all duration-300 max-md:w-full max-md:justify-center">
                                        Get A Quote
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                    </div>
                ))}
                
                {/* Slide Navigation and Indicators Overlay */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-8">
                    {/* Slide counter */}
                    <div className="flex items-center gap-3 text-white/70">
                        <span className="text-lg font-semibold">{String(currentSlide + 1).padStart(2, '0')}</span>
                        <div className="h-px w-8 bg-white/30" />
                        <span className="text-lg font-semibold">{String(projects.length).padStart(2, '0')}</span>
                    </div>

                    {/* Slide indicators */}
                    <div className="flex gap-2 mx-4">
                        {projects.map((p, idx) => (
                            <span 
                                key={p.id} 
                                className={`h-2 rounded-full transition-all duration-500 ease-out ${
                                    idx === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/40'
                                }`} 
                            />
                        ))}
                    </div>
                </div>

                {/* Scroll hint - only on first slide */}
                {currentSlide === 0 && (
                    <div className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-2 animate-bounce">
                        <p className="text-white/60 text-sm font-medium">Scroll to explore</p>
                        <svg className="w-5 h-5 text-white/60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5v14M19 16l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                )}
            </div>
        </section>
    )
}

export default ProjectsSection
