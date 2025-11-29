"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FormData } from "@/types";

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Add backend integration or email service
        console.log("Form submitted:", formData);
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", message: "" });
        }, 3000);
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-charcoal/50 to-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-white">
                        Let's Work <span className="text-gold">Together</span>
                    </h2>
                    <div className="w-20 h-1 bg-gold mx-auto mb-8" />
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                        Have a project in mind? Let's discuss how I can help bring your vision to
                        life with a modern, high-performance website.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-navy/40 border border-gold/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-navy/40 border border-gold/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-navy/40 border border-gold/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full px-8 py-4 bg-gradient-to-r from-gold to-yellow-600 text-navy font-semibold rounded-lg shadow-lg hover:shadow-gold/50 transition-all duration-300"
                            >
                                {isSubmitted ? "Message Sent! ✓" : "Send Message"}
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="bg-gradient-to-br from-navy/40 to-charcoal/40 backdrop-blur-sm border border-gold/20 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold font-poppins text-white mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <div className="text-gold text-2xl">📧</div>
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1">Email</p>
                                        <a
                                            href="mailto:itsfreelancer.rishi@gmail.com"
                                            className="text-white hover:text-gold transition-colors text-lg"
                                        >
                                            itsfreelancer.rishi@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="text-gold text-2xl">📱</div>
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1">Instagram</p>
                                        <a
                                            href="https://instagram.com/itsfreelancer.rishi"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-gold transition-colors text-lg"
                                        >
                                            @itsfreelancer.rishi
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="text-gold text-2xl">🌍</div>
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1">Location</p>
                                        <p className="text-white text-lg">India</p>
                                        <p className="text-gray-400 text-sm mt-1">
                                            Working with clients worldwide, especially USA
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-gold/10 to-navy/20 border border-gold/30 rounded-2xl p-6">
                            <p className="text-gray-300 leading-relaxed">
                                <span className="text-gold font-semibold">Based in India</span>, I work
                                with clients worldwide to create exceptional web experiences. Whether
                                you're a startup in the USA or a small business anywhere else, I'm here
                                to help you succeed online.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
