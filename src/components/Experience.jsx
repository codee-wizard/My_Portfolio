import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experience } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
    const timelineRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate timeline line
            gsap.from('.timeline-line', {
                scaleY: 0,
                transformOrigin: 'top',
                scrollTrigger: {
                    trigger: timelineRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });

            // Animate each timeline item
            itemsRef.current.forEach((item, index) => {
                if (item) {
                    gsap.from(item, {
                        x: index % 2 === 0 ? -50 : 50,
                        opacity: 0,
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 85%',
                            end: 'top 60%',
                            scrub: 1,
                        },
                    });
                }
            });
        }, timelineRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="experience" className="section bg-gradient-to-b from-dark to-dark-lighter relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple/10 rounded-full filter blur-3xl" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-heading font-bold gradient-text mb-4">
                        Experience
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan to-purple mx-auto rounded-full mb-6" />
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        My professional journey and growth
                    </p>
                </motion.div>

                {/* Timeline */}
                <div ref={timelineRef} className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan via-purple to-cyan timeline-line hidden md:block" />

                    {/* Timeline Items */}
                    <div className="space-y-12">
                        {experience.map((exp, index) => (
                            <div
                                key={exp.id}
                                ref={(el) => (itemsRef.current[index] = el)}
                                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Content Card */}
                                <div className="w-full md:w-5/12 mb-8 md:mb-0">
                                    <motion.div
                                        whileHover={{ scale: 1.05, rotateY: 5 }}
                                        className="glass p-6 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan/20 group"
                                        style={{ perspective: '1000px' }}
                                    >
                                        {/* Company Logo Placeholder */}
                                        <div className="w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-cyan/20 to-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-2xl font-bold gradient-text">
                                                {exp.company.charAt(0)}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-cyan transition-colors duration-300">
                                            {exp.role}
                                        </h3>

                                        <p className="text-cyan font-medium mb-1">{exp.company}</p>
                                        <p className="text-white/60 text-sm mb-4">{exp.period}</p>

                                        <p className="text-white/80 mb-4 leading-relaxed">
                                            {exp.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-purple/10 border border-purple/30 rounded-full text-xs font-medium text-purple-400"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2, type: 'spring' }}
                                        className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan to-purple shadow-lg shadow-cyan/50 relative"
                                    >
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan to-purple animate-ping opacity-75" />
                                    </motion.div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="w-full md:w-5/12 hidden md:block" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
