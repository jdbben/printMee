/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/phone.glb -o src/app/component/Phone.tsx -r public 
*/
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Material, Mesh, MeshBasicMaterial, MeshStandardMaterial } from "three";
import { GLTF } from "three-stdlib";
import { Prop } from "./CanMug";

interface GLTFAction extends THREE.AnimationClip {}

type GLTFResult = GLTF & {
  nodes: {
    Mesh: THREE.Mesh;
    Mesh_1: THREE.Mesh;
    Mesh_2: THREE.Mesh;
  };
  materials: {
    Default: THREE.MeshStandardMaterial;
    printTable: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

export const Phone: React.FC<Prop> = ({
  img,
  color,
  scale,
  position,
  ...props
}) => {
  const { nodes, materials, scene } = useGLTF("/phonerrr.glb") as GLTFResult;
  const texture = useTexture(img);
  const decal = useRef(null);
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
        material={materials.Default}
        scale={[5, 5, 5]}
      />
      <mesh
        geometry={nodes.Mesh_1.geometry}
        material={nodes.Mesh_1.material}
        scale={[5, 5, 5]}
      />
      <mesh
        geometry={nodes.Mesh_2.geometry}
        material={materials.printTable}
        scale={[5, 5, 5]}
      >
        <meshBasicMaterial transparent opacity={0} />
        <Decal
          ref={decal}
          debug
          position={a}
          rotation={[0, 1.5, 0.03]}
          scale={b}
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

useGLTF.preload("/phonerrr.glb");
