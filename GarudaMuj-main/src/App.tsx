import LivingBackground from './components/LivingBackground';
import GlowCursor from './components/GlowCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Footer from './components/Footer';
import Team from './components/Team';

function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white overflow-x-hidden">
      <LivingBackground />
      <GlowCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Events />
      </main>
      <Footer />
    </div>
  );
}

export default App;
