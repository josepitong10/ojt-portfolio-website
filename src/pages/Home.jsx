import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Download, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import { experience } from '../data/experience';
import { certificates } from '../data/certificates';
import { testimonials } from '../data/testimonials';

import { SectionTitle } from '../components/SectionTitle';
import { ProjectCard } from '../components/ProjectCard';
import { SkillCard } from '../components/SkillCard';
import { TimelineItem } from '../components/TimelineItem';
import { CertificateCard } from '../components/CertificateCard';
import { SocialLinks } from '../components/SocialLinks';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  const currentRole = experience.find(e => e.end === 'Present' && e.type !== 'education');

  return (
    <>
      <Helmet>
        <title>{profile.name} | {profile.role}</title>
        <meta name="description" content={profile.tagline} />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-grid" />
        <div aria-hidden="true" className="absolute -top-40 left-1/2 -translate-x-1/2 w-[44rem] h-[44rem] rounded-full bg-primary-400/20 dark:bg-primary-500/10 blur-3xl" />

        <div className="container-page relative w-full grid md:grid-cols-[1.35fr_1fr] gap-14 items-center">
          <div>
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full glass text-sm font-medium text-slate-700 dark:text-slate-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
              </span>
              {profile.availability}
            </motion.div>

            <motion.h1 {...fadeUp(0.1)} className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-slate-900 dark:text-white leading-[1.05]">
              Hi, I'm <span className="text-gradient">{profile.name.split(' ')[0]}</span>
              <span className="block text-slate-400 dark:text-slate-500">{profile.role}.</span>
            </motion.h1>

            <motion.p {...fadeUp(0.2)} className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              {profile.tagline} {profile.bio.split('.')[0]}.
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="mt-9 flex flex-wrap gap-3">
              <Link to="/projects" className="btn-primary">
                View My Work <ArrowRight className="w-5 h-5" />
              </Link>
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                Resume <Download className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.4)} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary-500" /> {profile.location}
              </span>
              <SocialLinks className="-ml-2" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.3, delay: 0.2 }}
            className="relative mx-auto w-full max-w-xs md:max-w-sm"
          >
            <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-primary-500 to-sky-400 opacity-70 blur-xl" />
            <div className="relative rounded-[2rem] p-1.5 bg-gradient-to-tr from-primary-500 to-sky-400">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full aspect-[4/5] object-cover rounded-[1.6rem] bg-slate-200 dark:bg-slate-800"
              />
            </div>

            {currentRole && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-6 -left-4 sm:-left-10 glass-card px-4 py-3 flex items-center gap-3 shadow-xl"
              >
                <span className="w-9 h-9 rounded-lg bg-primary-500/10 text-primary-600 dark:text-primary-400 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">Currently</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{currentRole.role}</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container-page">
          <SectionTitle
            eyebrow="Portfolio"
            title="Featured Projects"
            subtitle="Some things I've built recently."
          />
          <div className={`grid gap-8 ${featuredProjects.length === 1 ? 'max-w-md mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.slug} project={project} index={idx} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/projects" className="inline-flex items-center gap-2 font-medium text-primary-600 dark:text-primary-400 hover:gap-3 transition-all">
              View all projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 bg-white/60 dark:bg-dark-card/30 border-y border-slate-200/70 dark:border-dark-border/60">
        <div className="container-page">
          <SectionTitle
            eyebrow="Toolbox"
            title="Technical Skills"
            subtitle="Technologies and tools I work with."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((group, idx) => (
              <SkillCard key={group.category} group={group} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-24">
        <div className="container-page max-w-3xl">
          <SectionTitle
            eyebrow="Journey"
            title="Experience & Education"
            subtitle="My journey so far."
          />
          {experience.map((item, idx) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={idx}
              isLast={idx === experience.length - 1}
            />
          ))}
        </div>
      </section>

      {certificates.length > 0 && (
        <section className="py-24">
          <div className="container-page">
            <SectionTitle
              eyebrow="Learning"
              title="Certifications"
              subtitle="Continuous learning and achievements."
            />
            <div className="grid md:grid-cols-3 gap-8">
              {certificates.map((cert, idx) => (
                <CertificateCard key={cert.id} cert={cert} index={idx} />
              ))}
            </div>
          </div>
        </section>
      )}

      {testimonials.length > 0 && (
        <section className="py-24">
          <div className="container-page">
            <SectionTitle
              eyebrow="Kind words"
              title="Testimonials"
              subtitle="What people say about me."
            />
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((test, idx) => (
                <motion.div
                  key={test.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card p-8 flex flex-col"
                >
                  <p className="text-slate-600 dark:text-slate-300 italic mb-6 grow">&ldquo;{test.message}&rdquo;</p>
                  <div className="flex items-center gap-4">
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
      )}

      {/* CTA */}
      <section className="pt-8 pb-4">
        <div className="container-page">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-teal-600 to-sky-700 px-6 py-16 md:px-16 text-center text-white"
          >
            <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-40" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-5 tracking-tight">Let's build something together</h2>
              <p className="text-lg text-primary-50/90 mb-9 max-w-2xl mx-auto">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-primary-700 font-semibold hover:-translate-y-0.5 hover:shadow-xl transition-all">
                Say Hello <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
