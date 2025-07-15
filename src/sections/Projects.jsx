import React, { useState, useEffect, useRef } from "react";
import { myProjects } from "../constants/index.js";
import rightArrow from "../assets/little-arrow.svg";

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const currentProject = myProjects[selectedProjectIndex];

    const containerRef = useRef(null);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            const newIndex =
                direction === "previous"
                    ? (prevIndex - 1 + myProjects.length) % myProjects.length
                    : (prevIndex + 1) % myProjects.length;

            return newIndex;
        });
    };

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
        <section ref={containerRef} className="c-space mt-18" id="projects">
            <h2 className="headline-section headline-stroke mb-5 text-center">projects</h2>
            <div className=" w-full flex items-center justify-center align-middle gap-2 mt-6 xl:hidden">
                <img src={rightArrow} alt="arrow" className="w-16 h-16 rotate-180 translate-1.5 animate-translate-x" />
                <p className="font-written text-6xl text-heading">swipe</p>
                <img src={rightArrow} alt="arrow" className="w-16 h-16 animate-translate-x" />
            </div>
            <div className="grid h-full w-full lg:w-11/12 xl:w-5/6 grid-cols-1 xl:grid-cols-2 gap-0 lg:gap-4 mx-auto relative">

                {/* LEFT PANEL */}
                <div className="h-full xl:h-[600px] flex flex-col justify-between gap-2 lg:gap-4 sm:p-10 py-10 px-5 rounded-md shadow-md glass-light">
                    <div className="flex flex-row justify-between items-start animate-fade-in transition-opacity duration-300">
                        <h3 className="text-3xl text-heading font-logo font-light">
                            {currentProject.title}
                        </h3>
                        {/*    <div
                            className="tech-logo"
                        >
                            <img
                                src={currentProject.logo}
                                alt="logo"

                            />
                        </div>
 */}
                    </div>
                    <img src={currentProject.images.path} alt={currentProject.images.name} className="xl:hidden h-full mx-auto rounded-md shadow-md animate-fade-in transition-opacity duration-300 object-contain" />

                    <div className="flex flex-col gap-4 my-4 z-10 animate-fade-in transition-opacity duration-300">
                        <p className="text-brand line-clamp-2 text-xl">{currentProject.subdesc}</p>
                        <p className="line-clamp-5 overflow-y-hidden">{currentProject.desc}</p>
                    </div>
                    <div className="w-full flex flex-col items-stretch justify-between gap-2 z-10 animate-fade-in transition-opacity duration-300">
                        <div className="flex items-start gap-3 flex-wrap">
                            {currentProject.tags.map((tag, index) => (
                                <div key={index} className="tech-logo">
                                    <img src={tag.path} alt={tag.name} />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-row justify-between mt-8 z-10">
                            <a
                                className="btn"
                                href={currentProject.href}
                                target="_blank"
                                rel="noreferrer">
                                <p>Check Live</p>
                                <img src="/assets/arrow-up.png" alt="arrow" width="16px" height="16px" />
                            </a>
                            <a
                                className="btn"
                                href={currentProject.hrefCode}
                                target="_blank"
                                rel="noreferrer">
                                <p>Check Code</p>
                                <img src="/assets/arrow-up.png" alt="arrow" width="16px" height="16px" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* RIGHT PANEL */}
                <div className="hidden xl:block w-full h-full overflow-hidden">
                    <img src={currentProject.images.path} alt={currentProject.images.name} className="glass-light rounded-md shadow-md animate-fade-in transition-opacity duration-300 object-contain" />
                </div>
                <div className="hidden lg:flex w-full px-2 mx-auto flex-row justify-between items-center mt-6 xl:mt-3 z-50">
                    <button
                        className="arrow-btn absolute top-1/3 -left-20"
                        onClick={() => handleNavigation("previous")}>
                        <img
                            src="/assets/left-arrow.png"
                            alt="left arrow"
                            className="w-5 h-5 rounded-full"
                        />
                    </button>
                    <button
                        className="arrow-btn absolute top-1/3 -right-20"
                        onClick={() => handleNavigation("next")}>
                        <img
                            src="/assets/right-arrow.png"
                            alt="right arrow"
                            className="w-5 h-5 rounded-full"
                        />
                    </button>
                </div>
            </div>

            <div className="mt-6 lg:mt-2 flex justify-center items-center gap-3">
                {myProjects.map((project, index) => (
                    <button
                        key={project.title}
                        onClick={() => {
                            setSelectedProjectIndex(index);

                        }}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${index === selectedProjectIndex
                            ? 'bg-brand shadow-md scale-110'
                            : 'bg-gray-300 hover:bg-brand/70'
                            }`}
                        aria-label={`Go to ${project.title}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
