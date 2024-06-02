import { useEffect, useState } from 'react'

export const useDebouncedValue = <T>(value: T, delay: number = 300) => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value as unknown as T)
        }, delay)

        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])

    return { debouncedValue, setDebouncedValue }
}
