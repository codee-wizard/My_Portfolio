import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectModal({ project, isOpen, onClose }) {
    if (!project) return null;

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const modalVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            rotateX: -15,
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotateX: 0,
            transition: {
                type: 'spring',
                damping: 25,
                stiffness: 300,
            },
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            rotateX: 15,
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={backdropVariants}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-dark/90 backdrop-blur-xl"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-strong rounded-3xl p-8 md:p-12"
                        variants={modalVariants}
                        style={{ perspective: '1000px' }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors group"
                        >
                            <svg
                                className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        {/* Project Title */}
                        <motion.h2
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4"
                        >
                            {project.title}
                        </motion.h2>

                        {/* Tags */}
                        <motion.div
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-2 mb-8"
                        >
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-1.5 bg-gradient-to-r from-cyan/20 to-purple/20 border border-cyan/30 rounded-full text-sm font-medium text-cyan"
                                >
                                    {tag}
                                </span>
                            ))}
                        </motion.div>

                        {/* Full Description */}
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg text-white/80 leading-relaxed mb-8"
                        >
                            {project.fullDescription}
                        </motion.p>

                        {/* Highlights */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mb-8"
                        >
                            <h3 className="text-xl font-heading font-semibold text-cyan mb-4">
                                Key Highlights
                            </h3>
                            <ul className="space-y-3">
                                {project.highlights.map((highlight, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <svg
                                            className="w-6 h-6 text-cyan flex-shrink-0 mt-0.5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="text-white/80">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex gap-4 flex-wrap"
                        >
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 min-w-[200px] px-8 py-4 bg-gradient-to-r from-cyan to-purple rounded-xl font-semibold text-white text-center hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
                                >
                                    View Live Demo
                                </a>
                            )}
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 min-w-[200px] px-8 py-4 glass border-2 border-cyan/50 rounded-xl font-semibold text-white text-center hover:border-cyan hover:bg-cyan/10 transition-all duration-300"
                                >
                                    View Code
                                </a>
                            )}
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
