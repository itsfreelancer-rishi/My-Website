"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types";

const Projects = () => {
    // Demo projects data - TODO: Replace with your real projects
    const projects: Project[] = [
        {
            id: 1,
            title: "Restaurant Website Demo",
            description:
                "Modern, responsive restaurant website with online menu, reservation system, and beautiful food gallery. Optimized for mobile ordering and fast load times.",
            tags: ["Next.js", "Responsive", "High Conversion", "Fast Load"],
        },
        {
            id: 2,
            title: "Dental Clinic Landing Page",
            description:
                "Professional healthcare landing page with appointment booking, service showcase, and patient testimonials. HIPAA-compliant design with accessibility focus.",
            tags: ["React", "Tailwind CSS", "SEO Optimized", "Accessible"],
        },
        {
            id: 3,
            title: "Cleaning Service Website",
            description:
                "Clean, modern website for a cleaning service business with instant quote calculator, service area map, and customer reviews integration.",
            tags: ["Next.js", "Framer Motion", "Lead Generation", "Mobile-First"],
        },
        {
            id: 4,
            title: "Fitness Trainer Portfolio",
            description:
                "Dynamic portfolio for a personal trainer featuring workout videos, client transformations, and online coaching booking system with payment integration.",
            tags: ["TypeScript", "Responsive", "Video Integration", "E-commerce"],
        },
        {
            id: 5,
            title: "SaaS Landing Page",
            description:
                "High-converting SaaS landing page with animated product demos, pricing tables, and email capture. A/B tested design with 35% conversion rate.",
            tags: ["Next.js", "Framer Motion", "High Conversion", "Analytics"],
        },
        {
            id: 6,
            title: "E-commerce Frontend Demo",
            description:
                "Modern e-commerce storefront with product filtering, shopping cart, wishlist, and checkout flow. Integrated with Stripe for secure payments.",
            tags: ["React", "TypeScript", "Stripe", "Fast Load", "PWA"],
        },
    ];

    return (
        <section id="projects" className="py-20 bg-gradient-to-b from-black to-charcoal/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-white">
                        Selected <span className="text-gold">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gold mx-auto mb-8" />
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                        Here are some demo projects showcasing my expertise in building modern,
                        high-performance websites for various industries.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
