"use client";
import { fort } from "@/app/api/getwidth";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { Vector3 } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Mesh, Material, MeshStandardMaterial, MeshBasicMaterial } from "three";
import { GLTF } from "three-stdlib";
import { Props } from "./ResizeImg";
import { Colors } from "./Canva";

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

export const Tshirt: React.FC<Colors> = ({
  img,
  dimensions,
  color,
  scale,
  position,
  ...props
}) => {
  const texture = useTexture(img);
  const { nodes, materials, scene } = useGLTF(
    "/newpTshirt01.glb"
  ) as GLTFResult;
  const decal = useRef<THREE.Mesh>(null);
  const colorrbg = new THREE.Color(color);

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        const meshChild = child as Mesh;

        if (meshChild.isMesh && meshChild.material) {
          if (Array.isArray(meshChild.material)) {
            meshChild.material.forEach((material) => {
              if (
                material instanceof MeshStandardMaterial ||
                material instanceof MeshBasicMaterial
              ) {
                material.color.set(colorrbg);
              }
            });
          } else {
            const material = meshChild.material as Material;
            if (
              material instanceof MeshStandardMaterial ||
              material instanceof MeshBasicMaterial
            ) {
              material.color.set(colorrbg);
            }
          }

          meshChild.castShadow = false;
          meshChild.receiveShadow = false;
        }
      });
    }
  }, [color]);
  let a;
  let b;
  if (position) {
    a = new THREE.Vector3(position[0], position[1], position[2]);
  }
  if (scale) {
    b = new THREE.Vector3(scale[0], scale[1], scale[2]);
  }
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
        <Decal ref={decal} debug position={a} rotation={[0, 0, 0]} scale={b}>
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