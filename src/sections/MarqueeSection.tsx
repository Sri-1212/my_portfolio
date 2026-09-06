import React, { useRef, useEffect, useState } from 'react';

const row1 = [
  'C++', 'JavaScript', 'SQL', 'React.js', 'Tailwind CSS',
  'HTML', 'CSS', 'Node.js', 'REST APIs', 'MongoDB', 'Supabase',
];

const row2 = [
  'RAG', 'Postman', 'Sensors', 'ESP32', 'Git',
  'GitHub', 'VS Code', 'MERN Stack', 'AI Integration', 'Express.js',
];

// Repeat 6 times for uninterrupted full-width coverage across all viewports
const repeatedRow1 = [...row1, ...row1, ...row1, ...row1, ...row1, ...row1];
const repeatedRow2 = [...row2, ...row2, ...row2, ...row2, ...row2, ...row2];

const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.25;
      setOffset(raw);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-dark pt-16 sm:pt-24 md:pt-32 pb-14 sm:pb-20 md:pb-28 overflow-hidden font-kanit"
    >
      {/* Row 1 — moves right */}
      <div className="mb-4 sm:mb-6 md:mb-8">
        <div
          className="flex gap-2 sm:gap-3 md:gap-4"
          style={{
            transform: `translateX(${-1200 + offset}px)`,
            willChange: 'transform',
          }}
        >
          {repeatedRow1.map((item, i) => (
            <Tile key={`r1-${i}`} label={item} />
          ))}
        </div>
      </div>

      {/* Row 2 — moves left (with full negative base offset so start of line is never empty) */}
      <div>
        <div
          className="flex gap-2 sm:gap-3 md:gap-4"
          style={{
            transform: `translateX(${-1200 - offset}px)`,
            willChange: 'transform',
          }}
        >
          {repeatedRow2.map((item, i) => (
            <Tile key={`r2-${i}`} label={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Tile: React.FC<{ label: string }> = ({ label }) => (
  <div
    className="flex-shrink-0 flex items-center justify-center rounded-xl sm:rounded-2xl px-2 sm:px-4 md:px-6 py-1.5 sm:py-2.5 md:py-3.5 border border-accent/20 bg-accent/5 backdrop-blur-sm shadow-sm transition-all w-[82px] xs:w-[94px] sm:w-[150px] md:w-[200px] lg:w-[250px] h-[36px] xs:h-[40px] sm:h-[54px] md:h-[70px] lg:h-[84px]"
  >
    <span className="text-accent font-medium text-[10px] xs:text-[11.5px] sm:text-sm md:text-base lg:text-lg tracking-tight sm:tracking-wide whitespace-nowrap text-center truncate">
      {label}
    </span>
  </div>
);

export default MarqueeSection;

