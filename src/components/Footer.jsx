import React from 'react';
import { profile } from '../data/profile';
import { Github, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark-card border-t border-slate-200 dark:border-dark-border py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          &copy; {currentYear} {profile.name}. All rights reserved.
        </p>
        
        <div className="flex gap-4">
          {profile.socials.github && (
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary-500 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          )}
          {profile.socials.linkedin && (
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary-500 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {profile.socials.facebook && (
            <a href={profile.socials.facebook} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary-500 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
