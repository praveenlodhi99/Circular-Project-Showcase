"use client"

import { Canvas } from '@react-three/fiber';
import React from 'react';
import { OrbitControls, useTexture } from '@react-three/drei';
import Cylinder from '@/components/hollowCylindrical';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';

const page = () => {
  return (
    <>
      <Canvas>
        <OrbitControls />
        <ambientLight />
        <Cylinder />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={4} // Lower intensity slightly
            luminanceThreshold={0} // Adjust threshold to reduce the number of pixels affected
            luminanceSmoothing={1} // Smoothing closer to 1 reduces the effect area
          />
          <ToneMapping adaptive={true} resolution={2000} maxLuminance={16} />
        </EffectComposer>
      </Canvas>
    </>
  );
};

export default page