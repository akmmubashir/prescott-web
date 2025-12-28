"use client";
import React from 'react'
import { Roboto_Mono } from 'next/font/google';
import { motion } from 'framer-motion'
import CommonButton from '@/app/components/commonButton';

const robotoMono = Roboto_Mono({
    variable: "--font-roboto-mono",
    subsets: ["latin"],
});
// type Props = {}

const headingContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.04,
            delayChildren: 1.1,
        },
    },
};

const headingLetter = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: "easeOut" as const },
    },
};

const headingLines = ["Beyond", "The_Ordinary"];

const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const, delay: 1.5 },
    },
};

const backgroundVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1.2, ease: "easeOut" as const },
    },
};

const HeroSection = () => {

    return (
        <div className='relative'>
            {/* Background layer with grayscale filter */}
            <motion.div
                aria-hidden
                className='absolute inset-0 bg-no-repeat bg-cover bg-center'
                style={{
                    backgroundImage: "url(/assets/common/hero-img.png)",
                    filter: 'grayscale(10%) brightness(50%)',
                }}
                variants={backgroundVariants}
                initial="hidden"
                animate="visible"
            />
            {/* Gradient overlay below content */}
            <div className="absolute inset-0 z-10 bg-linear-to-b from-black/90 via-black/0 to-transparent pointer-events-none" />
            <div className='relative z-20 h-dvh max-lg:gap-[40px_0] p-[180px_0px_60px] max-xl:p-[160px_40px_60px] max-lg:p-[120px_20px_40px] max-w-300 mx-auto flex flex-col justify-between'>
                <div className='relative max-lg:flex flex-col gap-4'>

                    <motion.h1
                        variants={headingContainer}
                        initial="hidden"
                        animate="visible"
                        className={`text-[120px] leading-35 items-stretch max-lg:text-[50px] max-lg:leading-18 font-semibold text-white w-full justify-between ${robotoMono.className}`}>
                        {headingLines.map((line) => (
                            <motion.span
                                key={line}
                                className="block"
                                variants={headingContainer}
                                initial="hidden"
                                animate="visible"
                                transition={{ staggerChildren: 0.02 }}
                            >
                                {line.split("").map((char, index) => (
                                    <motion.span key={`${line}-${index}`} className="inline-block" variants={headingLetter}>
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.h2
                        variants={subtitleVariants}
                        initial="hidden"
                        animate="visible"
                        className='mt-4 max-lg:mt-0 uppercase text-[#dadada] text-[26px] max-lg:text-[18px] font-medium'
                    >
                        Building Trust, Crafting Tomorrow
                    </motion.h2>
                </div>
                <div className='grid grid-cols-12 gap-10 max-lg:gap-8 items-end max-lg:items-center border-t pt-10 max-lg:pt-5'>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                        className='col-span-8 max-lg:col-span-full flex items-center gap-4'
                    >
                        <p className='text-[32px] max-lg:text-[22px] font-medium'>
                            For nearly two decades, Prescott has shaped Dubai&apos;s skyline with quality-driven, innovative developments built on trust and lasting value.    </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.7 }}
                        className='col-span-4 max-lg:col-span-full flex justify-end max-lg:justify-start'
                    >
                        <CommonButton text="Explore Our Projects" model="secondary" icon />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection