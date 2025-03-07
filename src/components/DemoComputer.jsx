import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


const DemoComputer = (props) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/compmonitor.glb')
     const txt = useVideoTexture(props.texture ? props.texture : '/textures/project/project1.mp4')
   

  return (  
   <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1.1}>
        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
          <group ref={group} name="monitor_body_12" position={[0, 0.3, 0.1]} scale={[1, 1, 1.1]}>
            <mesh
              name="Object_4"
              geometry={nodes.Object_4.geometry}
              material={materials.black_with_noise}
            >
                  <meshBasicMaterial map={txt} />
                </mesh>
            <group
              name="monitor_back_plate_2"
              position={[0, -0.1, 0]}
              rotation={[-Math.PI, 0, 0]}
              scale={0}>
              <mesh
                name="Object_6"
                geometry={nodes.Object_6.geometry}
                material={materials.black_metallic}
              />
              <mesh
                name="Object_8"
                geometry={nodes.Object_8.geometry}
                material={materials.black_metallic}
                position={[0.8, -0.9, 0.1]}
                rotation={[0, 0, -Math.PI]}
                scale={[-32.3, 32.8, 199.7]}
              />
              <mesh
                name="Object_10"
                geometry={nodes.Object_10.geometry}
                material={materials.black_metallic}
                position={[0.8, 0.9, 0.1]}
                rotation={[0, 0, -Math.PI]}
                scale={[-32.3, 32.8, 199.7]}
              />
            </group>
            <group name="power_symbol_9" position={[0.3, -0.1, 0]} scale={0.8}>
              <mesh
                name="Object_22"
                geometry={nodes.Object_22.geometry}
                material={materials['lime_green_high_specular_1.0']}
              />
              <mesh
                name="Object_24"
                geometry={nodes.Object_24.geometry}
                material={materials['lime_green_high_specular_1.0']}
                scale={[1.4, 1, 1]}
              />
            </group>
            <mesh
              name="Object_12"
              geometry={nodes.Object_12.geometry}
              material={materials.tex_computer_screen_icons}
            />
            <mesh
              name="Object_14"
              geometry={nodes.Object_14.geometry}
              material={materials.monitor_stand_metallic}
              position={[0, -0.1, -0.1]}
            />
            <mesh
              name="Object_16"
              geometry={nodes.Object_16.geometry}
              material={materials['black_rough_0.7']}
              position={[-0.2, -0.1, 0]}
              scale={[0.4, 3.1, 1.2]}
            />
            <mesh
              name="Object_18"
              geometry={nodes.Object_18.geometry}
              material={materials.white_high_spec}
              position={[0.2, 0, 0]}
              rotation={[Math.PI / 2, 0.7, 0]}
              scale={0.3}
            />
            <mesh
              name="Object_20"
              geometry={nodes.Object_20.geometry}
              material={materials['black_high_specular_0.9']}
              position={[0.3, -0.1, 0]}
              scale={0.7}
            />
            <mesh
              name="Object_26"
              geometry={nodes.Object_26.geometry}
              material={materials['black_high_specular_0.9']}
              position={[0.3, -0.1, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.3}
            />
            <mesh
              name="Object_28"
              geometry={nodes.Object_28.geometry}
              material={materials.material_0}
              position={[-0.1, -0.2, 0]}
              scale={[0.3, 0.9, 0.9]}
            />
          </group>
        </group>
      </group>
    </group>
  )
}
useGLTF.preload('/models/compmonitor.glb')
export default DemoComputer;


