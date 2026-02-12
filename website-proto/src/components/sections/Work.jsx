import { useTheme } from '../../context/ThemeContext';
import { Section } from '../layout/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { experience } from '../../data/experience';

export const Work = () => {
  const { colors, isDark } = useTheme();
  
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Work History" />
        <div className={`relative border-l-2 ${colors.border} pl-8 ml-4`}>
          {experience.map((job, index) => (
            <div key={index} className="mb-8 relative">
              <div className={`absolute w-4 h-4 ${colors.bg} rounded-full -left-10 top-0`} />
              <p className={`${colors.text} text-sm font-mono`}>{job.period}</p>
              <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {job.role}
              </h3>
              <p className={`${colors.textDark} font-medium`}>
                {job.company} • {job.location}
              </p>
              <p className={`mt-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};