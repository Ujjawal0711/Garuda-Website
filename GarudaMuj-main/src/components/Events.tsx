import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Users as UsersIcon, Cpu, Music, PartyPopper, Terminal } from 'lucide-react';

// --- SUB-COMPONENT: Vibrant Image Gallery ---
const AutoImageGallery = ({ 
  images, 
  intervalTime 
}: { 
  images: string[], 
  intervalTime: number 
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || isPaused) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const nextIndex = (currentIndex + 1) % images.length;
        const scrollWidth = scrollRef.current.offsetWidth;
        scrollRef.current.scrollTo({ left: nextIndex * scrollWidth, behavior: 'smooth' });
        setCurrentIndex(nextIndex);
      }
    }, intervalTime);
    return () => clearInterval(interval);
  }, [currentIndex, images.length, intervalTime, isPaused]);

  return (
    <div 
      className="relative h-64 w-full overflow-hidden bg-black/40 rounded-t-[2.5rem] cursor-pointer group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto h-full snap-x snap-mandatory scroll-smooth no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
        
        <div className="flex h-full">
          {images.map((img, i) => (
            <div key={i} className="min-w-full h-full flex-shrink-0 snap-center">
              <img 
                src={img} 
                alt="Event gallery" 
                // THE VIBRANCY FIX: No grayscale. Direct saturation and brightness boost.
                className="w-full h-full object-cover transition-all duration-700 ease-out
                  /* Default: Bright, natural, and high-contrast colors */
                  brightness-105 contrast-[1.1] saturate-[1.25]
                  /* Hover: Hyper-vibrant 'lighting up' effect */
                  group-hover:saturate-[1.6] group-hover:brightness-115 group-hover:scale-110" 
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Progress Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/30'}`} />
          ))}
        </div>
      )}
    </div>
  );
};

// --- MAIN COMPONENT ---
const events = [
  {
    title: 'Dandiya Night 2025',
    date: '30 September, 2025',
    crowd: '5000+',
    location: 'MUJ Football Ground',
    color: 'from-brand-primary to-blue-500',
    status: 'Completed',
    description: 'A grand cultural dandiya celebration blending tradition, music, and unmatched crowd energy.',
    icon: Music,
    isUpcoming: false,
    images: ['/Dandiya 1.jpeg', '/dandiya 2.jpeg', '/dandiya 3.jpeg', '/dandiya 4.jpeg']
  },
  {
    title: 'Robotics Workshop',
    date: '17 September, 2025',
    crowd: '500+',
    location: 'SHARDA PAI AUDI. MUJ',
    status: 'Completed',
    description: 'An intensive hands-on robotics workshop focused on innovation and practical learning.',
    color: 'from-emerald-400 to-cyan-500',
    icon: Cpu,
    isUpcoming: false,
    images: ['Robotic 1.jpeg', 'Robotic 2.jpeg']
  },
  {
    title: 'Code Veda',
    date: '26 July, 2025',
    crowd: '500+',
    location: 'Virtual',
    status: 'Completed',
    description: 'A national-level hackathon empowering students through coding and impactful innovation.',
    color: 'from-fuchsia-500 to-rose-500',
    icon: Terminal,
    isUpcoming: false,
    images: ['veda 1.jpeg', 'veda 2.jpeg', 'veda 3.jpeg']
  },
  {
    title: 'Next Big Event',
    date: 'TBD',
    crowd: 'Expected 1000+',
    location: 'MUJ Campus',
    color: 'from-cyan-500 to-brand-primary',
    status: 'Upcoming',
    description: 'Stay tuned for our next high-energy tech gathering!',
    icon: PartyPopper,
    isUpcoming: true,
    images: ['https://picsum.photos/600/400?random=4']
  }
];

export default function Events() {
  const [view, setView] = useState<'past' | 'upcoming'>('past');
  const filteredEvents = events.filter(e => view === 'past' ? !e.isUpcoming : e.isUpcoming);

  const getInterval = (index: number) => {
    const intervals = [3000, 4000, 5000];
    return intervals[index] || 3000;
  };

  return (
    <section id="events" className="min-h-screen py-20 px-6 relative bg-[#09090b]">
      <div className="max-w-7xl mx-auto">
        {/* Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/5 backdrop-blur-md p-1 rounded-full border border-white/10 flex relative w-72 h-11">
            <motion.div
              animate={{ x: view === 'past' ? 0 : 140 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-y-1 left-1 bg-brand-primary rounded-full z-0"
              style={{ width: 'calc(50% - 4px)' }}
            />
            <button onClick={() => setView('past')} className={`relative z-10 flex-1 h-full text-sm font-bold transition-colors ${view === 'past' ? 'text-black' : 'text-white'}`}>Past Chapters</button>
            <button onClick={() => setView('upcoming')} className={`relative z-10 flex-1 h-full text-sm font-bold transition-colors ${view === 'upcoming' ? 'text-black' : 'text-white'}`}>Upcoming</button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary via-emerald-500 to-transparent" />
          
          <div className="space-y-16">
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event, index) => (
                <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`group flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
              
                  <div className="flex-1 hidden md:block" />
                  
                  <div className="relative z-10 flex-shrink-0 mt-8">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${event.color} p-0.5 shadow-xl`}>
                      <div className="w-full h-full rounded-2xl bg-[#09090b] flex items-center justify-center">
                        <event.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="rounded-[2.5rem] bg-white/[0.03] backdrop-blur-2xl border border-white/10 overflow-hidden group hover:border-brand-primary/50 transition-all duration-500 shadow-2xl">
                      
                      <AutoImageGallery 
                        images={event.images} 
                        intervalTime={getInterval(index)} 
                      />

                      <div className="p-8">
                        <div className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${event.color} bg-opacity-10 border border-white/5 mb-6`}>
                          <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">{event.status}</span>
                        </div>
                        
                        <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{event.title}</h3>
                        <p className="text-gray-400 mb-8 text-base leading-relaxed line-clamp-2">{event.description}</p>

                        <div className="flex flex-wrap items-center gap-8 text-gray-300">
                          <div className="flex items-center gap-2.5">
                            <Calendar className="w-5 h-5 text-brand-primary" />
                            <span className="text-sm font-medium">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2.5">
                            <MapPin className="w-5 h-5 text-brand-primary" />
                            <span className="text-sm font-medium">{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2.5">
                            <UsersIcon className="w-5 h-5 text-cyan-400" />
                            <span className="text-sm font-bold text-white bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                              {event.crowd} Engagement
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}