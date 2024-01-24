import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Pikachu(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/pikachu2.glb");
  const LLeg = nodes.LLeg
  nodes.LLeg.rotation.set(LLeg.rotation.x, Math.PI / -1.5, -Math.PI / 1.2)
  nodes.RLeg.rotation.set(LLeg.rotation.x, Math.PI / -1.5, Math.PI / 1.2)

  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Pikachu" rotation={[Math.PI / 1.6, 0, Math.PI]} >
          <group name="PikachuM">
            <skinnedMesh
              name="PikachuM_1"
              geometry={nodes.PikachuM_1.geometry}
              material={materials["Material 160"]}
              skeleton={nodes.PikachuM_1.skeleton}
            />
            <skinnedMesh
              name="PikachuM_2"
              geometry={nodes.PikachuM_2.geometry}
              material={materials["Material.001"]}
              skeleton={nodes.PikachuM_2.skeleton}
            />
            <skinnedMesh
              name="PikachuM_3"
              geometry={nodes.PikachuM_3.geometry}
              material={materials["Material.003"]}
              skeleton={nodes.PikachuM_3.skeleton}
            />
            <skinnedMesh
              name="PikachuM_4"
              geometry={nodes.PikachuM_4.geometry}
              material={materials["Material.002"]}
              skeleton={nodes.PikachuM_4.skeleton}
            />
          </group>
          <primitive object={nodes.pm0025_00_pikachu} />
        </group>
        <group name="Sun" />
      </group>
    </group>
  );
}

useGLTF.preload("/pikachu2.glb");
export default Pikachu
