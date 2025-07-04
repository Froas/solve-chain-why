import { useState, useEffect } from 'react'

export const useAnimations = () => {
    const [animateStep, setAnimateStep] = useState<number | string | null>(null)

    useEffect(() => {
        if (animateStep !== null) {
        const timer = setTimeout(() => setAnimateStep(null), 500)
        return () => clearTimeout(timer)
        }
    }, [animateStep])

    const triggerAnimation = (step: number | string) => {
        setAnimateStep(step)
    }

    const getStepStyle = (stepIndex: number, currentStep: number, showAnalysis: boolean) => {
        const baseStyle = {
        transition: 'all 0.3s ease',
        backgroundColor: currentStep === stepIndex ? '#ffffff' : 
                        currentStep > stepIndex || (stepIndex === 5 && showAnalysis) ? '#f3f4f6' : '#e5e7eb',
        border: `2px solid ${currentStep === stepIndex && !showAnalysis ? '#3F3F47' : 'transparent'}`,
        transform: animateStep === stepIndex ? 'scale(1.02)' : 'scale(1)',
        boxShadow: currentStep === stepIndex && !showAnalysis ? 
            '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none'
        }
        return baseStyle
    }

    return {
        animateStep,
        triggerAnimation,
        getStepStyle,
    }
}