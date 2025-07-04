import type{ AIResponse, AIProvider } from '../types'
import { callClaude } from './claudeAPI'
import { callGemini } from './geminiAPI'
import { callOpenAI } from './openaiAPI'

export const buildPrompt = (context: string, level: number, language: string = 'en'): string => {
    const prompts = {
        en: `
        You are helping with a "5 Why" root cause analysis.
        
        Context: ${context}
        Current level: ${level + 1}/5
        
        Please provide:
        1. The next "Why" question to dig deeper
        2. If this is level 5, suggest the root cause
        3. Potential solutions if root cause is identified
        
        Respond in JSON format:
        {
            "nextWhy": "Why does...",
            "rootCause": "The root cause is..." (only if level 5),
            "solutions": ["Solution 1", "Solution 2"] (only if root cause found),
            "confidence": 0.8
        }
        `,
        jp: `
        あなたは「5つのなぜ」根本原因分析を支援しています。
        
        コンテキスト: ${context}
        現在のレベル: ${level + 1}/5
        
        以下を提供してください：
        1. より深く掘り下げるための次の「なぜ」の質問
        2. レベル5の場合、根本原因を提案
        3. 根本原因が特定された場合の潜在的な解決策
        
        JSON形式で回答してください：
        {
            "nextWhy": "なぜ...",
            "rootCause": "根本原因は..." (レベル5の場合のみ),
            "solutions": ["解決策1", "解決策2"] (根本原因が見つかった場合のみ),
            "confidence": 0.8
        }
        `
    }

    return prompts[language as keyof typeof prompts] || prompts.en
}

// export const generateWhy = async (
//         provider: AIProvider,
//         apiKey: string,
//         context: string,
//         level: number,
//         language: string = 'en'
//     ): Promise<AIResponse> => {
//     const prompt = buildPrompt(context, level, language)

//     switch (provider) {
//         // case 'claude':
//         // return callClaude(apiKey, prompt)
//         // case 'gemini':
//         // // return callGemini(apiKey, prompt)
//         // case 'openai':
//         // // return callOpenAI(apiKey, prompt)
//         // default:
//         // throw new Error(`Unsupported AI provider: ${provider}`)
//     }
// }