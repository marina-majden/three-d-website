import React from 'react';

// Update your imports to use proper SVG components
import HtmlIcon from '/assets/html5.svg';
import CssIcon from '/assets/css.svg';
import JsIcon from '/assets/js.svg';
import ReactIcon from '/assets/react.svg';
import TsIcon from '/assets/typescript.png';
import TailwindIcon from '/assets/tailwindcss.png';
import NetlifyIcon from '/assets/netlify.svg';
import GithubIcon from '/assets/github.svg';

const TechStackCircle = () => {
    const icons = [
        { Component: HtmlIcon, name: "HTML5" },
        { Component: CssIcon, name: "CSS3" },
        { Component: JsIcon, name: "JavaScript" },
        { Component: ReactIcon, name: "React" },
        { Component: TsIcon, name: "TypeScript" },
        { Component: TailwindIcon, name: "TailwindCSS" },
        { Component: NetlifyIcon, name: "Netlify" },
        { Component: GithubIcon, name: "Github" }
    ];

    return (
        <div className="h-full w-full mx-auto"> {/* Increased container size */}
            <div className="relative  w-full h-full inset-0 mx-auto p-0 m-0">
                {icons.map((icon, index) => {
                    const angle = (360 / icons.length) * index;
                    const transform = ` translate(${200}%, ${200}%)`;

                    return (
                        <div
                            key={index}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        >
                            <div className=" rounded-full h-12 w-12"
                                style={{
                                    transform: `rotate(${angle}deg) translateX(8rem) rotate(-${angle}deg)`,
                                    transformOrigin: 'center center',

                                }}
                            >
                                <img
                                    src={icon.Component}
                                    alt={icon.name}
                                    className="w-12 h-12 object-contain"

                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TechStackCircle;