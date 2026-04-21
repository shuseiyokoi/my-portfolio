"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NODE_ENV === "production" ? "/gfbs3-portfolio-demo" : "";

const projects = [
  {
    title: "PROJECT_ONE",
    description: "Your first amazing project goes here. Describe what problem it solves and the tech you used to build it.",
    tags: ["REACT", "NEXTJS", "TAILWIND"],
    color: "cyan" as const,
    href: "#",
  },
  {
    title: "PROJECT_TWO",
    description: "Your second project showcase. Tell visitors what makes this project special and what you learned building it.",
    tags: ["JAVASCRIPT", "API", "CSS"],
    color: "fuchsia" as const,
    href: "#",
  },
  {
    title: "PROJECT_THREE",
    description: "Another project to highlight your skills. Share the impact or results of this work.",
    tags: ["TYPESCRIPT", "NODE", "EXPRESS"],
    color: "purple" as const,
    href: "#",
  },
  {
    title: "PROJECT_FOUR",
    description: "Keep building and adding to your portfolio. Each project tells part of your developer story.",
    tags: ["PYTHON", "DJANGO", "POSTGRESQL"],
    color: "yellow" as const,
    href: "#",
  },
  {
    title: "PROJECT_FIVE",
    description: "An extra project that stays hidden until the user expands the portfolio list.",
    tags: ["AWS", "DOCKER", "FASTAPI"],
    color: "cyan" as const,
    href: "#",
  },
  {
    title: "PROJECT_SIX",
    description: "Another hidden project for users to explore after clicking show more.",
    tags: ["ML", "PANDAS", "SCIKIT-LEARN"],
    color: "fuchsia" as const,
    href: "#",
  },
];

