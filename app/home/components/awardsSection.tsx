"use client"
import React from 'react'
import { motion, Variants } from 'framer-motion'

const awards = [
    {
        title: 'Best Residential Development',
        year: '2025',
        organization: 'International Property Awards',
        project: 'Skyline Towers',
        description: 'Recognized for excellence in architectural design and sustainable building practices.',
    },
    {
        title: 'Developer of the Year',
        year: '2024',
        organization: 'National Real Estate Association',
        project: 'Company-wide',
        description: 'Honored for consistent delivery of high-quality developments and investor value.',
    },
    {
        title: 'Innovation in Design',
        year: '2024',
        organization: 'Architecture Excellence Awards',
        project: 'Harmony Residences',
        description: 'Awarded for pioneering wellness-focused residential design and community integration.',
    },
    {
        title: 'Sustainable Building Award',
        year: '2023',
        organization: 'Green Building Council',
        project: 'EcoVista Complex',
        description: 'Recognized for achieving LEED Platinum certification and net-zero energy design.',
    },
    {
        title: 'Best Mixed-Use Development',
        year: '2023',
        organization: 'Urban Development Institute',
        project: 'Central Plaza',
        description: 'Celebrated for seamlessly blending residential, retail, and community spaces.',
    },
    {
        title: 'Customer Satisfaction Excellence',
        year: '2023',
        organization: 'Property Buyers Association',
        project: 'Company-wide',
        description: 'Achieved highest customer satisfaction ratings for three consecutive years.',
    },
]

const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: 0.1 * i, duration: 0.5, ease: 'easeOut' },
    }),
}

const AwardsSection = () => {
    return (
        <section className="bg-gradient-to-b from-gray-50 to-white" id="awards">
            <div className="max-w-300 mx-auto max-xl:px-10 max-lg:px-5 py-24 max-lg:py-16">
                <div className="flex flex-col gap-3 mb-10 text-center">
                    <p className="text-[#244952] uppercase tracking-[0.18em] text-sm font-semibold">Recognition</p>
                    <h3 className="text-[42px] max-lg:text-[32px] leading-tight font-semibold text-[#0f1a1c]">Awards & Achievements</h3>
                    <p className="text-[18px] max-lg:text-[16px] text-[#2f3b3e] max-w-3xl mx-auto">
                        Our commitment to excellence has been recognized by leading industry organizations and associations worldwide.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-lg:gap-5">
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-100px' }}
                            variants={cardVariants}
                            className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                            {/* Award Icon/Badge */}
                            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>

                            {/* Year Badge */}
                            <div className="mb-4">
                                <span className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-[#244952] px-3 py-1 rounded-full text-sm font-semibold">
                                    {award.year}
                                </span>
                            </div>

                            {/* Content */}
                            <h4 className="text-[20px] font-semibold text-[#0f1a1c] mb-2 group-hover:text-[#244952] transition-colors">
                                {award.title}
                            </h4>

                            <p className="text-sm font-medium text-[#244952] mb-3">
                                {award.organization}
                            </p>

                            <p className="text-[14px] text-[#2f3b3e] mb-3 leading-relaxed">
                                {award.description}
                            </p>

                            <div className="pt-3 border-t border-gray-100">
                                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Project</p>
                                <p className="text-sm font-medium text-[#0f1a1c]">{award.project}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-lg:gap-6 pt-12 border-t border-gray-200">
                    <div className="text-center">
                        <p className="text-[42px] max-lg:text-[32px] font-bold text-[#244952] mb-2">25+</p>
                        <p className="text-[15px] text-[#2f3b3e]">Industry Awards</p>
                    </div>
                    <div className="text-center">
                        <p className="text-[42px] max-lg:text-[32px] font-bold text-[#244952] mb-2">10+</p>
                        <p className="text-[15px] text-[#2f3b3e]">Years Excellence</p>
                    </div>
                    <div className="text-center">
                        <p className="text-[42px] max-lg:text-[32px] font-bold text-[#244952] mb-2">98%</p>
                        <p className="text-[15px] text-[#2f3b3e]">Client Satisfaction</p>
                    </div>
                    <div className="text-center">
                        <p className="text-[42px] max-lg:text-[32px] font-bold text-[#244952] mb-2">15+</p>
                        <p className="text-[15px] text-[#2f3b3e]">Certified Projects</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AwardsSection
