import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';

export default function FloatingObjects() {
    const sphere1 = useRef();
    const sphere2 = useRef();
    const sphere3 = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        // Sphere 1 - slow orbital motion
        if (sphere1.current) {
            sphere1.current.position.y = Math.sin(time * 0.3) * 0.5;
            sphere1.current.rotation.x = time * 0.2;
            sphere1.current.rotation.y = time * 0.3;
        }

        // Sphere 2 - medium speed
        if (sphere2.current) {
            sphere2.current.position.x = Math.cos(time * 0.4) * 1.5;
            sphere2.current.position.y = Math.sin(time * 0.4) * 1.5;
            sphere2.current.rotation.x = time * 0.15;
            sphere2.current.rotation.z = time * 0.25;
        }

        // Sphere 3 - faster motion
        if (sphere3.current) {
            sphere3.current.position.x = Math.sin(time * 0.5) * 2;
            sphere3.current.position.z = Math.cos(time * 0.5) * 2;
            sphere3.current.rotation.y = time * 0.4;
        }
    });

    return (
        <>
            {/* Main sphere with distortion */}
            <Sphere ref={sphere1} args={[1, 100, 100]} scale={1.5} position={[0, 0, 0]}>
                <MeshDistortMaterial
                    color="#00D9FF"
                    attach="material"
                    distort={0.3}
                    speed={1.5}
                    roughness={0.2}
                    metalness={0.8}
                    emissive="#00D9FF"
                    emissiveIntensity={0.4}
                />
            </Sphere>

            {/* Secondary sphere */}
            <Sphere ref={sphere2} args={[0.7, 100, 100]} scale={1} position={[2, 1, -2]}>
                <MeshDistortMaterial
                    color="#A855F7"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.1}
                    metalness={0.9}
                    emissive="#A855F7"
                    emissiveIntensity={0.5}
                />
            </Sphere>

            {/* Third smaller sphere */}
            <Sphere ref={sphere3} args={[0.5, 100, 100]} scale={0.8} position={[-2, -1, -1]}>
                <MeshDistortMaterial
                    color="#33E1FF"
                    attach="material"
                    distort={0.5}
                    speed={1.8}
                    roughness={0.3}
                    metalness={0.7}
                    emissive="#33E1FF"
                    emissiveIntensity={0.3}
                />
            </Sphere>

            {/* Ambient light */}
            <ambientLight intensity={0.5} />

            {/* Point lights for dramatic effect */}
            <pointLight position={[10, 10, 10]} intensity={1} color="#00D9FF" />
            <pointLight position={[-10, -10, -10]} intensity={0.8} color="#A855F7" />
            <pointLight position={[0, 10, -10]} intensity={0.6} color="#fff" />
        </>
    );
}
