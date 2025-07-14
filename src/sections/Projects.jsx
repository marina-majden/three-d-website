import React, { useState, useEffect, useRef } from "react";
import { myProjects } from "../constants/index.js";

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
        <section ref={containerRef} className="c-space mt-10 md:mt-0" id="projects">
            <h2 className="headline-section headline-stroke mb-10">projects</h2>
            <div className="md:hidden flex justify-center items-center gap-3 mt-12 mb-6">
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
            <div className="grid w-full h-screen lg:h-[70vh] grid-cols-1 lg:grid-cols-2  gap-0 lg:gap-10 ">

                {/* LEFT PANEL */}
                <div className="h-full md:h-[600px] flex flex-col justify-between gap-2 md:gap-6 sm:p-10 py-10 px-5 rounded-md shadow-md glass-light-no-border">
                    <div className="flex flex-row justify-between items-start">
                        <h3 className="text-3xl text-heading-2">
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
                    <img src={currentProject.images.path} alt={currentProject.images.name} className="md:hidden mx-auto rounded-md shadow-md animate-fade-in transition-opacity duration-300 object-contain" />

                    <div className="flex flex-col gap-4 my-4 z-10">
                        <p className="text-brand text-xl">{currentProject.subdesc}</p>
                        <p className="max-h-300px overflow-y-hidden">{currentProject.desc}</p>
                    </div>
                    <div className="w-full flex flex-col items-stretch justify-between gap-2 z-10">
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
                                <img src="/assets/arrow-up.png" alt="arrow" width="18px" height="18px" />
                            </a>
                            <a
                                className="btn"
                                href={currentProject.hrefCode}
                                target="_blank"
                                rel="noreferrer">
                                <p>Check Code</p>
                                <img src="/assets/arrow-up.png" alt="arrow" width="18px" height="18px" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* RIGHT PANEL */}
                <div className="hidden md:block w-full h-full overflow-hidden">
                    <img src={currentProject.images.path} alt={currentProject.images.name} className="glass-light rounded-md shadow-md w-full animate-fade-in transition-opacity duration-300 object-contain" />
                </div>

            </div>
            <div className="hidden md:flex w-3/4 px-2 mx-auto flex-row justify-between items-center z-30">
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
            <div className="mt-6 flex justify-center items-center gap-3">
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
