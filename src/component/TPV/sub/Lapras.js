import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Lapras(props) {
  const { nodes, materials } = useGLTF("/lapras.glb");



  return (

    <group {...props} dispose={null}   >
      <group rotation={[-Math.PI / 3, 0, -Math.PI]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          {/* blue */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.BodyATattu00_mat}
          />
          {/* eye */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.Eye_mat}
          />
          {/* gray */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.BodyB_mat}
          />
          {/* darkgray */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.BodyBVco_mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.BodyATattu00_mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials.Eye_mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials.BodyB_mat}
          />
          {/* blue */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11.geometry}
            material={materials.BodyBVco_mat}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/lapras.glb");
export default Lapras
