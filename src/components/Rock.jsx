

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Rock = (props) => {
    const group = useRef()
    const [hovered, setHover] = useState(false)
    const { nodes, materials} = useGLTF('/models/opal_abstract_sculpture_-_daily_3.glb')
    
    useFrame((state, delta) => (group.current.rotation.x  += delta))
    return (
        <group ref={group} {...props} dispose={null} onPointerOver={(event) => setHover(true)} onPointerOut={(event) => setHover(false)}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.6}>
                    <group name="9c9f7bd613ae48dc83c6dce3968bfbcefbx" rotation={[Math.PI / 2, 0, 0]}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group
                                    name="pPyramid1"
                                    position={[0, 97.583, 0]}
                                    rotation={[1.075, -1.385, 2.766]}
                                    scale={2.295}>
                                    <mesh
                                        name="pPyramid1_lambert2_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.pPyramid1_lambert2_0.geometry}
                                        material={materials.lambert2}
                                    >
                                        <meshLambertMaterial color={hovered ? 'hotpink' :'orange'} />
                                    </mesh>
                                </group>
                                <group
                                    name="nurbsCircle1"
                                    position={[0, 205.078, 0]}
                                    rotation={[-0.402, -0.002, 0.004]}
                                    scale={3.809}
                                />
                                <group
                                    name="camera1"
                                    position={[21.893, 56.314, -349.918]}
                                    rotation={[2.679, -1.511, 2.68]}>
                                    <group name="Object_8" />
                                </group>
                                <group
                                    name="directionalLight1"
                                    position={[0, 469.272, -460.443]}
                                    rotation={[-0.932, 0, 0]}>
                                    <group name="Object_10" rotation={[Math.PI / 2, 0, 0]}>
                                        <group name="Object_11" />
                                    </group>
                                </group>
                                <group
                                    name="directionalLight2"
                                    position={[-456.075, 469.272, 214.482]}
                                    rotation={[1.177, -0.496, 0.854]}>
                                    <group name="Object_13" rotation={[Math.PI / 2, 0, 0]}>
                                        <group name="Object_14" />
                                    </group>
                                </group>
                                <group
                                    name="pPyramid2"
                                    position={[0, 97.583, 0]}
                                    rotation={[1.075, -1.385, 2.766]}
                                    scale={2.295}>
                                    <mesh
                                        name="pPyramid2_lambert2_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.pPyramid2_lambert2_0.geometry}
                                        material={materials.lambert2}
                                    />
                                </group>
                                <group
                                    name="pPyramid3"
                                    position={[0, 97.583, 0]}
                                    rotation={[1.075, -1.385, 2.766]}
                                    scale={2.295}>
                                    <mesh
                                        name="pPyramid3_lambert2_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.pPyramid3_lambert2_0.geometry}
                                        material={materials.lambert2}
                                    />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/opal_abstract_sculpture_-_daily_3.glb');
export default Rock;