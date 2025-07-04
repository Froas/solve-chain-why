import React from 'react';
import { useTranslation } from 'react-i18next';

interface ExampleButtonsProps {
    onExampleSelect: (example: string) => void;   
}

export const ExampleButtons: React.FC<ExampleButtonsProps> = ({ onExampleSelect }) => {
    const { t } = useTranslation();

    const examples = [
        { key: 'procrastinationHabits', text: 'procrastinationExample' },
        { key: 'lowProductInterest', text: 'productLaunchExample' },
        { key: 'familyConflicts', text: 'familyConflictExample' },
        { key: 'codeQualityIssues', text: 'codeQualityExample' },
        { key: 'chronicExhaustion', text: 'exhaustionExample' },
    ];

    return (
        <div className="mb-6">
            <div className="flex flex-wrap gap-2">
                {examples.map(({ key, text }) => (
                    <button
                        key={key}
                        onClick={() => onExampleSelect(t(text))}
                        className="px-3 py-1 text-sm bg-black border border-gray-700 text-gray-300 rounded-full hover:border-green-400 hover:text-green-400 transition-colors font-mono"
                    >
                        {t(key)}
                    </button>
                ))}
            </div>
        </div>
    );
};