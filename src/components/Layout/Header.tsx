import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import type { AIProvider } from '../../types';
import { Book, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
    aiProvider: AIProvider;
    onProviderChange: (provider: AIProvider) => void;
}

export default function Header({ aiProvider, onProviderChange }: HeaderProps) {
    const { t } = useTranslation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-black border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Title - адаптирован для мобильных */}
                    <Link to="/analyzer" className="block cursor-pointer no-underline flex-shrink-0">
                        <div>
                            <h1 className="text-lg sm:text-2xl font-light text-white font-mono">
                                {t('header.title')}
                            </h1>
                            <p className="text-xs sm:text-sm text-gray-400 font-mono hidden sm:block">
                                {t('header.subtitle')}
                            </p>
                        </div>
                    </Link>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {/* AI Provider Selector */}
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-400 font-mono">{t('aiProvider.select')}</span>
                            <select
                                value={aiProvider}
                                onChange={(e) => onProviderChange(e.target.value as AIProvider)}
                                className="px-3 py-1 bg-gray-900 border border-gray-700 text-white rounded-md text-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 font-mono"
                                disabled
                            >
                                <option value="gemini">{t('aiProvider.gemini')}</option>
                                <option value="openai">{t('aiProvider.openai')}</option>
                                <option value="llama">{t('aiProvider.llama')}</option>
                                <option value="deepseek">{t('aiProvider.deepseek')}</option>
                                <option value="groq">{t('aiProvider.groq')}</option>
                            </select>
                        </div>
                        
                        <LanguageSwitcher />
                        
                        <Link
                            to="/docs"
                            className="flex items-center gap-2"
                        >
                            <Book className="w-5 h-5 text-white" />
                            <span className="text-lg font-light text-white font-mono">
                                {t("header.docs")}
                            </span>
                        </Link>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden p-2 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 rounded-md"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
                
                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-800">
                        <div className="flex flex-col space-y-4">
                            {/* AI Provider Selector для мобильных */}
                            <div className="flex flex-col gap-2">
                                <span className="text-sm text-gray-400 font-mono">{t('aiProvider.select')}</span>
                                <select
                                    value={aiProvider}
                                    onChange={(e) => onProviderChange(e.target.value as AIProvider)}
                                    className="px-3 py-2 bg-gray-900 border border-gray-700 text-white rounded-md text-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 font-mono"
                                    disabled
                                >
                                    <option value="gemini">{t('aiProvider.gemini')}</option>
                                    <option value="openai">{t('aiProvider.openai')}</option>
                                    <option value="llama">{t('aiProvider.llama')}</option>
                                    <option value="deepseek">{t('aiProvider.deepseek')}</option>
                                    <option value="groq">{t('aiProvider.groq')}</option>
                                </select>
                            </div>
                            
                            {/* Language Switcher для мобильных */}
                            <div className="flex flex-col gap-2">
                                <span className="text-sm text-gray-400 font-mono">Language</span>
                                <LanguageSwitcher />
                            </div>
                            
                            {/* Docs Link для мобильных */}
                            <Link
                                to="/docs"
                                className="flex items-center gap-2 py-2 px-3 bg-gray-900 rounded-md hover:bg-gray-800 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <Book className="w-5 h-5 text-white" />
                                <span className="text-lg font-light text-white font-mono">
                                    {t("header.docs")}
                                </span>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}