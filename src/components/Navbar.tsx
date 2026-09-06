import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GemIcon from './GemIcon';
import { ArrowUpRight, Mail } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
  number: string;
}

const navLinks: NavLink[] = [
  { label: 'About', href: '#about', number: '01' },
  { label: 'Skills', href: '#skills', number: '02' },
  { label: 'Projects', href: '#projects', number: '03' },
  { label: 'Achievements', href: '#achievements', number: '04' },
  { label: 'Contact', href: '#contact', number: '05' },
];

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.92 0-1.67-.75-1.67-1.67s.75-1.67 1.67-1.67 1.67.75 1.67 1.67-.75 1.67-1.67 1.67M7.86 18.5v-8.37H5.07v8.37h2.79z" />
  </svg>
);

const GitHubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle smooth scroll for nav links & close mobile menu
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'bg-[#09090C]/85 backdrop-blur-xl border-b border-[#F3D9F0]/15 py-3 sm:py-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
            : 'bg-transparent border-b border-transparent pt-5 sm:pt-7 pb-3 sm:pb-4'
        }`}
      >
        <div className="flex justify-between items-center px-5 sm:px-8 md:px-12 max-w-7xl mx-auto w-full">
          {/* Logo / Badge */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
            className="flex items-center gap-2.5 group cursor-pointer z-50"
          >
            <div className="relative">
              <GemIcon
                size={30}
                className="w-7 h-7 sm:w-8 sm:h-8 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(201,167,255,0.45)] group-hover:drop-shadow-[0_0_18px_rgba(255,217,236,0.8)] transition-transform duration-300"
              />
            </div>
            <span className="text-white font-bold text-sm sm:text-base tracking-tight uppercase group-hover:text-[#FFD9EC] transition-colors">
              SRILAKSHMI
            </span>
          </a>

          {/* Desktop Nav links (hidden on mobile, visible on md and up) */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="group relative py-1 text-[#F3D9F0]/80 hover:text-[#F3D9F0] font-medium uppercase tracking-wider text-xs sm:text-sm transition-colors duration-200"
              >
                <span>{link.label}</span>
                <span
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#E8B4E0] via-[#FFD9EC] to-[#C9A7FF] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out pointer-events-none rounded-full"
                />
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger Button (3 lines morphing to X) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden relative z-50 p-2.5 -mr-2 rounded-2xl bg-[#1a1924]/80 border border-[#F3D9F0]/20 text-[#F3D9F0] hover:text-white hover:border-[#F3D9F0]/40 transition-all duration-200 active:scale-95 flex flex-col justify-center items-center w-11 h-11 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.4)]"
          >
            <div className="w-5 h-4 flex flex-col justify-between items-center relative">
              {/* Line 1 */}
              <motion.span
                animate={
                  mobileMenuOpen
                    ? { rotate: 45, y: 7, backgroundColor: '#FFD9EC' }
                    : { rotate: 0, y: 0, backgroundColor: '#F3D9F0' }
                }
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="w-full h-[2px] rounded-full origin-center"
              />
              {/* Line 2 */}
              <motion.span
                animate={
                  mobileMenuOpen
                    ? { opacity: 0, scaleX: 0 }
                    : { opacity: 1, scaleX: 1, backgroundColor: '#F3D9F0' }
                }
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="w-full h-[2px] rounded-full"
              />
              {/* Line 3 */}
              <motion.span
                animate={
                  mobileMenuOpen
                    ? { rotate: -45, y: -7, backgroundColor: '#FFD9EC' }
                    : { rotate: 0, y: 0, backgroundColor: '#F3D9F0' }
                }
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="w-full h-[2px] rounded-full origin-center"
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden bg-[#070709]/95 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto"
          >
            {/* Background glowing ambient light */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-gradient-to-br from-[#C13584]/20 via-[#B76CE0]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Vertical Nav Links */}
            <div className="flex flex-col space-y-2 relative z-10 my-auto">
              <div className="text-[11px] uppercase tracking-widest text-[#F3D9F0]/40 font-mono mb-3 pl-2">
                Navigation
              </div>

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-[#14131c]/60 border border-[#F3D9F0]/10 hover:border-[#FFD9EC]/40 hover:bg-[#1f1e2c]/80 text-white active:scale-[0.98] transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="text-xs font-mono text-[#F3D9F0]/40 group-hover:text-[#FFD9EC] transition-colors">
                        {link.number}
                      </span>
                      <span className="text-lg font-semibold uppercase tracking-wider text-[#F3D9F0] group-hover:text-white group-hover:translate-x-1 transition-all">
                        {link.label}
                      </span>
                    </div>

                    <ArrowUpRight className="w-4 h-4 text-[#F3D9F0]/40 group-hover:text-[#FFD9EC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Mobile Drawer Bottom Info & Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.3, delay: 0.35 }}
              className="relative z-10 pt-6 border-t border-[#F3D9F0]/15 flex flex-col gap-4"
            >
              {/* Direct CTA */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(193,53,132,0.4)]"
                style={{
                  background: 'linear-gradient(135deg, #6B1170 0%, #C13584 45%, #9333EA 100%)',
                  border: '1px solid rgba(243, 217, 240, 0.4)',
                }}
              >
                <span>Let&apos;s Build Together</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Social icons row */}
              <div className="flex items-center justify-between px-2 pt-1 text-xs text-[#F3D9F0]/60">
                <span className="text-[11px] uppercase tracking-wider">Connect:</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://linkedin.com/in/srilakshmi-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-[#14131c] border border-[#F3D9F0]/15 text-[#F3D9F0]/80 hover:text-white hover:border-[#F3D9F0]/40 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/Sri-1212"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-[#14131c] border border-[#F3D9F0]/15 text-[#F3D9F0]/80 hover:text-white hover:border-[#F3D9F0]/40 transition-colors"
                    aria-label="GitHub"
                  >
                    <GitHubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:dsrilakshmi573@gmail.com"
                    className="p-2 rounded-xl bg-[#14131c] border border-[#F3D9F0]/15 text-[#F3D9F0]/80 hover:text-white hover:border-[#F3D9F0]/40 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

