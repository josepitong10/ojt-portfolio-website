import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Search } from 'lucide-react';

import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { SectionTitle } from '../components/SectionTitle';
import { ProjectCard } from '../components/ProjectCard';

export function Projects() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const query = search.toLowerCase();
  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'All' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(query) ||
                          project.tech.some(t => t.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Projects | {profile.name}</title>
        <meta name="description" content="A collection of my recent web, mobile, and school projects." />
      </Helmet>

      <section className="pt-32 pb-12">
        <div className="container-page">
          <SectionTitle
            eyebrow="Portfolio"
            title="My Projects"
            subtitle="A showcase of my recent work across various domains."
          />

          {/* Filters & Search */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
            <div className="flex flex-wrap gap-2 justify-center p-1 rounded-full bg-white/60 dark:bg-white/5 border border-slate-200/70 dark:border-white/10">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  aria-pressed={filter === category}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    filter === category
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <label className="relative w-full md:w-72">
              <span className="sr-only">Search projects</span>
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="search"
                placeholder="Search by name or tech..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors text-sm"
              />
            </label>
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map(project => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
            {filteredProjects.length === 0 && (
              <p className="col-span-full text-center py-20 text-slate-500 dark:text-slate-400">
                No projects found matching your criteria.
              </p>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
