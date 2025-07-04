import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import LandingPage from './components/Loading/LandingPage';
import WhyAnalyzer from './components/WhyAnalyzer/WhyAnalyzer';
import DocsPage from './components/Layout/Docs';
import NotFoundPage from './components/Layout/NotFoundPage';

import type { AIProvider } from './types';

function App() {
  const [aiProvider, setAiProvider] = useState<AIProvider>('claude');
  const { i18n } = useTranslation();


  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && ['en', 'jp'].includes(savedLanguage)) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);


  useEffect(() => {
    const savedProvider = localStorage.getItem(
      'preferred-ai-provider'
    ) as AIProvider;
    if (
      savedProvider &&
      ['claude', 'gemini', 'openai'].includes(savedProvider)
    ) {
      setAiProvider(savedProvider);
    }
  }, []);

  const handleProviderChange = (provider: AIProvider) => {
    setAiProvider(provider);
    localStorage.setItem('preferred-ai-provider', provider);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header
          aiProvider={aiProvider}
          onProviderChange={handleProviderChange}
        />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/analyzer"
              element={<WhyAnalyzer aiProvider={aiProvider} />}
            />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;