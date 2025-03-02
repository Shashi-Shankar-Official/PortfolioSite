import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <div>
            <Header />
            <main>
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;