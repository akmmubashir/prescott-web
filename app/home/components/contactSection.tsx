"use client"
import React from 'react'
import { motion, Variants } from 'framer-motion'
import CommonButton from '@/app/components/commonButton'

const fieldVariants: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.08 * i, duration: 0.45, ease: 'easeOut' },
    }),
}

const ContactSection = () => {
    const fields = [
        { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Enter your name' },
        { label: 'Email', name: 'email', type: 'email', placeholder: 'you@example.com' },
        { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+971...' },
    ]

    return (
        <section className="bg-white" id="contact">
            <div className="max-w-300 mx-auto max-xl:px-10 max-lg:px-5 py-24 max-lg:py-16 grid grid-cols-12 gap-10 max-lg:gap-8 items-start">
                <motion.div
                    className="col-span-5 max-lg:col-span-full space-y-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <p className="text-[#244952] uppercase tracking-[0.18em] text-sm font-semibold">Contact</p>
                    <h3 className="text-[42px] max-lg:text-[32px] leading-tight font-semibold text-[#0f1a1c]">Let’s discuss your next move.</h3>
                    <p className="text-[18px] max-lg:text-[16px] text-[#2f3b3e] leading-relaxed">
                        Tell us about your goals—our team will reach out with tailored insights on projects, investment options, and timelines.
                    </p>
                    <div className="flex items-center gap-3 text-[#0f1a1c] text-[16px]">
                        <motion.span 
                            className="h-3 w-3 rounded-full bg-[#244952]"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span>Response within one business day.</span>
                    </div>
                </motion.div>

                <motion.form
                    className="col-span-7 max-lg:col-span-full bg-linear-to-br from-[#f7f8fb] to-white rounded-4xl border border-[#e7ecf0] p-8 max-lg:p-7 shadow-sm hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
                >
                    <div className="grid grid-cols-12 gap-4">
                        {fields.map((field, index) => (
                            <motion.div
                                key={field.name}
                                className="col-span-6 max-lg:col-span-12"
                                custom={index}
                                variants={fieldVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <label className="block text-[14px] font-semibold text-[#0f1a1c] mb-2" htmlFor={field.name}>
                                    {field.label}
                                </label>
                                <motion.input
                                    id={field.name}
                                    name={field.name}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    className="w-full rounded-2xl border border-[#d8dde3] bg-white px-4 py-3 text-[16px] text-[#0f1a1c] focus:outline-none focus:border-[#244952] focus:ring-2 focus:ring-[#244952]/20 transition"
                                    whileFocus={{ scale: 1.02 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                />
                            </motion.div>
                        ))}
                        <motion.div
                            className="col-span-12"
                            custom={fields.length}
                            variants={fieldVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <label className="block text-[14px] font-semibold text-[#0f1a1c] mb-2" htmlFor="message">
                                How can we help?
                            </label>
                            <motion.textarea
                                id="message"
                                name="message"
                                rows={4}
                                placeholder="Tell us about your project, investment goals, or timeline."
                                className="w-full rounded-2xl border border-[#d8dde3] bg-white px-4 py-3 text-[16px] text-[#0f1a1c] focus:outline-none focus:border-[#244952] focus:ring-2 focus:ring-[#244952]/20 transition resize-none"
                                whileFocus={{ scale: 1.02 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        className="mt-6 flex justify-end max-lg:justify-start"
                        custom={fields.length + 1}
                        variants={fieldVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <CommonButton text="Submit" model="primary" />
                    </motion.div>
                </motion.form>
            </div>
        </section>
    )
}

export default ContactSection
