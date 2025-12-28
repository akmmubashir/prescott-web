"use client"
import React from 'react'
import { motion, Variants } from 'framer-motion'

const services = [
    {
        title: 'Boutique Residences',
        detail: 'Curated living spaces with refined interiors, wellness-focused amenities, and thoughtful community touchpoints.',
    },
    {
        title: 'Lifestyle Towers',
        detail: 'Skyline-forward developments pairing elevated design with smart, efficient layouts for modern urban life.',
    },
    {
        title: 'Investor Programs',
        detail: 'Transparent, data-backed investment pathways with emphasis on risk management and long-term value creation.',
    },
    {
        title: 'Property Services',
        detail: 'Lifecycle support from handover to asset care, ensuring every residence performs over time.',
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

                <div className="grid grid-cols-12 gap-6">
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
                            <div className="h-full rounded-3xl border border-[#e7ecf0] bg-[#f8fafc] hover:bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col gap-4">
                                <div className="h-12 w-12 rounded-full bg-[#244952] text-white flex items-center justify-center text-lg font-semibold">
                                    {(index + 1).toString().padStart(2, '0')}
                                </div>
                                <h4 className="text-[24px] max-lg:text-[20px] font-semibold text-[#0f1a1c]">{service.title}</h4>
                                <p className="text-[16px] text-[#2f3b3e] leading-relaxed">{service.detail}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesSection
