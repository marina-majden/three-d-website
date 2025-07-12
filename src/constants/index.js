export const navLinks = [
    {
        id: 1,
        name: "Home",
        href: "#home",
    },
    {
        id: 2,
        name: "About",
        href: "#about",
    },
    {
        id: 3,
        name: "Projects",
        href: "#projects",
    },
    {
        id: 4,
        name: "Contact",
        href: "#contact",
    },
];

export const myProjects = [
   
    {
        title: "ChatRoom App",
        desc: "Developed a real-time chat application using React.js for real-time communication. The app features randomized username and avatar with each login for total privacy and a responsive design for seamless communication across devices.",
        subdesc:
            "A real-time chat application supporting many users while protecting their anonimity",
        href: "https://oldschool-chatroom.netlify.app",
        hrefCode: "https://www.github.com/marina-majden",
        logo: "/assets/chat-app-logo.png",
        logoStyle: {
            backgroundColor: "#13202F",
            border: "0.2px solid #17293E",
            boxShadow: "0px 0px 60px 0px #2F6DB54D",
        },
        spotlight: "/assets/spotlight2.png",
        tags: [
            {
                id: 1,
                name: "React.js",
                path: "/assets/react.svg",
            },
            {
                id: 2,
                name: "API",
                path: "/assets/api-svgrepo-com.svg",
            },
            {
                id: 3,
                name: "JavaScript",
                path: "/assets/js.svg",
            },
            {
                id: 4,
                name: "Netlify",
                path: "/assets/netlify.svg",
            },
        ],
        images:
            {
                name: "Chat App",
                path: "/assets/chatapp-desktop.jpg",
            },
    },
    {
        title: "Song Finder",
        desc: "Web application leveraging core technologies (HTML5, CSS3, JavaScript) to enable users in exploring music effortlessly. Integrated with the iTunes API to enable real-time searches for tracks, artists, and albums, delivering instant results including song previews, artwork, and metadata. Utilized RESTful API integration, asynchronous JavaScript (Fetch API), and modern front-end development practices.",
        subdesc:
            "find all the info on your favorite music numbers and artists",
        href: "https://https://song-finder-itunes.netlify.app/",
        hrefCode: "https://www.github.com/marina-majden/song-finder",
        logo: "/assets/project-logo1.png",
        logoStyle: {
            backgroundColor: "#2A1816",
            border: "0.2px solid #36201D",
            boxShadow: "0px 0px 60px 0px #AA3C304D",
        },
        spotlight: "/assets/spotlight1.png",
        tags: [
            {
                id: 1,
                name: "HTML",
                path: "/assets/html5.svg",
            },
            {
                id: 2,
                name: "CSS",
                path: "/assets/css.svg",
            },
            {
                id: 3,
                name: "JavaScript",
                path: "/assets/js.svg",
            },
            {
                id: 4,
                name: "Netlify",
                path: "/assets/netlify.svg",
            },
        ],
          images:
            {
            name: "Song Finder Desktop",
                     path: "/assets/song-finder-pc.jpeg",
            },
    
    },
    {
        title: "Quizzy",
        desc: "A dynamic single-page quiz application using React Vite, featuring state-driven question flow, real-time answer validation, and score tracking. Implements modern React patterns including hooks (useState, useRef) for state management and DOM interaction. Demonstrates clean component architecture with zero external dependencies. Deployed via GitHub Pages.",
        subdesc: "Cute quizz that tests your general knowledge!",
        href: "https://marina-majden.github.io/quizzy/",
        hrefCode: "https://www.github.com/marina-majden/quizzy",
        logo: "/assets/quiz-app-blur.png",
        logoStyle: {
            backgroundColor: "#60f5a1",
            background:
                "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
            border: "0.2px solid rgba(208, 213, 221, 1)",
            boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
        },
        spotlight: "/assets/spotlight3.png",
        tags: [
            {
                id: 1,
                name: "React.js",
                path: "/assets/react.svg",
            },
            {
                id: 2,
                name: "React Vite",
                path: "/assets/vite.svg",
            },
            {
                id: 3,
                name: "Github",
                path: "/assets/github.svg",
            },
        ],
        images: 
            {
                name: "quizzy desktop",
                path: "/assets/quizgame-interface.jpg",
            },
    },
    {
        title: "Quote of the Day",
        desc: "A simple React application that delivers inspirational quotes through seamless API integration. Leveraged the Quotable API to fetch random quotes with author attribution, implementing clean state management and asynchronous data fetching. Features instant quote generation, error boundary handling, and a minimalist UI focused on content clarity. ",
        subdesc: "Random quote to inspire you through the day",
        href: "https://cute-quote-today.netlify.app/",
        hrefCode: "https://www.github.com/marina-majden/quote-of-the-day",
        logo: "/assets/logo-white.png",
        logoStyle: {
            backgroundColor: "#0E1F38",
            border: "0.2px solid #0E2D58",
            boxShadow: "0px 0px 60px 0px #2F67B64D",
        },
        spotlight: "/assets/spotlight4.png",
        tags: [
            {
                id: 1,
                name: "HTML",
                path: "/assets/html.svg",
            },
            {
                id: 2,
                name: "CSS",
                path: "assets/css.svg",
            },
                {
                id: 3,
                name: "JavaScript",
                path: "assets/js.svg",
            },
            {
                id: 4,
                name: "REST API",
                path: "/assets/rest-api-svgrepo-com.svg",
            },
            {
                id: 5,
                name: "Netlify",
                path: "/assets/netlify.svg",
            },
        ],
        images: 
            {
                name: "QotD desktop",
                path: "/assets/quote-interface.jpg",
            },
    },
    /* {
        title: "Chores for ADHDers",
        desc: "Not so much task organization app, but a fun way to gamify your chores! You write the chores you need to do, assign them time blocks, and the app will spin the wheel in a wheel-of-fortune style, randomly selecting a chore for you to do next. Built with React.js, TailwindCSS, and TypeScript, this app is designed to help ADHDers stay focused and motivated.",
        subdesc:
            "A fun way to gamify your chores! Spin the wheel and get a random chore to do next",
        href: "https://www.youtube.com/watch?v=Ahwoks_dawU",
        texture: "/textures/project/project5.mp4",
        logo: "/assets/project-logo5.png",
        logoStyle: {
            backgroundColor: "#1C1A43",
            border: "0.2px solid #252262",
            boxShadow: "0px 0px 60px 0px #635BFF4D",
        },
        spotlight: "/assets/spotlight5.png",
        tags: [
            {
                id: 1,
                name: "React.js",
                path: "/assets/react.svg",
            },
            {
                id: 2,
                name: "TailwindCSS",
                path: "assets/tailwindcss.png",
            },
            {
                id: 3,
                name: "TypeScript",
                path: "/assets/typescript.png",
            },
            {
                id: 4,
                name: "Framer Motion",
                path: "/assets/framer.png",
            },
        ],
        images: [
            {
                id: 1,
                name: "Song Finder Desktop",
                path: "/assets/song-finder-pc.jpeg",
            },
            {
                id: 2,
                name: "Song Finder Mobile",
                path: "/assets/song-finder-mobile.jpeg",
            },
            {
                id: 3,
                name: "Song Finder Tablet",
                path: "/assets/song-finder-tablet.jpeg",
            },
        ],
    }, */
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        statueScale: isSmall ? 0.75 : isMobile ? 1 : 1.35,
        statuePosition: isSmall
        ? [0, -1, 0]
        : isMobile
        ? [0, -2, 0]
        : isTablet
        ? [3, -3, 0]
        : [4, -3, 0],
    };
};
