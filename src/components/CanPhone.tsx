"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Prop } from "./CanMug";
import { Phone } from "./Phone3d";

export const CanPhone: React.FC<Prop> = ({
  img,
  color,
  scale,
  position,
  debug,
}) => {
  return (
    <div className="h-[100vh]">
      <Canvas camera={{ position: [1, 0, 1], fov: 50 }}>
        <OrbitControls />
        {/* enablePan={false} enableZoom={false} */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={4}
          castShadow={false}
        />
        <pointLight position={[-5, -5, 5]} intensity={1} />

        <Phone
          img={img}
          color={color}
          scale={scale}
          position={position}
          debug={debug}
        />
      </Canvas>
    </div>
  );
};
