import { motion } from 'framer-motion';

// Split the members into two distinct groups
const topMembers = [
  { name: 'Dr. Sanchit Anand', role: 'Assistant Director DSW (Clubs/Chapters)', img: '/Sanchit.jpeg' },
  { name: 'Dr. Sourav Kumar Das', role: 'Faculty Co-ordinator ', img: '/saurav.jpeg' },
];

const gridMembers = [
  { name: 'Om Shisodiya', role: 'Chairperson', img: '/Om.png' },
  { name: 'Vatsal Sharma', role: 'Vice-chairperson', img: '/Vatsal.jpeg' },
  { name: 'Kushagrah', role: 'General Secretary', img: '/Kushagrah.png' },
  { name: 'Rashiv Saran', role: 'Creative director', img: '/Rashiv.png' },
  { name: 'Harshvardhan Singh', role: 'Operational Director', img: '/harsh.png' },
  { name: 'Aditya Chauhan', role: 'Curations Director', img: '/Aditya.png' },
  { name: 'Inesh Goyal', role: 'Technical Secretary', img: '/Ineesh.jpeg' },
  { name: 'Reet Bhanushali', role: 'Cultural Secretary', img: '/Reet.png' },
  { name: 'Shaurya Sharma', role: 'Treasurer', img: '/Shaurya.png' },
];

export default function Team() {
  return (
    <section id="team" className="py-24 px-6 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-4">Our Team</h2>
          <div className="w-24 h-1.5 bg-brand-primary mx-auto rounded-full" />
        </motion.div>

        {/* SECTION 1: The Top 2 Members (Centered) */}
        <div className="flex justify-center gap-12 mb-12">
          {topMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>

        {/* SECTION 2: The 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {gridMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper Component to keep the code clean
function TeamMemberCard({ member, index }: { member: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group flex flex-col items-center"
    >
      <div className="relative w-64 h-64 mb-6">
        <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-brand-primary/20 group-hover:border-brand-primary transition-all duration-300">
          <img 
            src={member.img} 
            alt={member.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="absolute -inset-4 bg-brand-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
      <p className="text-brand-primary font-medium tracking-wide uppercase text-sm">{member.role}</p>
    </motion.div>
  );
}