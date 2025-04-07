"use client"

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import Model from "./model";

export default function ThreeScene() {
    return (
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <ambientLight />
        <pointLight position={[20, 30, 10]} />
        <Model/>
        <OrbitControls />
      </Canvas>
    )
}