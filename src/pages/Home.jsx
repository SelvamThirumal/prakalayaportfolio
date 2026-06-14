import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Education from "../components/Education/Education";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const Home = () => {
  return (
    <main className="relative bg-slate-950 text-white overflow-x-hidden">

      {/* Three.js Background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
        </Canvas>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>

    </main>
  );
};

export default Home;