import React, { useRef } from 'react'
import { useGLTF, useVideoTexture } from '@react-three/drei'

const Frame = (props) => {
    const group = useRef()
  const { nodes, materials } = useGLTF('/models/frame_picture_landscape.glb')
    const txt = useVideoTexture('/textures/project/project1.mp4')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 9, 0, 0]}>
        <group rotation={[Math.PI / 9, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.picture1}
            images={txt}
            position={[-0.034, 14.06, 0.873]}
            scale={0.8}
          >   </mesh>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/frame_picture_landscape.glb')
export default Frame