import type { AIResponse } from '../types'

export const callGemini = async (apiKey: string, prompt: string): Promise<AIResponse> => {
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            contents: [{
            parts: [{
                text: prompt
            }]
            }]
        })
        })

        if (!response.ok) {
            throw new Error(`Gemini API error: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()
        
        if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
            throw new Error('Invalid response format from Gemini API')
        }

        const text = data.candidates[0].content.parts[0].text
        return JSON.parse(text)
    } catch (error) {
        console.error('Gemini API call failed:', error)
        throw new Error(`Failed to call Gemini API: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
}