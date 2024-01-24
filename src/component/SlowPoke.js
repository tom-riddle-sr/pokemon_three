import React from 'react'
import { useGLTF, useAnimations, Clone } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"



export const SlowPoke = (props) => {
  const slowpoke = useGLTF("/slowpoke.glb")
  const { nodes, materials, animations, scene } = useGLTF("/slowpoke.glb");
  const { ref: h1_ref, actions: h1_actions } = useAnimations(animations)
  const { ref: h2_ref, actions: h2_actions } = useAnimations(animations)

  console.log("slowpoke", slowpoke)

  useFrame((state, delta) => {
    const movementRange = 2;
    const movementSpeed = 0.5;

    const time = state.clock.getElapsedTime();
    const newY = Math.sin(time * movementSpeed) * movementRange;

    h1_ref.current.position.y = Math.max(-1, Math.min(-0.2, newY + delta * 1));
    h2_ref.current.position.y = Math.max(-1, Math.min(-0.2, newY + delta * 1));
  });


  return (
    <>
      <group ref={h1_ref} {...props} dispose={null}>
        <group scale={0.25}>
          <primitive object={scene} />
          <skinnedMesh
            geometry={nodes.Object_6.geometry}
            material={materials.Material_35}
            skeleton={nodes.Object_6.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_7.geometry}
            material={materials.Material_36}
            skeleton={nodes.Object_7.skeleton}
          />
        </group>
      </group>
      <group ref={h2_ref} >
        <Clone object={scene} scale={0.25} position={[-2, 0, 2]} />
      </group>

    </>
  )
}

export default SlowPoke
