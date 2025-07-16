import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Statue from "../components/Statue.jsx";
import { calculateSizes } from "../constants/index.js";



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
            <div className='w-full h-11/12 md:h-5/6 mt-8 md:mt-12 md:min-h-[600px] mx-auto flex flex-col justify-between px-2 md:px-4 lg:px-8 xl:px-20'>
                <div className='flex flex-row max-w-screen w-fit align-baseline items-baseline justify-start'>
                    <h2 className='hero-head font-grow text-brand mx-2'>
                        web
                    </h2>
                    <a className='hero-head font-grow text-brand-2 underline mx-2 z-30 uppercase cursor-pointer hover:lowercase hover:no-underline active:lowercase active:no-underline transition-all ease-in-out duration-300'>reborn</a>
                </div>
                <div className='z-30 mb-4 mx-2'>
                    <p className='headline headline-stroke uppercase cursor-none'>
                        less boring
                    </p>
                    <p className='headline text-brand-2 font-grow animate-zig-zag cursor-none'>
                        more vibing
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

