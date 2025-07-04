export interface WhyAnalysis {
    rootCause: string;
    solutions: Solution[];
    insights: string[];
}

export interface Solution {
    title: string;
    description: string;
}

export interface WhyState {
    problem: string;
    whys: string[];
    followUpQuestions: string[];
    currentStep: number;
    showAnalysis: boolean;
    analysis: WhyAnalysis | null;
    isAnalyzing: boolean;
    animateStep: number | string | null;
    isGeneratingQuestion: boolean;
}

export interface AIProvider {
    name: string;
    complete: (prompt: string) => Promise<string>;
    tokensUsed?: number;
    maxTokens?: number;
}