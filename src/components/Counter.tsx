import { useEffect, useState, useRef } from 'react'

interface CounterProps {
  end: number
  suffix?: string
  duration?: number
  delay?: number
}

export default function Counter({ end, suffix = '', duration = 2000, delay = 0 }: CounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now() + delay
    const startValue = 0

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime
      
      if (elapsed < 0) {
        requestAnimationFrame(animate)
        return
      }

      const progress = Math.min(elapsed / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const current = startValue + (end - startValue) * easeOut

      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration, delay])

  const displayValue = end >= 100 ? Math.floor(count) : count.toFixed(1)

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  )
}
