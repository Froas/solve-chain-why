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
    style
    }) => {
    const { t } = useTranslation();

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
        onSubmit();
        }
    };

    if (!isActive && !answer) return null;

    return (
        <div className="max-w-2xl mx-auto rounded-xl p-6 relative z-10" style={style}>
            <div className="flex items-center gap-3 mb-4">
                <div 
                className="w-6 h-6 rounded-full flex items-center justify-center font-bold text-white text-sm" 
                style={{ backgroundColor: '#3F3F47' }}
                >
                {stepNumber}
                </div>
                <h2 className="text-xl font-bold" style={{ color: '#3F3F47' }}>
                {t('whyNumber')}{stepNumber}
                </h2>
            </div>
            
            {isActive ? (
                <div>
                {isGeneratingQuestion ? (
                    <div className="mb-3 flex items-center gap-2">
                    <div className="flex">
                        <div className="w-1 h-1 rounded-full bg-gray-400 animate-bounce mx-0.5" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-1 h-1 rounded-full bg-gray-400 animate-bounce mx-0.5" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-1 h-1 rounded-full bg-gray-400 animate-bounce mx-0.5" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    <span className="text-sm" style={{ color: '#3F3F47' }}>Thinking...</span>
                    </div>
                ) : (
                    <p className="mb-3 text-sm" style={{ color: '#3F3F47' }}>
                    {question}
                    </p>
                )}
                <div className="flex gap-2">
                    <input
                    type="text"
                    value={answer}
                    onChange={(e) => onAnswerChange(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2"
                    style={{ borderColor: '#3F3F47' }}
                    placeholder={t('enterAnswer')}
                    />
                    <button
                    onClick={onSubmit}
                    className="px-4 py-3 rounded-lg text-white flex items-center gap-2 hover:opacity-90 transition-all disabled:opacity-50"
                    style={{ backgroundColor: '#3F3F47' }}
                    disabled={!answer.trim() || isGeneratingQuestion}
                    >
                    {stepNumber === 5 ? t('analyze') : t('next')}
                    <Send className="w-4 h-4" />
                    </button>
                </div>
                </div>
            ) : (
                <p style={{ color: '#3F3F47' }}>{answer}</p>
            )}
        </div>
    );
};