
import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";
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

    return (
        <section
            className='h-dvh w-full flex flex-col justify-between relative top-0 left-0'
            id='home'>
            <div className='w-full h-11/12 mt-12 md:min-h-[600px] mx-auto flex flex-col justify-between px-2 md:px-4 lg:px-8 xl:px-20'>
                <div className='self-start mx-2'>
                    <h2 className='hero-head'>
                        minimalism is dead
                    </h2>
                </div>
                <div className='z-30 mb-4 mx-2'>
                    <p className='headline headline-stroke'>
                        no more boring websites
                    </p>
                    <p className='headline '>
                        just web we can vibe with
                    </p>
                </div>
            </div>

            <div className='w-full h-dvh absolute inset-0 mt-16 md:mt-2'>
                <Canvas className='w-full h-full mx-auto mt-8'>

                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        <HeroCamera isMobile={isMobile}>
                            <Statue
                                scale={sizes.statueScale}
                                position={sizes.statuePosition}
                            />

                        </HeroCamera>
                        <ambientLight intensity={1} />
                        <directionalLight
                            position={[10, 10, 10]}
                            intensity={0.8}
                        />

                    </Suspense>
                </Canvas>
            </div>

        </section>
    );
};

export default Hero;

