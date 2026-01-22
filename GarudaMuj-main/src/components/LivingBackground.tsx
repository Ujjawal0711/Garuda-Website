import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LivingBackground() {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest < 0.25) setActiveSection(0);
      else if (latest < 0.5) setActiveSection(1);
      else if (latest < 0.75) setActiveSection(2);
      else setActiveSection(3);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 1 }}
        animate={{ opacity: activeSection === 0 ? 1 : 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-[#09090b]">
          <svg className="absolute inset-0 w-full h-full opacity-30">
            <defs>
              <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="#06b6d4" opacity="0.5">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="150" cy="150" r="2" fill="#d946ef" opacity="0.5">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite" />
                </circle>
                <line x1="50" y1="50" x2="150" y2="50" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.3" />
                <line x1="150" y1="50" x2="150" y2="150" stroke="#06b6d4" strokeWidth="0.5" opacity="0.3" />
                <line x1="50" y1="150" x2="150" y2="150" stroke="#d946ef" strokeWidth="0.5" opacity="0.3" />
                <line x1="50" y1="50" x2="50" y2="150" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.3" />
                <circle cx="150" cy="50" r="1.5" fill="#06b6d4" />
                <circle cx="50" cy="150" r="1.5" fill="#d946ef" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit)" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primaryimary/10 via-transparent to-brand-secondarydary/10" />
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: activeSection === 1 ? 1 : 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-[#09090b]">
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <defs>
              <linearGradient id="dataGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#d946ef" />
              </linearGradient>
            </defs>
            {[...Array(20)].map((_, i) => (
              <g key={i}>
                <line
                  x1={i * 100}
                  y1="0"
                  x2={i * 100 + 50}
                  y2="100%"
                  stroke="url(#dataGrad)"
                  strokeWidth="1"
                  opacity="0.3"
                >
                  <animate
                    attributeName="x1"
                    values={`${i * 100};${i * 100 + 50};${i * 100}`}
                    dur={`${3 + i * 0.2}s`}
                    repeatCount="indefinite"
                  />
                </line>
              </g>
            ))}
          </svg>
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-brand-primaryimary/10" />
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: activeSection === 2 ? 1 : 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-[#09090b]">
          <svg className="absolute inset-0 w-full h-full opacity-25">
            <defs>
              <linearGradient id="wireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d946ef" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            {[...Array(15)].map((_, i) => (
              <g key={i}>
                <rect
                  x={50 + i * 80}
                  y={100 + i * 40}
                  width="60"
                  height="60"
                  fill="none"
                  stroke="url(#wireGrad)"
                  strokeWidth="1"
                  opacity="0.4"
                  transform={`rotate(${i * 15} ${80 + i * 80} ${130 + i * 40})`}
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from={`${i * 15} ${80 + i * 80} ${130 + i * 40}`}
                    to={`${i * 15 + 360} ${80 + i * 80} ${130 + i * 40}`}
                    dur={`${10 + i}s`}
                    repeatCount="indefinite"
                  />
                </rect>
              </g>
            ))}
          </svg>
          <div className="absolute inset-0 bg-gradient-to-bl from-brand-secondarydary/10 via-transparent to-purple-500/10" />
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: activeSection === 3 ? 1 : 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-[#09090b]">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primaryimary/20 via-purple-500/10 to-transparent" />
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <defs>
              <radialGradient id="gridGrad">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#d946ef" />
              </radialGradient>
            </defs>
            <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="url(#gridGrad)" opacity="0.6">
                <animate attributeName="r" values="1;2;1" dur="2s" repeatCount="indefinite" />
              </circle>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
