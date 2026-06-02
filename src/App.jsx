import { useState } from 'react';
import { motion } from 'framer-motion';
import Loader from './components/ui/Loader';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/ui/ScrollProgress';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import GitHub from './components/sections/GitHub';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      {loaded && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="min-h-screen">
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Achievements />
            <GitHub />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}
