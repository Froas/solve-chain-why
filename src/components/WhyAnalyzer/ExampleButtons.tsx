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
        <div className="mb-4">
        <div className="flex flex-wrap gap-2">
            {examples.map(({ key, text }) => (
            <button
                key={key}
                onClick={() => onExampleSelect(t(text))}
                className="px-3 py-1 text-sm rounded-full border hover:bg-gray-100 transition-colors"
                style={{ borderColor: '#3F3F47', color: '#3F3F47' }}
            >
                {t(key)}
            </button>
            ))}
        </div>
        </div>
    );
};