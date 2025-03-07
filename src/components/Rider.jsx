
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


const Rider = (props) => {
  const { nodes, materials } = useGLTF('/models/rider.glb')
    const riderRef = useRef();

     
  return (
    
    <group {...props} dispose={null}>
      <group
        name="Rider_model"
        >
        <mesh
          name="Object_2"
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.material}
           ref={riderRef}
        >   </mesh>
        <mesh
          name="Object_3"
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.material}
        />
        <mesh
          name="Object_4"
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.material}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/rider.glb')
export default Rider