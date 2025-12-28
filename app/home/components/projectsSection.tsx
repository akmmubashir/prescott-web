"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type Project = {
    id: number
    title: string
    location: string
    type: string
    description: string
    image: string
}

const projects: Project[] = [
    {
        id: 1,
        title: "Serenity Towers",
        location: "Dubai Hills Estate",
        type: "Luxury Residence",
        description:
            "A landmark residential tower offering refined interiors, smart living, and panoramic skyline views.",
        image: "/assets/images/project1.webp",
    },
    {
        id: 2,
        title: "Marina Central",
        location: "Dubai Marina",
        type: "Mixed-Use Development",
        description:
            "A vibrant beachfront destination blending residences, retail, and lifestyle experiences.",
        image: "/assets/images/project2.webp",
    },
    {
        id: 3,
        title: "Prestige Villas",
        location: "Jumeirah Golf Estate",
        type: "Ultra-Luxury Villas",
        description:
            "An exclusive collection of villas with private pools, automation, and golf course views.",
        image: "/assets/images/project3.webp",
    },
    {
        id: 4,
        title: "Downtown Essence",
        location: "Downtown Dubai",
        type: "Premium Apartments",
        description:
            "Modern urban living in the heart of the city with seamless access to lifestyle hubs.",
        image: "/assets/images/project4.webp",
    },
]

export default function ProjectsSection() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const slides = gsap.utils.toArray<HTMLElement>(".project-slide")

        // Initial state
        gsap.set(slides, { autoAlpha: 0 })
        gsap.set(slides[0], { autoAlpha: 1 })

        slides.forEach((slide, index) => {
            const content = slide.querySelectorAll(".anim-in")

            ScrollTrigger.create({
                trigger: containerRef.current,
                start: () => `top+=${index * window.innerHeight} top`,
                end: () => `top+=${(index + 1) * window.innerHeight} top`,
                scrub: true,

                onEnter: () => {
                    gsap.to(slide, { autoAlpha: 1, duration: 0.3 })
                    gsap.fromTo(
                        content,
                        { y: 30, autoAlpha: 0 },
                        {
                            y: 0,
                            autoAlpha: 1,
                            duration: 0.5,
                            stagger: 0.08,
                            ease: "power2.out",
                        }
                    )
                },

                onLeave: () => {
                    gsap.to(slide, { autoAlpha: 0, duration: 0.3 })
                },

                onEnterBack: () => {
                    gsap.to(slide, { autoAlpha: 1, duration: 0.3 })
                },

                onLeaveBack: () => {
                    gsap.to(slide, { autoAlpha: 0, duration: 0.3 })
                },
            })
        })

        // Pin container
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: `+=${projects.length * window.innerHeight}`,
            pin: true,
            anticipatePin: 1,
        })

        return () => ScrollTrigger.getAll().forEach(t => t.kill())
    }, [])

    return (
        <section className="relative bg-[#0f1a1c]">
            <div ref={containerRef} className="relative h-screen overflow-hidden">
                {projects.map(project => (
                    <div
                        key={project.id}
                        className="project-slide absolute inset-0"
                    >
                        {/* Background */}
                        <div className="absolute inset-0">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                priority={project.id === 1}
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-r from-[#0f1a1c]/90 via-[#0f1a1c]/60 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 py-24 flex flex-col justify-center gap-6 text-white">
                            <span className="anim-in text-sm uppercase tracking-widest text-white/70">
                                {project.type}
                            </span>

                            <h2 className="anim-in text-5xl md:text-6xl font-semibold leading-tight">
                                {project.title}
                            </h2>

                            <p className="anim-in text-lg text-white/80 max-w-2xl">
                                {project.description}
                            </p>

                            <div className="anim-in text-sm text-white/60 flex items-center gap-2">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white/70 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 13.43a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M12 1.5c-5 0-9 3.56-9 8.13 0 3.67 1.87 6.86 4.6 8.35L12 22.5l4.4-4.52c2.73-1.49 4.6-4.68 4.6-8.35 0-4.57-4-8.13-9-8.13z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p>
                                    {project.location}
                                </p>
                            </div>

                            <button className="anim-in mt-6 w-fit rounded-full border border-white/30 px-6 py-3 hover:bg-white/10 transition">
                                Explore Project →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
