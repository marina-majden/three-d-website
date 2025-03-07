import React, { useRef } from 'react'
import { useGLTF, useVideoTexture } from '@react-three/drei'

const ComputerScreen = (props) => {

     const group = useRef()
      const { nodes, materials } = useGLTF('/models/computerscreen.glb')
       const txt = useVideoTexture(props.texture ? props.texture : '/textures/project/project1.mp4')

    return (
            <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1.08}>
        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
          <group name="monitor_body_12" position={[0, 0.32, 0.07]} scale={[1, 1, 1.06]}>
            <mesh
              name="Object_4"
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.black_with_noise}
            ><meshBasicMaterial map={txt} /></mesh>   
            <group
              name="monitor_back_plate_2"
              position={[0, -0.14, -0.03]}
              rotation={[-Math.PI, 0, 0]}
              scale={[-0.03, 0.03, 0]}>
              <mesh
                name="Object_6"
                castShadow
                receiveShadow
                geometry={nodes.Object_6.geometry}
                material={materials.black_metallic}
              />
              <mesh
                name="Object_8"
                castShadow
                receiveShadow
                geometry={nodes.Object_8.geometry}
                material={materials.black_metallic}
                position={[0.84, -0.87, 0.06]}
                rotation={[0, 0, -Math.PI]}
                scale={[-32.34, 32.8, 199.67]}
              />
              <mesh
                name="Object_10"
                castShadow
                receiveShadow
                geometry={nodes.Object_10.geometry}
                material={materials.black_metallic}
                position={[0.84, 0.86, 0.06]}
                rotation={[0, 0, -Math.PI]}
                scale={[-32.34, 32.8, 199.67]}
              />
            </group>
            <group name="power_symbol_9" position={[0.3, -0.07, -0.01]} scale={[0.85, 0.84, 0.84]}>
              <mesh
                name="Object_22"
                castShadow
                receiveShadow
                geometry={nodes.Object_22.geometry}
                material={materials['lime_green_high_specular_1.0']}
              />
              <mesh
                name="Object_24"
                castShadow
                receiveShadow
                geometry={nodes.Object_24.geometry}
                material={materials['lime_green_high_specular_1.0']}
                scale={[1.45, 1, 1]}
              />
            </group>
            <mesh
              name="Object_12"
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials.tex_computer_screen_icons}
              position={[0, -0.02, 0]}
            />
            <mesh
              name="Object_14"
              castShadow
              receiveShadow
              geometry={nodes.Object_14.geometry}
              material={materials.monitor_stand_metallic}
              position={[0, -0.14, -0.07]}
            />
            <mesh
              name="Object_16"
              castShadow
              receiveShadow
              geometry={nodes.Object_16.geometry}
              material={materials['black_rough_0.7']}
              position={[-0.17, -0.09, -0.02]}
              scale={[0.4, 3.1, 1.19]}
            />
            <mesh
              name="Object_18"
              castShadow
              receiveShadow
              geometry={nodes.Object_18.geometry}
              material={materials.white_high_spec}
              position={[0.17, -0.05, 0.01]}
              rotation={[Math.PI / 2, 0.65, 0]}
              scale={0.3}
            />
            <mesh
              name="Object_20"
              castShadow
              receiveShadow
              geometry={nodes.Object_20.geometry}
              material={materials['black_high_specular_0.9']}
              position={[0.3, -0.07, -0.01]}
              scale={0.72}
            />
            <mesh
              name="Object_26"
              castShadow
              receiveShadow
              geometry={nodes.Object_26.geometry}
              material={materials['black_high_specular_0.9']}
              position={[0.3, -0.13, -0.02]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.28}
            />
            <mesh
              name="Object_28"
              castShadow
              receiveShadow
              geometry={nodes.Object_28.geometry}
              material={materials.material_0}
              position={[-0.11, -0.19, -0.02]}
              scale={[0.3, 0.94, 0.94]}
            />
          </group>
        </group>
      </group>
    </group>
    )
}

useGLTF.preload('/models/computerscreen.glb')
export default ComputerScreen