import React from 'react';
import { useTranslation } from 'react-i18next';
import { Send } from 'lucide-react';

interface WhyStepProps {
    stepNumber: number;
    question: string;
    answer: string;
    onAnswerChange: (answer: string) => void;
    onSubmit: () => void;
    isActive: boolean;
    isGeneratingQuestion: boolean;
    style: React.CSSProperties;
}

export const WhyStep: React.FC<WhyStepProps> = ({
    stepNumber,
    question,
    answer,
    onAnswerChange,
    onSubmit,
    isActive,
    isGeneratingQuestion,
}) => {
    const { t } = useTranslation();

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            onSubmit();
        }
    };

    if (!isActive && !answer) return null;

    return (
        <div 
            className="max-w-2xl mx-auto bg-gray-950/50 border border-gray-800/50 rounded-xl p-6 relative z-10 hover:border-green-400/30 transition-all duration-300 ml-16 backdrop-blur-sm" 
            // style={style}
        >
            <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-green-400/90 text-gray-900 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    {stepNumber}
                </div>
                <h2 className="text-xl font-light text-gray-100">
                    {t('whyNumber')}{stepNumber}
                </h2>
            </div>
            
            {isActive ? (
                <div>
                    {isGeneratingQuestion ? (
                        <div className="mb-6 flex items-center gap-3 p-4 bg-gray-900/30 rounded-lg">
                            <div className="flex gap-1">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                            <span className="text-gray-400 font-mono text-sm">Analyzing...</span>
                        </div>
                    ) : (
                        <div className="mb-6 p-4 bg-gray-900/30 rounded-lg border-l-4 border-green-400/50">
                            <p className="text-gray-200 font-mono text-sm leading-relaxed">
                                {question}
                            </p>
                        </div>
                    )}
                    <div className="flex gap-3">
                        <input
                            type="text"
                            value={answer}
                            onChange={(e) => onAnswerChange(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl focus:outline-none focus:border-green-400/50 focus:ring-1 focus:ring-green-400/20 text-gray-100 placeholder-gray-500 font-mono text-sm transition-all duration-200"
                            placeholder={t('enterAnswer')}
                        />
                        <button
                            onClick={onSubmit}
                            className="px-6 py-3 bg-green-400/90 hover:bg-green-400 text-gray-900 rounded-xl font-medium transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg hover:shadow-green-400/20"
                            disabled={!answer.trim() || isGeneratingQuestion}
                        >
                            {stepNumber === 5 ? t('analyze') : t('next')}
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            ) : (
                <div className="p-4 bg-gray-900/30 rounded-lg border-l-4 border-gray-600">
                    <p className="text-gray-300 font-mono text-sm leading-relaxed">{answer}</p>
                </div>
            )}
        </div>
    );
};