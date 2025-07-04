import React from 'react';
import { useTranslation } from 'react-i18next';
import { useWhyAnalysis } from '../../hooks/useWhyAnalysis';
import { useStepNavigation } from '../../hooks/useStepNavigator';
import { useAnimations } from '../../hooks/useAnimations';
import { ProblemDefinition } from './ProblemDefinition';
import { WhyStep } from './WhyStep';
import { LoadingState } from './LoadingState';
import { AnalysisResults } from './AnalysisResults';
import type { AIProvider } from '../../types';

interface WhyAnalyzerProps {
    aiProvider: AIProvider;
}

const WhyAnalyzer: React.FC<WhyAnalyzerProps> = ({aiProvider}) => {
    const { t } = useTranslation();
    const { state, updateState, generateFollowUpQuestion, analyzeResponses, resetAnalysis } = useWhyAnalysis(aiProvider);
    const { setStepRef } = useStepNavigation(state.currentStep);
    const { triggerAnimation, getStepStyle } = useAnimations();

    const handleProblemSubmit = async () => {
        if (state.problem.trim()) {
            triggerAnimation(0);
            updateState({ currentStep: 1 });
            await generateFollowUpQuestion(1);
        }
    };

    const handleWhySubmit = async (index: number) => {
        if (state.whys[index].trim()) {
            triggerAnimation(index + 1);
            if (index < 4) {
                updateState({ currentStep: index + 2 });
                await generateFollowUpQuestion(index + 2);
            } else {
                analyzeResponses();
            }
        }
    };

    const updateWhy = (index: number, value: string) => {
        const newWhys = [...state.whys];
        newWhys[index] = value;
        updateState({ whys: newWhys });
    };

    return (
        <div className="min-h-screen py-12 bg-black font-mono">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-light mb-4 text-white">
                        {t('title')}
                    </h1>
                    <p className="text-lg text-gray-400 font-light max-w-lg mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="relative">
                    {/* Минималистичная вертикальная линия */}
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-800"></div>
                    
                    {/* Problem Step */}
                    <div className="relative mb-8" ref={setStepRef(0)}>
                        {state.currentStep === 0 ? (
                            <ProblemDefinition
                                problem={state.problem}
                                onProblemChange={(problem) => updateState({ problem })}
                                onSubmit={handleProblemSubmit}
                                style={getStepStyle(0, state.currentStep, state.showAnalysis)}
                            />
                        ) : (
                            <div 
                                className="max-w-2xl mx-auto bg-gray-900 border border-gray-700 rounded-xl p-6 relative z-10 ml-16" 
                                // style={getStepStyle(0, state.currentStep, state.showAnalysis)}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs font-bold">P</span>
                                    </div>
                                    <span className="text-gray-400 text-sm font-mono">Problem</span>
                                </div>
                                <p className="text-gray-300 font-mono text-sm leading-relaxed">{state.problem}</p>
                            </div>
                        )}
                    </div>

                    {/* Why Steps */}
                    {[1, 2, 3, 4, 5].map((num) => (
                        <div key={num} className="relative mb-8" ref={setStepRef(num)}>
                            <WhyStep
                                stepNumber={num}
                                question={state.followUpQuestions[num - 1]}
                                answer={state.whys[num - 1]}
                                onAnswerChange={(answer) => updateWhy(num - 1, answer)}
                                onSubmit={() => handleWhySubmit(num - 1)}
                                isActive={state.currentStep === num}
                                isGeneratingQuestion={state.isGeneratingQuestion}
                                style={getStepStyle(num, state.currentStep, state.showAnalysis)}
                            />
                        </div>
                    ))}

                    {/* Analysis Loading */}
                    {state.isAnalyzing && (
                        <div ref={setStepRef('analysis')}>
                            <LoadingState />
                        </div>
                    )}

                    {/* Analysis Results */}
                    {state.showAnalysis && state.analysis && (
                        <div ref={setStepRef('results')}>
                            <AnalysisResults
                                analysis={state.analysis}
                                onReset={resetAnalysis}
                                style={{
                                    transform: state.animateStep === 'analysis' ? 'scale(1.02)' : 'scale(1)',
                                    transition: 'all 0.5s ease'
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WhyAnalyzer;