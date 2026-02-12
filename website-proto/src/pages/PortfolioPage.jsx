import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Skills } from '../components/sections/Skills';
import { Projects } from '../components/sections/Projects';
import { Work } from '../components/sections/Work';
import { Contact } from '../components/sections/Contact';

export const PortfolioPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Work />
      <Contact />
    </>
  );
};
