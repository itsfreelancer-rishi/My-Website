"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(199,160,8,0.1),transparent_50%)]" />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [90, 0, 90],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-navy/30 rounded-full blur-3xl"
                />
            </div>

            {/* Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            >
                {/* Logo/Monogram - REPLACE WITH YOUR LOGO */}
                <motion.div variants={itemVariants} className="mb-8 flex justify-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-gold to-yellow-600 rounded-2xl flex items-center justify-center shadow-2xl">
                        <span className="text-navy font-bold text-4xl font-poppins">RR</span>
                    </div>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl font-bold font-poppins mb-6 bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent"
                >
                    I Build Modern Web Experiences
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-xl md:text-2xl text-gray-300 mb-4 font-inter"
                >
                    Freelance Web Developer
                </motion.p>

                <motion.p
                    variants={itemVariants}
                    className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    Turning ideas into fast, conversion-focused websites using cutting-edge
                    technologies. Helping small businesses and startups succeed online with
                    modern, scalable web solutions.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link href="#projects">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-gold to-yellow-600 text-navy font-semibold rounded-full shadow-lg hover:shadow-gold/50 transition-all duration-300"
                        >
                            View My Work
                        </motion.button>
                    </Link>
                    <Link href="#contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-transparent border-2 border-gold text-gold font-semibold rounded-full hover:bg-gold hover:text-navy transition-all duration-300"
                        >
                            Contact Me
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-gold rounded-full flex justify-center pt-2"
                    >
                        <div className="w-1 h-2 bg-gold rounded-full" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