export default function Home() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 4);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-mono selection:bg-fuchsia-200 selection:text-fuchsia-900 overflow-x-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-fuchsia-100 to-transparent opacity-70" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-cyan-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-fuchsia-600 hover:to-cyan-500 transition-all duration-300"
          >
            Shusei Yokoi
          </Link>
          <div className="flex gap-8 text-xs font-bold tracking-widest uppercase text-slate-500">
            <Link href="#work" className="hover:text-cyan-600 transition-all">PROJECTS</Link>
            <Link href="#philosophy" className="hover:text-fuchsia-600 transition-all">ABOUT</Link>
            <Link href="#contact" className="hover:text-yellow-600 transition-all">CONTACT</Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-20">
        {/* Selected Work */}
        <section id="work" className="py-20 space-y-12">
          <div className="flex items-end justify-between border-b border-cyan-200 pb-4">
            <h2 className="text-2xl font-bold tracking-widest text-fuchsia-600">
              PROJECTS
            </h2>
            <span className="text-xs font-mono text-slate-500">Showcase what you&apos;ve built with style</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                color={project.color}
                href={project.href}
              />
            ))}
          </div>

          {projects.length > 4 && (
            <div className="flex justify-center pt-4">
              <button
                type="button"
                onClick={() => setShowAllProjects((prev) => !prev)}
                className="px-6 py-3 border border-cyan-300 bg-cyan-50 text-cyan-700 font-bold tracking-widest uppercase text-sm hover:bg-cyan-100 transition-all rounded-sm"
              >
                {showAllProjects ? "SHOW LESS" : `SHOW MORE (${projects.length - 4})`}
              </button>
            </div>
          )}
        </section>

        {/* About */}
        <section id="philosophy" className="py-20 grid md:grid-cols-12 gap-12 border-t border-cyan-200">
          <div className="md:col-span-4 space-y-8">
            <h2 className="text-2xl font-bold tracking-widest text-cyan-600">
              {"// ABOUT_ME"}
            </h2>

            <div className="relative w-full aspect-[4/5] border border-cyan-200 rounded-sm overflow-hidden bg-cyan-50 group">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.72)_100%)] z-10" />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:100%_4px] z-20 pointer-events-none" />

              <Image
                src={`${basePath}/me.png`}
                alt="Profile"
                fill
                className="object-cover z-0 opacity-80 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          </div>

          <div className="md:col-span-8 space-y-8 text-slate-700 leading-relaxed font-light">
            <p>
              Every developer has a unique journey. Share yours here—whether you&apos;re self-taught, a bootcamp grad, or transitioning careers.{" "}
              <strong className="text-fuchsia-600 font-bold">Your story matters.</strong>
              {" "}Talk about what drives you to code and the impact you want to make.
            </p>

            <div className="p-6 bg-cyan-50 border border-cyan-200 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500" />
              <div className="grid grid-cols-2 gap-8 font-mono text-sm">
                <div>
                  <h3 className="text-cyan-700 mb-4 tracking-widest uppercase text-xs border-b border-cyan-200 pb-2">STACK_TRACE</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> JavaScript / Python / TypeScript</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> React / Next.js / Node.js</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Git / GitHub / VS Code</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-cyan-700 mb-4 tracking-widest uppercase text-xs border-b border-cyan-200 pb-2">PROTOCOLS</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Always learning</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Ship &gt; Perfect</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Open source contributor</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 border-t border-cyan-200">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">LAUNCH?</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Fork this template on GitHub and make it yours. Update the content, add your projects, and deploy to GitHub Pages in under 30 minutes.
            </p>
            <div className="flex flex-col items-center gap-6">
              <a
                href="https://github.com/ladykerr/gfbs3-portfolio-demo"
                className="px-10 py-4 bg-fuchsia-600 text-white font-bold tracking-widest uppercase text-sm hover:bg-fuchsia-500 transition-all rounded-sm"
              >
                FORK ON GITHUB
              </a>
              <div className="flex items-center gap-8 pt-4">
                <SocialLink href="https://github.com" label="GITHUB" />
                <SocialLink href="https://linkedin.com" label="LINKEDIN" />
                <SocialLink href="https://twitter.com" label="TWITTER" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-xs font-mono text-slate-400 border-t border-cyan-100">
        <p>
          Made with ❤️ by{" "}
          <a href="https://gh.io/gfb" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-500 transition-all">
            GitHub for Beginners
          </a>{" "}
          and{" "}
          <a href="https://gh.io/gfb-copilot" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-500 transition-all">
            GitHub Copilot
          </a>
        </p>
      </footer>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  color,
  href,
}: {
  title: string;
  description: string;
  tags: string[];
  color: "cyan" | "fuchsia" | "purple" | "yellow";
  href: string;
}) {
  const validColors = ["cyan", "fuchsia", "purple", "yellow"] as const;
  const safeColor = validColors.includes(color) ? color : "cyan";

  const colorClasses = {
    cyan: "group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]",
    fuchsia: "group-hover:border-fuchsia-400 group-hover:shadow-[0_0_20px_rgba(232,121,249,0.15)]",
    purple: "group-hover:border-purple-400 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]",
    yellow: "group-hover:border-yellow-400 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.15)]",
  };

  const textColors = {
    cyan: "group-hover:text-cyan-600",
    fuchsia: "group-hover:text-fuchsia-600",
    purple: "group-hover:text-purple-600",
    yellow: "group-hover:text-yellow-600",
  };

  return (
    <Link
      href={href}
      className={`group block space-y-4 p-6 bg-white border border-slate-200 transition-all duration-300 rounded-sm ${colorClasses[safeColor]}`}
    >
      <div className="flex justify-between items-start">
        <h3 className={`text-xl font-bold text-slate-900 tracking-wider transition-colors ${textColors[safeColor]}`}>
          {title}
        </h3>
        <ArrowUpRightIcon className={`w-5 h-5 text-slate-400 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ${textColors[safeColor]}`} />
      </div>
      <p className="text-sm text-slate-600 leading-relaxed font-light border-l border-slate-200 pl-4">
        {description}
      </p>
      <div className="flex gap-2 pt-2 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] uppercase tracking-widest font-bold text-cyan-700 bg-cyan-50 px-2 py-1 border border-cyan-200 group-hover:border-cyan-300 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs font-bold tracking-widest text-slate-500 hover:text-cyan-600 transition-all"
    >
      {label}
    </a>
  );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}