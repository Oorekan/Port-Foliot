import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { extend } from '@react-three/fiber';
import vertexShader from './shaders/vertexShader.glsl';
import fragmentShader from './shaders/fragmentShader.glsl';

const CustomMaterial = shaderMaterial(
    { uTime: 0, uMouse: new THREE.Vector2(), uTexture: null },
    vertexShader,
    fragmentShader
);

extend({ CustomMaterial });

function ImagePlane({ texture }) {
    const mesh = useRef();
    const [mousePosition, setMousePosition] = useState(new THREE.Vector2(0, 0));

    useEffect(() => {
        const handleMouseMove = (event) => {
            const x = (event.clientX / window.innerWidth) * 2 - 1;
            const y = -(event.clientY / window.innerHeight) * 2 + 1;
            setMousePosition(new THREE.Vector2(x, y));
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
            mesh.current.material.uniforms.uMouse.value = mousePosition;
        }
    });

    return (
        <mesh ref={mesh}>
            <planeGeometry args={[5, 3, 32, 32]} />
            <customMaterial uTexture={texture} />
        </mesh>
    );
}

function Fake3DEffect({ imageSrc }) {
    const texture = new THREE.TextureLoader().load(imageSrc);

    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <ImagePlane texture={texture} />
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
}

export default Fake3DEffect;
