import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');

  return (
    <p ref={containerRef} className={`relative ${className}`}>
      {/* Invisible placeholder for layout */}
      <span className="invisible">{text}</span>
      {/* Animated characters overlaid */}
      <span className="absolute inset-0">
        {chars.map((char, i) => (
          <AnimatedChar
            key={i}
            char={char}
            index={i}
            total={chars.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </span>
    </p>
  );
};

interface AnimatedCharProps {
  char: string;
  index: number;
  total: number;
  scrollYProgress: any;
}

const AnimatedChar: React.FC<AnimatedCharProps> = ({
  char,
  index,
  total,
  scrollYProgress,
}) => {
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <motion.span style={{ opacity }}>
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  );
};

export default AnimatedText;
