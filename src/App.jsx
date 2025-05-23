import React from "react";
import Navbar from "./sections/Navbar";
import Hero from './sections/Hero';
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
    return (
        <>
            {/* <Navbar /> */}
            <main className='main-space mx-auto'>
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default App;
