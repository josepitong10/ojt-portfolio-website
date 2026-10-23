import React from 'react';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-dark-border bg-white/60 dark:bg-dark-card/40 py-10 mt-24">
      <div className="container-page flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <Link to="/" className="font-display font-bold text-lg text-slate-900 dark:text-white">
            {profile.name}<span className="text-primary-500">.</span>
          </Link>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            &copy; {currentYear} &middot; Built with React &amp; Tailwind CSS
          </p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
