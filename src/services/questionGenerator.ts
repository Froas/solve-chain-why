import { aiService } from './aiService'
import type { AIProvider } from '../types'

export class QuestionGenerator {
    async generateFollowUpQuestion(
        stepIndex: number,
        problem: string,
        whys: string[],
        locale: string,
        aiProvider: AIProvider
    ): Promise<string> {
        try {
            let prompt
            
            if (stepIndex === 1) {
                prompt = this.createFirstQuestionPrompt(problem, locale)
            } else {
                prompt = this.createFollowUpPrompt(problem, whys, stepIndex, locale)
            }

            const response = await aiService.complete(prompt, aiProvider) 
            return response.trim()
        } catch (error) {
            console.error('Error generating follow-up question:', error)
            return this.getFallbackQuestion(stepIndex, problem, whys)
        }
    }

    private createFirstQuestionPrompt(problem: string, locale: string): string {
        return `Please respond in ${locale} language. You are helping someone analyze a problem using the 5 Whys technique. 

    Original problem: "${problem}"

    Please create a natural, engaging "why" question that asks why this problem occurs. The question should:
    - Start with "Why"
    - Be conversational and specific to their situation
    - Be more engaging than a generic template
    - Stay focused on the "why" format

    Respond with only the question, no additional text.`
    }

    private createFollowUpPrompt(
        problem: string,
        whys: string[],
        stepIndex: number,
        locale: string
    ): string {
        const previousAnswers = whys.slice(0, stepIndex - 1).filter(answer => answer.trim())
        const context = previousAnswers.map((answer, idx) => `Answer ${idx + 1}: "${answer}"`).join('\n')
        
        return `Please respond in ${locale} language. You are helping someone analyze a problem using the 5 Whys technique. 

    Original problem: "${problem}"
    ${context}

    Please create a natural, engaging "why" question that asks why their most recent answer occurs. The question should:
    - Start with "Why"
    - Be conversational and specific to their response
    - Be more engaging than a generic template
    - Stay focused on the "why" format

    Respond with only the question, no additional text.`
    }

    private getFallbackQuestion(stepIndex: number, problem: string, whys: string[]): string {
        if (stepIndex === 1) {
            return `Why does "${problem}" happen?`
        } else {
            return `Why does "${whys[stepIndex - 2]}" occur?`
        }
    }
}

export const questionGenerator = new QuestionGenerator()