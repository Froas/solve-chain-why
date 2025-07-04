import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (language: 'en' | 'jp') => {
        i18n.changeLanguage(language);
        localStorage.setItem('preferred-language', language);
    };

    const getLanguageLabel = (lang: 'en' | 'jp') => {
        return lang === 'en' ? 'English' : '日本語';
    };

    return (
        <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Language:</span>
        <select
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value as 'en' | 'jp')}
            className="px-3 py-1 bg-gray-900 border border-gray-700 text-white rounded-md text-sm focus:ring-1 focus:ring-green-400 focus:border-green-400 font-mono"
        >
            <option value="en">{getLanguageLabel('en')}</option>
            <option value="jp">{getLanguageLabel('jp')}</option>
        </select>
        </div>
    );
}