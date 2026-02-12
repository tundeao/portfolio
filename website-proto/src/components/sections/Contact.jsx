import { Mail } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';
import { personal } from '../../data/personal';

export const Contact = () => {
  const { isDark } = useTheme();
  
  return (
    <Section id="contact" variant="gradient">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Let's Connect
        </h2>
        <p className={`mb-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          I'm currently looking for entry-level software engineering and analyst positions. Let's chat!
        </p>
        <Button href={`mailto:${personal.email}`} className="px-8 py-4">
          <Mail size={20} /> Get in Touch
        </Button>
      </div>
    </Section>
  );
};