"use client";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { Ref, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Material, Mesh, MeshBasicMaterial, MeshStandardMaterial } from "three";
import { GLTF } from "three-stdlib";
import { Colors } from "./Canva";
import { useFrame } from "@react-three/fiber";

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
  debug,
  ...props
}) => {
  const decal: Ref<THREE.Group<THREE.Object3DEventMap>> | undefined =
    useRef(null);
  const texture = useTexture(img);
  const [rotationDirection, setRotationDirection] = useState(1);
  let thedebug = true;
  if (debug === false) {
    thedebug = debug;
    useFrame((state, delta) => {
      if (decal.current) {
        decal.current.rotation.y += 0.0005 * rotationDirection;

        decal.current.rotation.x += 0.0001 * rotationDirection;
        decal.current.rotation.z += 0.0001 * rotationDirection;

        if (
          decal.current.rotation.y >= Math.PI / 6 ||
          decal.current.rotation.y <= -Math.PI / 6
        ) {
          setRotationDirection(-rotationDirection);
        }

        decal.current.rotation.x = THREE.MathUtils.clamp(
          decal.current.rotation.x,
          -Math.PI / 20,
          Math.PI / 20
        );

        decal.current.rotation.z = THREE.MathUtils.clamp(
          decal.current.rotation.z,
          -Math.PI / 50,
          Math.PI / 50
        );
      }
    });
  }
  const { nodes, materials, scene } = useGLTF(
    "/newpTshirt01.glb"
  ) as GLTFResult;

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
    <group ref={decal} {...props} dispose={null}>
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
        <Decal debug={thedebug} position={a} rotation={[0, 0, 0]} scale={b}>
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
