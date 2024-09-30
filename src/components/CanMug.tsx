"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Mug } from "./Mug";
export interface Prop {
  img: string;
  color: string;
  scale: number[];
  position: number[];
}
export const CanMug: React.FC<Prop> = ({ img, color, scale, position }) => {
  return (
    <div className="h-[100vh]">
      <Canvas camera={{ position: [0, 10, 40], fov: 50 }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[1, 1, 1]}
          intensity={0.5}
          castShadow={false}
        />
        <pointLight position={[-5, -5, 5]} intensity={1} />
        <Mug img={img} color={color} scale={scale} position={position} />
      </Canvas>
    </div>
  );
};
