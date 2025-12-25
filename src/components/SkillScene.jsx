import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { skills } from '../data/content';

function SkillBall({ skill, position }) {
    const meshRef = useRef();
    const [hovered, setHovered] = useState(false);

    // Randomize initial rotation and speed for organic feel
    const rotationSpeed = useMemo(() => ({
        x: Math.random() * 0.2,
        y: Math.random() * 0.2
    }), []);

    useFrame((state, delta) => {
        if (meshRef.current) {
            // Continuous gentle rotation
            meshRef.current.rotation.x += rotationSpeed.x * delta;
            meshRef.current.rotation.y += rotationSpeed.y * delta;

            // Hover effect scale
            const targetScale = hovered ? 1.2 : 1;
            meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
        }
    });

    // Color based on category or random from theme
    const color = hovered ? '#ffffff' : (['#00D9FF', '#A855F7'][Math.floor(Math.random() * 2)]);

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <group position={position}>
                <mesh
                    ref={meshRef}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                >
                    <sphereGeometry args={[1.2, 32, 32]} />
                    <meshPhysicalMaterial
                        color={color}
                        roughness={0.1}
                        metalness={0.8}
                        transmission={0.5} // Glass-like
                        thickness={2}
                        envMapIntensity={2}
                        emissive={color}
                        emissiveIntensity={hovered ? 0.6 : 0.2}
                    />
                </mesh>

                {/* Text inside/on the sphere */}
                <Text
                    position={[0, 0, 1.3]} // Slightly in front of the sphere
                    fontSize={0.35}
                    color="#ffffff"
                    anchorX="center"
                    anchorY="middle"
                    font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                >
                    {skill.name}
                </Text>
            </group>
        </Float>
    );
}

function SkillsGroup() {
    const groupRef = useRef();

    useFrame((state) => {
        if (groupRef.current) {
            // Rotate the entire group based on mouse position
            // "Moves with the direction of arrow"
            const x = state.mouse.x * 0.5; // Mouse X (-1 to 1)
            const y = state.mouse.y * 0.5; // Mouse Y (-1 to 1)

            // Smoothly interpolate rotation
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x, 0.1);
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y, 0.1);
        }
    });

    // Generate positions for spheres in a cloud formation
    const spheres = useMemo(() => {
        return skills.map((skill, i) => {
            const phi = Math.acos(-1 + (2 * i) / skills.length);
            const theta = Math.sqrt(skills.length * Math.PI) * phi;

            // Spherical distribution
            const radius = 6;
            const x = radius * Math.cos(theta) * Math.sin(phi);
            const y = radius * Math.sin(theta) * Math.sin(phi);
            const z = radius * Math.cos(phi);

            return { skill, position: [x, y, z] };
        });
    }, []);

    return (
        <group ref={groupRef}>
            {spheres.map((item, index) => (
                <SkillBall key={index} skill={item.skill} position={item.position} />
            ))}
        </group>
    );
}

export default function SkillScene() {
    return (
        <div className="w-full h-[600px] cursor-move">
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 14]} fov={50} />

                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#00D9FF" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#A855F7" />

                <SkillsGroup />

                {/* Environment for reflections */}
                <Environment preset="city" />

                {/* Fog to blend with background */}
                <fog attach="fog" args={['#0A0A0F', 10, 25]} />
            </Canvas>
        </div>
    );
}
