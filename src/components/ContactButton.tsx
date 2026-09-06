import React from 'react';

interface ContactButtonProps {
  className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ className = '' }) => {
  return (
    <a
      href="mailto:dsrilakshmi573@gmail.com"
      className={`
        inline-block rounded-full
        px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
        text-xs sm:text-sm md:text-base
        text-white font-medium uppercase tracking-widest
        transition-transform duration-200 hover:scale-105
        ${className}
      `}
      style={{
        background:
          'linear-gradient(123deg, #4A0E4E 7%, #C13584 37%, #B76CE0 72%, #FFB6D9 100%)',
        boxShadow:
          '0px 4px 4px rgba(193, 53, 132, 0.25), 4px 4px 12px #B76CE0 inset',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      Contact Me
    </a>
  );
};

export default ContactButton;
