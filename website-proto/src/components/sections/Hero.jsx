import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { SocialLinks } from '../ui/SocialLinks';
import { personal } from '../../data/personal';

export const Hero = () => {
  const { colors, isDark } = useTheme();
  
  const socialLinks = [
    { icon: Github, href: personal.social.github, label: 'GitHub' },
    { icon: Linkedin, href: personal.social.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
  ];

  return (
    <section className={`min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6 ${isDark ? 'bg-gray-950' : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'}`}>
      {/* Animated background blobs */}
      <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse opacity-30 ${colors.bg}`} />
      <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-20 ${colors.bg}`} style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 text-center">
        <p className={`${colors.text} font-mono mb-4 tracking-wider`}> <br /> </p>
        <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {personal.name} <span className={colors.text}>{personal.lastName}</span>
        </h1>
        <p className={`text-xl md:text-2xl mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {personal.title}
        </p>
        <p className={`max-w-xl mb-10 mx-auto ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
          {personal.tagline}
        </p>
        <div className="mb-12">
          <SocialLinks links={socialLinks} />
        </div>
        <ChevronDown className={`${colors.text} animate-bounce mx-auto`} size={28} />
      </div>
    </section>
  );
};
