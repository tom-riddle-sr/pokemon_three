import { usePlane } from "@react-three/cannon"
import { groundTexture } from "../images/textures"
// import { useStore } from "../hooks/useStore";
import { Physics, RigidBody } from '@react-three/rapier'


export const Ground = () => {

  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0]
  }))
  groundTexture.repeat.set(100, 100)

  return (
    <mesh
      ref={ref}>
      <planeGeometry attach='geometry' args={[100, 100]} />
      <meshStandardMaterial attach='material' map={groundTexture} />
    </mesh>
  )

}