import { useTheme } from '../../context/ThemeContext';
import { Section } from '../layout/Section';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { SectionHeader } from '../ui/SectionHeader';
import { skills } from '../../data/skills';

export const Skills = () => {
  const { colors, isDark } = useTheme();
  
  return (
    <Section>
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="Skills" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="group">
              <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <skill.icon className="text-white" size={24} />
              </div>
              <h3 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <Badge key={i}>{item}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};