import { Leva } from "leva";
import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";
import { useControls } from "leva";
import Button from "../components/Button.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import { calculateSizes } from "../constants/index.js";
import Statue from "../components/Statue.jsx";


const Hero = () => {
    // Use media queries to determine screen size
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    const options = useMemo(() => {
        return {
            scale: { value: 1, min: 0, max: Math.PI * 2, step: 0.01 },
            /*   positionX: { value: 0, min: -30, max: 30, step: 1 },
              positionY: { value: 0, min: -30, max: 30, step: 1 },
              positionZ: { value: 0, min: -30, max: 30, step: 1 },*/
            rotationX: { value: 0, min: -0.15, max: 0.65, step: 0.05 },
            rotationY: {
                value: -0.1,
                min: -0.8,
                max: 0.4,
                step: 0.1,
            },
            visible: true,
        };
    }, []);

    const cont = useControls("Statue", options);


    return (
        <section
            className='h-screen w-full flex flex-col justify-between relative top-0 left-0'
            id='home'>
            <div className='w-full min-h-[600px] mx-auto flex flex-col sm:items-center lg:items-start justify-between sm:gap-96 lg:gap-60 mt-20 px-8 lg:px-20'>
                <div className='self-start'>
                    <p className='hero-head '>
                        minimalism is dead <span className='waving-hand'>💀</span>
                    </p>
                </div>
                <div className='z-30'>
                    <p className='headline'>
                        no more boring
                    </p>

                    <p className='headline-2 headline-stroke'>
                        websites
                    </p>
                </div>
            </div>

            <div className='w-full h-full absolute inset-0'>
                <Canvas className='w-full h-full mx-auto mt-4'>

                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        <HeroCamera isMobile={isMobile}>
                            <Statue
                                scale={sizes.statueScale}
                                position={sizes.statuePosition}
                            />
                            <Leva hidden />
                        </HeroCamera>
                        <ambientLight intensity={1} />
                        <directionalLight
                            position={[10, 10, 10]}
                            intensity={0.8}
                        />
                        {/*  <hemisphereLight
                            intensity={1}
                            groundColor='white'
                            position={[10, 20, 10]}
                        />
 */}
                    </Suspense>
                </Canvas>
            </div>

            <div className='w-full z-10 absolute bottom-20'>
                <a href='#about' className='w-fit'>
                    <Button
                        name="Let's start creating!"
                        isBeam
                        containerClass='sm:w-fit px-12'
                    />
                </a>
            </div>
        </section>
    );
};

export default Hero;

