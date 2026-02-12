import { useTheme } from '../../context/ThemeContext';

export const Section = ({ children, id, variant = 'default', className = '' }) => {
  const { isDark } = useTheme();
  
  const backgrounds = {
    default: isDark ? 'bg-gray-950' : 'bg-white',
    alt: isDark ? 'bg-gray-900' : 'bg-gray-50',
    gradient: isDark ? 'bg-gray-900' : 'bg-gradient-to-t from-gray-100 to-white',
  };
  
  return (
    <section id={id} className={`py-24 px-6 ${backgrounds[variant]} ${className}`}>
      {children}
    </section>
  );
};