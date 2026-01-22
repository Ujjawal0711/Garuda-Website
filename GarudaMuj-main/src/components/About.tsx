import { motion } from 'framer-motion';
import { Code,  Rocket, Trophy, Heart } from 'lucide-react';
import { 
  Cpu, 
  Music, 
  Users, 
  PartyPopper, 
  HeartHandshake, 
  Lightbulb 
} from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Tech Innovation & Engineering',
    description: '💻 We explore cutting-edge tech through hackathons, coding challenges, workshops, and real-world problem solving that prepares members for the future.',
    gradient: 'from-brand-primary to-blue-500',
  },
  {
    icon: Music,
    title: 'Cultural Excellence & Heritage',
    description: '🪔 Garuda celebrates India’s culture through festivals, art, literature, and performances—blending tradition with modern expression.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Leadership & Personality Development',
    description: '🎤 We build confident leaders by offering opportunities in public speaking, team management, decision-making, and ethical leadership.',
    gradient: 'from-brand-secondary to-rose-500',
  },
  {
    icon: PartyPopper,
    title: 'Flagship Events & Mega Fests',
    description: '🎉 From techno-cultural festivals to themed competitions, Garuda creates high-impact events that unite colleges and communities.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: HeartHandshake,
    title: 'Community Impact & Social Initiatives',
    description: '🌱 We use technology and culture to serve society through awareness drives, digital literacy, and youth-led social initiatives.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Hub & Creative Space',
    description: '🚀 Garuda is a safe, creative space to collaborate, experiment, learn from failure, and build ideas that create real impact.',
    gradient: 'from-red-500 to-pink-500',
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {' '}
            <span className="bg-gradient-to-r from-cyan-400 via-brand-accent to-fuchsia-400 bg-clip-text text-transparent">
              About
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            We're more than just a club — we're a movement of passionate individuals
            dedicated to shaping the future of technology.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-2xl blur transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  '--tw-gradient-from': feature.gradient.split(' ')[1],
                  '--tw-gradient-to': feature.gradient.split(' ')[3],
                } as React.CSSProperties}
              />

              <div className="relative h-full p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} p-3 mb-6 shadow-lg`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  {feature.description}
                </p>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <feature.icon className="w-32 h-32 text-white" strokeWidth={0.5} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </section>
  );
}
