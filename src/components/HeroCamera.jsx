import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const HeroCamera = ({ isMobile, children }) => {
    const group = useRef();

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0, 0, 11], 0.2, delta);

        /*   if (!isMobile) {
              easing.dampE(
                  group.current.rotation,
                  [0, -state.pointer.x / 3, 0],
                  0.25,
                  delta
              );
          }
   */


    });

    return <group ref={group}>{children}</group>;
};

export default HeroCamera;
