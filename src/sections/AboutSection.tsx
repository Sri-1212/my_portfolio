import React from 'react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 font-kanit"
      style={{ overflowX: 'clip' }}
    >
      {/* Decorative corner images */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none">
        <img src="/decor-crystal.png" alt="" className="w-[120px] sm:w-[160px] md:w-[210px] opacity-80" />
      </FadeIn>

      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none">
        <img src="/decor-orb.png" alt="" className="w-[100px] sm:w-[140px] md:w-[180px] opacity-80" />
      </FadeIn>

      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none">
        <img src="/decor-flower.png" alt="" className="w-[120px] sm:w-[160px] md:w-[210px] opacity-80" />
      </FadeIn>

      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none">
        <img src="/decor-gem.png" alt="" className="w-[130px] sm:w-[170px] md:w-[220px] opacity-80" />
      </FadeIn>

      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          About me
        </h2>
      </FadeIn>

      {/* Animated paragraph */}
      <div className="mt-10 sm:mt-14 md:mt-16">
        <AnimatedText
          text="I'm a CS engineering student who builds across the stack — from IoT sensor systems to full MERN web apps. I love turning half-formed ideas into working prototypes, especially under hackathon deadlines. Let's build something incredible together!"
          className="text-accent font-medium text-center leading-relaxed max-w-[600px] mx-auto"
          // fontSize set via style below
        />
      </div>

      {/* Contact button */}
      <FadeIn delay={0.3} y={20} className="mt-16 sm:mt-20 md:mt-24">
        <ContactButton />
      </FadeIn>
    </section>
  );
};

export default AboutSection;
