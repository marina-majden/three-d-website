import React, { useState, useEffect, useRef } from "react";
import Globe from 'react-globe.gl'
import Button from "../components/Button";
import Character from "../components/Character";
import TechStackCircle from "../components/TechStackCircle";
import three from '../assets/three.svg';



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

        <section className="my-10 relative" id="about">
            <div className="hidden isolate md:inline-block absolute top-70 -left-40">
                <h2 className="headline-2 headline-stroke rotate-270">about me</h2>
            </div>
            <h2 className="headline-2 headline-stroke block md:hidden text-center mb-10">about me</h2>
            <div className="c-space grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full z-20">
                <div className="xl:col-span-2 xl:row-span-2">
                    <div className="grid-container glass-light">
                        <div>
                            <p className="grid-headtext">Marina Majdenić</p>
                            <p className="grid-subtext">I'm a front-end and web developer with a strong focus on building responsive, dynamic interfaces using React. I also have experience connecting front-end applications with various back-end technologies to create seamless, full-featured web solutions. Whether you're looking for a freelancer for your next project or a developer to join your team, I'm open to both opportunities.</p>
                            <p className="grid-subtext"> Let’s build something great together — feel free to reach out!</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
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
                                }
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{ lat: 46, lng: 16, text: "I'm here!" }]}
                                labelColor={() => "white"}
                                labelDotRadius={1}
                                labelSize={3}
                                labelAltitude={0.02}
                            />
                        </div>
                        <div>
                            <p className="grid-subtext">Able to work remotely or</p>
                            <p className="grid-subtext">on-site in Croatia</p>
                            <Button name="Contact me" isBeam containerClass="w-full mt-10" className="btn" />
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container glass-light">
                        <Character />
                        <p className="grid-subtext">I'm really enjoying all that basic web-technologies can do today; CSS is back in the game as a pro!</p>
                    </div>

                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container glass-light">
                        <TechStackCircle
                        />
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container glass-light">
                        <img src={three} alt="threejs" className='w-40 h-40 p-0 mx-auto' />
                        <div className="space-y-2">
                            <p className="grid-subtext">
                                I'm into 3D models and finding ways to make them look good and perform great on the web. Three.js is a great tool for that.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;