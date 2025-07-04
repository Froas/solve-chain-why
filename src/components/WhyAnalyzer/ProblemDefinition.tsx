import React from 'react';
import { useTranslation } from 'react-i18next';
import { Target } from 'lucide-react';
import { ExampleButtons } from './ExampleButtons';

interface ProblemDefinitionProps {
    problem: string;
    onProblemChange: (problem: string) => void;
    onSubmit: () => void;
    style: React.CSSProperties;
    }

    export const ProblemDefinition: React.FC<ProblemDefinitionProps> = ({
    problem,
    onProblemChange,
    onSubmit,
    style
    }) => {
    const { t } = useTranslation();

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        onSubmit();
        }
    };

    return (
        <div className="max-w-2xl mx-auto rounded-xl p-6 relative z-10" style={style}>
            <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6" style={{ color: '#3F3F47' }} />
                <h2 className="text-xl font-bold" style={{ color: '#3F3F47' }}>
                {t('defineProblem')}
                </h2>
            </div>
            
            <textarea
                value={problem}
                onChange={(e) => onProblemChange(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 mb-4 resize-none"
                style={{ borderColor: '#3F3F47', minHeight: '80px' }}
                placeholder={t('whatChallenge')}
                rows={2}
            />
            
            <ExampleButtons onExampleSelect={onProblemChange} />
            
            <button
                onClick={onSubmit}
                className="w-full px-6 py-3 rounded-lg text-white flex items-center justify-center gap-2 hover:opacity-90 transition-all"
                style={{ backgroundColor: '#3F3F47' }}
                disabled={!problem.trim()}
            >
                {t('startJourney')}
            </button>
        </div>
    );
};