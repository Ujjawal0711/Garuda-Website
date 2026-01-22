import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function GlowCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-screen"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: '-50%',
          y: '-50%',
        }}
      >
        <div className="w-64 h-64 bg-gradient-to-r from-brand-primary/30 via-purple-500/30 to-brand-secondary/30 rounded-full blur-3xl" />
      </motion.div>
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-screen"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: '-50%',
          y: '-50%',
        }}
      >
        <div className="w-32 h-32 bg-gradient-to-r from-cyan-400/40 via-brand-accent/40 to-fuchsia-400/40 rounded-full blur-2xl" />
      </motion.div>
    </>
  );
}
