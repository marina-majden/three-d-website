import { Leva } from 'leva';
import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useControls } from 'leva';
import Button from '../components/Button.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import Statue from '../components/Statue.jsx';

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

            visible: true,
            color: { value: 'lime' },
        }
    }, [])

    const cont = useControls('Pheonix', options)

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I am Marina <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Building web-sites, user-interfaces and more</p>
            </div>

            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>

                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />

                        <Statue scale={cont.scale} position={[cont.positionX, cont.positionY, cont.positionY]} rotation={[0.1, -Math.PI, 0]} visible={cont.visible} />

                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                        <OrbitControls />
                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    );
};

export default Hero;