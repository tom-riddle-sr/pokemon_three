import React from 'react'
import Lapras from "./sub/Lapras"
import Pikachu from "./sub/Pikachu"
import { PointerLockControls } from "@react-three/drei"
import { useThree, useFrame } from "@react-three/fiber"
import { useKeyBoard } from "../../hooks/useKeyBoard"
import * as THREE from "three"
import { Vector3 } from "three"
import { useSphere, useBox } from "@react-three/cannon"
import { useEffect, useRef } from "react"
import { usePhysics } from "../../hooks/usePhysics"





export const TPV = () => {
  const { moveForward, moveBackward, moveLeft, moveRight, jump } = useKeyBoard()

  const lapras_pos = [0, 0, 0]
  const pikachu_pos = [0.05, 0.6, 0.7]
  const lapras_scale = .009
  const pikachu_scale = .02


  const { camera, gl } = useThree()


  const JUMP_FORCE = 3
  const SPEED = 4

  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [0, 2, -10],
    args: [2, 2, 2], // 半徑
  }));
  const refCam = useRef()

  useEffect(() => {
    camera.position.set(0, 5, 0)
  }, [camera.position])

  const pos = useRef([0, -.3, 0])
  const vel = useRef([0, 0, 0])

  // useEffect(() => {
  //   api.position.subscribe((p) => pos.current = p)
  // }, [api.position])

  // useEffect(() => {
  //   api.velocity?.subscribe((v) => vel.current = v)
  // }, [api])


  useFrame(() => {

    camera.position.copy(new THREE.Vector3(ref.current.position.x, ref.current.position.y, ref.current.position.z + 10));

    refCam.current.position.copy(camera.position)

    // camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]))

    const direction = new THREE.Vector3()
    const frontVector = new THREE.Vector3(0, 0, (moveBackward ? 1 : 0) - (moveForward ? 1 : 0))
    const sideVector = new THREE.Vector3((moveLeft ? 1 : 0) - (moveRight ? 1 : 0))

    direction.subVectors(frontVector, sideVector) //計算sideVector-frontVector 的差值,獲得移動方向向量
      .normalize()
      .multiplyScalar(SPEED) // 乘上SPEED=速度
      .applyEuler(camera.rotation) //將相機朝向跟方向綁定

    api.velocity?.set(direction.x, vel.current[1], direction.z)

    if (jump && Math.abs(vel.current[1]) < 1) { api.velocity?.set(vel.current[0], JUMP_FORCE, vel.current[2]) }

  })


  return (
    <>
      <PointerLockControls args={[camera, gl.domElement]} />
      <group ref={ref} >
        <Lapras position={lapras_pos} scale={lapras_scale} />
        <Pikachu position={pikachu_pos} scale={pikachu_scale} />
      </group >
      <mesh ref={refCam}>
      </mesh>
      {/* <mesh ref={ref} >
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach='material' color="hotpink" />
      </mesh> */}
    </>
  )
}

export default TPV


