"use client"

import { Canvas } from '@react-three/fiber';
import React from 'react';
import { OrbitControls, useTexture } from '@react-three/drei';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';

const page = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
    </Canvas>
  )
}

export default page