"use client"
import React from 'react'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

const upcomingProjects = [
    {
        title: 'Horizon Residences',
        location: 'Downtown District',
        description: 'A 32-story mixed-use development featuring luxury apartments, retail spaces, and rooftop amenities.',
        expectedCompletion: 'Q2 2026',
        units: 180,
        status: 'Planning Phase',
        imageUrl: '/assets/images/1.webp',
    },
    {
        title: 'Waterfront Plaza',
        location: 'Marina Bay',
        description: 'Exclusive waterfront living with panoramic bay views, private marina access, and resort-style facilities.',
        expectedCompletion: 'Q4 2026',
        units: 95,
        status: 'Pre-Construction',
        imageUrl: '/assets/images/2.webp',
    },
    {
        title: 'Garden Heights',
        location: 'North Valley',
        description: 'Sustainable urban living with vertical gardens, solar panels, and community green spaces.',
        expectedCompletion: 'Q1 2027',
        units: 220,
        status: 'Design Phase',
        imageUrl: '/assets/images/3.webp',
    },
]

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.15 * i, duration: 0.55, ease: 'easeOut' },
    }),
}

const UpcomingProjectsSection = () => {
    return (
        <section className="bg-[#0f1a1c]" id="upcoming-projects">
            <div className="max-w-300 mx-auto max-xl:px-10 max-lg:px-5 py-24 max-lg:py-16">
                <div className="flex flex-col gap-3 mb-10">
                    <p className="text-white uppercase tracking-[0.18em] text-sm font-semibold">Coming Soon</p>
                    <h3 className="text-[42px] max-lg:text-[32px] leading-tight font-semibold text-white">Upcoming Projects</h3>
                    <p className="text-[18px] max-lg:text-[16px] text-white max-w-3xl">
                        Discover our pipeline of innovative developments designed to redefine modern living and investment opportunities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-lg:gap-6">
                    {upcomingProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-100px' }}
                            variants={cardVariants}
                            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="aspect-video bg-linear-to-br from-blue-500/10 to-purple-500/10 relative overflow-hidden">
                                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                    <span className="text-xs font-semibold text-[#244952]">{project.status}</span>
                                </div>
                                <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
                            </div>

                            <div className="p-6">
                                <h4 className="text-[24px] font-semibold text-[#0f1a1c] mb-2 group-hover:text-[#244952] transition-colors">
                                    {project.title}
                                </h4>
                                <p className="text-sm text-[#244952] font-medium mb-3">{project.location}</p>
                                <p className="text-[15px] text-[#2f3b3e] mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wide">Units</p>
                                        <p className="text-lg font-semibold text-[#0f1a1c]">{project.units}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-gray-500 uppercase tracking-wide">Expected</p>
                                        <p className="text-lg font-semibold text-[#0f1a1c]">{project.expectedCompletion}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default UpcomingProjectsSection
