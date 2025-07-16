import React from 'react';

// Update your imports to use proper SVG components
import HtmlIcon from '/assets/html5.svg';
import CssIcon from '/assets/css.svg';
import JsIcon from '/assets/js.svg';
import ReactIcon from '/assets/react.svg';
import TsIcon from '/assets/ts.svg';
import TailwindIcon from '/assets/tailwindcss.png';
import NetlifyIcon from '/assets/netlify.svg';
import GithubIcon from '/assets/github.svg';
import Firebase from '/assets/firebase.svg';

const TechStackCircle = () => {
    const icons = [
        { Component: HtmlIcon, name: "HTML5" },
        { Component: CssIcon, name: "CSS3" },
        { Component: JsIcon, name: "JavaScript" },
        { Component: ReactIcon, name: "React" },
        { Component: TsIcon, name: "TypeScript" },
        { Component: TailwindIcon, name: "TailwindCSS" },
        { Component: NetlifyIcon, name: "Netlify" },
        { Component: GithubIcon, name: "Github" },
        { Component: Firebase, name: "Firebase" },
    ];

    return (
        <div className="h-full w-full mx-auto">
            <div className=" w-full h-full inset-0 mx-auto p-0 m-0 flex flex-row flex-wrap justify-between items-center align-middle">
                {icons.map((icon, index) => {

                    return (
                        <div
                            key={index}
                            className="group relative flex justify-center items-center w-1/3 mb-6"
                        >
                            <img
                                src={icon.Component}
                                alt={icon.name}
                                className="object-contain w-14 lg:w-16 h-16 hover:scale-105 hover:rotate-12 active:rotate-12 transition-all duration-300 ease-in-out "
                            />
                            <span className="absolute bottom-10 lg:bottom-15 scale-0 p-2 text-brand lg:text-lg font-accent group-hover:scale-100 group-active:scale-90 transition-all duration-300 ease-in-out ">{icon.name}</span>

                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TechStackCircle;