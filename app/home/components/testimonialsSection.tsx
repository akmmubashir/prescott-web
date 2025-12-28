"use client"
import React from 'react'
import { motion, Variants } from 'framer-motion'

const testimonials = [
    {
        name: 'Amira Q.',
        role: 'Homeowner, Dubai Hills',
        quote: 'Every interaction felt personal. The handover was seamless and the attention to detail in finishes was beyond what we expected.',
    },
    {
        name: 'Ravi S.',
        role: 'Investor',
        quote: 'Transparent timelines, regular updates, and a team that actually listens. Prescott delivered on every commitment.',
    },
    {
        name: 'Leena M.',
        role: 'Resident, Marina',
        quote: 'Amenities are curated, not just added. The spaces feel intentional and the community support is exceptional.',
    },
]

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.15 * i, duration: 0.5, ease: 'easeOut' },
    }),
}

const TestimonialsSection = () => {
    return (
        <section className="bg-[#f7f8fb]" id="testimonials">
            <div className="max-w-300 mx-auto max-xl:px-10 max-lg:px-5 py-24 max-lg:py-16">
                <div className="flex flex-col gap-3 mb-12">
                    <p className="text-[#244952] uppercase tracking-[0.18em] text-sm font-semibold">Testimonials</p>
                    <h3 className="text-[42px] max-lg:text-[32px] leading-tight font-semibold text-[#0f1a1c]">Trusted by residents and investors alike.</h3>
                    <p className="text-[18px] max-lg:text-[16px] text-[#2f3b3e] max-w-3xl">
                        Hear how our commitment to quality, transparency, and hospitality-first experiences shapes every development we deliver.
                    </p>
                </div>

                <div className="grid grid-cols-12 gap-6">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.name}
                            className="col-span-4 max-lg:col-span-12"
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="h-full rounded-3xl border border-[#e7ecf0] bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col gap-4">
                                <p className="text-[17px] text-[#0f1a1c] leading-relaxed">“{item.quote}”</p>
                                <div className="pt-2 border-t border-dashed border-[#e7ecf0]" />
                                <div className="flex flex-col">
                                    <span className="text-[16px] font-semibold text-[#0f1a1c]">{item.name}</span>
                                    <span className="text-[14px] text-[#4a5a5f]">{item.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection
