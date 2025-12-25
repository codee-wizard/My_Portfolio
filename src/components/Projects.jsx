import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { projects } from '../data/content';
import ProjectModal from './ProjectModal';

const ProjectCard = ({ project, index, openModal, className = "" }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => openModal(project)}
            style={{
                perspective: 1000,
            }}
            className={`cursor-pointer group h-[400px] ${className}`}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative w-full h-full transition-all duration-200 ease-linear"
            >
                <div className="absolute inset-0 bg-dark-card rounded-2xl overflow-hidden shadow-2xl border border-white/5 group-hover:border-cyan/30 transition-colors duration-300">
                    {/* Image Background */}
                    <div className="absolute inset-0">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-40 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/80 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-z-20">
                        <motion.div
                            style={{ transform: "translateZ(50px)" }}
                            className="relative z-10"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-3xl font-heading font-bold text-white group-hover:text-cyan transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <span className="text-5xl font-heading font-bold text-white/5 group-hover:text-white/10 transition-colors duration-300">
                                    {String(project.id).padStart(2, '0')}
                                </span>
                            </div>

                            <p className="text-white/70 mb-6 line-clamp-2 transform group-hover:translate-z-10 transition-transform duration-300">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.slice(0, 3).map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-cyan/10 border border-cyan/30 rounded-full text-xs font-medium text-cyan"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-2 text-cyan font-medium group-hover:gap-4 transition-all duration-300">
                                <span>View Details</span>
                                <svg
                                    className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </div>
                        </motion.div>
                    </div>

                    {/* 3D Floating Elements */}
                    <motion.div
                        style={{ transform: "translateZ(20px)" }}
                        className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-cyan/20 to-purple/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProject(null), 300);
    };

    return (
        <section id="projects" className="section bg-dark-lighter relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/5 rounded-full filter blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple/5 rounded-full filter blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-heading font-bold gradient-text mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan to-purple mx-auto rounded-full mb-6" />
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        A showcase of my recent work and creative endeavors
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8 px-4">
                    {projects.map((project, index) => {
                        // Check if this is the last item and the total count is odd
                        const isLastAndOdd = projects.length % 2 !== 0 && index === projects.length - 1;

                        return (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                openModal={openModal}
                                className={isLastAndOdd ? "md:col-span-2 md:w-[calc(50%-1rem)] md:mx-auto" : ""}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </section>
    );
}
