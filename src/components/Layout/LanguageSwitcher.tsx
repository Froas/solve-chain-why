
export default function LanguageSwitcher() {
    return (
        <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Language:</span>
        {/* <select
            value={currentLanguage}
            onChange={(e) => changeLanguage(e.target.value as 'en' | 'jp')}
            className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
        >
            <option value="en">{getLanguageLabel('en')}</option>
            <option value="jp">{getLanguageLabel('jp')}</option>
        </select> */}
        </div>
    );
}