"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls } from "@react-three/drei";

function Orb() {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1.2}>
      <mesh>
        <sphereGeometry args={[1.25, 128, 128]} />
        <MeshDistortMaterial
          distort={0.35}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          color="#ffffff"
        />
      </mesh>
    </Float>
  );
}

export default function HeroOrb() {
  return (
    <div className="relative h-[360px] w-full overflow-hidden rounded-3xl glass">
      <div className="absolute inset-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 3.2], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[4, 4, 4]} intensity={1.2} />
          <Orb />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.2} />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/30" />
      <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
        <div>
          <div className="text-sm opacity-80">Interactive 3D</div>
          <div className="text-xl font-semibold tracking-tight">Cross-stack Engineer</div>
        </div>
        <div className="text-xs opacity-70">Three.js • R3F • Motion</div>
      </div>
    </div>
  );
}
