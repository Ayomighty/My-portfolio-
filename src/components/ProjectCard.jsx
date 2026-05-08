import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ChevronRight } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
        
        <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-2xl"
          >
            <ExternalLink size={24} />
          </motion.div>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="text-[10px] font-bold uppercase py-1.5 px-3 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        <h4 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
          {project.title}
        </h4>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
          {project.description}
        </p>

        <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
          <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest">
            Case Study 0{index + 1}
          </span>
          <button className="flex items-center gap-2 text-sm font-bold group/btn text-white/70 hover:text-white transition-colors">
            Explore <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 group-hover:w-full transition-all duration-700" />
    </motion.div>
  );
};

export default ProjectCard;
