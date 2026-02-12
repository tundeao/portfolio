import { useTheme } from '../../context/ThemeContext';

export const Badge = ({ children, variant = 'default' }) => {
  const { colors, isDark } = useTheme();
  
  const styles = {
    default: isDark 
      ? 'bg-gray-800 text-gray-400' 
      : 'bg-white text-gray-600 border border-gray-200',
    accent: isDark 
      ? `${colors.bgLight} ${colors.text}` 
      : `${colors.bgLight2} ${colors.textDark} border ${colors.borderLight}`,
  };
  
  return (
    <span className={`text-xs px-2 py-1 rounded-full ${styles[variant]}`}>
      {children}
    </span>
  );
};