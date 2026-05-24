import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import { experience } from '../data/experience';
import { certificates } from '../data/certificates';
import { testimonials } from '../data/testimonials';

import { SectionTitle } from '../components/SectionTitle';
import { AnimatedText } from '../components/AnimatedText';
import { ProjectCard } from '../components/ProjectCard';
import { SkillBar } from '../components/SkillBar';
import { TimelineItem } from '../components/TimelineItem';
import { CertificateCard } from '../components/CertificateCard';

export function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{profile.name} | {profile.role}</title>
        <meta name="description" content={profile.tagline} />
      </Helmet>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-3xl md:w-3/5">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary-500 font-medium tracking-wide uppercase mb-4"
            >
              Hi, my name is
            </motion.p>
            <AnimatedText 
              text={profile.name} 
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 dark:text-white mb-4 tracking-tight" 
            />
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-5xl font-display font-bold text-slate-500 dark:text-slate-400 mb-6"
            >
              I build things for the web.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed"
            >
              {profile.tagline} {profile.bio.split('.')[0]}.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/projects" className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium transition-colors flex items-center gap-2">
                View Work <ArrowRight className="w-5 h-5" />
              </Link>
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="px-8 py-4 bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border hover:border-primary-500 text-slate-800 dark:text-white rounded-xl font-medium transition-colors flex items-center gap-2 shadow-sm">
                Resume <Download className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
            className="md:w-2/5 flex justify-center mt-12 md:mt-0"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-primary-500 rounded-3xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 ease-in-out"></div>
              <img 
                src={profile.avatar} 
                alt={profile.name} 
                className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl border-4 border-white dark:border-dark-card shadow-xl group-hover:scale-[1.02] transition-transform duration-300 ease-in-out"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white dark:bg-dark-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Featured Projects" 
            subtitle="Some things I've built recently." 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.slug} project={project} index={idx} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/projects" className="inline-flex items-center gap-2 text-primary-500 font-medium hover:text-primary-600 transition-colors">
               <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Technical Skills" 
            subtitle="Technologies and tools I work with." 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {skills.map((skillGroup, idx) => (
              <motion.div 
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass p-8 rounded-2xl"
              >
                <h3 className="text-xl font-display font-bold mb-6 text-slate-800 dark:text-white">{skillGroup.category}</h3>
                {skillGroup.items.map(skill => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-20 bg-white dark:bg-dark-card/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Experience & Education" 
            subtitle="My journey so far." 
          />
          <div className="mt-12 space-y-12">
            {experience.map((item, idx) => (
              <TimelineItem 
                key={item.id} 
                item={item} 
                index={idx} 
                isLast={idx === experience.length - 1} 
              />
            ))}
          </div>
        </div>
      </section>
{/*
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Certifications" 
            subtitle="Continuous learning and achievements." 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificates.map((cert, idx) => (
              <CertificateCard key={cert.id} cert={cert} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-dark-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Testimonials" 
            subtitle="What people say about me." 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass p-8 rounded-2xl flex flex-col"
              >
                <div className="text-4xl text-primary-500/20 mb-4">"</div>
                <p className="text-slate-600 dark:text-slate-300 italic mb-6 grow">
                  {test.message}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={test.avatar} alt={test.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-sm text-slate-800 dark:text-white">{test.name}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
*/}
      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-16 flex flex-col items-center"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-slate-800 dark:text-white">Let's build something together</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <Link to="/contact" className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium transition-colors flex items-center gap-2 text-lg">
              Say Hello
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
