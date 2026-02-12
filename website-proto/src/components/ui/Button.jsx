import { useTheme } from '../../context/ThemeContext';

export const Button = ({ children, href, variant = 'primary', className = '' }) => {
  const { colors } = useTheme();
  
  const styles = {
    primary: `${colors.bg} ${colors.bgHover} text-white hover:shadow-lg ${colors.shadow} hover:scale-105`,
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-700',
    icon: 'bg-gray-100 hover:bg-orange-100 text-gray-600 hover:scale-110',
  };
  
  const classes = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${styles[variant]} ${className}`;
  
  if (href) {
    return <a href={href} className={classes}>{children}</a>;
  }
  
  return <button className={classes}>{children}</button>;
};