import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Building } from 'lucide-react';

export function TimelineItem({ item, index, isLast }) {
  const getIcon = () => {
    switch (item.type) {
      case 'education': return <GraduationCap className="w-5 h-5 text-white" />;
      case 'ojt': return <Building className="w-5 h-5 text-white" />;
      default: return <Briefcase className="w-5 h-5 text-white" />;
    }
  };

  return (
    <div className="flex gap-4 md:gap-6 group">
      <div className="flex flex-col items-center">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: index * 0.1 }}
          className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center shrink-0 z-10 shadow-lg shadow-primary-500/30"
        >
          {getIcon()}
        </motion.div>
        {!isLast && (
          <div className="w-0.5 h-full bg-slate-200 dark:bg-slate-700 mt-2" />
        )}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="pb-12"
      >
        <div className="glass-card p-6 md:p-8 relative">
          {/* Arrow pointing to timeline */}
          <div className="absolute top-6 -left-3 w-3 h-3 bg-white dark:bg-dark-card border-l border-t border-slate-100 dark:border-dark-border rotate-[-45deg]" />
          
          <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-full mb-3">
            {item.start} — {item.end}
          </span>
          <h3 className="text-xl font-display font-bold">{item.role}</h3>
          <h4 className="text-primary-500 font-medium mb-4">{item.company}</h4>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
