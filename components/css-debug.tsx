"use client"

import { useEffect, useState } from 'react'

export default function CSSDebug() {
  const [cssLoaded, setCssLoaded] = useState(false)
  const [tailwindLoaded, setTailwindLoaded] = useState(false)

  useEffect(() => {
    // Check if CSS is loaded
    const checkCSS = () => {
      // Check if any stylesheets are loaded
      const stylesheets = document.querySelectorAll('link[rel="stylesheet"]')
      setCssLoaded(stylesheets.length > 0)

      // Check if Tailwind classes are working
      const testElement = document.createElement('div')
      testElement.className = 'bg-blue-500 text-white p-4'
      testElement.style.position = 'absolute'
      testElement.style.top = '-9999px'
      document.body.appendChild(testElement)
      
      const computedStyle = window.getComputedStyle(testElement)
      const hasTailwind = computedStyle.backgroundColor === 'rgb(59, 130, 246)' // bg-blue-500
      setTailwindLoaded(hasTailwind)
      
      document.body.removeChild(testElement)
    }

    // Check immediately and after a delay
    checkCSS()
    const timer = setTimeout(checkCSS, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div 
      style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        background: cssLoaded ? '#10b981' : '#ef4444',
        color: 'white',
        padding: '8px 12px',
        borderRadius: '4px',
        fontSize: '12px',
        fontFamily: 'monospace',
        zIndex: 9999,
        border: '1px solid rgba(255,255,255,0.2)'
      }}
    >
      <div>CSS: {cssLoaded ? '✅' : '❌'}</div>
      <div>Tailwind: {tailwindLoaded ? '✅' : '❌'}</div>
      <div style={{ fontSize: '10px', marginTop: '4px', opacity: 0.8 }}>
        {window.location.host}
      </div>
    </div>
  )
}
