"use client";

import Ballpit from "@/components/ui/Ballpit";
import { portfolioData } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import { SkillsMarquee } from "@/components/ui/SkillsMarquee";
import { ThreeDCarousel } from "@/components/ui/ThreeDCarousel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Timeline } from "@/components/ui/timeline";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Orb from "@/components/ui/Orb";
import Hyperspeed, { hyperspeedPresets } from "@/components/ui/Hyperspeed";
import Threads from "@/components/ui/Threads";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Aurora from "@/components/ui/Aurora";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black text-white">
      <section
        id="home"
        className="relative h-screen w-full flex flex-col items-start justify-center"
      >
        {/* Background */}
        <div className="absolute top-0 left-0 w-full h-full">
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">
              Hey! It&apos;s me{" "}
              <span className="text-purple-300">
                {portfolioData.name.split(" ")[0]}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              A full-stack developer and DevOps enthusiast, building and
              deploying seamless cloud experiences.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-12 left-0 right-0 z-20">
          <div className="container mx-auto px-6 flex items-center justify-center gap-8">
            {portfolioData.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
              >
                <span className="text-sm font-medium tracking-wider uppercase">
                  {social.name}
                </span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative py-20 px-4 h-96">
        <div className="absolute inset-0 w-full h-full">
          <Hyperspeed effectOptions={hyperspeedPresets.three} />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About Me
          </h2>
          <p className="text-lg text-gray-300 mt-4 max-w-3xl">
            Experienced Full Stack Developer specializing in AI-driven
            applications and scalable cloud solutions. Proficient in React.js,
            Next.js, and AWS, with a strong command of DevOps practices to
            optimize performance, slash costs, and build efficient data
            workflows from the ground up.
          </p>
        </div>
      </section>

      <section id="skills" className="py-20">
        <SkillsMarquee />
      </section>

      <section id="projects" className="py-20 px-4 relative">
        <div className="absolute inset-0 w-full h-full opacity-20">
          <Threads
            color={[0.3, 0.3, 0.3]}
            amplitude={0.2}
            distance={0.2}
            enableMouseInteraction={false}
          />
        </div>
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              My Projects
            </h2>
            <p className="text-lg text-gray-400 mt-2">
              A selection of my work, from web apps to open-source.
            </p>
          </div>
          <div className="w-full">
            <ThreeDCarousel 
              items={portfolioData.projects}
              renderItem={(project) => <ProjectCard project={project} />}
            />
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-40">
          <Orb rotateOnHover={true} hoverIntensity={0.4} />
        </div>
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              My Experience
            </h2>
            <p className="text-lg text-gray-400 mt-2">
              A timeline of my professional journey.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Timeline data={portfolioData.experience} />
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-20 px-4 overflow-hidden">
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <Ballpit
            colors={[0x8a2be2, 0x4b0082, 0x9400d3]}
            gravity={0.1}
            minSize={0.8}
            maxSize={1.2}
            followCursor={true}
          />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 mt-4 mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of an amazing team.
          </p>
          <motion.a
            href={`mailto:${portfolioData.contact.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition-colors"
          >
            Say Hello
          </motion.a>
          <div className="mt-16 flex justify-center gap-8">
            {portfolioData.socials
              .filter((s) => s.name !== "Email")
              .map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="text-gray-400 hover:text-white"
                  title={social.name}
                >
                  {social.name === "GitHub" && <FaGithub size={28} />}
                  {social.name === "LinkedIn" && <FaLinkedin size={28} />}
                </motion.a>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}