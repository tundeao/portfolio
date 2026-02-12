import { useTheme } from '../../context/ThemeContext';

export const Footer = () => {
  const { isDark } = useTheme();
  
  return (
    <footer className={`py-6 text-center text-sm ${isDark ? 'bg-gray-900 text-gray-600' : 'bg-gray-50 text-gray-400'}`}>
      © {new Date().getFullYear()} Tunde Araba-Owoyele. Built with Love (& React)
    </footer>
  );
};