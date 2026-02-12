import { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { NavBar } from './components/layout/NavBar';
import { Footer } from './components/layout/Footer';
import { PortfolioPage } from './pages/PortfolioPage';
import { LifePage } from './pages/LifePage';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('main');
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>
        {currentPage === 'main' ? <PortfolioPage /> : <LifePage />}
      </main>
      
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
