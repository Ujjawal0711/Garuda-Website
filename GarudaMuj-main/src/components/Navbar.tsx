import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(9, 9, 11, 0)', 'rgba(9, 9, 11, 0.8)']
  );
  const navBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(12px)']);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{
        backgroundColor: navBackground,
        backdropFilter: navBlur,
        WebkitBackdropFilter: navBlur,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
           
            <img src="/Garuda_pfp-removebg-preview.png" alt="TechClub Logo" className="h-24 w-auto" />
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
          {['About', 'Our Team', 'Events'].map((item) => (
  <motion.button
    key={item}
    onClick={() => {
      // If the button is 'Our Team', scroll to 'team'. Otherwise, use the lowercase name.
      const targetId = item === 'Our Team' ? 'team' : item.toLowerCase();
      scrollToSection(targetId);
    }}
    className="text-gray-300 hover:text-white font-medium transition-colors relative group"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {item}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-primaryimary to-brand-secondary group-hover:w-full transition-all duration-300" />
  </motion.button>
))}
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-brand-primaryimary to-brand-secondary text-white font-semibold shadow-lg shbrand-primarynd-primary/30"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(6, 182, 212, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Connect
            </motion.button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 flex flex-col gap-4 p-4 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10"
          >
            {['About', 'Events'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-white font-medium text-left transition-colors"
              >
                {item}
              </button>
            ))}
            
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
