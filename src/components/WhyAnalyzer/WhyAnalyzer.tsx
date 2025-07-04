import React from 'react';
import { useTranslation } from 'react-i18next';
import { useWhyAnalysis } from '../../hooks/useWhyAnalysis';
import { useStepNavigation } from '../../hooks/useStepNavigator';
import { useAnimations } from '../../hooks/useAnimations';
import { ProblemDefinition } from './ProblemDefinition';
import { WhyStep } from './WhyStep';
import { LoadingState } from './LoadingState';
import { AnalysisResults } from './AnalysisResults';

const WhyAnalyzer: React.FC = () => {
    const { t } = useTranslation();
    const { state, updateState, generateFollowUpQuestion, analyzeResponses, resetAnalysis } = useWhyAnalysis();
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
        <div className="min-h-screen py-12 bg-#CBCADB font-serif" >
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-3" style={{ color: '#3F3F47' }}>
                    {t('title')}
                </h1>
                <p className="text-lg max-w-lg mx-auto" style={{ color: '#3F3F47' }}>
                    {t('subtitle')}
                </p>
                </div>

                <div className="relative">
                {/* Visual Flow Diagram */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 transform -translate-x-1/2" style={{ height: 'calc(100% - 100px)' }}></div>
                
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
                    <div className="max-w-2xl mx-auto rounded-xl p-6 relative z-10" style={getStepStyle(0, state.currentStep, state.showAnalysis)}>
                        <p style={{ color: '#3F3F47' }}>{state.problem}</p>
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