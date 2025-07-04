import type { AIProvider } from '../types/whyAnalyzer';

class AIService {
    private providers: Record<string, AIProvider> = {
        claude: {
        name: 'Claude',
        complete: async (prompt: string) => {
            // return await window.claude.complete(prompt);
            return ""
        }
        },
        openai: {
        name: 'OpenAI',
        complete: async (prompt: string) => {
            // Implementation for OpenAI
            throw new Error('OpenAI not implemented');
        }
        },
        gemini: {
        name: 'Gemini',
        complete: async (prompt: string) => {
            // Implementation for Gemini
            throw new Error('Gemini not implemented');
        }
        }
    };

    private currentProvider = 'claude';

    setProvider(provider: string) {
        if (this.providers[provider]) {
        this.currentProvider = provider;
        }
    }

    async complete(prompt: string): Promise<string> {
        const provider = this.providers[this.currentProvider];
        if (!provider) {
        throw new Error(`Provider ${this.currentProvider} not found`);
        }
        return await provider.complete(prompt);
    }

    getAvailableProviders(): string[] {
        return Object.keys(this.providers);
    }

    getCurrentProvider(): string {
        return this.currentProvider;
    }
}

export const aiService = new AIService();