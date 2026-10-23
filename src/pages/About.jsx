import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Download, Mail, MapPin, Phone, Check } from 'lucide-react';

import { profile } from '../data/profile';
import { SectionTitle } from '../components/SectionTitle';

export function About() {
  const contactRows = [
    { Icon: MapPin, content: profile.location },
    { Icon: Mail, content: <a href={`mailto:${profile.email}`} className="hover:text-primary-500 transition-colors break-all">{profile.email}</a> },
    { Icon: Phone, content: <a href={`tel:${profile.phone}`} className="hover:text-primary-500 transition-colors">{profile.phone}</a> },
  ];

  return (
    <>
      <Helmet>
        <title>About Me | {profile.name}</title>
        <meta name="description" content="Learn more about my background, education, and passions." />
      </Helmet>

      <section className="pt-32 pb-12">
        <div className="container-page max-w-5xl">
          <SectionTitle
            eyebrow="About"
            title="About Me"
            subtitle="Get to know the person behind the code."
          />

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5"
            >
              <div className="relative group max-w-sm mx-auto">
                <div aria-hidden="true" className="absolute -inset-3 bg-gradient-to-tr from-primary-400 to-sky-400 rounded-3xl opacity-25 group-hover:opacity-40 blur-xl transition duration-500" />
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img
                    src={profile.aboutImage}
                    alt={profile.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>

              <div className="glass-card p-6 mt-8 space-y-4 max-w-sm mx-auto">
                {contactRows.map(({ Icon, content }, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                    <span className="w-9 h-9 rounded-lg bg-primary-500/10 text-primary-600 dark:text-primary-400 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="text-sm">{content}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-7 space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
            >
              <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
                I'm {profile.name}, a <span className="text-gradient">{profile.role}</span>.
              </h3>
              <p>{profile.objective}</p>

              <div className="pt-4">
                <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4">When I'm not coding</h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {profile.hobbies.map(hobby => (
                    <li key={hobby} className="flex items-start gap-3 text-base">
                      <Check className="w-5 h-5 mt-0.5 text-primary-500 shrink-0" />
                      {hobby}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-primary">
                  Download Full Resume <Download className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
