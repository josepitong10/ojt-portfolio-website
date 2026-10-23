import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Building } from 'lucide-react';

const typeIcons = {
  education: GraduationCap,
  ojt: Building,
  work: Briefcase,
};

const typeLabels = {
  education: 'Education',
  ojt: 'OJT',
  work: 'Work',
};

export function TimelineItem({ item, index, isLast }) {
  const Icon = typeIcons[item.type] || Briefcase;

  return (
    <div className="relative flex gap-5 md:gap-6">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: index * 0.1 }}
          className="w-11 h-11 rounded-xl bg-primary-600 text-white flex items-center justify-center shrink-0 z-10 shadow-lg shadow-primary-600/30"
        >
          <Icon className="w-5 h-5" />
        </motion.div>
        {!isLast && <div className="w-px grow bg-gradient-to-b from-primary-500/50 to-slate-200 dark:to-slate-700 mt-2" />}
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`grow ${isLast ? '' : 'pb-10'}`}
      >
        <div className="glass-card p-6 hover:border-primary-500/50 transition-colors">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-500/10 text-primary-700 dark:text-primary-300">
              {typeLabels[item.type] || 'Work'}
            </span>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {item.start} &ndash; {item.end}
            </span>
          </div>
          <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">{item.role}</h3>
          <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-3">{item.company}</p>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
