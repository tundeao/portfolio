import { useState } from 'react';
import { Settings, Monitor, Sun, Moon, Eye, Check } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const SettingsDropdown = () => {
  const { theme, setTheme, colorScheme, setColorScheme, isDark, colorSchemes, accentColors } = useTheme();
  const [open, setOpen] = useState(false);

  const themeOptions = [
    { id: 'system', icon: Monitor, label: 'System' },
    { id: 'light', icon: Sun, label: 'Light' },
    { id: 'dark', icon: Moon, label: 'Dark' },
  ];

  return (
    <div className="relative">
      <button 
        onClick={() => setOpen(!open)} 
        className={`p-2 rounded-lg transition-all ${isDark ? 'hover:bg-white/10 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}
        aria-label="Settings"
      >
        <Settings size={20} />
      </button>
      
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className={`absolute right-0 top-12 w-64 rounded-xl shadow-2xl z-50 border overflow-hidden ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
            {/* Theme Section */}
            <div className={`px-4 py-3 border-b ${isDark ? 'border-gray-700' : 'border-gray-100'}`}>
              <p className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Theme
              </p>
            </div>
            <div className="p-2">
              {themeOptions.map((t) => (
                <button 
                  key={t.id} 
                  onClick={() => setTheme(t.id)} 
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${theme === t.id ? (isDark ? 'bg-white/10' : 'bg-gray-100') : ''} ${isDark ? 'hover:bg-white/5 text-gray-300' : 'hover:bg-gray-50 text-gray-700'}`}
                >
                  <t.icon size={16} />
                  <span className="flex-1 text-left text-sm">{t.label}</span>
                  {theme === t.id && <Check size={16} className="text-green-500" />}
                </button>
              ))}
            </div>
            
            {/* Color Vision Section */}
            <div className={`px-4 py-3 border-t border-b ${isDark ? 'border-gray-700' : 'border-gray-100'}`}>
              <p className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                <Eye size={12} /> Color Vision
              </p>
            </div>
            <div className="p-2">
              {Object.entries(colorSchemes).map(([id, { name, accent }]) => (
                <button 
                  key={id} 
                  onClick={() => setColorScheme(id)} 
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${colorScheme === id ? (isDark ? 'bg-white/10' : 'bg-gray-100') : ''} ${isDark ? 'hover:bg-white/5 text-gray-300' : 'hover:bg-gray-50 text-gray-700'}`}
                >
                  <div className={`w-4 h-4 rounded-full ${accentColors[accent][isDark ? 'dark' : 'light'].bg}`} />
                  <span className="flex-1 text-left text-sm">{name}</span>
                  {colorScheme === id && <Check size={16} className="text-green-500" />}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
