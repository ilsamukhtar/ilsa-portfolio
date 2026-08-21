import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>

      <footer>
        <div>
          <strong>Ilsa Mukhtar</strong>
          <span>Cloud & DevOps Engineer</span>
        </div>

        <p>© 2026 Ilsa Mukhtar. Built with React.</p>
      </footer>
    </>
  );
}

export default App;