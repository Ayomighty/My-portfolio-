import React from 'react';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  badge: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ badge, title, description, align = 'left' }) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
        {badge}
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-[0.9] italic"
      >
        {title.split(' ').map((word, i) => (
          <span key={i} className={i % 2 === 1 ? 'text-blue-500 not-italic' : ''}>
            {word}{' '}
          </span>
        ))}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`text-gray-400 max-w-xl text-lg leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
