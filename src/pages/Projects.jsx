import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Search } from 'lucide-react';

import { projects } from '../data/projects';
import { SectionTitle } from '../components/SectionTitle';
import { ProjectCard } from '../components/ProjectCard';

export function Projects() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  useEffect(() => {
    // Simulate loading for skeleton effect
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'All' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) || 
                          project.tech.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Projects | Portfolio</title>
        <meta name="description" content="A collection of my recent web, mobile, and school projects." />
      </Helmet>

      <section className="pt-32 pb-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="My Projects" 
            subtitle="A showcase of my recent work across various domains." 
          />

          {/* Filters & Search */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === category 
                      ? 'bg-primary-500 text-white shadow-md' 
                      : 'bg-white dark:bg-dark-card text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-slate-400" />
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {isLoading ? (
                // Skeletons
                Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={`skeleton-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="glass-card overflow-hidden h-[400px] animate-pulse"
                  >
                    <div className="h-48 bg-slate-200 dark:bg-slate-800 w-full" />
                    <div className="p-6">
                      <div className="h-4 bg-slate-200 dark:bg-slate-800 w-1/4 rounded mb-4" />
                      <div className="h-6 bg-slate-200 dark:bg-slate-800 w-3/4 rounded mb-4" />
                      <div className="h-4 bg-slate-200 dark:bg-slate-800 w-full rounded mb-2" />
                      <div className="h-4 bg-slate-200 dark:bg-slate-800 w-2/3 rounded" />
                    </div>
                  </motion.div>
                ))
              ) : filteredProjects.length > 0 ? (
                filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectCard project={project} index={0} />
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-20 text-slate-500"
                >
                  No projects found matching your criteria.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
