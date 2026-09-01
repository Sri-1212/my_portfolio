import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.35'],
  });

  const words = text.split(' ').filter(Boolean);

  return (
    <p ref={containerRef} className={`relative leading-relaxed ${className}`} style={style}>
      {words.map((word, i) => (
        <AnimatedWord
          key={`${word}-${i}`}
          word={word}
          index={i}
          total={words.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  );
};

interface AnimatedWordProps {
  word: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

const AnimatedWord: React.FC<AnimatedWordProps> = ({
  word,
  index,
  total,
  scrollYProgress,
}) => {
  const start = (index / total) * 0.85;
  const end = Math.min(1, start + (1 / total) * 2.5);

  const opacity = useTransform(scrollYProgress, [start, end], [0.45, 1]);
  const color = useTransform(scrollYProgress, [start, end], ['#71767B', '#FFFFFF']);

  return (
    <motion.span
      className="inline-block mr-[0.28em]"
      style={{ opacity, color }}
    >
      {word}
    </motion.span>
  );
};

export default AnimatedText;


