import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  ChevronRight, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Calendar, 
  Menu, 
  X,
  CheckCircle2,
  Github,
  Linkedin,
  Twitter,
  ArrowUpRight
} from 'lucide-react';
import { PROJECTS, SKILLS } from './constants';
import ProjectCard from './components/ProjectCard';
import SectionHeading from './components/SectionHeading';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-blue-600/30 selection:text-blue-200 font-sans">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/2 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full opacity-20" />
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.a 
            href="#about"
            className="text-2xl font-bold tracking-tighter flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <Code2 size={22} />
            </div>
            <span className="hidden sm:inline-block font-display tracking-tight">AYOMIDE<span className="text-blue-500 font-black">.</span></span>
          </motion.a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-all hover:translate-y-[-1px]">
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-white text-black px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-xl"
            >
              Get In Touch
            </a>
          </div>

          <button className="md:hidden text-white p-2 bg-white/5 rounded-lg border border-white/10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-0 w-full bg-[#050505] border-b border-white/5 shadow-2xl"
            >
              <div className="flex flex-col p-8 gap-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-2xl font-bold italic text-gray-400 hover:text-blue-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="about" className="pt-48 pb-32 px-6 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8 flex flex-col items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-10"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Available for New Projects
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl md:text-[10rem] font-bold tracking-tighter mb-10 leading-[0.8] font-display italic"
              >
                OYEBADE <br/> 
                <span className="text-blue-600 not-italic">AYOMIDE</span> <br/>
                <span className="text-white/10">ADELEKE</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-400 mb-14 max-w-2xl leading-tight font-light italic"
              >
                A <span className="text-white font-medium border-b border-blue-500/50">Prodigy Developer</span> from Ibadan, obsessed with crafting high-performance digital ecosystems and fluid user interfaces at 
                <span className="text-white"> Larva Tech Academy.</span>
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-5"
              >
                <a href="#projects" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all flex items-center gap-3 group shadow-xl">
                  View My Work
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="mailto:ayomideoyebade884@gmail.com" className="bg-white/5 hover:bg-white/10 border border-white/10 px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all flex items-center gap-3 group">
                  Get in Touch
                  <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
                </a>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-4 hidden lg:block"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-blue-600/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 p-2">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop" 
                    alt="Code Workspace"
                    className="w-full h-full object-cover rounded-[1.5rem] grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Marquee Strip - Simplified */}
        <section className="bg-blue-600 py-6 overflow-hidden transform skew-y-[-1deg] z-20 sticky top-0 md:relative">
          <div className="flex gap-12 whitespace-nowrap animate-infinite-scroll">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 text-black font-black uppercase tracking-tighter text-3xl italic">
                <span>Frontend Dev</span>
                <span className="w-3 h-3 bg-white rounded-full" />
                <span>React Specialist</span>
                <span className="w-3 h-3 bg-white rounded-full" />
                <span>Based in Ibadan</span>
                <span className="w-3 h-3 bg-white rounded-full" />
              </div>
            ))}
          </div>
        </section>


        {/* Projects Section */}
        <section id="projects" className="py-40 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              badge="Selected Works"
              title="Building Digital Empires"
              description="From healthcare portals to advanced e-commerce logic. I build robust tools for the modern web with attention to every pixel."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {PROJECTS.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-40 px-6 bg-white/[0.01] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-end">
              <SectionHeading 
                badge="Expertise"
                title="The Technical Arsenal"
                description="My workflow is built around performance, accessibility, and modern standards. I turn complex logic into fluid user interfaces."
              />
              <div className="flex flex-wrap gap-4 mb-16 lg:mb-0 justify-end">
                {SKILLS.map((skill, index) => (
                  <motion.div
                    key={skill}
                    whileHover={{ 
                      y: -8, 
                      backgroundColor: 'rgba(59, 130, 246, 0.1)', 
                      borderColor: 'rgba(59, 130, 246, 0.5)',
                      boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.3)'
                    }}
                    transition={{ duration: 0.2 }}
                    className="px-8 py-4 rounded-2xl bg-white/[0.03] border border-white/10 transition-all cursor-default flex items-center gap-4 group"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(59,130,246,1)]" />
                    <span className="text-sm font-display font-black tracking-widest uppercase italic">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Background */}
        <section className="py-40 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading 
                badge="Biography"
                title="Born for the Code"
                description="I was trained at Larva Tech Academy (Off Favos bus stop, New Bodija, Ibadan), where I transitioned from a student to a technical professional capable of handling full-scale digital challenges."
              />

              <div className="space-y-6">
                {[
                  { 
                    icon: GraduationCap, 
                    title: "Larva Tech Academy", 
                    subtitle: "Intensive Web Development Training",
                    detail: "Favos B/S, New Bodija, Ibadan, Oyo State"
                  },
                  { 
                    icon: Calendar, 
                    title: "The Vision", 
                    subtitle: "Born June 2nd, 2006",
                    detail: "Starting young, building deep roots in Frontend excellence."
                  },
                  { 
                    icon: CheckCircle2, 
                    title: "Full-Stack Ready", 
                    subtitle: "Static sites to dynamic APIs",
                    detail: "Specialized in connecting fluid frontends to complex data streams."
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex gap-8 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 group transition-colors hover:bg-white/[0.04]"
                  >
                    <div className="w-16 h-16 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-sm text-gray-400 mb-1">{item.subtitle}</p>
                      <div className="text-xs text-gray-600 font-mono italic">{item.detail}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 group"
            >
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop" 
                alt="Programming" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale opacity-40" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-blue-600/10" />
              <div className="absolute inset-0 flex flex-col justify-end p-12 bg-gradient-to-t from-black via-transparent to-transparent">
                <h5 className="text-8xl font-black tracking-tighter italic mb-4">Ibadan<span className="text-blue-500">.</span></h5>
                <p className="text-sm font-black uppercase tracking-[0.4em] text-gray-500">Based In Nigeria</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-48 px-6 bg-blue-600 text-black relative z-30 skew-y-[-2deg]">
          <div className="max-w-5xl mx-auto text-center transform skew-y-[2deg]">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-[8rem] font-black tracking-tighter mb-16 leading-[0.8] italic uppercase"
            >
              Let's build <br/> 
              <span className="text-white hover:text-black transition-colors duration-500 cursor-default">Great things</span>
            </motion.h2>
            
            <div className="flex flex-col items-center gap-12">
              <a 
                href="mailto:ayomideoyebade884@gmail.com" 
                className="text-3xl md:text-5xl font-bold tracking-tight border-b-4 border-black pb-2 hover:text-white hover:border-white transition-all duration-300"
              >
                ayomideoyebade884@gmail.com
              </a>

              <div className="flex gap-6">
                {[
                  { icon: Github, href: "https://github.com/ayomideoyebade884" },
                  { icon: Linkedin, href: "#" },
                  { icon: Twitter, href: "#" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href}
                    className="w-20 h-20 bg-black text-white rounded-3xl flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 shadow-2xl hover:-translate-y-2"
                  >
                    <social.icon size={32} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="pt-60 pb-12 px-6 bg-[#000000]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="space-y-6">
            <div className="text-4xl font-black italic tracking-tighter">AYOMIDE<span className="text-blue-500">.</span></div>
            <p className="text-gray-500 max-w-sm text-sm font-medium leading-relaxed">
              Merging youth with technical excellence. Always open for new challenges and complex web ecosystems.
            </p>
          </div>
          <div className="flex flex-col items-end gap-4">
            <div className="flex gap-8 text-xs font-black uppercase tracking-widest text-gray-500">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#projects" className="hover:text-white transition-colors">Work</a>
              <a href="#skills" className="hover:text-white transition-colors">Tools</a>
              <a href="#contact" className="hover:text-white transition-colors">Hire</a>
            </div>
            <p className="text-[10px] font-mono text-gray-700">
              © {new Date().getFullYear()} OYEBADE AYOMIDE ADELEKE. LOCAL TIME {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} GMT+1
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
