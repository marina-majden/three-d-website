import { Leva } from 'leva';
import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useControls } from 'leva';
import Cube from '../components/Cube.jsx';
import Rings from '../components/Ring.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import HackerRoom from '../components/HackerRoom.jsx';
import Pheonix from '../components/Pheonix.jsx';

const Hero = () => {
    // Use media queries to determine screen size
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    const options = useMemo(() => {
        return {

            scaleX: { value: 1, min: 0, max: Math.PI * 2, step: 0.01 },
            scaleY: { value: 1, min: 0, max: Math.PI * 2, step: 0.01 },
            scaleZ: { value: 1, min: 0, max: Math.PI * 2, step: 0.01 },


            positionX: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
            positionY: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
            positionZ: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },

            visible: true,
            color: { value: 'lime' },
        }
    }, [])

    const cont = useControls('Pheonix', options)

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I am Adrian <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
            </div>

            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        {/* To hide controller */}

                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />


                        <Pheonix scale={[cont.scaleX, cont.scaleY, cont.scaleZ]} position={[cont.positionX, cont.positionY, cont.positionY]} rotation={[0.1, -Math.PI, 0]} visible={cont.visible} />


                        {/* 
                        <group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Rings position={sizes.ringPosition} />
                            <Cube position={sizes.cubePosition} />
                        </group> */}

                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                        <OrbitControls autoRotate />
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