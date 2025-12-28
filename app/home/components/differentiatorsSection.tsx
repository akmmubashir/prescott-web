"use client"
import React from 'react'
import { motion, Variants } from 'framer-motion'
import { PencilIcon, CheckCircleIcon, LeafIcon, UsersIcon } from '@/app/components/icons'

const pillars = [
    {
        title: 'Design with Intent',
        copy: 'Architecture that balances aesthetics with airflow, light, and liveability—every detail serves a purpose.',
        icon: PencilIcon,
    },
    {
        title: 'Transparent Delivery',
        copy: 'Clear milestones, honest communication, and on-time handovers anchored by experienced project leadership.',
        icon: CheckCircleIcon,
    },
    {
        title: 'Sustainable Value',
        copy: 'Durable materials, energy-conscious systems, and community-first amenities that retain value long after launch.',
        icon: LeafIcon,
    },
    {
        title: 'Hospitality Mindset',
        copy: 'From concierge-style experiences to resident care, we elevate daily living with thoughtful service touchpoints.',
        icon: UsersIcon,
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

                <div className="grid grid-cols-12 gap-6 max-md:gap-4">
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
                            <motion.div 
                                className="h-full rounded-3xl border border-white/15 bg-linear-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md p-8 max-md:p-6 flex flex-col gap-4 group hover:border-white/30 transition-all duration-300"
                                whileHover={{ translateY: -6, backgroundColor: 'rgba(255,255,255,0.08)' }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            >
                                <motion.div 
                                    className="flex items-center gap-4"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <motion.div 
                                        className="h-14 w-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm"
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ type: 'spring', stiffness: 200 }}
                                    >
                                        <pillar.icon size="w-6 h-6" color="stroke-white" stroke="1.5" />
                                    </motion.div>
                                    <motion.div 
                                        className="h-8 w-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-sm font-bold group-hover:bg-white/20"
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                    >
                                        {(index + 1).toString().padStart(2, '0')}
                                    </motion.div>
                                </motion.div>
                                <h4 className="text-[24px] max-lg:text-[20px] max-md:text-[18px] font-semibold">{pillar.title}</h4>
                                <p className="text-[16px] max-md:text-[15px] text-white/75 leading-relaxed grow">{pillar.copy}</p>
                                <motion.div 
                                    className="flex items-center gap-2 text-white/60 group-hover:text-white text-sm font-medium"
                                    whileHover={{ x: 4 }}
                                >
                                    <span>Read more</span>
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

export default DifferentiatorsSection
