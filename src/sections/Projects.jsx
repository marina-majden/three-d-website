import React, { useState, useEffect, useRef } from "react";
import { myProjects } from "../constants/index";
import Gallery from "../components/Gallery";

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const currentProject = myProjects[selectedProjectIndex];
    const [selectedImage, setSelectedImage] = useState(currentProject.images[0]);

    const containerRef = useRef(null);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            const newIndex =
                direction === "previous"
                    ? (prevIndex - 1 + myProjects.length) % myProjects.length
                    : (prevIndex + 1) % myProjects.length;
            setSelectedImage(myProjects[newIndex].images[0]); // reset main image
            return newIndex;
        });
    };

    const handleImageClick = (image) => setSelectedImage(image);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") handleNavigation("previous");
            if (e.key === "ArrowRight") handleNavigation("next");
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Swipe support
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleTouchStart = (e) => {
            touchStartX.current = e.changedTouches[0].clientX;
        };

        const handleTouchEnd = (e) => {
            touchEndX.current = e.changedTouches[0].clientX;
            const deltaX = touchEndX.current - touchStartX.current;
            if (Math.abs(deltaX) > 50) {
                if (deltaX > 0) handleNavigation("previous");
                else handleNavigation("next");
            }
        };

        container.addEventListener("touchstart", handleTouchStart, false);
        container.addEventListener("touchend", handleTouchEnd, false);

        return () => {
            container.removeEventListener("touchstart", handleTouchStart);
            container.removeEventListener("touchend", handleTouchEnd);
        };
    }, []);

    return (
        <section ref={containerRef} className="c-space my-20">
            <p className="head-text gradient-text">My work and PROJECTS</p>
            <div className="grid lg:max-h-screen lg:h-[70vh] lg:grid-cols-2 grid-cols-1 mt-12 gap-0 lg:gap-10 md:glass-light-no-border  sm:glass-light-no-border">
                {/* LEFT PANEL */}
                <div className="h-full flex flex-col justify-between gap-6 relative sm:p-10 py-10 px-5 rounded-md shadow-md lg:glass-light-no-border">
                    <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                        <img
                            src={currentProject.spotlight}
                            alt="spotlight"
                            className="w-full h-96 object-cover rounded-xl"
                        />
                    </div>

                    <div
                        className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg z-10"
                        style={currentProject.logoStyle}>
                        <img
                            src={currentProject.logo}
                            alt="logo"
                            className="w-10 h-10 shadow-sm"
                        />
                    </div>

                    <div className="flex flex-col gap-4 my-4 z-10">
                        <p className="text-2xl font-semibold animatedText">
                            {currentProject.title}
                        </p>
                        <p className="animatedText">{currentProject.subdesc}</p>
                        <p className="animatedText object-contain max-h-[300px]">{currentProject.desc}</p>

                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-4 z-10">
                        <div className="flex items-center gap-3 flex-wrap">
                            {currentProject.tags.map((tag, index) => (
                                <div key={index} className="tech-logo">
                                    <img src={tag.path} alt={tag.name} />
                                </div>
                            ))}
                        </div>
                        <a
                            className="flex items-center gap-2 cursor-pointer ring transition-all duration-300 ease-in-out rounded-md p-2 btn"
                            href={currentProject.href}
                            target="_blank"
                            rel="noreferrer">
                            <p>Check Live Site</p>
                            <img src="/assets/arrow-up.png" alt="arrow" />
                        </a>
                    </div>

                    <div className="flex flex-row justify-between items-center mt-8 z-10">
                        <button
                            className="arrow-btn"
                            onClick={() => handleNavigation("previous")}>
                            <img
                                src="/assets/left-arrow.png"
                                alt="left arrow"
                                className="w-5 h-5 rounded-full"
                            />
                        </button>
                        <button
                            className="arrow-btn"
                            onClick={() => handleNavigation("next")}>
                            <img
                                src="/assets/right-arrow.png"
                                alt="right arrow"
                                className="w-5 h-5 rounded-full"
                            />
                        </button>
                    </div>
                </div>

                {/* RIGHT PANEL */}
                <Gallery key={currentProject.title} images={currentProject.images} />

            </div>
        </section>
    );
};

export default Projects;
