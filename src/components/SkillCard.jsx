import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2, FileJson, Palette, Move, Server, Database, DatabaseBackup, Flame,
  GitBranch, Figma, MonitorSmartphone, Eye, Layout, Wrench,
} from 'lucide-react';

const icons = {
  Code2, FileJson, Palette, Move, Server, Database, DatabaseBackup, Flame,
  GitBranch, Figma, MonitorSmartphone, Eye,
};

const categoryIcons = [Layout, Server, Wrench];

export function SkillCard({ group, index }) {
  const CategoryIcon = categoryIcons[index % categoryIcons.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-7 hover:border-primary-500/50 transition-colors"
    >
      <div className="w-11 h-11 rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-5">
        <CategoryIcon className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-4">
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.items.map(skill => {
          const Icon = icons[skill.icon];
          return (
            <span key={skill.name} className="chip">
              {Icon && <Icon className="w-4 h-4 text-primary-600 dark:text-primary-400" />}
              {skill.name}
            </span>
          );
        })}
      </div>
    </motion.div>
  );
}
