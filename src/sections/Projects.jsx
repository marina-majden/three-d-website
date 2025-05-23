import React, { Suspense, useState } from "react";
import { myProjects } from "../constants/index";


const projectCount = myProjects.length;

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const currentProject = myProjects[selectedProjectIndex];
    const [selectedImage, setSelectedImage] = useState(null);

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === "previous") {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <section className='c-space my-20'>
            <p className='head-text gradient-text'>My work and PROJECTS</p>
            <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
                <div className='flex flex-col justify-between gap-5 relative sm:p-10 py-10 px-5 rounded-md shadow-md shadow-border-dark/50 glass-light-no-border'>
                    <div className='absolute top-0 right-0'>
                        <img
                            src={currentProject.spotlight}
                            alt='spotlight'
                            className='w-full h-96 object-cover rounded-xl'
                        />
                    </div>
                    <div
                        className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg'
                        style={currentProject.logoStyle}>
                        <img
                            src={currentProject.logo}
                            alt='logo'
                            className='w-10 h-10 shadow-sm'
                        />
                    </div>
                    <div className='flex flex-col gap-5 my-5'>
                        <p className='text-2xl font-semibold animatedText gradient-text'>
                            {currentProject.title}
                        </p>
                        <p className='animatedText'>{currentProject.desc}</p>
                        <p className='animatedText'>{currentProject.subdesc}</p>
                    </div>
                    <div className='flex items-center justify-between flex-wrap gap-5'>
                        <div className='flex items-center gap-3'>
                            {currentProject.tags.map((tag, index) => (
                                <div key={index} className='tech-logo'>
                                    <img src={tag.path} alt={tag.name} />
                                </div>
                            ))}
                        </div>
                        <a
                            className='flex items-center gap-2 cursor-pointer ring transition-all duration-300 ease-in-out rounded-md p-2 btn'
                            href={currentProject.href}
                            target='_blank'
                            rel='noreferrer'>
                            <p>Check Live Site</p>
                            <img src='/assets/arrow-up.png' alt='arrow' />
                        </a>
                    </div>
                    <div className='flex flex-row justify-between items-stretch mt-7'>
                        <button
                            className='arrow-btn'
                            onClick={() => handleNavigation("previous")}>
                            <img
                                src='/assets/left-arrow.png'
                                alt='left arrow'
                                className='w-5 h-5 rounded-full'
                            />

                        </button>
                        <button
                            className='arrow-btn'
                            onClick={() => handleNavigation("next")}>
                            <img
                                src='/assets/right-arrow.png'
                                alt='right arrow'
                                className='w-5 h-5 rounded-full'
                            />

                        </button>
                    </div>
                </div>
                <div className='flex flex-col items-center content-start justify-start glass-light-no-border'>
                    <div className="w-full h-[420px] flex justify-center items-center rounded-md">
                        {selectedImage ? (
                            <img
                                src={selectedImage.path}
                                alt={selectedImage.name}
                                className="h-full object-contain rounded-md"
                            />
                        ) : (
                            <img
                                src={currentProject.images[0].path}
                                alt={currentProject.name}
                                className="h-full object-contain rounded-md"
                            />
                        )}
                    </div>
                    <div className="flex flex-row gap-1 mt-2">
                        {currentProject.images.map((image, index) => (
                            <div
                                key={index}
                                className="w-1/3 max-h-full cursor-pointer relative border-2 border-black-300/50 overflow-hidden"
                                onClick={() => handleImageClick(image)}
                            >
                                <img
                                    src={image.path}
                                    alt={image.name}
                                    className="w-full h-40 object-cover rounded-xs"
                                />
                                <p className="absolute bg-black-300/70 text-white bottom-0 left-0 w-full p-2">
                                    {image.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/*  <div className='grid grid-cols-3 grid-rows-3 gap-2 h-9/10 max-h-full'>
                    <div className='col-span-3 row-span-2'>
                        {selectedImage ? (
                            <img
                                src={selectedImage.path}
                                alt={selectedImage.name}
                                className='rounded-md'
                                style={{ height: "500px" }}
                            />
                        ) : (
                            <img
                                src={currentProject.images[0].path}
                                alt={currentProject.images[0].name}
                                className='rounded-md'
                                style={{ height: "500px" }}
                            />
                        )}
                    </div>

                    {currentProject.images.map((image, index) => (
                        <div
                            key={index}
                            className='row-span-1 row-start-3 cursor-pointer relative border-accent overflow-hidden self-stretch'
                            onClick={() => handleImageClick(image)}>
                            <img
                                src={image.path}
                                alt={image.name}
                                className='rounded-xs'
                                style={{ height: "150px" }}
                            />
                            <p className='absolute bg-black-300/50 text-white bottom-0 left-0 w-full p-2'>
                                {image.name}
                            </p>
                        </div>
                    ))}
                </div>
 */}
                {/* <div className='border border-black bg-brand rounded-lg flex flex-col justify-between p-2 max-h-screen h-9/10'>
                    {/* First child div: Display selected image 
                    <div className='h-3/5 w-full mx-auto'>
                        {selectedImage ? (
                            <img
                                src={selectedImage.path}
                                alt={selectedImage.name}
                                className='rounded-md object-contain'
                            />
                        ) : (
                            <img
                                src={currentProject.images[0].path}
                                alt={currentProject.images[0].name}
                                className='rounded-md object-contain'
                            />
                        )}
                    </div>
                    {/* Second child div: Display all images 
                    <div className='h-2/5 w-full flex flex-wrap justify-evenly items-center project-images'>
                        {currentProject.images.map((image, index) => (
                            <div
                                key={index}
                                className='w-3/10 h-max cursor-pointer relative object-cover border-accent'
                                onClick={() => handleImageClick(image)}>
                                <img
                                    src={image.path}
                                    alt={image.name}
                                    className='rounded-xs w-full aspect-square overflow-y-hidden'
                                />
                                <p className='absolute bg-black-300/50 text-white bottom-0 left-0 w-full p-2'>
                                    {image.name}
                                </p>
                            </div>
                        ))}
                    </div>
    </div> */}
                {/*   <Canvas>
                        <ambientLight intensity={Math.PI} />
                        <directionalLight position={[10, 10, 5]} />
                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                            <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                <ComputerScreen texture={currentProject.texture} />
                            </group>
                            </Suspense>
                        </Center>
                         <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
                    </Canvas> */}
            </div>
        </section>
    );
};

export default Projects;
