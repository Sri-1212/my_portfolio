import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import Magnet from '../components/Magnet';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section
      className="h-screen min-h-[680px] flex flex-col justify-between relative font-kanit bg-[#09090C] overflow-hidden"
    >
      {/* ── 1. Atmospheric Depth Blurred Radial Gradient Blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Blob 1 */}
        <motion.div
          className="absolute pointer-events-none rounded-full top-[10%] left-[15%] w-[400px] h-[400px] blur-[120px]"
          style={{
            background:
              'radial-gradient(circle, rgba(201, 167, 255, 0.40) 0%, rgba(201, 167, 255, 0) 70%)',
            filter: 'blur(120px)',
          }}
          animate={{
            x: [-20, 20],
            y: [-15, 18],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />

        {/* Blob 2 */}
        <motion.div
          className="absolute pointer-events-none rounded-full top-[40%] right-[10%] w-[500px] h-[500px] blur-[140px]"
          style={{
            background:
              'radial-gradient(circle, rgba(232, 180, 224, 0.30) 0%, rgba(232, 180, 224, 0) 70%)',
            filter: 'blur(140px)',
          }}
          animate={{
            x: [24, -20],
            y: [-22, 25],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: 1,
          }}
        />

        {/* Blob 3 */}
        <motion.div
          className="absolute pointer-events-none rounded-full bottom-[5%] left-[40%] w-[350px] h-[350px] blur-[100px]"
          style={{
            background:
              'radial-gradient(circle, rgba(255, 217, 236, 0.25) 0%, rgba(255, 217, 236, 0) 70%)',
            filter: 'blur(100px)',
          }}
          animate={{
            x: [-18, 22],
            y: [20, -18],
          }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />
      </div>

      {/* ── 2. Cyber Shimmer Background Grid ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(243, 217, 240, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(243, 217, 240, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '54px 54px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 25%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 25%, transparent 80%)',
        }}
      />

      {/* Floating Shiny Twinkle Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[
          { top: '22%', left: '18%', size: 4, delay: 0 },
          { top: '35%', left: '78%', size: 5, delay: 1 },
          { top: '65%', left: '25%', size: 4, delay: 1.5 },
          { top: '75%', left: '72%', size: 6, delay: 0.7 },
          { top: '28%', left: '85%', size: 3, delay: 2 },
          { top: '55%', left: '12%', size: 5, delay: 2.3 },
        ].map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#FFD9EC] shadow-[0_0_12px_#FFD9EC]"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
            animate={{
              scale: [0.6, 1.4, 0.6],
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: star.delay,
            }}
          />
        ))}
      </div>

      {/* ── Top Spacer for Sticky Navbar ── */}
      <div className="h-16 sm:h-20" />

      {/* ── 4. Central Hero Area (Name + Portrait) ── */}
      <div className="relative flex-1 flex items-center justify-center my-auto z-10 px-4">
        {/* Massive Shiny Name */}
        <FadeIn
          delay={0.15}
          y={30}
          className="w-full flex flex-col items-center justify-center select-none"
        >
          <div className="w-fit flex flex-col items-start max-w-full">
            {/* Top subtle role pill */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#F3D9F0]/20 bg-[#F3D9F0]/5 backdrop-blur-md mb-3 sm:mb-4 shadow-[0_0_20px_rgba(193,53,132,0.2)]">
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#FFD9EC] font-semibold whitespace-nowrap">
                Full-Stack Developer
              </span>
            </div>

            <h1
              className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[13vw] sm:text-[14vw] md:text-[15vw] lg:text-[16vw] text-left"
              style={{
                filter:
                  'drop-shadow(0 0 45px rgba(216, 70, 239, 0.45)) drop-shadow(0 0 90px rgba(147, 51, 234, 0.25))',
              }}
            >
              Srilakshmi
            </h1>
          </div>
        </FadeIn>

        {/* Hero Portrait with Magnet, Ground Shadow, and Bobbing Animation */}
        <FadeIn
          delay={0.4}
          y={20}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none flex flex-col items-center justify-center"
        >
          <div className="relative flex flex-col items-center justify-center">
            {/* Ground Shadow Ellipse beneath avatar feet */}
            <div
              className="absolute pointer-events-none bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 w-[60%] h-[40px] rounded-[100%] blur-[30px] z-10"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(201, 167, 255, 0.35) 0%, rgba(201, 167, 255, 0) 70%)',
                filter: 'blur(30px)',
              }}
            />

            {/* Bobbing Wrapper (translateY 0 to -12px, 3.5s ease-in-out alternate) */}
            <motion.div
              animate={{ y: [0, -12] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
              className="relative z-20"
            >
              <Magnet padding={160} strength={3} className="pointer-events-auto">
                <img
                  src="/avatar.png"
                  alt="Srilakshmi's avatar"
                  className="w-[300px] sm:w-[410px] md:w-[500px] lg:w-[600px] xl:w-[680px] max-h-[66vh] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] cursor-grab active:cursor-grabbing transition-transform"
                />
              </Magnet>
            </motion.div>
          </div>
        </FadeIn>
      </div>

      {/* ── 5. Bottom Bar ── */}
      <div className="relative z-30 pb-7 sm:pb-9 md:pb-11 px-6 sm:px-10 md:px-14 max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-5">
          {/* Bio tagline */}
          <FadeIn delay={0.35} y={20}>
            <div className="max-w-[280px] sm:max-w-[320px] text-center sm:text-left">
              <p
                className="text-[#F3D9F0]/90 font-light uppercase tracking-wider leading-snug"
                style={{ fontSize: 'clamp(0.8rem, 1.1vw, 1.05rem)' }}
              >
                Crafting high-impact web architectures & intelligent digital experiences.
              </p>
            </div>
          </FadeIn>

          {/* Scroll down indicator */}
          <FadeIn
            delay={0.45}
            y={20}
            className="hidden md:flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity mb-3"
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              aria-label="Scroll down to About section"
              className="flex flex-col items-center gap-1 text-[#F3D9F0] cursor-pointer hover:scale-110 transition-transform"
            >
              <motion.div
                animate={{ y: [0, 6] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
              >
                <ArrowDown className="w-4 h-4 text-[#FFD9EC]" />
              </motion.div>
            </a>
          </FadeIn>

          {/* Contact Button */}
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

