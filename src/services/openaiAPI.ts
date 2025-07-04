export const callOpenAI = async (apiKey: string, prompt: string): Promise<string> => {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'gpt-4.1',
            messages: [
            { role: 'user', content: prompt }
            ],
            max_tokens: 1000,
            temperature: 0.7
        })
        })

        if (!response.ok) {
            throw new Error(`OpenAI API error: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()
        
        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
            throw new Error('Invalid response format from OpenAI API')
        }

        const text = data.choices[0].message.content
        return text
    } catch (error) {
        console.error('OpenAI API call failed:', error)
        throw new Error(`Failed to call OpenAI API: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
}