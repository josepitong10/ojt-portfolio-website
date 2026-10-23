import React from 'react';
import { Github, Linkedin, Facebook, Mail } from 'lucide-react';
import { profile } from '../data/profile';
import { isProfileUrl } from '../lib/asset';

const links = [
  { label: 'GitHub', href: profile.socials.github, Icon: Github },
  { label: 'LinkedIn', href: profile.socials.linkedin, Icon: Linkedin },
  { label: 'Facebook', href: profile.socials.facebook, Icon: Facebook },
].filter(link => isProfileUrl(link.href));

export function SocialLinks({ className = '' }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {links.map(({ label, href, Icon }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" className="icon-link" aria-label={label}>
          <Icon className="w-5 h-5" />
        </a>
      ))}
      <a href={`mailto:${profile.email}`} className="icon-link" aria-label="Email">
        <Mail className="w-5 h-5" />
      </a>
    </div>
  );
}
