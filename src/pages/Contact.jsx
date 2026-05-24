import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Phone } from 'lucide-react';

import { profile } from '../data/profile';
import { SectionTitle } from '../components/SectionTitle';
import { ContactForm } from '../components/ContactForm';

export function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Portfolio</title>
        <meta name="description" content="Get in touch with me for opportunities or just to say hi." />
      </Helmet>

      <section className="pt-32 pb-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Get In Touch" 
            subtitle="I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions." 
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h3 className="text-3xl font-display font-bold">Let's talk about everything!</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Don't like forms? Send me an email. 👋
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-500 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Email</h4>
                    <a href={`mailto:${profile.email}`} className="text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors">
                      {profile.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-500 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Phone</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      {profile.phone}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-500 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Location</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      {profile.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass p-8 md:p-10 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none"
            >
              <h3 className="text-2xl font-display font-bold mb-6">Send me a message</h3>
              <ContactForm />
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
