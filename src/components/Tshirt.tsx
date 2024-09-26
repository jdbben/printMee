"use client";
import { fort } from "@/app/api/getwidth";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { Vector3 } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Mesh } from "three";
import { GLTF } from "three-stdlib";

interface GLTFAction extends THREE.AnimationClip {}
type GLTFResult = GLTF & {
  nodes: {
    Mesh: THREE.Mesh;
    Mesh_1: THREE.Mesh;
  };
  materials: {
    lambert1: THREE.MeshStandardMaterial;
    printTable: THREE.MeshStandardMaterial;
  };
};

interface CanProps {
  img: string;
}

export const Tshirt: React.FC<CanProps> = ({ img, ...props }) => {
  const texture = useTexture(img);

  const { nodes, materials, scene } = useGLTF(
    "/newpTshirt01.glb"
  ) as GLTFResult;
  const decal = useRef<THREE.Mesh>(null);

  const [scale, setScale] = useState([0.63, 0.458, 0.3]);
  const [position, setPosition] = useState([0, 0, 0]);
  useEffect(() => {
    const func = async () => {};
    func();
  }, []);
  useControls({
    scale: {
      min: 0,
      max: 2,
      value: 0,
      step: 0.0001,
      onChange: (value) => setScale((prev) => [value, value, prev[2]]),
    },
    Y: {
      min: 0,
      max: 2,
      value: 0.3,
      step: 0.0001,
      onChange: (value) => setScale((prev) => [prev[0], prev[1], value]),
    },
    positionX: {
      min: -1,
      max: 1,
      value: 0,
      step: 0.0001,
      onChange: (value) => setPosition((prev) => [value, prev[1], prev[2]]),
    },
    positionY: {
      min: -1,
      max: 1,
      value: 0,
      step: 0.0001,
      onChange: (value) => setPosition((prev) => [prev[0], value, prev[2]]),
    },
  });

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        const meshChild = child as Mesh;
        if (meshChild.isMesh && meshChild.material) {
          meshChild.material.color.set("black");
          meshChild.castShadow = false;
          meshChild.receiveShadow = false;
        }
      });
    }
  }, [scene]);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Mesh.geometry}
        material={materials.lambert1}
        scale={[5, 5, 5]}
      />
      <mesh
        geometry={nodes.Mesh_1.geometry}
        material={materials.printTable}
        scale={[5, 5, 5]}
      >
        <meshBasicMaterial transparent opacity={0} />
        <Decal
          ref={decal}
          debug
          position={position}
          rotation={[0, 0, 0]}
          scale={scale}
        >
          <meshBasicMaterial
            map={texture}
            polygonOffset
            polygonOffsetFactor={-1}
          />
        </Decal>
      </mesh>
    </group>
  );
};

useGLTF.preload("/newpTshirt01.glb");
