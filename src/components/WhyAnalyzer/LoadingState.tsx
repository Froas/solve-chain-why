import React from 'react';
import { useTranslation } from 'react-i18next';

export const LoadingState: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="text-center py-12">
            <div className="flex justify-center mb-4">
                <div className="w-2 h-2 rounded-full bg-gray-600 animate-bounce mx-1" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-600 animate-bounce mx-1" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-600 animate-bounce mx-1" style={{ animationDelay: '300ms' }}></div>
            </div>
            <p className="text-lg" style={{ color: '#3F3F47' }}>
                {t('analyzingResponses')}
            </p>
        </div>
    );
};