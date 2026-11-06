import { ThemeProvider } from './context/ThemeContext';
import CosmicBackground from './components/CosmicBackground';
import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-on-surface transition-colors duration-300">
        <CosmicBackground />
        <Header />
        <main className="relative z-10 w-full pt-16 bg-transparent min-h-[calc(100vh-16rem)]">
          <div className="flex flex-col w-full">
            <Hero />
            <About />
            <Education />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
