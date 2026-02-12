import { GraduationCap } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { Section } from '../layout/Section';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';
import { personal } from '../../data/personal';

export const About = () => {
  const { colors, isDark } = useTheme();
  
  return (
    <Section variant="alt">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Background" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`space-y-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {personal.about.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ 
                __html: paragraph.replace(
                  personal.education.school, 
                  `<span class="${colors.text} font-medium">${personal.education.school}</span>`
                ) 
              }} />
            ))}
          </div>
          <Card hover={false}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg ${colors.bgLight}`}>
                <GraduationCap className={colors.text} />
              </div>
              <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Education</h3>
            </div>
            <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {personal.education.degree}
            </p>
            <p className={isDark ? 'text-gray-500' : 'text-gray-500'}>
              {personal.education.school} • {personal.education.year}
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
};