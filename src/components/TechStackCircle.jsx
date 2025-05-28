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
        <div className="h-full w-full mx-auto">
            <div className=" w-full h-full inset-0 mx-auto p-0 m-0 flex flex-row flex-wrap justify-around items-center align-middle">
                {icons.map((icon, index) => {

                    return (
                        <div
                            key={index}
                            className="flex justify-center items-center max-w-1/4 m-2"
                        >
                            <img
                                src={icon.Component}
                                alt={icon.name}
                                className="w-12 md:w-14 lg:w-16 h-16 object-contain"
                            />

                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TechStackCircle;