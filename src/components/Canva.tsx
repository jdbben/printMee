"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import { Tshirt } from "./Tshirt";
interface CanProps {
  img: string;
}
const Can: React.FC<CanProps> = ({ img }) => {
  return (
    <div className="h-[100vh]">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <OrbitControls />
        {/* enablePan={false} enableZoom={false} */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.5}
          castShadow={false}
        />
        <pointLight position={[-5, -5, 5]} intensity={1} />
        <Tshirt img={img} />
      </Canvas>
    </div>
  );
};

export default Can;
