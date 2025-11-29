"use client";

import { motion } from "framer-motion";
import { Project } from "@/types";

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, rotateX: 5 }}
            className="bg-gradient-to-br from-navy/40 to-charcoal/40 backdrop-blur-sm border border-gold/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-gold/20 hover:border-gold/50 transition-all duration-300"
        >
            {/* Project Image Placeholder */}
            <div className="relative h-48 bg-gradient-to-br from-gold/20 to-navy/40 flex items-center justify-center">
                <div className="text-6xl text-gold/30">🚀</div>
                {/* TODO: Replace with actual project image */}
                {/* <Image src={project.image || "/placeholder.jpg"} alt={project.title} fill className="object-cover" /> */}
            </div>

            {/* Project Content */}
            <div className="p-6">
                <h3 className="text-2xl font-bold font-poppins text-white mb-3">
                    {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-gold/20 text-gold text-sm rounded-full border border-gold/30"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                    <motion.a
                        href={project.liveUrl || "#"} // TODO: Add real URLs
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-gold to-yellow-600 text-navy font-semibold rounded-lg text-center hover:shadow-lg hover:shadow-gold/50 transition-all duration-300"
                    >
                        Live Demo
                    </motion.a>
                    {project.codeUrl && (
                        <motion.a
                            href={project.codeUrl || "#"} // TODO: Add real URLs
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 px-4 py-2 bg-transparent border-2 border-gold text-gold font-semibold rounded-lg text-center hover:bg-gold hover:text-navy transition-all duration-300"
                        >
                            View Code
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
