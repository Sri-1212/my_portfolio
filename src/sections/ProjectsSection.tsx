import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import type { Project } from '../data/fallback';

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const stickyProjects = projects.slice(0, 3);
  const gridProjects = projects.slice(3);

  return (
    <section
      id="projects"
      className="bg-dark rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 font-kanit"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      {/* Sticky stacking cards — top 3 */}
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

      {/* Grid cards — remaining 2 */}
      {gridProjects.length > 0 && (
        <div className="max-w-[1200px] mx-auto mt-16 sm:mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {gridProjects.map((project, i) => (
            <FadeIn key={project._id} delay={i * 0.15} y={30}>
              <GridCard project={project} index={i + 4} />
            </FadeIn>
          ))}
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
    <div ref={containerRef} className="h-[85vh]" style={{ position: 'relative' }}>
      <motion.div
        className="sticky top-24 md:top-32 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-accent p-4 sm:p-6 md:p-8 bg-dark origin-top"
        style={{
          scale,
          top: `${Math.max(96, 96 + index * 28)}px`,
        }}
      >
        {/* Card header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-accent/40 font-black text-4xl sm:text-5xl md:text-6xl leading-none">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <span className="inline-block border border-accent/30 rounded-full px-3 py-1 text-accent/70 text-xs sm:text-sm uppercase tracking-wider mb-2">
                {project.category}
              </span>
              <h3 className="text-accent font-bold text-lg sm:text-xl md:text-2xl leading-tight">
                {project.title}
              </h3>
            </div>
          </div>

          <LiveProjectButton
            href={project.liveUrl || project.githubUrl || '#'}
            label={project.liveUrl ? 'Live Project' : 'View Code'}
          />
        </div>

        {/* Description */}
        <p className="text-accent/70 font-light text-sm sm:text-base mb-4 max-w-[600px]">
          {project.description}
        </p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="border border-accent/20 rounded-full px-3 py-1 text-accent/60 text-xs uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Image grid — placeholder gradients */}
        <div className="grid grid-cols-5 gap-3 sm:gap-4" style={{ minHeight: '200px' }}>
          <div className="col-span-2 flex flex-col gap-3 sm:gap-4">
            <div
              className="rounded-[20px] sm:rounded-[30px] md:rounded-[40px] flex-1"
              style={{ background: gradients[0], minHeight: '90px' }}
            />
            <div
              className="rounded-[20px] sm:rounded-[30px] md:rounded-[40px] flex-1"
              style={{ background: gradients[1], minHeight: '90px' }}
            />
          </div>
          <div className="col-span-3">
            <div
              className="rounded-[20px] sm:rounded-[30px] md:rounded-[40px] h-full"
              style={{ background: gradients[2], minHeight: '200px' }}
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
}

const GridCard: React.FC<GridCardProps> = ({ project, index }) => {
  const gradient =
    index % 2 === 0
      ? 'linear-gradient(135deg, #4A0E4E 0%, #C13584 50%, #B76CE0 100%)'
      : 'linear-gradient(135deg, #2D1B69 0%, #B76CE0 50%, #FFB6D9 100%)';

  return (
    <div className="rounded-[30px] sm:rounded-[40px] border-2 border-accent p-4 sm:p-6 bg-dark group hover:border-accent/80 transition-colors duration-300">
      {/* Image placeholder */}
      <div
        className="rounded-[20px] sm:rounded-[30px] h-[180px] sm:h-[220px] mb-5"
        style={{ background: gradient }}
      />

      <div className="flex items-center gap-3 mb-3">
        <span className="text-accent/40 font-black text-2xl sm:text-3xl leading-none">
          {String(index).padStart(2, '0')}
        </span>
        <span className="border border-accent/30 rounded-full px-3 py-1 text-accent/70 text-xs uppercase tracking-wider">
          {project.category}
        </span>
      </div>

      <h3 className="text-accent font-bold text-base sm:text-lg leading-tight mb-2">
        {project.title}
      </h3>

      <p className="text-accent/60 font-light text-sm mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="border border-accent/20 rounded-full px-3 py-1 text-accent/60 text-xs uppercase tracking-wider"
          >
            {tech}
          </span>
        ))}
      </div>

      <LiveProjectButton
        href={project.liveUrl || project.githubUrl || '#'}
        label={project.liveUrl ? 'Live Project' : 'View Code'}
      />
    </div>
  );
};

export default ProjectsSection;
