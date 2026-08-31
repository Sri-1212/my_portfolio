import React from 'react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import Magnet from '../components/Magnet';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const HeroSection: React.FC = () => {
  return (
    <section
      className="h-screen flex flex-col relative font-kanit"
      style={{ overflowX: 'clip' }}
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-accent font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <FadeIn delay={0.15} y={40} className="flex-1 flex items-center justify-center overflow-hidden px-4">
        <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[12vw] sm:text-[14vw] md:text-[15vw] lg:text-[16vw]">
          Srilakshmi
        </h1>
      </FadeIn>

      {/* Hero Portrait — centered in the middle with Magnet */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
      >
        <Magnet padding={150} strength={3} className="pointer-events-auto">
          <img
            src="/avatar.png"
            alt="Srilakshmi's avatar"
            className="w-[320px] sm:w-[420px] md:w-[520px] lg:w-[620px] xl:w-[700px] max-h-[70vh] object-contain drop-shadow-2xl"
          />
        </Magnet>
      </FadeIn>

      {/* Bottom bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-accent font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            A full-stack builder crafting AI-powered web experiences that solve real-world problems.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
