'use client'

import { useEffect } from 'react'

interface SmoothScrollProps {
  children: React.ReactNode
}

export const SmoothScroll = ({ children }: SmoothScrollProps) => {
  useEffect(() => {
    // Enable smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return <div className="min-h-screen">{children}</div>
}