import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei"
import { Physics } from "@react-three/cannon"
import { Ocean } from "./component/Ocean"
import { Sea } from "./component/Cube"
import { SlowPoke } from "./component/SlowPoke.js"
import { Ground } from "./component/Ground"
import { OrbitControls, } from "@react-three/drei"
import { Cube } from "./component/Cube"
import * as THREE from 'three';
import { TPV } from "./component/TPV/TPV"
import React, { useRef } from 'react';



function App() {
  const cameraRef = useRef();

  return (
    <>
      <div>Outside Canvas</div>
      <Canvas style={{ backgroundColor: "gray", border: "5px solid hotpink" }}>
        {/* <OrbitControls /> */}

        <Sky sunPosition={[100, 100, 20]} />
        <directionalLight intensity={2} position={[-5, 5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
        <ambientLight intensity={2} />
        <Physics>
          <TPV />
          {/* <Ocean /> */}
          {/* <Cube /> */}
          <Ground />
          {/* <SlowPoke position={[2, 1, 2,]} /> */}
        </Physics>
      </Canvas>
    </>
  );
}

export default App;


