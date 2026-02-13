import { createContext, useContext, useState, useEffect } from 'react';

const colorSchemes = {
  default: { accent: 'orange', name: 'Default' },
  protanopia: { accent: 'blue', name: 'Protanopia/Deuteranopia (Blue)' },
  tritanopia: { accent: 'pink', name: 'Tritanopia (Pink)' },
  monochrome: { accent: 'gray', name: 'Monochrome' },
};

const accentColors = {
  orange: {
    light: { bg: 'bg-orange-500', bgHover: 'hover:bg-orange-600', bgLight: 'bg-orange-100', bgLight2: 'bg-orange-50', text: 'text-orange-500', textDark: 'text-orange-600', border: 'border-orange-300', borderLight: 'border-orange-200', shadow: 'hover:shadow-orange-500/25', gradient: 'from-orange-400 to-orange-600', dot: 'bg-orange-400' },
    dark: { bg: 'bg-orange-500', bgHover: 'hover:bg-orange-400', bgLight: 'bg-orange-500/20', bgLight2: 'bg-orange-500/10', text: 'text-orange-400', textDark: 'text-orange-300', border: 'border-orange-500/50', borderLight: 'border-orange-500/30', shadow: 'hover:shadow-orange-500/25', gradient: 'from-orange-500 to-orange-700', dot: 'bg-orange-400' }
  },
  blue: {
    light: { bg: 'bg-blue-600', bgHover: 'hover:bg-blue-700', bgLight: 'bg-blue-100', bgLight2: 'bg-blue-50', text: 'text-blue-600', textDark: 'text-blue-700', border: 'border-blue-300', borderLight: 'border-blue-200', shadow: 'hover:shadow-blue-500/25', gradient: 'from-blue-500 to-blue-700', dot: 'bg-blue-500' },
    dark: { bg: 'bg-blue-500', bgHover: 'hover:bg-blue-400', bgLight: 'bg-blue-500/20', bgLight2: 'bg-blue-500/10', text: 'text-blue-400', textDark: 'text-blue-300', border: 'border-blue-500/50', borderLight: 'border-blue-500/30', shadow: 'hover:shadow-blue-500/25', gradient: 'from-blue-500 to-blue-700', dot: 'bg-blue-400' }
  },
  pink: {
    light: { bg: 'bg-pink-600', bgHover: 'hover:bg-pink-700', bgLight: 'bg-pink-100', bgLight2: 'bg-pink-50', text: 'text-pink-600', textDark: 'text-pink-700', border: 'border-pink-300', borderLight: 'border-pink-200', shadow: 'hover:shadow-pink-500/25', gradient: 'from-pink-500 to-pink-700', dot: 'bg-pink-500' },
    dark: { bg: 'bg-pink-500', bgHover: 'hover:bg-pink-400', bgLight: 'bg-pink-500/20', bgLight2: 'bg-pink-500/10', text: 'text-pink-400', textDark: 'text-pink-300', border: 'border-pink-500/50', borderLight: 'border-pink-500/30', shadow: 'hover:shadow-pink-500/25', gradient: 'from-pink-500 to-pink-700', dot: 'bg-pink-400' }
  },
  gray: {
    light: { bg: 'bg-gray-800', bgHover: 'hover:bg-gray-900', bgLight: 'bg-gray-200', bgLight2: 'bg-gray-100', text: 'text-gray-800', textDark: 'text-gray-900', border: 'border-gray-400', borderLight: 'border-gray-300', shadow: 'hover:shadow-gray-500/25', gradient: 'from-gray-600 to-gray-800', dot: 'bg-gray-600' },
    dark: { bg: 'bg-gray-950', bgHover: 'hover:bg-gray-200', bgLight: 'bg-gray-600/20', bgLight2: 'bg-gray-500/10', text: 'text-gray-100', textDark: 'text-white', border: 'border-gray-500', borderLight: 'border-gray-600', shadow: 'hover:shadow-gray-400/25', gradient: 'from-gray-400 to-gray-600', dot: 'bg-gray-400' }
  }
};

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('system');
  const [colorScheme, setColorScheme] = useState('default');
  const [resolvedTheme, setResolvedTheme] = useState('light');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const updateResolvedTheme = () => {
      if (theme === 'system') {
        setResolvedTheme(mediaQuery.matches ? 'dark' : 'light');
      } else {
        setResolvedTheme(theme);
      }
    };
    
    updateResolvedTheme();
    mediaQuery.addEventListener('change', updateResolvedTheme);
    
    return () => mediaQuery.removeEventListener('change', updateResolvedTheme);
  }, [theme]);

  const accent = colorSchemes[colorScheme].accent;
  const colors = accentColors[accent][resolvedTheme];
  const isDark = resolvedTheme === 'dark';

  const value = {
    theme,
    setTheme,
    colorScheme,
    setColorScheme,
    colors,
    isDark,
    colorSchemes,
    accentColors,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;