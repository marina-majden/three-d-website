import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Abstract = (props) => {
    const abstractRef = useRef();
  const { nodes, materials } = useGLTF('/models/abstract.glb')

  useGSAP(() => {
    gsap.to(abstractRef.current.position, {
        y: abstractRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
    } )
})
  return (
    <group {...props} dispose={null} ref={abstractRef}>
      <group name="b1ea9afe3eba4465b9a116a22f86e3dbfbx" scale={0.025}>
        <mesh
          name="Hedra001_Material_#0_0"
          castShadow
          
          geometry={nodes['Hedra001_Material_#0_0'].geometry}
          material={materials.Material_0}
          position={[-0.618, 0, 3.478]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.641}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/abstract.glb')
export default Abstract