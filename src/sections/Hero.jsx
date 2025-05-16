import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Center, OrbitControls } from "@react-three/drei";
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from '../constants/index';
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
import Pheonix from "../components/Pheonix";

// Math function enables rotating model clockwise by 90 degrees

const Hero = () => {

    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 })
    // manually calculated sizes from helper functions
    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    return (
        <section className="min-h-screen w-full">
            <div className="w-full h-full mx-auto flex flex-col sm:mt-36 mt-42 c-space gap-3 bg-transparent">
                <p className="sm:text-3xl text-2xl font-medium text-text/80 text-center">Hi! <span className="waving-hand">👋</span> I'm Marina, a web-developer and a teacher based in Croatia.</p>
                <p className="hero_tag gradient-text">Building web-sites, user-interfaces and more</p>
            </div>
            <div className="w-full h-full inset-0 z-40">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                        <HeroCamera isMobile={isMobile}>
                            <Pheonix scale={sizes.statueScale} position={[0, 0, 0]} rotation={[0, -0.1, 0]} />
                        </HeroCamera>
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>

                    <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
                </Canvas>
                {/* <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                        <HeroCamera isMobile={isMobile}> 
                        <Pheonix
                            position={[0, 1, 0]}
                            scale={1.5}
                            rotation={[0, -Math.PI, 0]} />
                        </HeroCamera>

                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>  */}
            </div>
            {/*  <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#contact" className="w-fit">
                    <Button name="Let's talk!" isBeam containerClass="sm:w-full w-fit sm:min-w-96" />
                </a>
            </div> */}
        </section>
    );
}

export default Hero;