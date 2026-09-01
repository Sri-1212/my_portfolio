import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import {
  Sparkles,
  Code2,
  Layers,
  Server,
  Database,
  Wrench,
  CircuitBoard,
  Cpu,
  Bot,
} from 'lucide-react';

interface SkillItem {
  name: string;
}

interface SkillGroup {
  id: string;
  title: string;
  icon: React.ElementType;
  skills: SkillItem[];
}

const mainSkillGroups: SkillGroup[] = [
  {
    id: 'core-languages',
    title: 'Core Languages',
    icon: Code2,
    skills: [
      { name: 'C++' },
      { name: 'JavaScript' },
      { name: 'SQL' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    icon: Layers,
    skills: [
      { name: 'React.js' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: Server,
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'REST APIs' },
    ],
  },
  {
    id: 'databases',
    title: 'Database Architecture',
    icon: Database,
    skills: [
      { name: 'MongoDB' },
      { name: 'Supabase' },
      { name: 'MySQL' },
    ],
  },
  {
    id: 'ai-systems',
    title: 'AI & Next-Gen Systems',
    icon: Sparkles,
    skills: [
      { name: 'AI Integration' },
      { name: 'RAG' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    icon: Wrench,
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Postman' },
    ],
  },
];

const secondarySkills = [
  'Arduino UNO',
  'ESP32',
  'Sensors',
  'IoT Systems',
];

// Interactive 3D tilt skill card component
const InteractiveSkillCard: React.FC<{
  group: SkillGroup;
  index: number;
}> = ({ group, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    damping: 20,
    stiffness: 200,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    damping: 20,
    stiffness: 200,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const GroupIcon = group.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative rounded-3xl p-6 sm:p-7 transition-all duration-300 bg-[#121216]/80 border border-[#F3D9F0]/15 hover:border-[#F3D9F0]/40 shadow-[0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-xl group"
    >
      {/* Background ambient spotlight glow that tracks hover */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(350px circle at ${(mouseX.get() + 0.5) * 100}% ${(mouseY.get() + 0.5) * 100}%, rgba(243,217,240,0.1), transparent 70%)`,
        }}
      />

      {/* Header with Icon & Category Title */}
      <div className="flex items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 bg-[#F3D9F0]/10 border border-[#F3D9F0]/20 text-[#F3D9F0]">
            <GroupIcon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg tracking-wide">
              {group.title}
            </h3>
          </div>
        </div>

        <span className="text-xs font-mono text-[#F3D9F0]/40 tracking-wider">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Skills Badges Pill Grid */}
      <div className="flex flex-wrap gap-2.5 sm:gap-3">
        {group.skills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="relative flex items-center px-4 py-2.5 rounded-2xl cursor-default transition-all duration-200 bg-[#1a1a22]/70 border border-[#F3D9F0]/15 hover:border-[#F3D9F0]/40 hover:bg-[#22222c]"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#C9A7FF]/80 group-hover:bg-[#FFD9EC]" />
              <span className="text-[#F3D9F0] text-sm sm:text-base font-normal tracking-wide">
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] border-t border-[#F3D9F0]/15 px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-36 font-kanit overflow-hidden z-10"
    >
      {/* Futuristic Background Elements: Tech Grid & Glowing Orbs */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(243, 217, 240, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(243, 217, 240, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)',
        }}
      />

      {/* Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-br from-[#C13584]/15 via-[#B76CE0]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-[#4A0E4E]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <FadeIn delay={0} y={30}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F3D9F0]/20 bg-[#F3D9F0]/5 backdrop-blur-md mb-6">
              <Bot className="w-4 h-4 text-[#FFD9EC]" />
              <span className="text-xs uppercase tracking-widest text-[#F3D9F0]/90 font-medium">
                Engineering & Intelligence
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} y={40}>
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.8rem, 9vw, 130px)' }}
            >
              Technical Skills
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <p className="text-[#F3D9F0]/70 font-light text-sm sm:text-base md:text-lg max-w-[620px] mx-auto mt-4 leading-relaxed">
              Specialized in modern full-stack development, distributed backend systems,
              databases, and applied AI workflows.
            </p>
          </FadeIn>
        </div>

        {/* Primary Interactive Skills Grid (Balanced 6-card grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-16 sm:mb-20">
          {mainSkillGroups.map((group, index) => (
            <InteractiveSkillCard key={group.id} group={group} index={index} />
          ))}
        </div>

        {/* Secondary Category: Also Worked With (IoT / Hardware) */}
        <FadeIn delay={0.4} y={30}>
          <div className="relative rounded-3xl p-6 sm:p-8 bg-[#101014]/60 border border-[#F3D9F0]/10 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#F3D9F0]/5 border border-[#F3D9F0]/10 flex items-center justify-center text-[#F3D9F0]/60">
                  <CircuitBoard className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white/80 font-medium text-sm sm:text-base tracking-wide uppercase">
                    Also Worked With
                  </h4>
                  <p className="text-[#F3D9F0]/40 text-xs font-light">
                    Embedded systems & hardware prototyping experience
                  </p>
                </div>
              </div>

              <span className="text-[11px] font-mono uppercase tracking-widest text-[#F3D9F0]/40 px-3 py-1 rounded-full border border-[#F3D9F0]/10 w-fit">
                Secondary Domain
              </span>
            </div>

            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {secondarySkills.map((item) => (
                <motion.span
                  key={item}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#17171f]/60 border border-[#F3D9F0]/10 hover:border-[#F3D9F0]/30 text-[#F3D9F0]/75 hover:text-[#F3D9F0] text-xs sm:text-sm font-light transition-all duration-200 cursor-default"
                >
                  <Cpu className="w-3.5 h-3.5 text-[#F3D9F0]/40" />
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default SkillsSection;
