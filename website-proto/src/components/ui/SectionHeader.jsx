import { useTheme } from '../../context/ThemeContext';

export const SectionHeader = ({ title }) => {
  const { colors, isDark } = useTheme();
  
  return (
    <>
      <h2 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      <div className={`w-20 h-1 ${colors.bg} mb-10 rounded-full`} />
    </>
  );
};