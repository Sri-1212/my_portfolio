import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  ArrowUpRight,
  ArrowUp,
  Send,
  Clock,
} from 'lucide-react';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.92 0-1.67-.75-1.67-1.67s.75-1.67 1.67-1.67 1.67.75 1.67 1.67-.75 1.67-1.67 1.67M7.86 18.5v-8.37H5.07v8.37h2.79z" />
  </svg>
);

const GitHubIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const socialLinks = [
  {
    icon: LinkedInIcon,
    title: 'LinkedIn',
    subtitle: '/in/srilakshmi-',
    href: 'https://linkedin.com/in/srilakshmi-',
    color: '#0A66C2',
  },
  {
    icon: GitHubIcon,
    title: 'GitHub',
    subtitle: '@Sri-1212',
    href: 'https://github.com/Sri-1212',
    color: '#C9A7FF',
  },
  {
    icon: Mail,
    title: 'Email Direct',
    subtitle: 'dsrilakshmi573@gmail.com',
    href: 'mailto:dsrilakshmi573@gmail.com',
    color: '#FFB6D9',
  },
  {
    icon: Phone,
    title: 'Phone / WhatsApp',
    subtitle: '+91 7676825610',
    href: 'tel:+917676825610',
    color: '#25D366',
  },
];

const ContactFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'dsrilakshmi573@gmail.com';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#09090C] rounded-t-[36px] sm:rounded-t-[56px] md:rounded-t-[64px] border-t border-[#F3D9F0]/20 px-5 sm:px-8 md:px-12 py-28 sm:py-36 md:py-48 font-kanit overflow-hidden z-20"
    >
      {/* ── Background Ambient Glows ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '750px',
          height: '400px',
          background:
            'radial-gradient(ellipse at center, rgba(193,53,132,0.18) 0%, rgba(147,51,234,0.12) 45%, transparent 75%)',
          filter: 'blur(90px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '10%',
          right: '5%',
          width: '500px',
          height: '350px',
          background:
            'radial-gradient(circle, rgba(8,145,178,0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* ── Futuristic Subtle Grid ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(243, 217, 240, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(243, 217, 240, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 80%)',
        }}
      />

      {/* ── Floating 3D Decorative Assets ── */}
      {/* Top-left: Crystal */}
      <motion.img
        src="/decor-crystal.png"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none opacity-70 hidden md:block"
        style={{ top: '6%', left: '3%', width: 'clamp(90px, 12vw, 170px)' }}
        animate={{ y: [0, -16, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Top-right: Gem */}
      <motion.img
        src="/decor-gem.png"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none opacity-70 hidden md:block"
        style={{ top: '8%', right: '3%', width: 'clamp(95px, 12vw, 180px)' }}
        animate={{ y: [0, 15, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      />

      {/* Bottom-left: Orb */}
      <motion.img
        src="/decor-orb.png"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none opacity-60 hidden lg:block"
        style={{ bottom: '8%', left: '3%', width: 'clamp(70px, 10vw, 140px)' }}
        animate={{ y: [0, 12, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      />

      {/* Bottom-right: Flower */}
      <motion.img
        src="/decor-flower.png"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none opacity-70 hidden lg:block"
        style={{ bottom: '8%', right: '3%', width: 'clamp(85px, 11vw, 160px)' }}
        animate={{ y: [0, -14, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      {/* ── Main Container ── */}
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Status Pill */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <FadeIn delay={0} y={20}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#22c55e]/30 bg-[#22c55e]/10 backdrop-blur-md shadow-[0_0_20px_rgba(34,197,94,0.15)]">
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-[#22c55e]" />
              </span>
              <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#dcfce7] font-medium">
                Available for New Roles & Projects
              </span>
            </div>
          </FadeIn>
        </div>

        {/* Big Section Heading */}
        <div className="text-center mb-14 sm:mb-20">
          <FadeIn delay={0.1} y={30}>
            <h2
              className="hero-heading font-black uppercase leading-[0.92] tracking-tight mb-5 sm:mb-6"
              style={{ fontSize: 'clamp(2.6rem, 9vw, 120px)' }}
            >
              Let&apos;s Build Together.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <p className="text-[#F3D9F0]/80 font-light text-base sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed px-2">
              Have an idea, project opportunity, or just want to chat tech? Let&apos;s turn bold concepts into reality.
            </p>
          </FadeIn>
        </div>

        {/* ── Featured Contact Card (Hero Interactive Box) ── */}
        <FadeIn delay={0.3} y={30} className="mb-12 sm:mb-20">
          <div className="relative rounded-3xl p-6 sm:p-10 md:p-12 bg-gradient-to-b from-[#16151f]/90 to-[#0e0d14]/90 border border-[#F3D9F0]/25 shadow-[0_12px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(193,53,132,0.12)] backdrop-blur-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
              {/* Left Info */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto">
                <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-[#FFD9EC]/70 font-semibold mb-2">
                  <span>Direct Communication</span>
                </div>
                <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 tracking-tight break-all sm:break-normal">
                  {email}
                </h3>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-[#F3D9F0]/60 mt-1">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C9A7FF]" />
                    Bengaluru, India
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#FFB6D9]" />
                    IST (UTC+5:30)
                  </span>
                </div>
              </div>

              {/* Right Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full md:w-auto">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 bg-[#1e1d29] hover:bg-[#282736] border border-[#F3D9F0]/25 text-[#F3D9F0] hover:scale-105 active:scale-95 shadow-md min-w-[140px]"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div
                        key="copied"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-2 text-emerald-400"
                      >
                        <Check className="w-4 h-4" />
                        <span>Copied!</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-2"
                      >
                        <Copy className="w-4 h-4" />
                        <span>Copy Email</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>

                <a
                  href={`mailto:${email}`}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(193,53,132,0.4)]"
                  style={{
                    background: 'linear-gradient(135deg, #6B1170 0%, #C13584 45%, #9333EA 100%)',
                    border: '1px solid rgba(243, 217, 240, 0.5)',
                  }}
                >
                  <Send className="w-4 h-4" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ── Social / Channels Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 mb-12 sm:mb-20">
          {socialLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <FadeIn key={link.title} delay={0.4 + idx * 0.08} y={20}>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#121217]/70 border border-[#F3D9F0]/15 hover:border-[#F3D9F0]/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_25px_rgba(193,53,132,0.15)] backdrop-blur-md"
                >
                  <div className="flex items-center gap-3 sm:gap-3.5">
                    <div
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-[#1a1924] border border-[#F3D9F0]/20 text-[#F3D9F0] group-hover:scale-110 group-hover:text-white transition-all duration-300"
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm sm:text-base group-hover:text-[#FFD9EC] transition-colors">
                        {link.title}
                      </h4>
                      <p className="text-[#F3D9F0]/50 text-xs font-light tracking-wide truncate max-w-[120px]">
                        {link.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="text-[#F3D9F0]/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>
              </FadeIn>
            );
          })}
        </div>

        {/* ── Footer Bottom Row (Copyright & Back-to-Top) ── */}
        <FadeIn delay={0.7} y={20}>
          <div className="pt-6 sm:pt-8 border-t border-[#F3D9F0]/15 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5 text-center sm:text-left">
            <div>
              <p className="text-[#F3D9F0]/70 font-normal text-xs sm:text-sm">
                © {new Date().getFullYear()}{' '}
                <span className="text-white font-semibold">Srilakshmi</span>. Crafted with passion & code.
              </p>
              <p className="text-[#F3D9F0]/40 text-xs mt-0.5 sm:mt-1">
                Full-Stack Developer • Bengaluru, India
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={scrollToTop}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#F3D9F0]/20 bg-[#14131c] hover:bg-[#1f1e2c] text-[#F3D9F0]/80 hover:text-white text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default ContactFooter;

