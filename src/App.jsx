import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SmoothScroll from './components/SmoothScroll';
import MagneticCursor from './components/MagneticCursor';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Configure GSAP ScrollTrigger
    ScrollTrigger.config({
      limitCallbacks: true,
      syncInterval: 150,
    });

    // Refresh ScrollTrigger on load
    window.addEventListener('load', () => {
      ScrollTrigger.refresh();
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <SmoothScroll>
      <div className="relative">
        {/* Background Elements */}
        <ParticleBackground />
        <MagneticCursor />

        {/* Main Content */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </SmoothScroll>
  );
}

export default App;
