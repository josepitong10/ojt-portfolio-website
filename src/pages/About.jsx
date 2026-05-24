import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Download, Mail, MapPin, Phone } from 'lucide-react';

import { profile } from '../data/profile';
import { SectionTitle } from '../components/SectionTitle';

export function About() {
  return (
    <>
      <Helmet>
        <title>About Me | Portfolio</title>
        <meta name="description" content="Learn more about my background, education, and passions." />
      </Helmet>

      <section className="pt-32 pb-20 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="About Me"
            subtitle="Get to know the person behind the code."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">

            {/* Image & Quick Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-blue-400 rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition duration-500"></div>
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img
                    src="public/2ndprofile.jpg"
                    alt={profile.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>

              <div className="glass p-6 rounded-2xl mt-8 space-y-4">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <MapPin className="w-5 h-5 text-primary-500" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <Mail className="w-5 h-5 text-primary-500" />
                  <a href={`mailto:${profile.email}`} className="hover:text-primary-500 transition-colors">{profile.email}</a>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <Phone className="w-5 h-5 text-primary-500" />
                  <span>{profile.phone}</span>
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-7 space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
            >
              <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">
                I'm {profile.name}, a {profile.role}.
              </h3>
              <p>
                {/* {profile.bio} */}
              </p>
              <p>
                Motivated and hardworking Computer
                Science student seeking an On-theJob Training (OJT) opportunity to
                improve programming, web
                development, and database
                management skills while gaining
                practical experience in the IT industry.

              </p>


              <div className="pt-6">
                <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4">When I'm not coding</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Photography and capturing moments</li>
                  <li>Playing competitive mobile games</li>
                  <li>Exploring new coffee shops around the city</li>
                  <li>Playing ball games outside</li>
                  <li>Playing chess with friends</li>
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium transition-colors shadow-lg shadow-primary-500/30"
                >
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
