import { useTheme } from '../../context/ThemeContext';

export const Card = ({ children, className = '', hover = true }) => {
  const { colors, isDark } = useTheme();
  
  const baseStyles = 'rounded-2xl p-6 border transition-all';
  const hoverStyles = hover ? 'hover:-translate-y-1 hover:shadow-lg' : '';
  const themeStyles = isDark 
    ? 'bg-gray-900 border-gray-800 hover:border-gray-700' 
    : `bg-white border-gray-200 hover:${colors.border}`;
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${themeStyles} ${className}`}>
      {children}
    </div>
  );
};