"use client"
import React from 'react'
import { motion, Variants } from 'framer-motion'

const pillars = [
    {
        title: 'Design with Intent',
        copy: 'Architecture that balances aesthetics with airflow, light, and liveability—every detail serves a purpose.',
    },
    {
        title: 'Transparent Delivery',
        copy: 'Clear milestones, honest communication, and on-time handovers anchored by experienced project leadership.',
    },
    {
        title: 'Sustainable Value',
        copy: 'Durable materials, energy-conscious systems, and community-first amenities that retain value long after launch.',
    },
    {
        title: 'Hospitality Mindset',
        copy: 'From concierge-style experiences to resident care, we elevate daily living with thoughtful service touchpoints.',
    },
]

const staggerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.12 * i, duration: 0.5, ease: 'easeOut' },
    }),
}

const DifferentiatorsSection = () => {
    return (
        <section className="bg-[#0f1a1c] text-white" id="difference">
            <div className="max-w-300 mx-auto max-xl:px-10 max-lg:px-5 py-24 max-lg:py-16">
                <div className="flex flex-col gap-3 mb-12">
                    <p className="text-white/70 uppercase tracking-[0.18em] text-sm font-semibold">What Makes Us Different</p>
                    <h3 className="text-[42px] max-lg:text-[32px] leading-tight font-semibold">Trust-built developments, crafted with precision.</h3>
                    <p className="text-[18px] max-lg:text-[16px] text-white/80 max-w-3xl">
                        We operate with a builder&apos;s discipline and a hospitality lens—ensuring every decision strengthens the experience for residents, partners, and investors.
                    </p>
                </div>

                <div className="grid grid-cols-12 gap-6">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            className="col-span-6 max-lg:col-span-12"
                            custom={index}
                            variants={staggerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col gap-4">
                                <div className="h-12 w-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-sm font-semibold">
                                    {(index + 1).toString().padStart(2, '0')}
                                </div>
                                <h4 className="text-[24px] max-lg:text-[20px] font-semibold">{pillar.title}</h4>
                                <p className="text-[16px] text-white/80 leading-relaxed">{pillar.copy}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DifferentiatorsSection
