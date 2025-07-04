import React from 'react';
import { useTranslation } from 'react-i18next';

export const LoadingState: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="max-w-2xl mx-auto bg-gray-900 border border-gray-800 rounded-lg p-8 text-center ml-16">
            <div className="flex justify-center mb-6">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce mx-1"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce mx-1" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce mx-1" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <p className="text-lg text-gray-300 font-mono">
                {t('analyzingResponses')}
            </p>
        </div>
    );
};