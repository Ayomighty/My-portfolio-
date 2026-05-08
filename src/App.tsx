/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Mail, 
  MapPin, 
  GraduationCap, 
  ExternalLink, 
  Calendar, 
  ChevronRight, 
  Menu, 
  X,
  CheckCircle2,
  Globe,
  Database,
  Smartphone,
  Github,
  Linkedin,
  Twitter,
  Layout,
  Code
} from 'lucide-react';
import { PROJECTS, SKILLS } from './constants';

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
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 selection:text-blue-200 font-sans">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <Code2 size={18} />
            </div>
            <span className="hidden sm:inline">Oyebade Ayomide</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all"
            >
              Hire Me
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black border-b border-white/10 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-lg font-medium text-gray-400"
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
        <section id="about" className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-8">
                <CheckCircle2 size={12} />
                Available for New Challenges
              </div>
              <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.85] font-display italic">
                OYEBADE <br/> 
                <span className="text-blue-500 not-italic">AYOMIDE</span> <br/>
                <span className="text-white/20">ADELEKE</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-xl leading-snug font-light italic">
                Frontend Developer transforming code into <span className="text-white border-b border-blue-500">art</span>. 
                Expert in React, Tailwind, and high-performance digital ecosystems.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 group">
                  View Works
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#contact" className="bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-3 rounded-full font-bold transition-all">
                  Contact Me
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square lg:aspect-auto h-[400px] lg:h-[600px] rounded-3xl overflow-hidden border border-white/10"
            >
              <img 
                src="https://picsum.photos/seed/ayomide/1200/1200" 
                alt="Portrait"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">O</div>
                  <div>
                    <div className="font-bold">Oyebade Ayomide A.</div>
                    <div className="text-sm text-gray-400">Frontend Developer</div>
                  </div>
                </div>
                <div className="text-xs text-blue-400 font-mono">Born June 2, 2006 • Ibadan, Nigeria</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {[
              { label: 'Experience', value: 'Fresh' },
              { label: 'Projects', value: PROJECTS.length + '+' },
              { label: 'Skills', value: SKILLS.length + '+' },
              { label: 'Energy', value: '100%' },
            ].map((stat, i) => (
              <div key={i} className="p-8 text-center md:text-left">
                <div className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">{stat.label}</div>
                <div className="text-3xl font-mono font-bold italic">{stat.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500 mb-4">Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">The Toolkit I Use to<br/>Build the Future.</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5, backgroundColor: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.5)' }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-6 py-3 rounded-full bg-white/[0.03] border border-white/5 transition-all cursor-default flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-sm font-display font-medium tracking-wide uppercase italic">{skill}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500 mb-4">Selected Work</h2>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Showcasing Capabilities.</h3>
              </div>
              <p className="text-gray-400 max-w-md">
                From simple static websites to fully functional and dynamic web apps. Every project is a step towards perfection.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/[0.03] border border-white/5 rounded-[2.5rem] overflow-hidden group hover:border-white/20 transition-all flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center">
                        <ExternalLink size={20} />
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase py-1 px-2 bg-white/5 rounded-md border border-white/10 text-gray-400 tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
                      <span className="text-xs font-mono text-blue-400">0{index + 1} / {PROJECTS.length}</span>
                      <button className="text-sm font-bold flex items-center gap-2 group/btn">
                        Details <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & About Part 2 */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500 mb-4">Background</h2>
                <h3 className="text-4xl font-bold mb-6">Self-Taught & Professionally Guided.</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  My journey started with a curiosity for how things work on the screen. 
                  This passion led me to <span className="text-white font-medium">Larva Tech Academy</span> in Ibadan, where I honed my skills in professional web development.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-6 p-6 rounded-3xl bg-white/[0.03] border border-white/5">
                  <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center shrink-0">
                    <GraduationCap />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Larva Tech Academy</h4>
                    <p className="text-sm text-gray-400 mb-2">Web Development Intensive Program</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <MapPin size={12} /> Off Favos bus stop, New Bodija, Ibadan, Oyo State
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 p-6 rounded-3xl bg-white/[0.03] border border-white/5">
                  <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center shrink-0">
                    <Calendar />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">19-Year-Old Prodigy</h4>
                    <p className="text-sm text-gray-400 mb-2">Merging youth with technical depth</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      Born June 2nd, 2006
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="aspect-[3/4] bg-white/[0.03] rounded-3xl border border-white/5 overflow-hidden">
                  <img src="https://picsum.photos/seed/code1/400/600" alt="Work" className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8 bg-blue-600 rounded-3xl flex flex-col justify-end min-h-[200px] shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                  <h5 className="text-4xl font-bold">100%</h5>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-80 italic">Commitment</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="p-8 bg-white/10 backdrop-blur-xl rounded-3xl flex flex-col justify-end min-h-[200px] border border-white/10">
                  <h5 className="text-4xl font-bold tracking-tighter">Ibadan</h5>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-80">Based In</p>
                </div>
                <div className="aspect-[3/4] bg-white/[0.03] rounded-3xl border border-white/5 overflow-hidden">
                  <img src="https://picsum.photos/seed/code2/400/600" alt="Work" className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500 mb-4">Get In Touch</h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tight mb-12 italic leading-tight">
              Ready to Build Something <span className="text-blue-500 underline underline-offset-8">Amazing</span>?
            </h3>
            
            <div className="flex flex-col gap-6 mb-16">
              <a href="mailto:ayomideoyebade884@gmail.com" className="text-3xl md:text-4xl font-medium hover:text-blue-500 transition-colors break-all">
                ayomideoyebade884@gmail.com
              </a>
              <div className="flex justify-center gap-8">
                <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                  <Github />
                </a>
                <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                  <Linkedin />
                </a>
                <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                  <Twitter />
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block mb-4">Location</span>
                <p className="text-lg font-medium">Ibadan, Oyo State, Nigeria</p>
              </div>
              <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block mb-4">Local Time</span>
                <p className="text-lg font-medium">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} GMT+1</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Oyebade Ayomide Adeleke. Built with React & Tailwind.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Cookies</a>
            <a href="#about" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Back to Top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
