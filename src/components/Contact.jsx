import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';

export default function Contact() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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

    const socialLinks = [
        {
            name: 'Email',
            url: `mailto:${personalInfo.email}`,
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
            ),
            color: 'from-cyan to-blue-500',
        },
        {
            name: 'GitHub',
            url: personalInfo.github,
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            color: 'from-purple to-pink-500',
        },
        {
            name: 'LinkedIn',
            url: personalInfo.linkedin,
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            color: 'from-cyan to-blue-600',
        },
    ];

    return (
        <section id="contact" className="section bg-dark relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan/10 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple/10 rounded-full filter blur-3xl" />

            <div className="max-w-4xl mx-auto relative z-10 pt-32">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-5xl  md:text-6xl lg:text-7xl font-heading font-bold gradient-text mb-6"
                    >
                        Let's Connect
                    </motion.h2>

                    <motion.div
                        variants={itemVariants}
                        className="w-20 h-1 bg-gradient-to-r from-cyan to-purple mx-auto rounded-full mb-8"
                    />

                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto"
                    >
                        I'm always excited to collaborate on interesting projects or just chat about tech and design.
                        Feel free to reach out!
                    </motion.p>

                    {/* Social Links */}
                    <motion.div
                        variants={containerVariants}
                        className="flex flex-wrap justify-center gap-6 mb-12"
                    >
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={itemVariants}
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative"
                            >
                                <div className={`glass p-6 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan/30 flex flex-col items-center justify-center w-40 h-40`}>
                                    <div className={`text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${social.color} transition-all duration-300 mb-3`}>
                                        {social.icon}
                                    </div>
                                    <p className="text-white font-medium">{social.name}</p>

                                    {/* Glow effect on hover */}
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Email CTA */}
                    <motion.div variants={itemVariants}>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan to-purple rounded-full font-semibold text-lg text-white hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-cyan/50"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <span>Send me an email</span>
                        </a>
                    </motion.div>

                    {/* Footer */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-20 pt-8 border-t border-white/10"
                    >
                        <p className="text-white/50 text-sm">
                            © {new Date().getFullYear()} {personalInfo.name}. Crafted with passion and code.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
