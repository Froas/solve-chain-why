import type{ AIResponse } from '../types'

export const callClaude = async (apiKey: string, prompt: string): Promise<AIResponse> => {
    try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
            model: 'claude-3-sonnet-20240229',
            max_tokens: 1000,
            messages: [{ role: 'user', content: prompt }]
        })
        })

        if (!response.ok) {
            throw new Error(`Claude API error: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()
        
        if (!data.content || !data.content[0] || !data.content[0].text) {
            throw new Error('Invalid response format from Claude API')
        }

        return JSON.parse(data.content[0].text)
    } catch (error) {
        console.error('Claude API call failed:', error)
        throw new Error(`Failed to call Claude API: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
}