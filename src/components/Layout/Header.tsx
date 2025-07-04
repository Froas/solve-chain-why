import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import type { AIProvider } from '../../types';

interface HeaderProps {
    aiProvider: AIProvider;
    onProviderChange: (provider: AIProvider) => void;
}

export default function Header({ aiProvider, onProviderChange }: HeaderProps) {
    const { t } = useTranslation();

    return (
        <header className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 font-serif">
                            {t('header.title')}
                        </h1>
                        <p className="text-sm text-gray-600">
                            {t('header.subtitle')}
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-6">
                        {/* AI Provider Selector */}
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">{t('aiProvider.select')}</span>
                            <select
                                value={aiProvider}
                                onChange={(e) => onProviderChange(e.target.value as AIProvider)}
                                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="claude">{t('aiProvider.claude')}</option>
                                <option value="gemini">{t('aiProvider.gemini')}</option>
                                <option value="openai">{t('aiProvider.openai')}</option>
                            </select>
                        </div>
                        
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </header>
    );
}