import React from 'react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import { Mail, ExternalLink, Code2, MapPin, Phone } from 'lucide-react';

const socialLinks = [
  {
    icon: Mail,
    href: 'mailto:dsrilakshmi@gmail.com',
    label: 'Email',
  },
  {
    icon: Phone,
    href: 'tel:+917676825610',
    label: 'Phone',
  },
  {
    icon: ExternalLink,
    href: 'https://linkedin.com/in/srilakshmi-',
    label: 'LinkedIn',
  },
  {
    icon: Code2,
    href: 'https://github.com/Sri-1212',
    label: 'GitHub',
  },
  {
    icon: MapPin,
    href: '#',
    label: 'Bengaluru, India',
  },
];

const ContactFooter: React.FC = () => {
  return (
    <footer
      id="contact"
      className="bg-dark px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-36 font-kanit"
    >
      <div className="max-w-[800px] mx-auto text-center">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight mb-8 sm:mb-10"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Let&apos;s build.
          </h2>
        </FadeIn>

        {/* Contact details */}
        <FadeIn delay={0.15} y={20}>
          <div className="space-y-3 mb-10 sm:mb-14">
            <p className="text-accent font-light text-sm sm:text-base">
              <a href="mailto:dsrilakshmi@gmail.com" className="hover:opacity-70 transition-opacity duration-200">
                dsrilakshmi@gmail.com
              </a>
            </p>
            <p className="text-accent/60 font-light text-sm sm:text-base">
              <a href="tel:+917676825610" className="hover:opacity-70 transition-opacity duration-200">
                +91 7676825610
              </a>
            </p>
            <p className="text-accent/40 font-light text-sm">
              Bengaluru, India
            </p>
          </div>
        </FadeIn>

        {/* Contact button */}
        <FadeIn delay={0.25} y={20} className="mb-12 sm:mb-16">
          <ContactButton />
        </FadeIn>

        {/* Icon row */}
        <FadeIn delay={0.35} y={20}>
          <div className="flex items-center justify-center gap-6 sm:gap-8">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-accent/20 flex items-center justify-center text-accent/50 hover:text-accent hover:border-accent/50 transition-all duration-300"
                  title={link.label}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              );
            })}
          </div>
        </FadeIn>

        {/* Copyright */}
        <FadeIn delay={0.45} y={10}>
          <p className="text-accent/20 font-light text-xs mt-16 sm:mt-20">
            © {new Date().getFullYear()} Srilakshmi. Built with passion.
          </p>
        </FadeIn>
      </div>
    </footer>
  );
};

export default ContactFooter;
