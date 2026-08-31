import React, { useRef, useEffect, useState } from 'react';

const row1 = [
  'C++', 'JavaScript', 'SQL', 'React.js', 'Tailwind CSS',
  'HTML', 'CSS', 'Node.js', 'REST APIs', 'MongoDB', 'Supabase',
];

const row2 = [
  'Arduino UNO', 'ESP32', 'Sensors', 'IoT Systems', 'Git',
  'GitHub', 'VS Code', 'MERN Stack', 'Cloud Computing', 'Express.js',
];

// Triple for seamless loop
const tripleRow1 = [...row1, ...row1, ...row1];
const tripleRow2 = [...row2, ...row2, ...row2];

const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(raw);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-dark pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden font-kanit"
    >
      {/* Row 1 — moves right */}
      <div className="mb-3">
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {tripleRow1.map((item, i) => (
            <Tile key={`r1-${i}`} label={item} />
          ))}
        </div>
      </div>

      {/* Row 2 — moves left */}
      <div>
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {tripleRow2.map((item, i) => (
            <Tile key={`r2-${i}`} label={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Tile: React.FC<{ label: string }> = ({ label }) => (
  <div
    className="flex-shrink-0 flex items-center justify-center gap-2 rounded-2xl px-6 py-4 border border-accent/30 bg-accent/5 backdrop-blur-sm"
    style={{
      width: '260px',
      height: '90px',
    }}
  >
    <span className="text-accent font-medium text-base sm:text-lg tracking-wide whitespace-nowrap">
      {label}
    </span>
  </div>
);

export default MarqueeSection;
