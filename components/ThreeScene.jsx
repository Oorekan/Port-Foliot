import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ThreeScene = () => {
    const canvasRef = useRef();
    const [imageUrls, setImageUrls] = useState({
        original: '/port-foliot-header-image.png',
        depth: '/port-foliot-header-shadow-image.png'
    });

    useEffect(() => {
        // Variables
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        const originalImageDetails = {
            width: 0,
            height: 0,
            aspectRatio: 0,
        };

        let originalImage = null;
        let depthImage = null;
        let plane = null;

        const cursor = {
            x: 0,
            y: 0,
            lerpX: 0,
            lerpY: 0,
        };

        // Base
        const canvas = canvasRef.current;
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
        camera.position.z = 0.7;
        scene.add(camera);

        let fovY = camera.position.z * camera.getFilmHeight() / camera.getFocalLength();

        // Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas
        });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Load Images
        const textureLoader = new THREE.TextureLoader();

        const loadImages = (originalUrl, depthUrl) => {
            if (originalImage !== null || depthImage !== null) {
                originalImage.dispose();
                depthImage.dispose();
            }

            depthImage = textureLoader.load(depthUrl);

            originalImage = textureLoader.load(originalUrl, (tex) => {
                originalImageDetails.width = tex.image.width;
                originalImageDetails.height = tex.image.height;
                originalImageDetails.aspectRatio = tex.image.height / tex.image.width;

                create3dImage();
                resize();
            });
        };

        loadImages(imageUrls.original, imageUrls.depth);

        // Create 3D Image
        const create3dImage = () => {
            // Cleanup Geometry
            if (plane !== null) {
                plane.geometry.dispose();
                plane.material.dispose();
                scene.remove(plane);
            }

            const planeGeometry = new THREE.PlaneGeometry(1, 1);

            const planeMaterial = new THREE.ShaderMaterial({
                uniforms: {
                    originalTexture: { value: originalImage },
                    depthTexture: { value: depthImage },
                    uMouse: { value: new THREE.Vector2(0, 0) },
                    uThreshold: { value: new THREE.Vector2(20, 35) },
                },
                fragmentShader: `
                  precision mediump float;
                  uniform sampler2D originalTexture; 
                  uniform sampler2D depthTexture; 
                  uniform vec2 uMouse;
                  uniform vec2 uThreshold;

                  varying vec2 vUv;

                  vec2 mirrored(vec2 v) {
                    vec2 m = mod(v,2.);
                    return mix(m,2.0 - m, step(1.0 ,m));
                  }

                  void main() {
                    vec4 depthMap = texture2D(depthTexture, mirrored(vUv));
                    vec2 fake3d = vec2(vUv.x + (depthMap.r - 0.5) * uMouse.x / uThreshold.x, vUv.y + (depthMap.r - 0.5) * uMouse.y / uThreshold.y);

                    gl_FragColor = texture2D(originalTexture,mirrored(fake3d));
                  }
                `,
                vertexShader: `
                  varying vec2 vUv; 

                  void main() {
                    vUv = uv; 

                    vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
                    gl_Position = projectionMatrix * modelViewPosition; 
                  }
                `
            });

            plane = new THREE.Mesh(planeGeometry, planeMaterial);
            scene.add(plane);
        };

        create3dImage();

        // Resize
        const resize = () => {
            // Update sizes
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;

            // Update camera
            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();

            // Update Image Size
            if (plane) {
                if (sizes.height / sizes.width < originalImageDetails.aspectRatio) {
                    plane.scale.set(fovY * camera.aspect, fovY, 1);
                } else {
                    plane.scale.set(fovY / originalImageDetails.aspectRatio, fovY, 1);
                }
            }

            // Update renderer
            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        };

        window.addEventListener('resize', resize);

        // Cursor
        window.addEventListener('mousemove', (event) => {
            cursor.x = event.clientX / sizes.width - 0.5;
            cursor.y = event.clientY / sizes.height - 0.5;
        });

        window.addEventListener('mouseout', () => {
            cursor.x = 0;
            cursor.y = 0;
        });

        window.addEventListener('touchmove', (event) => {
            const touch = event.touches[0];
            cursor.x = touch.pageX / sizes.width - 0.5;
            cursor.y = touch.pageY / sizes.height - 0.5;
        });

        window.addEventListener('touchend', () => {
            cursor.x = 0;
            cursor.y = 0;
        });

        // Animate
        const clock = new THREE.Clock();
        let previousTime = 0;

        const tick = () => {
            const elapsedTime = clock.getElapsedTime();
            const deltaTime = elapsedTime - previousTime;
            previousTime = elapsedTime;

            // Set Cursor Variables
            const parallaxX = cursor.x * 0.5;
            const parallaxY = - cursor.y * 0.5;

            cursor.lerpX += (parallaxX - cursor.lerpX) * 5 * deltaTime;
            cursor.lerpY += (parallaxY - cursor.lerpY) * 5 * deltaTime;

            // Mouse Positioning Uniform Values
            if (plane && plane.material.uniforms.uMouse) {
                plane.material.uniforms.uMouse.value = new THREE.Vector2(cursor.lerpX, cursor.lerpY);
            }

            // Render
            renderer.render(scene, camera);

            // Call tick again on the next frame
            window.requestAnimationFrame(tick);
        };

        tick();

        return () => {
            // Clean up on component unmount
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', null);
            window.removeEventListener('mouseout', null);
            window.removeEventListener('touchmove', null);
            window.removeEventListener('touchend', null);
        };
    }, [imageUrls]);

    useEffect(() => {
        let tl_profile_picture = gsap.timeline({
            scrollTrigger: {
                trigger: "#intro_section",
                end: "-=10%",
                scrub: true,
            },
        })

        tl_profile_picture.to("#profile_picture", {
            opacity: 0,
            duration: 2,
            ease: "linear",
            onUpdate: () => {
                setImageUrls({
                    original: '/port-foliot-header-image.png',
                    depth: '/port-foliot-header-shadow-image.png'
                });
            }
        })

        let tl_projects_profile_picture = gsap.timeline({
            scrollTrigger: {
                trigger: "#projects_section",
                start: "top",
                end: "bottom",
                scrub: true,
            },
        });

        tl_projects_profile_picture.to("#profile_picture", {
            opacity: 1,
            duration: 2,
            ease: "linear",
            onUpdate: () => {
                setImageUrls({
                    original: '/projects_image.png',
                    depth: '/projects_shadow_image.png'
                });
            }
        });
    }, []);

    return <canvas ref={canvasRef} id='profile_picture' className="webgl"></canvas>;
};

export default ThreeScene;
