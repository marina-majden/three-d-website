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
        <div className="w-full h-full flex flex-col">

            {/* Thumbnails Row */}
            <div className="flex h-1/3 gap-2 overflow-hidden pb-2">
                {images.map((img) => {
                    const isActive = img.path === selectedImage.path;
                    return (
                        <div
                            key={img.path}
                            className="w-1/3 max-h-[200px] overflow-clip"
                            onClick={() => setSelectedImage(img)}
                        >
                            <img
                                src={img.path}
                                alt={img.name}
                                loading="lazy"
                                className={`object-cover border-1 rounded-md cursor-pointer overflow-hidden transition-all duration-200 
                ${isActive ? "border-blue-500" : "border-transparent opacity-70 hover:opacity-100"}`}
                            />
                        </div>
                    );
                })}
            </div>
            {/* Main Image Display */}
            <div
                ref={mainRef}
                className="w-full max-h-2/3 h-[500px] flex justify-center items-center glass-light overflow-clip"
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
                    className="object-cover animate-fade-in transition-opacity duration-300"
                />
            </div>

        </div>
    );
};

export default Gallery;
