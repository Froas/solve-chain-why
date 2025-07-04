import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import { I18nextProvider } from 'react-i18next'
import WhyAnalyzer from './components/WhyAnalyzer/WhyAnalyzer'

import type { AIProvider } from './types'

function App() {
  const [aiProvider, setAiProvider] = useState<AIProvider>('claude')
  const { i18n } = useTranslation()

  // Initialize language from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language')
    if (savedLanguage && ['en', 'jp'].includes(savedLanguage)) {
      i18n.changeLanguage(savedLanguage)
    }
  }, [i18n])

  // Initialize AI provider from localStorage
  useEffect(() => {
    const savedProvider = localStorage.getItem('preferred-ai-provider') as AIProvider
    if (savedProvider && ['claude', 'gemini', 'openai'].includes(savedProvider)) {
      setAiProvider(savedProvider)
    }
  }, [])

  const handleProviderChange = (provider: AIProvider) => {
    setAiProvider(provider)
    localStorage.setItem('preferred-ai-provider', provider)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header 
        aiProvider={aiProvider}
        onProviderChange={handleProviderChange}
      />
      
      <I18nextProvider i18n={i18n}>
      <div className="App">
        <WhyAnalyzer />
      </div>
      </I18nextProvider>
      
      <Footer />
    </div>
  )
}

export default App