import { Leva } from "leva";
import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useControls } from "leva";
import Button from "../components/Button.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import { calculateSizes } from "../constants/index.js";
import Statue from "../components/Statue.jsx";
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'





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
            className='min-h-screen w-full flex flex-col mt-30 relative'
            id='home'>
            <div className='w-full mx-auto h-max min-h-[600px] flex flex-col justify-between items-start c-space gap-4'>
                <div className='self-start mb-10'>
                    <p className='hero-head'>
                        minimalism is dead <span className='waving-hand'>💀</span>
                    </p>
                </div>
                <div>
                    <p className='gradient-text'>
                        very mure
                    </p>

                    <p className='gradient-text-2'>
                        very opscure
                    </p>
                </div>
            </div>

            <div className='w-full h-full absolute inset-0'>
                <Canvas className='w-full h-full'>

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
                            intensity={0.5}
                        />

                    </Suspense>
                </Canvas>
            </div>

            <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
                <a href='#about' className='w-fit'>
                    <Button
                        name="Let's create something!"
                        isBeam
                        containerClass='sm:w-fit w-full sm:min-w-96'
                    />
                </a>
            </div>
        </section>
    );
};

export default Hero;
