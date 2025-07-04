export interface WhyStep {
    id: string
    question: string
    answer: string
    level: number
    timestamp: Date
}

export interface Analysis {
    id: string
    problem: string
    whySteps: WhyStep[]
    rootCause?: string
    solutions: string[]
    aiProvider: 'gemini' | 'openai' | 'llama' | 'deepseek'| 'groq'
    createdAt: Date,
    status: string
}

export interface AIResponse {
    nextWhy?: string
    rootCause?: string
    solutions: string[]
    confidence: number
}


export type AIProvider = 'gemini' | 'openai' | 'llama' | 'deepseek'| 'groq'