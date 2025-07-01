import React, { useEffect, useRef, useState } from "react";

const Gallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const mainRef = useRef(null);
    const startX = useRef(null);
    const endX = useRef(null);

    const handleSwipe = () => {
        if (!startX.current || !endX.current) return;
        const diff = endX.current - startX.current;
        const currentIndex = images.findIndex((img) => img.path === selectedImage.path);
        if (diff > 50 && currentIndex > 0) {
            setSelectedImage(images[currentIndex - 1]);
        } else if (diff < -50 && currentIndex < images.length - 1) {
            setSelectedImage(images[currentIndex + 1]);
        }
    };

    useEffect(() => {
        const handleKey = (e) => {
            const index = images.findIndex((img) => img.path === selectedImage.path);
            if (e.key === "ArrowLeft" && index > 0) {
                setSelectedImage(images[index - 1]);
            }
            if (e.key === "ArrowRight" && index < images.length - 1) {
                setSelectedImage(images[index + 1]);
            }
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [selectedImage]);

    return (
        <div className="w-full flex flex-col gap-4">
            {/* Main Image Display */}
            <div
                ref={mainRef}
                className="relative w-full h-[400px] flex justify-center items-center overflow-hidden border-2 border-black-300/30 rounded-lg shadow-md bg-gray-100"
                onTouchStart={(e) => (startX.current = e.changedTouches[0].clientX)}
                onTouchEnd={(e) => {
                    endX.current = e.changedTouches[0].clientX;
                    handleSwipe();
                }}
            >
                <img
                    key={selectedImage.path}
                    src={selectedImage.path}
                    alt={selectedImage.name}
                    className="h-full object-contain animate-fade-in transition-opacity duration-300"
                />
            </div>

            {/* Thumbnails Row */}
            <div className="flex gap-2 overflow-x-auto scrollbar-thin pb-2">
                {images.map((img) => {
                    const isActive = img.path === selectedImage.path;
                    return (
                        <div
                            key={img.path}
                            className="w-1/3"
                            onClick={() => setSelectedImage(img)}
                        >
                            <img
                                src={img.path}
                                alt={img.name}
                                loading="lazy"
                                className={`object-contain border-1 rounded-md cursor-pointer overflow-hidden transition-all duration-200 
                ${isActive ? "border-blue-500" : "border-transparent opacity-70 hover:opacity-100"}`}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Gallery;
