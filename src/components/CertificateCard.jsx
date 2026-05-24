import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export function CertificateCard({ cert, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card overflow-hidden group flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={cert.image} 
          alt={cert.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
          <a 
            href={cert.url} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 text-white bg-primary-500 hover:bg-primary-600 px-6 py-2 rounded-full font-medium transition-colors"
          >
            Verify <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
      <div className="p-6 flex flex-col grow">
        <p className="text-primary-500 font-semibold text-xs mb-1 uppercase tracking-wide">{cert.issuer}</p>
        <h3 className="font-display font-bold text-lg leading-tight mb-2">{cert.title}</h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-auto">{cert.date}</p>
      </div>
    </motion.div>
  );
}
