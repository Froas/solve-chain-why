import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { WhyState, WhyAnalysis } from '../types/whyAnalyzer'
import { aiService } from '../services/aiService'
import { questionGenerator } from '../services/questionGenerator'
import type { AIProvider } from '../types'

import { extractJson } from '../utils/extractJSON'
import { z } from 'zod';   

const AnalysisSchema = z.object({
    rootCause: z.string(),
    solutions: z
        .array(
        z.object({
            title: z.string(),
            description: z.string(),
        })
        )
        .length(3),
    insights: z.array(z.string()),
});
export const useWhyAnalysis = (aiProvider: AIProvider) => {
    const { i18n } = useTranslation()
    
    const [state, setState] = useState<WhyState>({
        problem: '',
        whys: ['', '', '', '', ''],
        followUpQuestions: ['', '', '', '', ''],
        currentStep: 0,
        showAnalysis: false,
        analysis: null,
        isAnalyzing: false,
        animateStep: null,
        isGeneratingQuestion: false,
    })

    const updateState = (updates: Partial<WhyState>) => {
        setState(prev => ({ ...prev, ...updates }))
    }

    const generateFollowUpQuestion = async (stepIndex: number) => {
        updateState({ isGeneratingQuestion: true })
        
        const question = await questionGenerator.generateFollowUpQuestion(
            stepIndex,
            state.problem,
            state.whys,
            i18n.language,
            aiProvider
        )
        
        const newQuestions = [...state.followUpQuestions]
        newQuestions[stepIndex - 1] = question
        
        updateState({ 
            followUpQuestions: newQuestions,
            isGeneratingQuestion: false 
        })
    }

    const analyzeResponses = async () => {
        updateState({ isAnalyzing: true })
        
        try {
            const prompt = 
            `Please respond in ${i18n.language} language. Analyze this 5 Whys problem-solving session:

            Problem: ${state.problem}

            ${state.whys.map((why, index) => `Why ${index + 1}: ${why}`).join('\n')}

            Please provide:
            1. A clear identification of the root cause
            2. Three actionable solutions to address this root cause
            3. Key insights from the analysis

            Respond ONLY with valid JSON in this format, and nothing else:
            {
            "rootCause": "Description of the root cause",
            "solutions": [
                {"title": "Solution 1", "description": "Detailed description"},
                {"title": "Solution 2", "description": "Detailed description"},
                {"title": "Solution 3", "description": "Detailed description"}
            ],
            "insights": ["Insight 1", "Insight 2", "Insight 3"]
            }`

            console.log("There is a prompt", prompt)
            const raw = await aiService.complete(prompt, aiProvider) 
            const jsonString = extractJson(raw);
            if (!jsonString) throw new Error('No JSON found in AI response');

            /* 3. парсим */
            const parsed = JSON.parse(jsonString);

            /* 4. валидируем по схеме */
            const validation = AnalysisSchema.safeParse(parsed);
            if (!validation.success) throw new Error(validation.error.message);

            const result: WhyAnalysis = validation.data;
            // const result: WhyAnalysis = JSON.parse(response)
            
            updateState({
                analysis: result,
                showAnalysis: true,
                animateStep: 'analysis',
                isAnalyzing: false
            })
        } catch (error) {
            console.error('Error analyzing responses:', error)
            updateState({
                analysis: {
                    rootCause: "Unable to determine root cause due to an error.",
                    solutions: [],
                    insights: ["Please try again or review your responses."]
                },
                showAnalysis: true,
                isAnalyzing: false
            })
        }
    }

    const resetAnalysis = () => {
        setState({
            problem: '',
            whys: ['', '', '', '', ''],
            followUpQuestions: ['', '', '', '', ''],
            currentStep: 0,
            showAnalysis: false,
            analysis: null,
            isAnalyzing: false,
            animateStep: null,
            isGeneratingQuestion: false,
        })
    }

    return {
        state,
        updateState,
        generateFollowUpQuestion,
        analyzeResponses,
        resetAnalysis,
    }
}