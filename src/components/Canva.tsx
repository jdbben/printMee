"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Tshirt } from "./Tshirt";
import { Props } from "./ResizeImg";
export interface Colors extends Props {
  color?: string;
  scale?: number[];
  position?: number[];
}

const Can: React.FC<Colors> = ({ img, dimensions, color, scale, position }) => {
  return (
    <div className="h-[100vh]">
      <Canvas camera={{ position: [0, 2, 6], fov: 50 }}>
        <OrbitControls />
        {/* enablePan={false} enableZoom={false} */}
        <ambientLight intensity={1} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={4}
          castShadow={false}
        />
        <pointLight position={[-5, -5, 5]} intensity={1} />
        <Tshirt
          img={img}
          dimensions={dimensions}
          color={color}
          scale={scale}
          position={position}
        />
      </Canvas>
    </div>
  );
};

export default Can;
