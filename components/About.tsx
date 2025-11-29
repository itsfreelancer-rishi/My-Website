"use client";

import { motion } from "framer-motion";

const About = () => {
    const stats = [
        { label: "Years Experience", value: "3+" },
        { label: "Projects Completed", value: "50+" },
        { label: "Countries Served", value: "10+" },
    ];

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-black to-charcoal/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-white">
                        About <span className="text-gold">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gold mx-auto mb-8" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Bio Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-semibold font-poppins mb-6 text-white">
                            Hi, I'm <span className="text-gold">Rishi Ramandwal</span>
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            I'm a passionate freelance web developer specializing in creating modern,
                            high-performance websites that drive results. With a focus on small
                            businesses and startups, I help transform ideas into stunning digital
                            experiences.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Using cutting-edge technologies like <span className="text-gold font-semibold">Next.js</span>,{" "}
                            <span className="text-gold font-semibold">TypeScript</span>,{" "}
                            <span className="text-gold font-semibold">Tailwind CSS</span>, and{" "}
                            <span className="text-gold font-semibold">Framer Motion</span>, I build
                            websites that are not only beautiful but also fast, secure, and scalable.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            I leverage AI tools and modern development practices to deliver projects
                            efficiently while maintaining the highest quality standards. Let's work
                            together to bring your vision to life!
                        </p>
                    </motion.div>

                    {/* Quick Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-1 gap-6"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gradient-to-br from-navy/50 to-charcoal/50 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 text-center shadow-lg hover:shadow-gold/20 transition-all duration-300"
                            >
                                <div className="text-5xl font-bold text-gold mb-2 font-poppins">
                                    {stat.value}
                                </div>
                                <div className="text-gray-300 text-lg font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
