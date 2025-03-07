import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from 'maath';

const HeroCamera = ({ children, isMobile }) => {
    const groupRef = useRef()

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta)
 

         easing.dampE(groupRef.current.rotation, [-state.pointer.y / 9, -state.pointer.x / 8, 0], 0.25, delta)
    
   })

    return ( 
        // scaling of this element will scale the whole 3d graphics
        <group ref={groupRef} scale={isMobile ? 0.9 : 1.2} >{children}</group>
      );
}
 
export default HeroCamera;