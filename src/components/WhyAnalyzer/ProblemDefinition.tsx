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
        <div 
            className="max-w-2xl mx-auto bg-gray-900 border border-gray-700 rounded-xl p-8 relative z-10 hover:border-green-400/50 transition-all duration-300 ml-16 shadow-xl" 
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-400/20 rounded-full flex items-center justify-center border border-green-400/30">
                    <Target className="w-5 h-5 text-green-400" />
                </div>
                <h2 className="text-xl font-light text-white">
                    {t('defineProblem')}
                </h2>
            </div>
            
            <textarea
                value={problem}
                onChange={(e) => onProblemChange(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-4 py-4 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 mb-6 resize-none text-white placeholder-gray-400 font-mono text-sm leading-relaxed transition-all duration-200"
                placeholder={t('whatChallenge')}
                rows={4}
            />
            
            <ExampleButtons onExampleSelect={onProblemChange} />
            
            <button
                onClick={onSubmit}
                className="w-full px-6 py-4 bg-green-400 hover:bg-green-500 text-gray-900 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-green-400/30 font-mono"
                disabled={!problem.trim()}
            >
                {t('startJourney')}
            </button>
        </div>
    );
};