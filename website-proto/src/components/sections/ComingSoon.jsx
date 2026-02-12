import { Rocket, Clock, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ComingSoon = () => {
  const { colors, isDark } = useTheme();
  
  const upcomingFeatures = [
    'Fitness tracking & workout logs',
    'Recipes & cooking adventures',
    'Mandarin learning progress',
    'GitHub project updates',
  ];

  return (
    <div className={`min-h-screen pt-24 px-6 pb-16 flex items-center justify-center ${isDark ? 'bg-gray-950' : 'bg-gradient-to-b from-white to-gray-50'}`}>
      <div className="max-w-lg mx-auto text-center">
        {/* Animated Icon */}
        <div className={`w-24 h-24 mx-auto mb-8 rounded-3xl ${colors.bg} flex items-center justify-center animate-pulse`}>
          <Rocket className="text-white" size={48} />
        </div>
        
        {/* Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6 ${colors.bgLight} ${colors.text}`}>
          <Clock size={16} /> In Development
        </div>
        
        {/* Title */}
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Coming Soon
        </h1>
        
        {/* Description */}
        <p className={`text-lg mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          This section will showcase my personal journey — workouts, cooking experiments, 
          language learning progress, and side projects.
        </p>
        
        {/* Features Preview */}
        <div className={`p-6 rounded-2xl border ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
          <h3 className={`font-semibold mb-3 flex items-center justify-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <Sparkles size={18} className={colors.text} /> What to Expect
          </h3>
          <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {upcomingFeatures.map((item, index) => (
              <li key={index} className="flex items-center gap-2 justify-center">
                <div className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};