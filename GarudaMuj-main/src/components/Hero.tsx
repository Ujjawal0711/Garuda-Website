import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { Terminal, Sparkles } from 'lucide-react';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 border border-brand-primary/30 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300">Where Innovation Meets Community</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-brand-accent to-fuchsia-400 bg-clip-text text-transparent">
              Garuda
            </span>
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            A vibrant community of developers, designers, and tech enthusiasts building the future together.
            Join us to learn, create, and innovate.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            
          </div>

          <div className="flex items-center gap-8 pt-8">
            <div>
              <div className="text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">200+</div>
              <div className="text-sm text-gray-400">Members</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-brand-primary/50 to-transparent" />
            <div>
              <div className="text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(217,70,239,0.5)]">6000+</div>
              <div className="text-sm text-gray-400">Student Engagement</div>
            </div>
            
            
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10"
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary via-purple-500 to-brand-secondary rounded-3xl blur-2xl opacity-30 animate-pulse" />

            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10 shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 flex items-center justify-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-gray-400">terminal</span>
                </div>
              </div>

              <div className="font-mono text-sm space-y-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-400"
                >
                  <span className="text-cyan-400">$</span> एनपीएम संस्थापयति @गरुड/एमयूजे
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-green-400"
                >
                  ✓ निर्भरताः संस्थाप्यन्ते...
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0 }}
                  className="text-gray-400"
                >
                  <span className="text-cyan-400">$</span> एनपीएम् चालयति भविष्य-निर्माणम्
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="space-y-1"
                >
                  <div className="text-brand-accent">→ सृजनशीलता संकल्यते...</div>
                  <div className="text-fuchsia-400">→ समुदायः निर्मीयते...</div>
                  <div className="text-cyan-400">→ नवोन्मेषः विनियोज्यते...</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="text-green-400 pt-2"
                >
                  ✓ सफलता! जगत् परिवर्तनाय सज्जम्।
                </motion.div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '12px' }}
                  transition={{ repeat: Infinity, duration: 0.8, repeatType: 'reverse' }}
                  className="h-4 bg-cyan-400 inline-block"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-brand-secondary to-brand-primary rounded-full blur-3xl opacity-40 animate-pulse" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-brand-primary to-purple-500 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, repeat: Infinity, duration: 1.5, repeatType: 'reverse' }}
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-brand-primary/50 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
