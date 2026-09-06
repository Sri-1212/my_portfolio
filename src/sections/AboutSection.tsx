import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';

/* Photo path — replace with your own image */
const PROFILE_PHOTO = '/profile.png.jpeg';
const FALLBACK_PHOTO = '/avatar.png';

const AboutSection: React.FC = () => {
  const [photoSrc, setPhotoSrc] = useState(PROFILE_PHOTO);

  const bodyText =
    "I'm a Computer Science undergraduate passionate about building practical, user-focused technology that turns ideas into real-world solutions. I work primarily with JavaScript, React.js, Node.js, Express, MongoDB, and SQL, while also exploring IoT and emerging technologies. I enjoy developing full-stack applications, experimenting with new ideas, and solving problems through hands-on projects and hackathons. From web applications to IoT-based systems, I'm always looking for opportunities to learn, build, and improve. I'm currently focused on strengthening my development and problem-solving skills, collaborating with like-minded people, and growing into a well-rounded software developer.";

  return (
    <section
      id="about"
      className="relative px-6 sm:px-10 md:px-16 lg:px-24 py-32 sm:py-44 md:py-56 lg:py-64 font-kanit"
      style={{ background: '#0A0A0A', overflowX: 'clip' }}
    >
      {/* ── Ambient background glows ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '20%', left: '15%',
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(88,28,135,0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '15%', right: '15%',
          width: 450, height: 450,
          background: 'radial-gradient(circle, rgba(8,145,178,0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* ── Floating 3D decorative assets ── */}
      {/* Top-left: Crystal */}
      <motion.img
        src="/decor-crystal.png"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none opacity-40 sm:opacity-75"
        style={{ top: '2%', left: '1%', width: 'clamp(55px, 12vw, 190px)' }}
        animate={{ y: [0, -14, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Top-right: Flower */}
      <motion.img
        src="/decor-flower.png"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none opacity-40 sm:opacity-75"
        style={{ top: '3%', right: '1%', width: 'clamp(50px, 11vw, 180px)' }}
        animate={{ y: [0, 16, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      {/* Bottom-left: Orb */}
      <motion.img
        src="/decor-orb.png"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none opacity-30 sm:opacity-70"
        style={{ bottom: '3%', left: '2%', width: 'clamp(45px, 10vw, 160px)' }}
        animate={{ y: [0, 13, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Bottom-right: Gem */}
      <motion.img
        src="/decor-gem.png"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none opacity-40 sm:opacity-75"
        style={{ bottom: '4%', right: '2%', width: 'clamp(55px, 12vw, 190px)' }}
        animate={{ y: [0, -13, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div
          className="flex flex-col lg:flex-row items-center lg:items-center gap-16 sm:gap-20 lg:gap-32"
        >
          {/* ──── LEFT: Text Content ──── */}
          <div className="flex-1 min-w-0 flex flex-col items-start w-full">
            {/* Display heading */}
            <FadeIn delay={0} y={30}>
              <h2
                className="hero-heading font-black uppercase leading-[0.92] mb-8 sm:mb-12 md:mb-14"
                style={{
                  fontSize: 'clamp(2.8rem, 7.5vw, 92px)',
                  letterSpacing: '-0.02em',
                }}
              >
                About Me
              </h2>
            </FadeIn>

            {/* Scroll-driven word-by-word reveal paragraph */}
            <div className="max-w-2xl w-full">
              <AnimatedText
                text={bodyText}
                className="font-normal leading-[1.8] sm:leading-[1.95] tracking-normal text-left"
                style={{ fontSize: 'clamp(15.5px, 1.18vw, 19.5px)' }}
              />
            </div>

            {/* CTA button */}
            <FadeIn delay={0.3} y={20} className="mt-12 sm:mt-16 md:mt-20">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full text-white font-bold uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(193,53,132,0.35)]"
                style={{
                  width: 175,
                  height: 48,
                  fontSize: 12.5,
                  letterSpacing: '0.08em',
                  background: 'linear-gradient(135deg, #6B1170 0%, #C13584 45%, #9333EA 100%)',
                  border: '1px solid rgba(243, 217, 240, 0.45)',
                  boxShadow: '0 0 20px rgba(193,53,132,0.35), inset 0 1px 1px rgba(255,255,255,0.15)',
                }}
              >
                CONTACT ME
              </a>
            </FadeIn>
          </div>

          {/* ──── RIGHT: Portrait ──── */}
          <FadeIn delay={0.2} x={40} y={0} className="flex-shrink-0 w-full flex justify-center lg:w-auto mt-6 lg:mt-0">
            <div className="relative group max-w-[340px] sm:max-w-none" style={{ width: 'clamp(260px, 30vw, 420px)' }}>
              {/* Ambient glow behind photo */}
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: -12,
                  borderRadius: 36,
                  background: 'linear-gradient(135deg, rgba(147,51,234,0.35), rgba(193,53,132,0.25), rgba(6,182,212,0.3))',
                  filter: 'blur(24px)',
                  opacity: 0.75,
                  transition: 'opacity 0.5s',
                }}
              />

              {/* Glass frame */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: 32,
                  padding: 10,
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
                  overflow: 'hidden',
                }}
              >
                {/* Inner image container */}
                <div
                  style={{
                    borderRadius: 24,
                    overflow: 'hidden',
                    background: '#121216',
                    aspectRatio: '4/5',
                    position: 'relative',
                  }}
                >
                  <img
                    src={photoSrc}
                    onError={() => {
                      if (photoSrc !== FALLBACK_PHOTO) setPhotoSrc(FALLBACK_PHOTO);
                    }}
                    alt="Srilakshmi portrait"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      display: 'block',
                      transition: 'transform 0.7s ease',
                    }}
                  />

                  {/* Bottom vignette */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(10,10,10,0.4) 0%, transparent 50%)',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Top glass reflection */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0, left: 0, right: 0,
                      height: '33%',
                      background: 'linear-gradient(to bottom, rgba(255,255,255,0.08) 0%, transparent 100%)',
                      pointerEvents: 'none',
                    }}
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
