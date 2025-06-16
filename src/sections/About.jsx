import React, { useState, useEffect, useRef } from "react";
import Globe from 'react-globe.gl'
import Button from "../components/Button";
import Character from "../components/Character";
import TechStackCircle from "../components/TechStackCircle";



const About = () => {

    const [hasCopied, setHasCopied] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false); // State to track theme

    useEffect(() => {
        const observer = new MutationObserver(() => {
            const currentTheme = document.documentElement.dataset.theme || "light";
            setIsDarkMode(currentTheme === "dark");
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["data-theme"],
        });

        return () => observer.disconnect();
    }, []);

    const globeEl = useRef();

    useEffect(() => {
        globeEl.current.controls().autoRotate = false;
        globeEl.current.controls().enableRotate = true;
        globeEl.current.controls().autoRotateSpeed = 0.6;
        globeEl.current.controls().enableZoom = true;
        globeEl.current.pointOfView({ lat: 46.0, lng: 16.0, altitude: 1.5 }, 4000);
    }, []);



    const handleCopy = () => {
        navigator.clipboard.writeText('marina.majden@gmail.com')
        setHasCopied(true)
        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }
    return (
        <section className="c-space my-20">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container glass-light">


                        <Character />


                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container glass-light">

                        <TechStackCircle

                        />

                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container glass-light">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center cursor-grab">
                            <Globe
                                ref={globeEl}
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere={true}
                                showGraticules
                                globeImageUrl={
                                    isDarkMode
                                        ? "//unpkg.com/three-globe/example/img/earth-night.jpg"
                                        : "//unpkg.com/three-globe/example/img/earth-day.jpg"
                                } // Dynamically change the globe image
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{ lat: 46, lng: 16, text: "I'm here!" }]}
                                labelColor={() => "white"}
                                labelDotRadius={1}
                                labelSize={3}
                                labelAltitude={0.02}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">Able to work remotely or</p>
                            <p className="grid-subtext">on-site in Zagreb, Croatia</p>
                            <Button name="Contact me" isBeam containerClass="w-full mt-10" className="btn" />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3 ">
                    <div className="grid-container glass-light">
                        <div>
                            <p className="grid-headtext">Marina Majdenić</p>
                            <p className="grid-subtext">I'm a front-end and web developer with a strong focus on building responsive, dynamic interfaces using React. I also have experience connecting front-end applications with various back-end technologies to create seamless, full-featured web solutions. Whether you're looking for a freelancer for your next project or a developer to join your team, I'm open to both opportunities.
                                Let’s build something great together — feel free to reach out!</p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container glass-light">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                        <div className="space-y-2">
                            <a href="#contact" className="grid-subtext text-center">
                                Contact me
                            </a>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-text">marina.majden@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;