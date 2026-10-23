import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass-card overflow-hidden flex flex-col h-full hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/10 hover:border-primary-500/50 transition-all duration-300"
    >
      <Link to={`/projects/${project.slug}`} className="block relative overflow-hidden aspect-video shrink-0 bg-slate-100 dark:bg-slate-800">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-slate-900/80 text-slate-800 dark:text-slate-100 backdrop-blur">
          {project.category}
        </span>
      </Link>

      <div className="p-6 flex flex-col grow">
        <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2">
          <Link to={`/projects/${project.slug}`} className="flex items-start justify-between gap-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            {project.title}
            <ArrowUpRight className="w-5 h-5 shrink-0 mt-0.5 text-slate-400 group-hover:text-primary-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
          </Link>
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-5 line-clamp-2 grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech) => (
            <span key={tech} className="px-2 py-0.5 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
