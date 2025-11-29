"use client";

import { motion } from "framer-motion";
import { Skill } from "@/types";

const Skills = () => {
    const skills: Skill[] = [
        { name: "Next.js", category: "Framework" },
        { name: "React", category: "Library" },
        { name: "TypeScript", category: "Language" },
        { name: "JavaScript", category: "Language" },
        { name: "Tailwind CSS", category: "Styling" },
        { name: "Framer Motion", category: "Animation" },
        { name: "HTML5", category: "Markup" },
        { name: "CSS3", category: "Styling" },
        { name: "Git", category: "Version Control" },
        { name: "Responsive Design", category: "Design" },
        { name: "SEO", category: "Optimization" },
        { name: "Web Performance", category: "Optimization" },
    ];

    return (
        <section id="skills" className="py-20 bg-gradient-to-b from-charcoal/50 to-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-white">
                        Skills & <span className="text-gold">Technologies</span>
                    </h2>
                    <div className="w-20 h-1 bg-gold mx-auto mb-8" />
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                        These modern tools and technologies help me build fast, secure, and scalable
                        websites that deliver exceptional user experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="bg-gradient-to-br from-navy/40 to-charcoal/40 backdrop-blur-sm border border-gold/20 rounded-xl p-6 text-center shadow-lg hover:shadow-gold/30 hover:border-gold/50 transition-all duration-300 cursor-pointer"
                        >
                            <div className="text-gold text-xl font-semibold mb-2 font-poppins">
                                {skill.name}
                            </div>
                            <div className="text-gray-400 text-sm">{skill.category}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
