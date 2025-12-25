import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';
import Scene3D from '../three/Scene3D';

export default function Hero() {
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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.6, 0.05, 0.01, 0.9],
            },
        },
    };

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* 3D Background */}
            <Scene3D />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark -z-5" />

            {/* Content */}
            <motion.div
                className="relative z-10 text-center px-6 max-w-5xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants} className="mb-6">
                    <span className="text-cyan font-medium text-lg tracking-wider">
                        Hello, I'm
                    </span>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold mb-6 gradient-text"
                >
                    {personalInfo.name}
                </motion.h1>

                <motion.h2
                    variants={itemVariants}
                    className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium text-white/90 mb-8"
                >
                    {personalInfo.title}
                </motion.h2>

                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    {personalInfo.elevatorPitch}
                </motion.p>

                <motion.div variants={itemVariants} className="flex gap-6 justify-center flex-wrap">
                    <button
                        onClick={scrollToProjects}
                        className="group relative px-8 py-4 bg-gradient-to-r from-cyan to-purple rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                        <span className="relative z-10">View My Work</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple to-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>

                    <a
                        href="#contact"
                        className="px-8 py-4 glass rounded-full font-semibold text-white border-2 border-cyan/50 hover:border-cyan hover:bg-cyan/10 transition-all duration-300 hover:scale-105"
                    >
                        Get In Touch
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
