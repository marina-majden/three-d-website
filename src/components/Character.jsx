import React, { useEffect, useRef } from 'react';
import './Character.css';

const Character = () => {
    const eyesRef = useRef([]);

    useEffect(() => {
        const eyemove = (event) => {
            eyesRef.current.forEach((eye) => {
                if (!eye) return;
                const rect = eye.getBoundingClientRect();
                const x = rect.left + eye.clientWidth / 2;
                const y = rect.top + eye.clientHeight / 2;
                const radian = Math.atan2(event.pageX - x, event.pageY - y);
                const rot = radian * (180 / Math.PI) * -1 + 270;
                eye.style.transform = `rotate(${rot}deg)`;
            });
        };
        document.documentElement.addEventListener("mousemove", eyemove);
        return () => {
            document.documentElement.removeEventListener("mousemove", eyemove);
        };
    }, []);

    return (
        <div className="character-container mx-auto">
            <div className="character">
                <div className="profile">
                    <div className="group">
                        <div className="hairstyle">
                            <div className="hair"></div>
                        </div>
                        <div className="ear"></div>
                        <div className="ear right"></div>
                        <div className="lice">
                            <div className="face"></div>
                            <div className="eyebrow"></div>
                            <div className="closed-eyes"></div>
                            <div className="eyes">
                                <div className="eye" ref={el => eyesRef.current[0] = el}></div>
                                <div className="eye" ref={el => eyesRef.current[1] = el}></div>
                            </div>
                            <div className="blush"></div>
                            <div className="nose"></div>
                            <div className="mouth">
                                <div className="tongue"></div>
                            </div>
                        </div>
                        <div className="neck"></div>
                        <div className="body"></div>
                    </div>
                </div>
                <div className="character-bubble desktop text-text">
                    Hover over me to change my features!
                </div>
                <div className="character-bubble mobile text-text">
                    Tap me to change my features!
                </div>
            </div>
        </div>
    );
};

export default Character;