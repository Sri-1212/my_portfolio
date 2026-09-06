import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import GemIcon from '../components/GemIcon';
import type { Project } from '../data/fallback';

interface ProjectsSectionProps {
  projects: Project[];
}

const HARDWARE_KEYWORD_LIST = [
  'smart footstep piezoelectric system',
  'soil monitoring',
  'gesture controlled bot',
  'piezoelectric',
  'iot / hardware',
];

const isHardwareProject = (p: Project) => {
  const cat = (p.category || '').toLowerCase();
  const title = (p.title || '').toLowerCase();
  return (
    cat.includes('iot') ||
    cat.includes('hardware') ||
    HARDWARE_KEYWORD_LIST.some((kw) => title.includes(kw) || cat.includes(kw))
  );
};

const CpuIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M9 1v3" />
    <path d="M15 1v3" />
    <path d="M9 20v3" />
    <path d="M15 20v3" />
    <path d="M20 9h3" />
    <path d="M20 14h3" />
    <path d="M1 9h3" />
    <path d="M1 14h3" />
  </svg>
);

const ChevronDownIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ExternalLinkIcon: React.FC<{ size?: number; className?: string }> = ({ size = 14, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GithubIcon: React.FC<{ size?: number; className?: string }> = ({ size = 14, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [showHardware, setShowHardware] = useState(false);

  // Separate software and hardware projects
  const softwareProjects = projects.filter((p) => !isHardwareProject(p));
  const hardwareProjects = projects.filter(isHardwareProject);

  const stickyProjects = softwareProjects.slice(0, 2);
  const gridSoftwareProjects = softwareProjects.slice(2);

  return (
    <section
      id="projects"
      className="bg-dark rounded-t-[36px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-8 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-12 py-28 sm:py-36 md:py-48 font-kanit"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-24 md:mb-36 flex items-center justify-center gap-2.5 sm:gap-4"
          style={{ fontSize: 'clamp(2.5rem, 11vw, 160px)' }}
        >
          <GemIcon size={20} className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
          <span>Projects</span>
        </h2>
      </FadeIn>

      {/* Sticky stacking cards — Software showcase */}
      <div className="max-w-[1200px] mx-auto">
        {stickyProjects.map((project, index) => (
          <StickyCard
            key={project._id}
            project={project}
            index={index}
            totalCards={stickyProjects.length}
          />
        ))}
      </div>

      {/* Grid cards — Remaining software projects */}
      {gridSoftwareProjects.length > 0 && (
        <div className="max-w-[1200px] mx-auto mt-16 sm:mt-24 md:mt-36 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {gridSoftwareProjects.map((project, i) => (
            <FadeIn key={project._id} delay={i * 0.15} y={30}>
              <GridCard project={project} index={stickyProjects.length + i + 1} />
            </FadeIn>
          ))}
        </div>
      )}

      {/* Hardware / IoT Projects interactive button */}
      {hardwareProjects.length > 0 && (
        <div className="max-w-[1200px] mx-auto mt-20 sm:mt-28 md:mt-36">
          <div className="flex flex-col items-center justify-center">
            <button
              type="button"
              onClick={() => setShowHardware((prev) => !prev)}
              className={`group relative inline-flex items-center gap-3.5 sm:gap-5 px-6 sm:px-9 py-4 sm:py-5 rounded-full border-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${
                showHardware
                  ? 'border-accent bg-accent/10 shadow-[0_0_35px_rgba(199,167,255,0.35)] text-accent'
                  : 'border-accent/40 bg-[#0e0e12]/90 hover:border-accent hover:shadow-[0_0_25px_rgba(199,167,255,0.25)] text-accent/90'
              }`}
              aria-expanded={showHardware}
            >
              {/* Hardware microchip icon */}
              <div
                className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-colors ${
                  showHardware
                    ? 'bg-accent text-[#08080a]'
                    : 'bg-accent/10 border border-accent/30 text-accent group-hover:bg-accent/20'
                }`}
              >
                <CpuIcon size={20} className="sm:w-5 sm:h-5" />
              </div>

              <div className="text-left">
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <span className="font-extrabold text-sm sm:text-base md:text-lg tracking-wider uppercase text-accent">
                    Hardware / IoT Projects
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-accent/15 border border-accent/30 text-accent">
                    {hardwareProjects.length} Projects
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-accent/60 font-light mt-0.5">
                  {showHardware
                    ? 'Click to collapse hardware projects'
                    : 'Smart Footstep Piezoelectric, AgroByte, Gesture Bot'}
                </p>
              </div>

              {/* Animated chevron arrow */}
              <motion.div
                animate={{ rotate: showHardware ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-1 sm:ml-3 text-accent"
              >
                <ChevronDownIcon size={22} />
              </motion.div>
            </button>
          </div>

          {/* Collapsible Hardware / IoT Projects Grid */}
          <AnimatePresence>
            {showHardware && (
              <motion.div
                key="hardware-projects-container"
                initial={{ opacity: 0, height: 0, y: 30 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: 20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-12 sm:pt-16 pb-4">
                  {/* Category divider badge */}
                  <div className="flex items-center justify-center gap-3 mb-8 sm:mb-12">
                    <span className="h-px bg-accent/20 flex-1 max-w-[80px] sm:max-w-[140px]" />
                    <span className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 rounded-full px-4 py-1.5 text-accent text-xs sm:text-sm uppercase tracking-widest font-semibold">
                      <CpuIcon size={15} /> IoT, Hardware &amp; Robotics
                    </span>
                    <span className="h-px bg-accent/20 flex-1 max-w-[80px] sm:max-w-[140px]" />
                  </div>

                  {/* 3 Hardware Projects in 3-column / responsive grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {hardwareProjects.map((project, i) => (
                      <FadeIn key={project._id} delay={i * 0.12} y={25}>
                        <GridCard
                          project={project}
                          index={softwareProjects.length + i + 1}
                          isHardware
                        />
                      </FadeIn>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </section>
  );
};

/* ── Sticky Card ─────────────────────────────── */

interface StickyCardProps {
  project: Project;
  index: number;
  totalCards: number;
}

const StickyCard: React.FC<StickyCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  // Generate gradient placeholders for project images
  const gradients = [
    'linear-gradient(135deg, #4A0E4E 0%, #C13584 50%, #B76CE0 100%)',
    'linear-gradient(135deg, #E8B4E0 0%, #FFD9EC 50%, #C9A7FF 100%)',
    'linear-gradient(135deg, #2D1B69 0%, #B76CE0 50%, #FFB6D9 100%)',
  ];

  return (
    <div ref={containerRef} className="min-h-[75vh] sm:min-h-[85vh]" style={{ position: 'relative' }}>
      <motion.div
        className="sticky rounded-[28px] sm:rounded-[50px] md:rounded-[60px] border-2 border-accent p-4 sm:p-6 md:p-8 bg-[#0e0e12] origin-top transition-all duration-300 hover:border-[#C9A7FF] hover:shadow-[0_0_30px_rgba(199,167,255,0.25)]"
        style={{
          scale,
          top: `clamp(75px, ${80 + index * 20}px, 120px)`,
        }}
      >
        {/* Card header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 sm:mb-6 md:mb-8">
          <div className="flex items-center gap-3 sm:gap-6">
            <span className="text-accent/40 font-black text-3xl sm:text-5xl md:text-6xl leading-none">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <span className="inline-block border border-accent/30 rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 text-accent/70 text-[11px] sm:text-sm uppercase tracking-wider mb-1.5 sm:mb-2">
                {project.category}
              </span>
              <h3 className="text-accent font-bold text-base sm:text-xl md:text-2xl leading-tight">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Action buttons — Live Demo & View Code */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 self-start sm:self-auto">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent text-[#08080a] px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:shadow-[0_0_20px_rgba(199,167,255,0.6)] hover:scale-[1.03] active:scale-[0.97]"
              >
                <span>Live Demo</span>
                <ExternalLinkIcon size={14} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-accent/60 bg-white/5 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-accent font-semibold uppercase tracking-wider transition-all duration-200 hover:border-accent hover:bg-accent/15 hover:scale-[1.03] active:scale-[0.97]"
              >
                <GithubIcon size={14} />
                <span>View Code</span>
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-accent/70 font-light text-xs sm:text-sm md:text-base mb-4 max-w-[600px] leading-relaxed">
          {project.description}
        </p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="border border-accent/20 rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 text-accent/60 text-[10px] sm:text-xs uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Image grid — placeholder gradients */}
        <div className="grid grid-cols-5 gap-2 sm:gap-4" style={{ minHeight: '130px' }}>
          <div className="col-span-2 flex flex-col gap-2 sm:gap-4">
            <div
              className="rounded-[16px] sm:rounded-[30px] md:rounded-[40px] flex-1"
              style={{ background: gradients[0], minHeight: '60px' }}
            />
            <div
              className="rounded-[16px] sm:rounded-[30px] md:rounded-[40px] flex-1"
              style={{ background: gradients[1], minHeight: '60px' }}
            />
          </div>
          <div className="col-span-3">
            <div
              className="rounded-[16px] sm:rounded-[30px] md:rounded-[40px] h-full"
              style={{ background: gradients[2], minHeight: '130px' }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/* ── Grid Card ─────────────────────────────── */

interface GridCardProps {
  project: Project;
  index: number;
  isHardware?: boolean;
}

const GridCard: React.FC<GridCardProps> = ({ project, index, isHardware = false }) => {
  const gradient = isHardware
    ? index % 3 === 0
      ? 'linear-gradient(135deg, #1A365D 0%, #2B6CB0 50%, #63B3ED 100%)'
      : index % 3 === 1
      ? 'linear-gradient(135deg, #134E4A 0%, #0D9488 50%, #5EEAD4 100%)'
      : 'linear-gradient(135deg, #312E81 0%, #6366F1 50%, #A5B4FC 100%)'
    : index % 2 === 0
    ? 'linear-gradient(135deg, #4A0E4E 0%, #C13584 50%, #B76CE0 100%)'
    : 'linear-gradient(135deg, #2D1B69 0%, #B76CE0 50%, #FFB6D9 100%)';

  return (
    <div
      className={`h-full flex flex-col justify-between rounded-[24px] sm:rounded-[36px] border-2 p-4 sm:p-6 bg-[#0e0e12] group transition-all duration-300 hover:shadow-[0_0_30px_rgba(199,167,255,0.25)] ${
        isHardware
          ? 'border-accent/40 hover:border-accent'
          : 'border-accent hover:border-[#C9A7FF]'
      }`}
    >
      <div>
        {/* Image placeholder */}
        <div
          className="rounded-[16px] sm:rounded-[24px] h-[140px] sm:h-[180px] mb-4 sm:mb-5 relative overflow-hidden"
          style={{ background: gradient }}
        >
          {isHardware && (
            <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md rounded-full px-2.5 py-1 text-[10px] text-accent font-semibold flex items-center gap-1 border border-accent/30">
              <CpuIcon size={12} /> Hardware
            </div>
          )}
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
          <span className="text-accent/40 font-black text-xl sm:text-3xl leading-none">
            {String(index).padStart(2, '0')}
          </span>
          <span className="border border-accent/30 rounded-full px-2.5 py-0.5 text-accent/70 text-[11px] sm:text-xs uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        <h3 className="text-accent font-bold text-base sm:text-lg leading-tight mb-2">
          {project.title}
        </h3>

        <p className="text-accent/60 font-light text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="border border-accent/20 rounded-full px-2.5 py-0.5 text-accent/60 text-[10px] sm:text-xs uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action buttons — Live Demo & View Code */}
      <div className="pt-3 flex flex-wrap items-center gap-2 sm:gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent text-[#08080a] px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:shadow-[0_0_20px_rgba(199,167,255,0.5)] hover:scale-[1.03] active:scale-[0.97]"
          >
            <span>Live Demo</span>
            <ExternalLinkIcon size={12} />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-accent/60 bg-white/5 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs text-accent font-semibold uppercase tracking-wider transition-all duration-200 hover:border-accent hover:bg-accent/15 hover:scale-[1.03] active:scale-[0.97]"
          >
            <GithubIcon size={12} />
            <span>View Code</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;
