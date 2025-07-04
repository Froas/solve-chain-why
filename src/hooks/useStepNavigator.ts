import { useRef, useEffect } from 'react'

export const useStepNavigation = (currentStep: number) => {
    const stepRefs = useRef<Record<string | number, HTMLElement | null>>({})

    useEffect(() => {
        if (currentStep > 0 && stepRefs.current[currentStep]) {
        stepRefs.current[currentStep]?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        })
        }
    }, [currentStep])

    const setStepRef = (step: string | number) => (el: HTMLElement | null) => {
        stepRefs.current[step] = el
    }

    return { setStepRef }
}