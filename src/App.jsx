import React from 'react'
import Navbar from './sections/Navbar'

import About from './sections/About';
import Projects from './sections/Projects'
/* import Experience from './sections/Experience' */
import Contact from './sections/contact';
import Footer from './sections/Footer';

const App = () => {
  return (  
    <main className="max-w-7xl mx-auto">
      <Navbar />

      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>  
    );
}
 
export default App;