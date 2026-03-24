import { useEffect, useRef, useState, ReactNode } from 'react'

interface AnimationProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none'
  duration?: number
  className?: string
  once?: boolean
}

export default function Animation({ 
  children, 
  delay = 0, 
  direction = 'up', 
  duration = 700,
  className = '',
  once = true
}: AnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [once])

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return 'translateY(40px)'
        case 'down': return 'translateY(-40px)'
        case 'left': return 'translateX(40px)'
        case 'right': return 'translateX(-40px)'
        case 'scale': return 'scale(0.9)'
        default: return 'none'
      }
    }
    return 'none'
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`
      }}
    >
      {children}
    </div>
  )
}
