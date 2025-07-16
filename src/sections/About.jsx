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

        <section className="my-14" id="about">

            <h2 className="headline-section headline-stroke block xl:hidden mb-10 text-center">about</h2>
            <div className="w-full sm:w-11/12 md:w-11/12 xl:w-4/5 px-2 md:px-8 lg:px-8 xl:px-10 mx-auto grid xl:grid-cols-3 xl:grid-rows-4 md:grid-cols-2 grid-cols-1 gap-5 h-full z-20 relative">
                <div className="hidden xl:block absolute top-1/3 xl:-left-70">
                    <h2 className="headline-section headline-stroke rotate-270">about me</h2>
                </div>
                <div className="xl:col-span-2 xl:row-span-2">
                    <div className="grid-container glass-light">
                        <div>
                            <p className="grid-headtext"> <span className="font-logo tracking-wider text-2xl text-heading">TLDR:</span> <br />front-end / web-developer freelancer</p>
                            <br />
                            <p className="grid-subtext xl:px-10">I am Marina Majdenić, a front-end and web developer with a strong focus on building responsive, dynamic interfaces using React or classics like HTML/CSS/JS. I have experience connecting front-end applications with various back-end technologies to create seamless, full-featured web solutions. Whether you're looking for a freelancer for your next project or a developer to join your team, I'm open to both opportunities.</p>
                            <br />
                            <p className="grid-headtext xl:px-6"> Let’s build something great together — feel free to reach out!</p>
                            <br />
                            <a href="#contact" className="btn w-1/2">Contact me</a>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-2">
                    <div className="grid-container glass-light items-center justify-center align-middle">
                        <Character />
                        <p className="grid-subtext">I'm really stoked about the recent <b>CSS</b> glow-up; love how it can <b>bring websites to life</b> without consuming too much space and energy. Very mindful!</p>
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
                            <p className="grid-headtext">I am based in Croatia, but available for remote work.</p>
                        </div>
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
                                3D models, and finding ways to make them look good and perform great on the web. <b>Three.js</b> is a great tool and very helpful when dealing with React apps.
                            </p>
                            <p className="grid-subtext">
                                If you're also interested in exploring <b>3D web development</b>, let's connect!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;