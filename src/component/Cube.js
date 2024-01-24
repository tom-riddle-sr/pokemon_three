import React from 'react'
import { useGLTF, useAnimations } from "@react-three/drei"
import { useSphere, useBox } from '@react-three/cannon';

export const Cube = (props) => {

  const [ref, api] = useBox(() => ({
    mass: 1,            // 物體的質量
    position: [0, 0, 0], // 初始位置
    args: [1, 2, 1],     // 方塊的尺寸 [width, height, depth]
  }));
  return (
    <>
      <mesh ref={ref}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </>
  )
}

export default Cube
