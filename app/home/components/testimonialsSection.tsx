"use client"
import React from 'react'
import { motion, Variants } from 'framer-motion'

const testimonials = [
    {
        name: 'Amira Q.',
        role: 'Homeowner, Dubai Hills',
        quote: 'Every interaction felt personal. The handover was seamless and the attention to detail in finishes was beyond what we expected.',
        initials: 'AQ',
        rating: 5,
    },
    {
        name: 'Ravi S.',
        role: 'Investor',
        quote: 'Transparent timelines, regular updates, and a team that actually listens. Prescott delivered on every commitment.',
        initials: 'RS',
        rating: 5,
    },
    {
        name: 'Leena M.',
        role: 'Resident, Marina',
        quote: 'Amenities are curated, not just added. The spaces feel intentional and the community support is exceptional.',
        initials: 'LM',
        rating: 5,
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

                <div className="grid grid-cols-12 gap-6 max-md:gap-4">
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
                            <motion.div 
                                className="h-full rounded-3xl  border-[#e7ecf0] bg-linear-to-br from-white via-white/95 to-[#f8fafc] shadow-sm p-8 max-md:p-6 flex flex-col gap-4 group"
                                whileHover={{ translateY: -8, borderColor: '#244952', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            >
                                <motion.div 
                                    className="flex items-start justify-between"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                >
                                    <motion.div 
                                        className="flex gap-1"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        {Array.from({ length: item.rating }).map((_, i) => (
                                            <motion.svg key={i} className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" whileHover={{ scale: 1.2, rotate: 15 }} transition={{ type: 'spring', stiffness: 400 }}>
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" className="text-[#244952]" />
                                            </motion.svg>
                                        ))}
                                    </motion.div>
                                    <motion.svg className="w-6 h-6 text-[#244952]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.5-5-7-5S0 3.75 0 5c0 5 3 7 3 8s-2 7-2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-4.5-5-7-5s-7 3.75-7 5c0 5 3 7 3 8s-2 7-2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </motion.svg>
                                </motion.div>
                                <p className="text-[17px] max-md:text-[16px] text-[#0f1a1c] leading-relaxed italic font-medium">&quot;{item.quote}&quot;</p>
                                <div className="pt-4 border-t border-[#e7ecf0]" />
                                <motion.div 
                                    className="flex items-center gap-4"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                >
                                    <motion.div 
                                        className="h-12 w-12 rounded-full bg-linear-to-br from-[#244952] to-[#10242a] flex items-center justify-center text-white font-bold text-sm"
                                        whileHover={{ scale: 1.15, rotate: 360 }}
                                        transition={{ type: 'spring', stiffness: 200 }}
                                    >
                                        {item.initials}
                                    </motion.div>
                                    <div>
                                        <span className="text-[16px] font-bold text-[#0f1a1c] block">{item.name}</span>
                                        <span className="text-[14px] text-[#4a5a5f]">{item.role}</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection
