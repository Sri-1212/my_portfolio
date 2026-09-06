import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import GemIcon from '../components/GemIcon';
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
        <div className="max-w-[1200px] mx-auto mt-16 sm:mt-24 md:mt-36 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
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

          <div className="self-start sm:self-auto">
            <LiveProjectButton
              href={project.liveUrl || project.githubUrl || '#'}
              label={project.liveUrl ? 'Live Project' : 'View Code'}
            />
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
}

const GridCard: React.FC<GridCardProps> = ({ project, index }) => {
  const gradient =
    index % 2 === 0
      ? 'linear-gradient(135deg, #4A0E4E 0%, #C13584 50%, #B76CE0 100%)'
      : 'linear-gradient(135deg, #2D1B69 0%, #B76CE0 50%, #FFB6D9 100%)';

  return (
    <div className="rounded-[24px] sm:rounded-[36px] border-2 border-accent p-4 sm:p-6 bg-[#0e0e12] group hover:border-[#C9A7FF] transition-all duration-300 hover:shadow-[0_0_30px_rgba(199,167,255,0.25)]">
      {/* Image placeholder */}
      <div
        className="rounded-[16px] sm:rounded-[24px] h-[140px] sm:h-[200px] mb-4 sm:mb-5"
        style={{ background: gradient }}
      />

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

      <LiveProjectButton
        href={project.liveUrl || project.githubUrl || '#'}
        label={project.liveUrl ? 'Live Project' : 'View Code'}
      />
    </div>
  );
};

export default ProjectsSection;
