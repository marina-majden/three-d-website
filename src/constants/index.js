export const navItems = [
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
        desc: "A real-time chat application using React.js for real-time communication. The app features randomized username and avatar with each login for total privacy and a responsive design for seamless communication across devices. Utilizing Firebase for real-time data synchronization.",
        subdesc:
            "A real-time chatroom web-application",
        href: "https://oldschool-chatroom.netlify.app",
        hrefCode: "https://www.github.com/marina-majden",
        logo: "/assets/chat-app-logo.png",
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
                name: "Firebase",
                path: "/assets/firebase.svg",
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
                path: "/assets/chatapp-desktop.webp",
            },
    },
    {
        title: "Song Finder",
        desc: "Web-app built with basic web-technologies, integrated with the iTunes API to enable real-time searches for tracks, artists, and albums, delivers instant results including song previews, artwork, and metadata. Utilized RESTful API integration, asynchronous JavaScript, and modern front-end practices.",
        subdesc:
            "Search and check out your favorite music",
        href: "https://song-finder-itunes.netlify.app/",
        hrefCode: "https://www.github.com/marina-majden/song-finder",
        logo: "/assets/songfinder-logo.png",
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
                     path: "/assets/song-finder-pc.webp",
            },
    
    },
    {
        title: "Quizzy",
        desc: "Interactive quiz game as one of my first projects implements modern React patterns including hooks for state management and DOM interaction. Demonstrates clean component architecture with zero external dependencies. Deployed via GitHub Pages.",
        subdesc: "Cute quiz that tests your general knowledge",
        href: "https://marina-majden.github.io/quizzy/",
        hrefCode: "https://www.github.com/marina-majden/quizzy",
        logo: "/assets/quiz-app-blur.png",
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
                path: "/assets/quizgame-interface.webp",
            },
    },
    {
        title: "Quote of the Day",
        desc: "Classic appy that delivers inspirational quotes through seamless API integration. Using the Quotable API to fetch random quotes with author attribution, implementing clean state management and asynchronous data fetching. Trying to win you over with warm and romantic UI!",
        subdesc: "Random quote generator",
        href: "https://cute-quote-today.netlify.app/",
        hrefCode: "https://www.github.com/marina-majden/quote-of-the-day",
        logo: "/assets/logo-white.png",
        tags: [
            {
                id: 1,
                name: "HTML",
                path: "/assets/html5.svg",
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
                path: "/assets/quote-interface.webp",
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
        statueScale: isSmall ? 1.1 : isMobile ? 1.2 : 1.35,
        statuePosition: isSmall
        ? [0, -1.4, 0]
        : isMobile
        ? [0, -2, 0]
        : isTablet
        ? [3, -3, 0]
        : [4, -3, 0],
    };
};
