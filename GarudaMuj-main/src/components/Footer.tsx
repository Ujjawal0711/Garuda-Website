import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Instagram, Mail, Code2, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/club-garuda-official/', label: 'LinkedIn', color: 'hover:text-blue-500' },
  { icon: Instagram, href: 'https://www.instagram.com/garudamujofficial?igsh=MWNwbm81eGdodXhveA==', label: 'Instagram', color: 'hover:text-fuchsia-400' },
  { icon: Mail, href: 'mailto:garuda.club@muj.manipal.edu', label: 'Email', color: 'hover:text-brand-accent' },
];

const quickLinks = [
  { title: 'About Us', href: '#about' },
  { title: 'Events', href: '#events' },
  { title: 'Projects', href: '#' },
  { title: 'Blog', href: '#' },
  { title: 'Join Us', href: '#contact' },
  { title: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-2 mb-4">
  <motion.div
    whileHover={{ scale: 1.1 }} // Logo grows by 10%
    whileTap={{ scale: 0.95 }}  // Logo shrinks slightly when clicked
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    className="cursor-pointer"
  >
    <img 
      src="/Garuda_pfp-removebg-preview.png" 
      alt="Garuda Logo" 
      className="h-24 w-auto object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]" 
    />
  </motion.div>
</div>

              
            </div>
            <p className="text-gray-400 mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Building the future of technology, one line of code at a time. Join our community of
              innovators and creators.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>by Garuda Team</span>
            </div>
          </motion.div>

         

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-6 drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]">
              Connect With Us
            </h3>
            <p className="text-gray-400 mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Follow us on social media and stay updated with the latest news, events, and
              opportunities.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 ${social.color} transition-colors group relative overflow-hidden`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-20 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <div className="flex gap-6">
           
            <a 
  href="/CLUB GARUDA BY-LAWS.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-brand-primary text-sm transition-all drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-2"
>
  {/* Optional: Simple PDF Icon */}
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
  Code of Conduct
</a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-brand-primary/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-brand-secondary/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>
    </footer>
  );
}
