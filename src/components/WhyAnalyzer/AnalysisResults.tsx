import React from 'react';
import { useTranslation } from 'react-i18next';
import { AlertCircle, Lightbulb, CheckCircle, RotateCcw } from 'lucide-react';
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
        <div className="max-w-2xl mx-auto mt-12 mb-8 ml-16" style={style}>
            <div className="text-center mb-8">
                <h2 className="text-3xl font-light mb-4 text-white">
                    {t('discoveryComplete')}
                </h2>
                <p className="text-lg text-gray-400 font-mono">
                    {t('foundAtRoot')}
                </p>
            </div>
            
            <div className="space-y-6">
                {/* Root Cause */}
                <div className="bg-gray-900 border border-red-500/30 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <AlertCircle className="w-6 h-6 text-red-400" />
                        <h3 className="text-xl font-light text-white">{t('rootCause')}</h3>
                    </div>
                    <p className="text-gray-300 font-mono leading-relaxed">{analysis.rootCause}</p>
                </div>

                {/* Solutions */}
                <div className="bg-gray-900 border border-green-500/30 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <Lightbulb className="w-6 h-6 text-green-400" />
                        <h3 className="text-xl font-light text-white">{t('solutions')}</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {analysis.solutions.map((solution, index) => (
                            <div key={index} className="bg-black border border-gray-800 p-4 rounded-lg hover:border-gray-700 transition-colors">
                                <h4 className="font-medium mb-2 text-green-400 font-mono">{solution.title}</h4>
                                <p className="text-gray-300 font-mono text-sm leading-relaxed">{solution.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Insights */}
                <div className="bg-gray-900 border border-blue-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-light mb-4 text-white">{t('keyInsights')}</h3>
                    <div className="space-y-3">
                        {analysis.insights.map((insight, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-400" />
                                <p className="text-gray-300 font-mono text-sm leading-relaxed">{insight}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="text-center mt-8">
                <button
                    onClick={onReset}
                    className="px-8 py-3 bg-green-400 hover:bg-green-500 text-black rounded-lg font-medium transition-colors flex items-center gap-2 mx-auto"
                >
                    <RotateCcw className="w-4 h-4" />
                    {t('startNewJourney')}
                </button>
            </div>
        </div>
    );
};