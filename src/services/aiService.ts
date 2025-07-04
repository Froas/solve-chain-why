import type { AIProvider } from '../types';
import { callGemini } from './geminiAPI';
import { callOpenAI } from './openaiAPI';

interface AIProviderConfig {
    name: string;
    complete: (prompt: string) => Promise<string>;
}

class AIService {
    private providers: Record<AIProvider, AIProviderConfig> = {
        openai: {
            name: 'Gemini',
            complete: async (prompt: string) => {
                const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
                if (!apiKey) {
                    console.error("OpenAI key is not defined. Please set OPENAI_API_KEY in your environment variables")
                    throw new Error("OpenAI key is not defined. Please set OPENAI_API_KEY in your environment variables")
                }
                return await callOpenAI(apiKey, prompt)
            }
        },
        gemini: {
            name: 'Gemini',
            complete: async (prompt: string) => {
                const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
                if (!apiKey) {
                    console.error("Gemini API key is not defined. Please set GEMINI_API_KEY in your environment variables.")
                    throw new Error('Gemini API key is not defined. Please set GEMINI_API_KEY in your environment variables.');
                }
                return await callGemini(apiKey, prompt);
            }
        },
        llama: {
            name: 'Gemini',
            complete: async (prompt: string) => {
                const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
                if (!apiKey) {
                    console.error("Gemini API key is not defined. Please set GEMINI_API_KEY in your environment variables.")
                    throw new Error('Gemini API key is not defined. Please set GEMINI_API_KEY in your environment variables.');
                }
                return await callGemini(apiKey, prompt);
            }
        },
        deepseek: {
            name: 'Gemini',
            complete: async (prompt: string) => {
                const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
                if (!apiKey) {
                    console.error("Gemini API key is not defined. Please set GEMINI_API_KEY in your environment variables.")
                    throw new Error('Gemini API key is not defined. Please set GEMINI_API_KEY in your environment variables.');
                }
                return await callGemini(apiKey, prompt);
            }
        },
        groq: {
            name: 'Gemini',
            complete: async (prompt: string) => {
                const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
                if (!apiKey) {
                    console.error("Gemini API key is not defined. Please set GEMINI_API_KEY in your environment variables.")
                    throw new Error('Gemini API key is not defined. Please set GEMINI_API_KEY in your environment variables.');
                }
                return await callGemini(apiKey, prompt);
            }
        },
    };

    async complete(prompt: string, provider: AIProvider): Promise<string> {
        const providerConfig = this.providers[provider];
        if (!providerConfig) {
            throw new Error(`Provider ${provider} not found`);
        }
        console.log(providerConfig, "gge")
        return await providerConfig.complete(prompt);
    }

    getAvailableProviders(): AIProvider[] {
        return Object.keys(this.providers) as AIProvider[];
    }
}

export const aiService = new AIService();