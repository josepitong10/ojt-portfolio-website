import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ExternalLink, Github, ChevronRight, ChevronLeft } from 'lucide-react';

import { projects } from '../data/projects';

export function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const projectIndex = projects.findIndex(p => p.slug === slug);
  const project = projects[projectIndex];
  
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20">
        <h2 className="text-3xl font-display font-bold mb-4">Project Not Found</h2>
        <button onClick={() => navigate('/projects')} className="text-primary-500 hover:underline">
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Projects</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <article className="pt-32 pb-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link to="/projects" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-500 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to all projects
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-primary-500 font-semibold tracking-wide uppercase mb-2">
              {project.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900 dark:text-white">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-900 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 rounded-lg font-medium transition-colors">
                  <Github className="w-4 h-4" /> Source Code
                </a>
              )}
            </div>

            <div className="aspect-video w-full rounded-2xl overflow-hidden mb-12 shadow-xl">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-6">
                <h3 className="text-2xl font-display font-bold">Overview</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  {project.longDescription}
                </p>
                
                {project.gallery && project.gallery.length > 0 && (
                  <div className="mt-12 space-y-6">
                    <h3 className="text-2xl font-display font-bold">Gallery</h3>
                    <div className="grid grid-cols-1 gap-6">
                      {project.gallery.map((img, i) => (
                        <img key={i} src={img} alt={`${project.title} screenshot ${i+1}`} className="rounded-xl shadow-md w-full" />
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="space-y-8">
                <div className="glass p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm rounded-lg font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
              {prevProject ? (
                <Link to={`/projects/${prevProject.slug}`} className="group flex flex-col items-start">
                  <span className="text-slate-500 text-sm flex items-center gap-1 mb-1">
                    <ChevronLeft className="w-4 h-4" /> Previous
                  </span>
                  <span className="font-display font-bold text-lg group-hover:text-primary-500 transition-colors">
                    {prevProject.title}
                  </span>
                </Link>
              ) : <div></div>}
              
              {nextProject ? (
                <Link to={`/projects/${nextProject.slug}`} className="group flex flex-col items-end">
                  <span className="text-slate-500 text-sm flex items-center gap-1 mb-1">
                    Next <ChevronRight className="w-4 h-4" />
                  </span>
                  <span className="font-display font-bold text-lg group-hover:text-primary-500 transition-colors">
                    {nextProject.title}
                  </span>
                </Link>
              ) : <div></div>}
            </div>

          </motion.div>
        </div>
      </article>
    </>
  );
}
