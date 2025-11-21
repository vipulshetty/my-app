'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  image: string;
  category: string;
  tech: string[];
  github?: string;
  demo: string;
  highlights?: string[];
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="group relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-gray-900"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Full Background Image */}
      <div className="absolute inset-0 w-full h-full bg-gray-900">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain transition-transform duration-700 group-hover:scale-105"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex justify-between items-end mb-2">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
              <p className="text-sm text-gray-300 line-clamp-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                {project.description}
              </p>
            </div>
            
            <div className="flex gap-3 mb-1">
              {project.github && (
                <Link 
                  href={project.github}
                  target="_blank"
                  className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white hover:text-black transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={20} />
                </Link>
              )}
              <Link 
                href={project.demo}
                target="_blank"
                className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-purple-500 hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ArrowUpRight size={20} />
              </Link>
            </div>
          </div>

          {/* Tech Stack - Minimal */}
          <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
            {project.tech.slice(0, 4).map((tech) => (
              <span 
                key={tech}
                className="text-xs text-gray-300 px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
} 