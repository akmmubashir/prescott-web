"use client"
import React from 'react'
import { motion, Variants } from 'framer-motion'
import { BuildingIcon, TowerIcon, ChartIcon, WrenchIcon } from '@/app/components/icons'

const services = [
    {
        title: 'Boutique Residences',
        detail: 'Curated living spaces with refined interiors, wellness-focused amenities, and thoughtful community touchpoints.',
        icon: BuildingIcon,
        gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
        title: 'Lifestyle Towers',
        detail: 'Skyline-forward developments pairing elevated design with smart, efficient layouts for modern urban life.',
        icon: TowerIcon,
        gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
        title: 'Investor Programs',
        detail: 'Transparent, data-backed investment pathways with emphasis on risk management and long-term value creation.',
        icon: ChartIcon,
        gradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
        title: 'Property Services',
        detail: 'Lifecycle support from handover to asset care, ensuring every residence performs over time.',
        icon: WrenchIcon,
        gradient: 'from-orange-500/20 to-red-500/20',
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

const ServicesSection = () => {
    return (
        <section className="bg-white" id="services">
            <div className="max-w-300 mx-auto  max-xl:px-10 max-lg:px-5 py-24 max-lg:py-16">
                <div className="flex flex-col gap-3 mb-10">
                    <p className="text-[#244952] uppercase tracking-[0.18em] text-sm font-semibold">Services</p>
                    <h3 className="text-[42px] max-lg:text-[32px] leading-tight font-semibold text-[#0f1a1c]">Comprehensive real estate expertise, built for today.</h3>
                    <p className="text-[18px] max-lg:text-[16px] text-[#2f3b3e] max-w-3xl">
                        We combine purposeful design, operational rigor, and investor-first thinking to deliver developments that feel considered from ground to skyline.
                    </p>
                </div>

                <div className="grid grid-cols-12 gap-6 max-md:gap-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className="col-span-6 max-lg:col-span-12"
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <motion.div 
                                className={`h-full rounded-3xl border border-[#e7ecf0] bg-linear-to-br bg-[#f8fafc] hover:bg-white backdrop-blur-sm hover:border-[#244952]/30 shadow-sm hover:shadow-2xl transition-all duration-300 p-8 max-md:p-6 flex flex-col gap-4 group`}
                                whileHover={{ translateY: -8 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            >
                                <motion.div 
                                    className="h-14 w-14 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110"
                                    whileHover={{ rotate: 12 }}
                                    transition={{ type: 'spring', stiffness: 400 }}
                                >
                                    <service.icon size="w-7 h-7" color="stroke-[#244952]" stroke="2" />
                                </motion.div>
                                <motion.div className="h-12 w-12 rounded-full bg-[#244952] text-white flex items-center justify-center text-lg font-bold group-hover:flex absolute top-6 right-6">
                                    {(index + 1).toString().padStart(2, '0')}
                                </motion.div>
                                <h4 className="text-[24px] max-lg:text-[20px] max-md:text-[18px] font-semibold text-[#0f1a1c]">{service.title}</h4>
                                <p className="text-[16px] max-md:text-[15px] text-[#2f3b3e] leading-relaxed grow">{service.detail}</p>
                                <motion.div 
                                    className="flex items-center gap-2 text-[#244952] font-semibold mt-2 opacity-0 group-hover:opacity-100"
                                    initial={{ x: -10 }}
                                    whileHover={{ x: 4 }}
                                >
                                    <span>Learn more</span>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesSection
