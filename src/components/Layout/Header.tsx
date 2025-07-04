import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import type { AIProvider } from '../../types';
import { Book } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
    aiProvider: AIProvider;
    onProviderChange: (provider: AIProvider) => void;
}

export default function Header({ aiProvider, onProviderChange }: HeaderProps) {
    const { t } = useTranslation();

    return (
        <header className="bg-black border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link  to="/analyzer" className="block cursor-pointer no-underline">                   
                        <div>
                            <h1 className="text-2xl font-light text-white font-mono">
                                {t('header.title')}
                            </h1>
                            <p className="text-sm text-gray-400 font-mono">
                                {t('header.subtitle')}
                            </p>
                        </div>
                    </Link>
                    
                    <div className="flex items-center gap-6">
                        {/* AI Provider Selector */}
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-400 font-mono">{t('aiProvider.select')}</span>
                            <select
                                value={aiProvider}
                                onChange={(e) => onProviderChange(e.target.value as AIProvider)}
                                className="px-3 py-1 bg-gray-900 border border-gray-700 text-white rounded-md text-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 font-mono"
                            >
                                <option value="gemini">{t('aiProvider.gemini')}</option>
                                <option value="openai">{t('aiProvider.openai')}</option>
                                <option value="llama">{t('aiProvider.llama')}</option>
                                <option value="deepseek">{t('aiProvider.deepseek')}</option>
                                <option value="groq">{t('aiProvider.groq')}</option>
                            </select>
                        </div>
                        
                        <LanguageSwitcher />
                    </div>
                    
                    <Link
                        to="/docs"
                        className="flex items-center gap-2"             
                        >
                        <Book className="w-5 h-5 text-white" />      
                        <h1 className="text-2xl font-light text-white font-mono">
                            {t("header.docs")}
                        </h1>
                    </Link>
                </div>
            </div>
        </header>
    );
}