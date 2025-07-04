export function extractJson(raw: string): string | null {
    if (!raw) return null;

    const cleaned = raw
        .replace(/```json([\s\S]*?)```/gi, '$1')  
        .replace(/```([\s\S]*?)```/gi, '$1')      
        .trim();

    const match = cleaned.match(/\{[\s\S]*\}/);
    return match ? match[0] : null;
}