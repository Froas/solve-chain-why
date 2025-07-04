import React from 'react';
import { useTranslation } from 'react-i18next';
import { AlertCircle, Lightbulb, CheckCircle } from 'lucide-react';
import type { WhyAnalysis } from '../../types/whyAnalyzer';

interface AnalysisResultsProps {
    analysis: WhyAnalysis;
    onReset: () => void;
    style: React.CSSProperties;
}

export const AnalysisResults: React.FC<AnalysisResultsProps> = ({
    analysis,
    onReset,
    style
    }) => {
    const { t } = useTranslation();

    return (
        <div className="max-w-2xl mx-auto mt-12 mb-8" style={style}>
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2" style={{ color: '#3F3F47' }}>
                {t('discoveryComplete')}
                </h2>
                <p className="text-lg" style={{ color: '#3F3F47' }}>
                {t('foundAtRoot')}
                </p>
            </div>
            
            <div className="space-y-6">
                {/* Root Cause */}
                <div className="bg-white rounded-xl p-6 shadow-lg border-2" style={{ borderColor: '#3F3F47' }}>
                    <div className="flex items-center gap-3 mb-4">
                        <AlertCircle className="w-6 h-6" style={{ color: '#3F3F47' }} />
                        <h3 className="text-xl font-bold" style={{ color: '#3F3F47' }}>{t('rootCause')}</h3>
                    </div>
                    <p style={{ color: '#3F3F47' }}>{analysis.rootCause}</p>
                </div>

                {/* Solutions */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                        <Lightbulb className="w-6 h-6" style={{ color: '#3F3F47' }} />
                        <h3 className="text-xl font-bold" style={{ color: '#3F3F47' }}>{t('solutions')}</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {analysis.solutions.map((solution, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold mb-2" style={{ color: '#3F3F47' }}>{solution.title}</h4>
                            <p style={{ color: '#3F3F47' }}>{solution.description}</p>
                        </div>
                        ))}
                    </div>
                </div>

                {/* Insights */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold mb-4" style={{ color: '#3F3F47' }}>{t('keyInsights')}</h3>
                    <div className="space-y-3">
                        {analysis.insights.map((insight, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#3F3F47' }} />
                            <p style={{ color: '#3F3F47' }}>{insight}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="text-center mt-8">
                <button
                onClick={onReset}
                className="px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-all"
                style={{ backgroundColor: '#3F3F47' }}
                >
                {t('startNewJourney')}
                </button>
            </div>
        </div>
    );
};