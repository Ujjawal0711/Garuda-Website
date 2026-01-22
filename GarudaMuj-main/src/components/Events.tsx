import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Users as UsersIcon, Webhook } from 'lucide-react';
import { Cpu,Music,Users,PartyPopper,HeartHandshake,Lightbulb} from 'lucide-react';

// --- SUB-COMPONENT: Auto-sliding Image Gallery with Pause on Hover ---
const AutoImageGallery = ({ 
  images, 
  intervalTime 
}: { 
  images: string[], 
  intervalTime: number 
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // State to track hover

  useEffect(() => {
    // Don't start interval if there's only 1 image or if the mouse is hovering
    if (images.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const nextIndex = (currentIndex + 1) % images.length;
        const scrollWidth = scrollRef.current.offsetWidth;
        
        scrollRef.current.scrollTo({
          left: nextIndex * scrollWidth,
          behavior: 'smooth'
        });
        
        setCurrentIndex(nextIndex);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [currentIndex, images.length, intervalTime, isPaused]); // Added isPaused to dependency array

  return (
    <div 
      className="relative h-56 w-full overflow-hidden bg-black/20 rounded-t-2xl cursor-pointer"
      onMouseEnter={() => setIsPaused(true)}  // Pause when mouse enters
      onMouseLeave={() => setIsPaused(false)} // Resume when mouse leaves
    >
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto h-full snap-x snap-mandatory scroll-smooth no-scrollbar"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none', 
          WebkitOverflowScrolling: 'touch' 
        }}
      >
        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>
        
        <div className="flex h-full">
          {images.map((img, i) => (
            <div key={i} className="min-w-full h-full flex-shrink-0 snap-center">
              <img 
                src={img} 
                alt="Event gallery" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" 
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Progress Dots with Pause Indicator Hint */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 items-center">
          {images.map((_, i) => (
            <div 
              key={i} 
              className={`h-1 rounded-full transition-all duration-300 ${
                i === currentIndex 
                ? `w-4 bg-white ${isPaused ? 'opacity-100 scale-110' : 'opacity-80'}` 
                : 'w-1 bg-white/40'
              }`} 
            />
          ))}
        </div>
      )}

      {/* Optional: Small visual cue when paused */}
      <AnimatePresence>
        {isPaused && images.length > 1 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-2 py-1 rounded-md text-[8px] text-white/70 uppercase tracking-tighter"
          >
            Paused
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- MAIN COMPONENT ---
const events = [
  // Keeping all events from your original code
  {
    title: 'Dandiya Night 2025',
    date: '30 September, 2025',
    crowd: '5000+',
    location: 'MUJ Football Ground',
    color: 'from-brand-primary to-blue-500',
    status: 'Completed',
    description: 'A grand cultural dandiya celebration blending tradition, music, and unmatched crowd energy.',
    icon: Webhook,
    isUpcoming: false,
    images: [
      '/Dandiya 1.jpeg',
      '/dandiya 2.jpeg',
      '/dandiya 3.jpeg',
      '/dandiya 4.jpeg'
    ]
  },
  {
    title: 'Robotics Workshop',
    date: '17 September, 2025',
    crowd: '500+',
    location: 'SHARDA PAI AUDI. MUJ',
    status: 'Completed',
    description: 'An intensive hands-on robotics workshop focused on innovation and practical learning.',
    color: 'from-brand-primary to-emerald-500',
    icon: Webhook,
    isUpcoming: false,
    images: [
      'Robotic 1.jpeg',
      'Robotic 2.jpeg'
    ]
  },
  {
    title: 'Code Veda',
    date: '26 July, 2025',
    crowd: '500+',
    location: 'Virtual',
    status: 'Completed',
    description: 'A national-level hackathon empowering students through coding and impactful innovation.',
    color: 'from-fuchsia-500 to-rose-500',
    icon: Webhook,
    isUpcoming: false,
    images: [
        'veda 1.jpeg',
        'veda 2.jpeg',
        'veda 3.jpeg',
        'https://picsum.photos/600/400?random=33'
    ]
  },
  {
    title: 'Next Big Event',
    date: 'TBD',
    crowd: 'Expected 1000+',
    location: 'MUJ Campus',
    color: 'from-cyan-500 to-brand-primary',
    status: 'Upcoming',
    description: 'Stay tuned for our next high-energy tech gathering!',
    icon: Calendar,
    isUpcoming: true,
    images: ['https://picsum.photos/600/400?random=4']
  }
];

export default function Events() {
  const [view, setView] = useState<'past' | 'upcoming'>('past');

  const filteredEvents = events.filter(e => 
    view === 'past' ? !e.isUpcoming : e.isUpcoming
  );

  // Staggered intervals: 1st=3s, 2nd=4s, 3rd=5s
  const getInterval = (index: number) => {
    const intervals = [3000, 4000, 5000];
    return intervals[index] || 3000;
  };

  return (
    <section id="events" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Toggle Switch */}
<div className="flex justify-center mb-16">
  <div className="bg-white/5 backdrop-blur-md p-1 rounded-full border border-white/10 flex relative w-72 h-11">
    {/* The Sliding Pill */}
    <motion.div
      initial={false}
      animate={{ 
        // We move the pill by exactly half the container width (144px)
        // minus the 4px padding we started with (left-1)
        x: view === 'past' ? 0 : 140 
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute inset-y-1 left-1 bg-brand-primary rounded-full z-0"
      style={{ width: 'calc(50% - 4px)' }}
    />
    
    <button 
      onClick={() => setView('past')} 
      className={`relative z-10 flex-1 h-full text-sm font-bold transition-colors duration-200 ${
        view === 'past' ? 'text-black' : 'text-white'
      }`}
    >
      Past Chapters
    </button>
    
    <button 
      onClick={() => setView('upcoming')} 
      className={`relative z-10 flex-1 h-full text-sm font-bold transition-colors duration-200 ${
        view === 'upcoming' ? 'text-black' : 'text-white'
      }`}
    >
      Upcoming
    </button>
  </div>
</div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary via-emerald-500 to-transparent" />
          
          <div className="space-y-12">
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex-1 hidden md:block" />
                  
                  <div className="relative z-10 flex-shrink-0 mt-8">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${event.color} p-0.5 shadow-xl`}>
                      <div className="w-full h-full rounded-full bg-[#09090b] flex items-center justify-center">
                        <event.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 overflow-hidden group hover:border-brand-primary/30 transition-all">
                      
                      {/* Image Gallery Component with staggered timing and hover pause */}
                      <AutoImageGallery 
                        images={event.images} 
                        intervalTime={getInterval(index)} 
                      />

                      <div className="p-6">
                        <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${event.color} bg-opacity-20 mb-4`}>
                          <span className="text-[10px] font-bold text-white uppercase tracking-widest">{event.status}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
                        <p className="text-gray-400 mb-6 text-sm">{event.description}</p>

                        {/* Event Details: Date, Location, Crowd */}
                        <div className="flex flex-wrap items-center gap-6 text-gray-400">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-brand-primary" />
                            <span className="text-sm">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-brand-primary" />
                            <span className="text-sm">{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <UsersIcon className="w-4 h-4 datext-cyan-400" />
                            <span className="text-sm font-semibold text-white">{event.crowd} Crowd Engagement</span>
                          </div>
                        </div>

                        {view === 'upcoming' && (
                          <motion.button whileHover={{ scale: 1.05 }} className={`mt-6 w-full py-3 rounded-xl bg-gradient-to-r ${event.color} text-white font-bold text-xs uppercase tracking-widest shadow-lg`}>
                            Register Now
                          </motion.button>
                        )}
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