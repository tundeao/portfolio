import { useTheme } from '../../context/ThemeContext';

export const SocialLinks = ({ links }) => {
  const { isDark } = useTheme();
  
  return (
    <div className="flex gap-4 justify-center">
      {links.map(({ icon: Icon, href, label }, index) => (
        <a 
          key={index} 
          href={href}
          aria-label={label}
          className={`p-3 rounded-full transition-all hover:scale-110 ${
            isDark 
              ? 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10' 
              : 'bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-500'
          }`}
        >
          <Icon size={22} />
        </a>
      ))}
    </div>
  );
};