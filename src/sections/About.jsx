import React, { useState, useEffect, useRef } from "react";
import Globe from 'react-globe.gl'
import Character from "../components/Character.jsx";
import TechStackCircle from "../components/TechStackCircle.jsx";
import three from '../assets/three.svg';



const About = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

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

    return (

        <section className="mt-10 relative" id="about">
            <div className="hidden isolate md:inline-block absolute top-70 -left-40">
                <h2 className="headline-section headline-stroke rotate-270">about me</h2>
            </div>
            <h2 className="headline-section headline-stroke block md:hidden mb-10">about</h2>
            <div className="c-space grid xl:grid-cols-3 xl:grid-rows-5 md:grid-cols-2 grid-cols-1 gap-5 h-full  z-20">
                <div className="xl:col-span-2 xl:row-span-2">
                    <div className="grid-container glass-light">
                        <div>
                            <p className="grid-headtext"> <span className="font-logo text-2xl text-text pr-4 ">TLDR:</span> <br />front-end / web-developer based in Croatia</p>
                            <br />
                            <p className="grid-subtext">I am Marina Majdenić, a front-end and web developer with a strong focus on building responsive, dynamic interfaces using React. I also have experience connecting front-end applications with various back-end technologies to create seamless, full-featured web solutions. Whether you're looking for a freelancer for your next project or a developer to join your team, I'm open to both opportunities.</p>
                            <br />
                            <p className="grid-subtext"> Let’s build something great together — feel free to reach out!</p>
                            <br />
                            <a href="#contact" className="btn w-1/2">Contact me</a>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-2">
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
                            <p className="grid-headtext">Able to work remotely or on-site in Croatia</p>


                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-2">
                    <div className="grid-container glass-light items-center justify-center align-middle">
                        <Character />
                        <p className="grid-subtext">I'm really enjoying how CSS has been glowing up lately; love how it can make things interactive and animated!  </p>
                    </div>

                </div>
                <div className="col-span-1 xl:row-span-2">
                    <div className="grid-container glass-light">
                        <TechStackCircle
                        />
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container glass-light">
                        <img src={three} alt="threejs" className='w-40 h-40 p-0 mx-auto animate-rotate-x' />
                        <div className="space-y-2">
                            <p className="grid-headtext">Currently obsessed with...</p>
                            <p className="grid-subtext">
                                ...3D models, and finding ways to make them look good and perform great on the web. Three.js is a great tool for that.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;