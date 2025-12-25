import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { about, skills } from '../data/content';
import SkillScene from './SkillScene';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef(null);
    const skillsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate skill bars
            skillsRef.current.forEach((skill, index) => {
                const bar = skill.querySelector('.skill-bar');
                const level = skill.dataset.level;

                gsap.from(bar, {
                    width: '0%',
                    scrollTrigger: {
                        trigger: skill,
                        start: 'top 80%',
                        end: 'top 50%',
                        scrub: 1,
                    },
                });

                gsap.to(bar, {
                    width: `${level}%`,
                    scrollTrigger: {
                        trigger: skill,
                        start: 'top 80%',
                        end: 'top 50%',
                        scrub: 1,
                    },
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section
            id="about"
            ref={sectionRef}
            className="section bg-gradient-to-b from-dark to-dark-lighter relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-purple/10 rounded-full filter blur-3xl" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-cyan/10 rounded-full filter blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-heading font-bold gradient-text mb-4">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan to-purple mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Bio Section */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {about.bio.map((paragraph, index) => (
                            <motion.p
                                key={index}
                                variants={itemVariants}
                                className="text-lg text-white/80 leading-relaxed"
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                    </motion.div>

                    {/* Skills Section - 3D Interactive */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full"
                    >
                        <h3 className="text-2xl font-heading font-semibold mb-6 text-cyan text-center md:text-left">
                            Skills & Expertise (Interactive)
                        </h3>
                        <div className="glass-strong rounded-3xl overflow-hidden border border-white/10 relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-purple/5" />
                            <SkillScene />

                            {/* Instruction hint */}
                            <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                                <p className="text-white/40 text-sm">Move cursor to rotate • Hover to highlight</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
