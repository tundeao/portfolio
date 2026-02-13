import { ExternalLink } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { Section } from '../layout/Section';
import { Badge } from '../ui/Badge';
import { SectionHeader } from '../ui/SectionHeader';
import { projects } from '../../data/projects';

export const Projects = () => {
  const { colors, isDark } = useTheme();
  
  return (
    <Section variant="alt">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="Recent Projects" />
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a 
              key={index}
              target='_blank'
              href={project.link}
              className={`group rounded-2xl overflow-hidden border transition-all hover:-translate-y-2 hover:shadow-xl ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                  : `bg-white border-gray-200 hover:${colors.border}`
              }`}
            >
              <div className={`h-32 bg-gradient-to-br ${colors.gradient} opacity-90 group-hover:opacity-100 transition-opacity`} />
              <div className="p-6">
                <h3 className={`font-semibold mb-2 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                  <ExternalLink size={14} className="text-gray-400 group-hover:text-orange-500 transition-colors" />
                </h3>
                <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="accent">{tag}</Badge>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};