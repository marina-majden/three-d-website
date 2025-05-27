
import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useControls } from 'leva'


function Statue(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/models/scene.gltf')
    const { actions } = useAnimations(animations, group)
    const haloRef = useRef()

    useEffect(() => {
        if (haloRef.current) {
            haloRef.current.rotation.z = 0.01
            const animateHalo = () => {
                haloRef.current.rotation.z += 0.01 // Adjust the speed of rotation here
                requestAnimationFrame(animateHalo)
            }
            animateHalo()

        }
    }, [])

    // Rotate the whole model left-right on user mouse interaction
    useEffect(() => {
        if (!props.isMobile) {
            const handleMouseMove = (event) => {
                {
                    const x = event.clientX / window.innerWidth - 0.5; // Normalize to [-0.5, 0.5]
                    group.current.rotation.y = x * Math.PI; // Rotate based on mouse position and on touch and hold on mobile devices
                    group.current.rotation.x = 0; // Keep the x rotation fixed
                }
            };
            window.addEventListener('mousemove', handleMouseMove);
            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        }
        else {
            const handleTouchMove = (event) => {
                if (event.touches && event.touches.length > 0) {
                    const y = event.touches[0].clientY / window.innerHeight - 0.5; // Normalize to [-0.5, 0.5]
                    group.current.rotation.y = x * Math.PI; // Rotate based on touch position
                    group.current.rotation.x = 0; // Keep the x rotation fixed
                }
            };
            window.addEventListener('touchstart', handleTouchMove);
            window.addEventListener('touchend', () => {
                group.current.rotation.y = 0; // Reset rotation on touch end
            });
            window.addEventListener('touchcancel', () => {
                group.current.rotation.y = 0; // Reset rotation on touch cancel
            });

        }

    }, [])

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0, 0, 11], 0.2, delta);
        if (props.isMobile) {
            easing.dampE(
                group.current.rotation,
                [-state.pointer.x / 4, 0, 0],
                0.25,
                delta
            );
        }

    });

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="Root">
                        <group name="mentor_roman_retopo" position={[-0.266, 0.12, 1.326]}>
                            <mesh
                                name="mentor_roman_retopo_0"
                                geometry={nodes.mentor_roman_retopo_0.geometry}
                                material={materials.Stone}
                            />
                        </group>
                        <group ref={haloRef}
                            name="Empty"
                            position={[0.161, -0.17, 4.808]}
                            rotation={[-0.104, 0.099, 0.002]}
                            scale={0.892}>
                            <group name="nimbus002">
                                <mesh
                                    name="nimbus002_0"
                                    geometry={nodes.nimbus002_0.geometry}
                                    material={materials.Crown}

                                />
                            </group>
                            <group name="nimbus001">
                                <mesh
                                    name="nimbus001_0"
                                    geometry={nodes.nimbus001_0.geometry}
                                    material={materials.Crown}

                                />
                            </group>
                            <group name="nimbus003">
                                <mesh
                                    name="nimbus003_0"
                                    geometry={nodes.nimbus003_0.geometry}
                                    material={materials.Crown}

                                />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/scene.gltf')
export default Statue