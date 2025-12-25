import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import FloatingObjects from './FloatingObjects';

export default function Scene3D() {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas
                className="h-full w-full"
                dpr={[1, 2]}
                performance={{ min: 0.5 }}
            >
                <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={75} />

                <Suspense fallback={null}>
                    <FloatingObjects />
                </Suspense>

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    enableRotate={true}
                    autoRotate={true}
                    autoRotateSpeed={0.5}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />

                {/* Fog for depth */}
                <fog attach="fog" args={['#0A0A0F', 5, 15]} />
            </Canvas>
        </div>
    );
}
