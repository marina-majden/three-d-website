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

const Hero = () => {
    // Use media queries to determine screen size
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    const options = useMemo(() => {
        return {
            scale: { value: 1, min: 0, max: Math.PI * 2, step: 0.01 },
            positionX: { value: 0, min: -30, max: 30, step: 1 },
            positionY: { value: 0, min: -30, max: 30, step: 1 },
            positionZ: { value: 0, min: -30, max: 30, step: 1 },
            rotationX: { value: 0.1, min: -5, max: 5, step: 0.05 },
            rotationY: {
                value: -0.1,
                min: -0.6,
                max: 0.9,
                step: 0.1,
            },
            rotationZ: { value: 0, min: -5, max: 5, step: 0.05 },
            visible: true,
        };
    }, []);

    const cont = useControls("Statue", options);

    return (
        <section
            className='min-h-screen w-full flex flex-col relative'
            id='home'>
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                <p className='sm:text-xl text-6xl font-outfit text-left text-text font-extrabold'>
                    minimalism is dead <span className='waving-hand'>💀</span>
                </p>
                <p className='hero_tag'>
                    <span className='gradient-text font-outfit text-left'>
                        {" "}
                        very mure{" "}
                    </span>

                    <span className=' hero_tag gradient-text-2 font-outfit font-extrabold text-left'>
                        very opscure
                    </span>

                </p>
            </div>

            <div className='w-full h-full absolute inset-0'>
                <Canvas className='w-full h-full'>
                    <Leva hidden />
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        <HeroCamera isMobile={isMobile}>
                            <Statue
                                scale={1.35}
                                position={[4, -3.5, 0]}
                                rotation={[0, cont.rotationY, 0]}
                                visible={cont.visible}
                            />
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
