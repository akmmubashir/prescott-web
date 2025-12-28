"use client"
import React from 'react'
import { motion, Variants } from 'framer-motion'

const aboutHighlights = [
    "Nearly two decades shaping Dubai's skyline with precision and trust.",
    "End-to-end development expertise across concept, design, and delivery.",
    "Relationship-driven approach that keeps residents and investors at the center.",
]

const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: 'easeOut', staggerChildren: 0.15 },
    },
}

const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const AboutSection = () => {
    return (
        <section className="relative overflow-hidden bg-[#f7f8fb]" id="about">
            <div className="absolute inset-0 bg-linear-to-br from-[#10242a]/8 via-transparent to-[#d9e7f2]/40" aria-hidden />
            <div className="relative max-w-300 mx-auto max-xl:px-10 max-lg:px-5 py-24 max-lg:py-16 grid grid-cols-12 gap-10 max-lg:gap-8 items-center">
                <motion.div
                    className="col-span-6 max-lg:col-span-full space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.p className="text-[#244952] uppercase tracking-[0.2em] text-sm font-semibold" variants={childVariants}>
                        About Us
                    </motion.p>
                    <motion.h3 className="text-[44px] max-lg:text-[32px] leading-tight font-semibold text-[#0f1a1c]" variants={childVariants}>
                        Crafting elevated spaces that honor trust and longevity.
                    </motion.h3>
                    <motion.p className="text-[18px] max-lg:text-[16px] text-[#2f3b3e] leading-relaxed" variants={childVariants}>
                        Prescott focuses on delivering homes that feel considered, enduring, and inspired. From boutique residences to skyline-defining towers, we design experiences that balance sophistication with everyday comfort.
                    </motion.p>
                    <motion.ul className="space-y-3" variants={childVariants}>
                        {aboutHighlights.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-[#1d2b2f] text-[16px] max-lg:text-[15px] leading-relaxed">
                                <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#244952]" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </motion.ul>
                </motion.div>

                <motion.div
                    className="col-span-6 max-lg:col-span-full relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                >
                    <div className="relative overflow-hidden rounded-4xl shadow-2xl bg-[#10242a]">
                        <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-white/5" aria-hidden />
                        <div className="p-10 max-lg:p-8 space-y-6 text-white">
                            <h4 className="text-[28px] max-lg:text-[24px] font-semibold">Driven by purpose, guided by quality.</h4>
                            <p className="text-[17px] max-lg:text-[16px] leading-relaxed text-white/80">
                                Each project is envisioned to create lasting value for residents and investors alike, blending timeless design with thoughtful amenities.
                            </p>
                            <div className="grid grid-cols-2 gap-4 text-white/80 text-sm">
                                <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                                    <p className="text-[32px] font-semibold text-white">18+</p>
                                    <p>Years of development excellence</p>
                                </div>
                                <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                                    <p className="text-[32px] font-semibold text-white">3.2M</p>
                                    <p>Sq. ft delivered across Dubai</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutSection
