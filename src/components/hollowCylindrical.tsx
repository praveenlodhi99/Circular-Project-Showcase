import React, { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

const hollowCylindrical: React.FC = () => {
    const tex = useTexture("./image.png");

    const hollowCylindrical = useRef<THREE.Mesh>(null);

    return (
        <>
            <mesh ref={hollowCylindrical}>
                <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
                <meshBasicMaterial
                    map={tex}
                    transparent
                    side={THREE.DoubleSide}
                />
            </mesh>
        </>
    );
};

export default hollowCylindrical