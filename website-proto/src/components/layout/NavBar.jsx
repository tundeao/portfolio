import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { SettingsDropdown } from '../ui/SettingsDropdown';
import { personal } from '../../data/personal';

export const NavBar = ({ currentPage, setCurrentPage }) => {
  const { colors, isDark } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'main', label: 'Portfolio' },
    { id: 'life', label: 'Life' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md ${
        scrolled 
          ? (isDark ? 'bg-gray-900/95 shadow-lg' : 'bg-white/95 shadow-md') 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className={`text-2xl font-bold ${colors.text}`}>
          {personal.initials}
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setCurrentPage(link.id)}
              className={`transition-all ${
                currentPage === link.id 
                  ? colors.text 
                  : (isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900')
              }`}
            >
              {link.label}
            </button>
          ))}
          
          <SettingsDropdown />
          
          <a 
            href="#contact" 
            className={`px-5 py-2 ${colors.bg} ${colors.bgHover} rounded-full text-white text-sm font-medium transition-all hover:shadow-lg ${colors.shadow}`}
          >
            Contact
          </a>
        </div>
        
        {/* Mobile Navigation */}
        <div className="flex md:hidden gap-2 items-center">
          <SettingsDropdown />
          <button 
            className={isDark ? 'text-white' : 'text-gray-800'} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden px-6 py-4 flex flex-col gap-4 ${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setCurrentPage(link.id);
                setMenuOpen(false);
              }}
              className={`text-left ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};