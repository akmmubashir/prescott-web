"use client"
import React from 'react'
import { motion, Variants } from 'framer-motion'

const articles = [
    {
        title: 'The Future of Sustainable Urban Development',
        excerpt: 'Exploring how green building practices and smart city technologies are reshaping residential development for environmental and economic sustainability.',
        author: 'Sarah Mitchell',
        date: 'December 15, 2025',
        readTime: '5 min read',
        category: 'Sustainability',
    },
    {
        title: 'Investment Strategies in Emerging Markets',
        excerpt: 'A comprehensive guide to identifying high-potential real estate opportunities in developing urban centers across the region.',
        author: 'David Chen',
        date: 'December 10, 2025',
        readTime: '7 min read',
        category: 'Investment',
    },
    {
        title: 'Design Trends Shaping Modern Living Spaces',
        excerpt: 'From flexible floor plans to wellness-centered amenities, discover the architectural innovations driving today\'s residential preferences.',
        author: 'Emma Rodriguez',
        date: 'December 5, 2025',
        readTime: '6 min read',
        category: 'Design',
    },
    {
        title: 'Maximizing Property Value Through Smart Technology',
        excerpt: 'How IoT integration, energy management systems, and smart home features are enhancing property appeal and long-term value.',
        author: 'Michael Park',
        date: 'November 28, 2025',
        readTime: '4 min read',
        category: 'Technology',
    },
]

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.1 * i, duration: 0.55, ease: 'easeOut' },
    }),
}

const ArticlesSection = () => {
    return (
        <section className="bg-white" id="articles">
            <div className="max-w-300 mx-auto max-xl:px-10 max-lg:px-5 py-24 max-lg:py-16">
                <div className="flex flex-col gap-3 mb-10">
                    <p className="text-[#244952] uppercase tracking-[0.18em] text-sm font-semibold">Insights</p>
                    <h3 className="text-[42px] max-lg:text-[32px] leading-tight font-semibold text-[#0f1a1c]">Latest Articles & Insights</h3>
                    <p className="text-[18px] max-lg:text-[16px] text-[#2f3b3e] max-w-3xl">
                        Stay informed with expert perspectives on real estate trends, market analysis, and industry innovations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-lg:gap-6">
                    {articles.map((article, index) => (
                        <motion.article
                            key={index}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-100px' }}
                            variants={cardVariants}
                            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer"
                        >
                            <div className="aspect-[16/9] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#244952]">
                                        {article.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                                    <span>{article.date}</span>
                                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                    <span>{article.readTime}</span>
                                </div>

                                <h4 className="text-[22px] font-semibold text-[#0f1a1c] mb-3 group-hover:text-[#244952] transition-colors leading-snug">
                                    {article.title}
                                </h4>

                                <p className="text-[15px] text-[#2f3b3e] mb-4 leading-relaxed line-clamp-3">
                                    {article.excerpt}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                                            <span className="text-sm font-semibold text-[#244952]">
                                                {article.author.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                        <span className="text-sm font-medium text-[#2f3b3e]">{article.author}</span>
                                    </div>

                                    <span className="text-[#244952] text-sm font-medium group-hover:translate-x-1 transition-transform">
                                        Read more →
                                    </span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ArticlesSection
