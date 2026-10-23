import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Phone } from 'lucide-react';

import { profile } from '../data/profile';
import { SectionTitle } from '../components/SectionTitle';
import { ContactForm } from '../components/ContactForm';
import { SocialLinks } from '../components/SocialLinks';

export function Contact() {
  const details = [
    { Icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { Icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
    { Icon: MapPin, label: 'Location', value: profile.location },
  ];

  return (
    <>
      <Helmet>
        <title>Contact | {profile.name}</title>
        <meta name="description" content="Get in touch with me for opportunities or just to say hi." />
      </Helmet>

      <section className="pt-32 pb-12">
        <div className="container-page">
          <SectionTitle
            eyebrow="Contact"
            title="Get In Touch"
            subtitle="I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision."
          />

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Let's talk!</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  Don't like forms? Reach me directly. 👋
                </p>
              </div>

              <div className="space-y-4">
                {details.map(({ Icon, label, value, href }) => {
                  const Wrapper = href ? 'a' : 'div';
                  return (
                    <Wrapper
                      key={label}
                      {...(href ? { href } : {})}
                      className="glass-card flex items-center gap-4 p-4 hover:border-primary-500/50 transition-colors"
                    >
                      <span className="w-11 h-11 rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">{label}</p>
                        <p className="font-medium text-slate-900 dark:text-white break-all">{value}</p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              <SocialLinks className="-ml-2" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3 glass-card p-6 sm:p-8 md:p-10"
            >
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6">Send me a message</h3>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
