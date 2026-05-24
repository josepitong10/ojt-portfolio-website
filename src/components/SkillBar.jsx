import React from 'react';
import { motion } from 'framer-motion';

export function SkillBar({ skill }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-sm flex items-center gap-2">
          {skill.name}
        </span>
        <span className="text-sm font-semibold text-primary-500">{skill.level}%</span>
      </div>
      <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-full bg-primary-500 rounded-full"
        />
      </div>
    </div>
  );
}
