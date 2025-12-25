import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MagneticCursor() {
    const cursorRef = useRef(null);
    const cursorDotRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;

        if (!cursor || !cursorDot) return;

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        let dotX = 0;
        let dotY = 0;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        // Add event listeners to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .cursor-pointer');
        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        window.addEventListener('mousemove', handleMouseMove);

        // Smooth cursor follow animation
        const animate = () => {
            // Cursor follows with delay
            const speed = 0.15;
            cursorX += (mouseX - cursorX) * speed;
            cursorY += (mouseY - cursorY) * speed;

            // Dot follows faster
            const dotSpeed = 0.25;
            dotX += (mouseX - dotX) * dotSpeed;
            dotY += (mouseY - dotY) * dotSpeed;

            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
            cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <div className="custom-cursor hidden md:block pointer-events-none fixed inset-0 z-[9999]">
            {/* Outer cursor */}
            <motion.div
                ref={cursorRef}
                className="absolute top-0 left-0 w-8 h-8 border-2 border-cyan rounded-full mix-blend-difference"
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0.5 : 1,
                }}
                transition={{ duration: 0.2 }}
                style={{
                    marginLeft: '-16px',
                    marginTop: '-16px',
                }}
            />

            {/* Inner dot */}
            <motion.div
                ref={cursorDotRef}
                className="absolute top-0 left-0 w-2 h-2 bg-cyan rounded-full mix-blend-difference"
                animate={{
                    scale: isHovering ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
                style={{
                    marginLeft: '-4px',
                    marginTop: '-4px',
                }}
            />
        </div>
    );
}
