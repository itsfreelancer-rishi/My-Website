"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FormData } from "@/types";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");
        setErrorMessage("");

        try {
            // EmailJS configuration
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

            // Validate environment variables
            if (!serviceId || !templateId || !publicKey) {
                throw new Error("EmailJS configuration is missing. Please check your environment variables.");
            }

            // Send email using EmailJS
            const response = await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                publicKey
            );

            if (response.status === 200) {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", message: "" });

                // Reset success message after 5 seconds
                setTimeout(() => {
                    setSubmitStatus("idle");
                }, 5000);
            }
        } catch (error) {
            console.error("EmailJS Error:", error);
            setSubmitStatus("error");

            // Set user-friendly error message
            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("Failed to send message. Please try again or contact me directly via email.");
            }

            // Reset error message after 7 seconds
            setTimeout(() => {
                setSubmitStatus("idle");
                setErrorMessage("");
            }, 7000);
        } finally {
            setIsSubmitting(false);
        }
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
                                disabled={isSubmitting}
                                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                                className={`w-full px-8 py-4 font-semibold rounded-lg shadow-lg transition-all duration-300 ${isSubmitting
                                        ? "bg-gray-600 cursor-not-allowed"
                                        : submitStatus === "success"
                                            ? "bg-green-600 hover:bg-green-700"
                                            : submitStatus === "error"
                                                ? "bg-red-600 hover:bg-red-700"
                                                : "bg-gradient-to-r from-gold to-yellow-600 hover:shadow-gold/50"
                                    } text-white`}
                            >
                                {isSubmitting
                                    ? "Sending..."
                                    : submitStatus === "success"
                                        ? "Message Sent Successfully! ✓"
                                        : submitStatus === "error"
                                            ? "Failed to Send ✗"
                                            : "Send Message"}
                            </motion.button>

                            {/* Error Message Display */}
                            {submitStatus === "error" && errorMessage && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-4 p-4 bg-red-500/10 border border-red-500/50 rounded-lg"
                                >
                                    <p className="text-red-400 text-sm">{errorMessage}</p>
                                </motion.div>
                            )}

                            {/* Success Message Display */}
                            {submitStatus === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-4 p-4 bg-green-500/10 border border-green-500/50 rounded-lg"
                                >
                                    <p className="text-green-400 text-sm">
                                        Thank you for your message! I'll get back to you soon.
                                    </p>
                                </motion.div>
                            )}
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
