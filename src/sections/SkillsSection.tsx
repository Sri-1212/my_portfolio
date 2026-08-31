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
  Zap,
} from 'lucide-react';

interface SkillItem {
  name: string;
  isAI?: boolean;
  isCore?: boolean;
  description?: string;
}

interface SkillGroup {
  id: string;
  title: string;
  icon: React.ElementType;
  accentColor: string;
  skills: SkillItem[];
}

const mainSkillGroups: SkillGroup[] = [
  {
    id: 'ai-specialty',
    title: 'AI & Next-Gen Systems',
    icon: Sparkles,
    accentColor: '#FFD9EC',
    skills: [
      { name: 'AI Integration', isAI: true, description: 'LLM APIs & Automation' },
      { name: 'RAG', isAI: true, description: 'Retrieval Augmented Generation' },
    ],
  },
  {
    id: 'core-languages',
    title: 'Core Languages',
    icon: Code2,
    accentColor: '#E8B4E0',
    skills: [
      { name: 'C++', isCore: true },
      { name: 'JavaScript', isCore: true },
      { name: 'SQL', isCore: true },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    icon: Layers,
    accentColor: '#C9A7FF',
    skills: [
      { name: 'React.js', isCore: true },
      { name: 'Tailwind CSS', isCore: true },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: Server,
    accentColor: '#B76CE0',
    skills: [
      { name: 'Node.js', isCore: true },
      { name: 'Express.js', isCore: true },
      { name: 'REST APIs', isCore: true },
    ],
  },
  {
    id: 'databases',
    title: 'Database Architecture',
    icon: Database,
    accentColor: '#E8B4E0',
    skills: [
      { name: 'MongoDB', isCore: true },
      { name: 'Supabase', isCore: true },
      { name: 'MySQL', isCore: true },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    icon: Wrench,
    accentColor: '#F3D9F0',
    skills: [
      { name: 'Git', isCore: true },
      { name: 'GitHub', isCore: true },
      { name: 'Postman', isCore: true },
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

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    damping: 20,
    stiffness: 200,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
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
  const isAIGroup = group.id === 'ai-specialty';

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
      className={`relative rounded-3xl p-6 sm:p-7 transition-all duration-300 ${
        isAIGroup
          ? 'md:col-span-2 bg-gradient-to-br from-[#1c1224]/90 via-[#160f1e]/80 to-[#0f0a15]/90 border-2 border-[#E8B4E0]/60 shadow-[0_0_35px_rgba(201,167,255,0.18)]'
          : 'bg-[#121216]/80 border border-[#F3D9F0]/15 hover:border-[#F3D9F0]/40 shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
      } backdrop-blur-xl group`}
    >
      {/* Background ambient spotlight glow that tracks hover */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${(mouseX.get() + 0.5) * 100}% ${(mouseY.get() + 0.5) * 100}%, ${
            isAIGroup ? 'rgba(232,180,224,0.18)' : 'rgba(243,217,240,0.1)'
          }, transparent 70%)`,
        }}
      />

      {/* Header with Icon & Category Title */}
      <div className="flex items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
              isAIGroup
                ? 'bg-gradient-to-tr from-[#C13584]/40 to-[#B76CE0]/40 border border-[#FFD9EC]/50 text-[#FFD9EC]'
                : 'bg-[#F3D9F0]/10 border border-[#F3D9F0]/20 text-[#F3D9F0]'
            }`}
          >
            <GroupIcon className={`w-5 h-5 ${isAIGroup ? 'animate-pulse' : ''}`} />
          </div>
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg tracking-wide flex items-center gap-2">
              {group.title}
              {isAIGroup && (
                <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#C13584] to-[#B76CE0] text-white shadow-sm">
                  <Zap className="w-2.5 h-2.5" /> High Impact
                </span>
              )}
            </h3>
          </div>
        </div>

        <span className="text-xs font-mono text-[#F3D9F0]/40 tracking-wider">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Skills Badges Pill Grid */}
      <div className={`flex flex-wrap gap-2.5 sm:gap-3 ${isAIGroup ? 'grid grid-cols-1 sm:grid-cols-2' : ''}`}>
        {group.skills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`relative flex items-center justify-between rounded-2xl cursor-default transition-all duration-200 ${
              skill.isAI
                ? 'p-4 bg-gradient-to-r from-[#2a1338]/80 to-[#1e0e29]/80 border border-[#E8B4E0]/40 hover:border-[#FFD9EC] shadow-[0_0_20px_rgba(183,108,224,0.2)]'
                : 'px-4 py-2.5 bg-[#1a1a22]/70 border border-[#F3D9F0]/15 hover:border-[#F3D9F0]/40 hover:bg-[#22222c]'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span
                className={`w-2 h-2 rounded-full ${
                  skill.isAI
                    ? 'bg-[#FFD9EC] shadow-[0_0_8px_#FFD9EC]'
                    : 'bg-[#C9A7FF]/80 group-hover:bg-[#FFD9EC]'
                }`}
              />
              <span
                className={`font-medium tracking-wide ${
                  skill.isAI
                    ? 'text-white text-base sm:text-lg font-semibold'
                    : 'text-[#F3D9F0] text-sm sm:text-base font-normal'
                }`}
              >
                {skill.name}
              </span>
            </div>

            {skill.description && (
              <span className="text-xs text-[#F3D9F0]/60 font-light hidden sm:inline-block pl-3">
                {skill.description}
              </span>
            )}
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

        {/* Primary Interactive Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-16 sm:mb-20">
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
