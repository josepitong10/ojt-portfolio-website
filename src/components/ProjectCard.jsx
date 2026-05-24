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
      className="group glass-card overflow-hidden flex flex-col h-full"
    >
      <Link to={`/projects/${project.slug}`} className="block relative overflow-hidden aspect-video shrink-0">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="flex items-center gap-2 text-white font-medium bg-primary-500 px-4 py-2 rounded-full">
            View Details <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
      
      <div className="p-6 flex flex-col grow">
        <div className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-2">
          {project.category}
        </div>
        <h3 className="text-xl font-display font-bold mb-2">
          <Link to={`/projects/${project.slug}`} className="hover:text-primary-500 transition-colors">
            {project.title}
          </Link>
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2 grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.slice(0, 3).map((tech) => (
            <span key={tech} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-md">
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-md">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
