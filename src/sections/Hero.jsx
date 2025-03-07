import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react"; 
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from '../constants/index';
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Ring";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
import Abstract from "../components/Abstract";
import Rider from "../components/Rider";
import { Leva, useControls } from "leva";


// Math function enables rotating model clockwise by 90 degrees

const Hero = () => {
 /*  const controls = useControls('Rider', {
     positionX: {
        value: 2.5,
        min: -10,
        max: 10
    },
    positionY: {
        value: 2.5,
        min: -20,
        max: 10
    },
    positionZ: {
        value: 2.5,
        min: -10,
        max: 10
    },
    rotationX: {
        value: 0,
        min: -10,
        max: 10
    },
    rotationY: {
        value: 0,
        min: -10,
        max: 10
    },
    rotationZ: {
        value: 0,
        min: -10,
        max: 10
    },
    scale: {
        value: 1,
        min: 0.1,
        max: 10
    }
  }) */


    const isSmall = useMediaQuery({ maxWidth: 440})
    const isMobile = useMediaQuery({ maxWidth: 768})
    const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024})
    // manually calculated sizes from helper functions
    const sizes = calculateSizes(isSmall, isMobile, isTablet) 

    return ( 
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi! <span className="waving-hand">👋</span> I'm Marina, a web-developer and a teacher based in Croatia.</p>
                <p className="hero_tag head-text">Building web-sites, user-interfaces and more</p>
            </div>
            <div className="w-full h-full absolute inset-0">
                   <Leva /> 
                    <Canvas className="w-full h-full">
                        <Suspense fallback={<CanvasLoader />}>
                            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                          
                            <HeroCamera isMobile={isMobile}>
                                <Rider
                                position={[-0.7, -12, 4.5]}
                                rotation={[3.2, -2.8, 0]} scale={[2.4, 2.4, 2.4]} />
                              
                               {/*  <Rider
                                    position={sizes.deskPosition}
                                    scale={sizes.deskScale}
                                    rotation={[0, -Math.PI, 0]} /> */}
                            </HeroCamera>
                            <group>
                                <Abstract position={sizes.targetPosition} />
                                <ReactLogo position={sizes.reactLogoPosition} />
                                <Cube position={sizes.cubePosition} />
                                <Rings position={sizes.ringPosition} />
                              
                            </group>
                            <ambientLight intensity={3} />
                            <directionalLight position={[20, 20, 0]} intensity={2} />
                        </Suspense>
                    </Canvas>
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#contact" className="w-fit">
                    <Button name="Let's talk!" isBeam containerClass="sm:w-full w-fit sm:min-w-96" />
                </a>
            </div>
        </section>
     );
}
 
export default Hero;