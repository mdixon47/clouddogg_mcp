"use client"

import { useEffect } from 'react'

interface GlobalErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

/**
 * Global Error Boundary for Next.js App Router
 * 
 * This component handles errors that occur in the root layout.
 * It must define its own <html> and <body> tags since it replaces the root layout.
 */
export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log the critical error
    console.error('Global Error:', error)
    
    // In production, you might want to log this to an error reporting service
    if (process.env.NODE_ENV === 'production') {
      // Example: logCriticalErrorToService(error)
    }
  }, [error])

  const handleReload = () => {
    window.location.reload()
  }

  return (
    <html lang="en">
      <head>
        <title>Application Error - CloudDogg MCP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{
          __html: `
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
              color: #f9fafb;
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 1rem;
            }
            
            .error-container {
              background: rgba(31, 41, 55, 0.8);
              backdrop-filter: blur(10px);
              border: 1px solid rgba(75, 85, 99, 0.3);
              border-radius: 1rem;
              padding: 2rem;
              max-width: 500px;
              width: 100%;
              text-align: center;
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            }
            
            .error-icon {
              width: 4rem;
              height: 4rem;
              margin: 0 auto 1.5rem;
              background: rgba(239, 68, 68, 0.1);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            
            .error-title {
              font-size: 1.5rem;
              font-weight: 700;
              margin-bottom: 0.5rem;
              color: #f9fafb;
            }
            
            .error-description {
              color: #d1d5db;
              margin-bottom: 2rem;
              line-height: 1.6;
            }
            
            .error-details {
              background: rgba(239, 68, 68, 0.1);
              border: 1px solid rgba(239, 68, 68, 0.2);
              border-radius: 0.5rem;
              padding: 1rem;
              margin-bottom: 2rem;
              text-align: left;
            }
            
            .error-details h4 {
              color: #fca5a5;
              font-size: 0.875rem;
              font-weight: 600;
              margin-bottom: 0.5rem;
            }
            
            .error-details pre {
              color: #fecaca;
              font-size: 0.75rem;
              white-space: pre-wrap;
              word-break: break-words;
              max-height: 200px;
              overflow-y: auto;
            }
            
            .button-group {
              display: flex;
              flex-direction: column;
              gap: 0.75rem;
            }
            
            .button {
              padding: 0.75rem 1.5rem;
              border-radius: 0.5rem;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.2s;
              border: none;
              font-size: 0.875rem;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 0.5rem;
            }
            
            .button-primary {
              background: #3b82f6;
              color: white;
            }
            
            .button-primary:hover {
              background: #2563eb;
              transform: translateY(-1px);
            }
            
            .button-secondary {
              background: transparent;
              color: #d1d5db;
              border: 1px solid rgba(75, 85, 99, 0.5);
            }
            
            .button-secondary:hover {
              background: rgba(75, 85, 99, 0.2);
              border-color: rgba(75, 85, 99, 0.8);
            }
            
            .icon {
              width: 1rem;
              height: 1rem;
            }
            
            .alert-icon {
              width: 2rem;
              height: 2rem;
              color: #ef4444;
            }
            
            @media (max-width: 640px) {
              .error-container {
                padding: 1.5rem;
              }
              
              .error-title {
                font-size: 1.25rem;
              }
            }
          `
        }} />
      </head>
      <body>
        <div className="error-container">
          <div className="error-icon">
            <svg className="alert-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          
          <h1 className="error-title">Critical Application Error</h1>
          <p className="error-description">
            The application has encountered a critical error and cannot continue. 
            This issue has been logged and our team will investigate.
          </p>

          {process.env.NODE_ENV === 'development' && (
            <div className="error-details">
              <h4>Error Details (Development Only):</h4>
              <div style={{ marginBottom: '0.5rem' }}>
                <strong>Message:</strong>
                <pre>{error.message}</pre>
              </div>
              {error.digest && (
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Digest:</strong>
                  <pre>{error.digest}</pre>
                </div>
              )}
              {error.stack && (
                <div>
                  <strong>Stack Trace:</strong>
                  <pre>{error.stack}</pre>
                </div>
              )}
            </div>
          )}

          <div className="button-group">
            <button onClick={reset} className="button button-primary">
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Restart Application
            </button>
            
            <button onClick={handleReload} className="button button-secondary">
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Reload Page
            </button>
          </div>

          <div style={{ 
            marginTop: '2rem', 
            paddingTop: '1rem', 
            borderTop: '1px solid rgba(75, 85, 99, 0.3)', 
            fontSize: '0.875rem', 
            color: '#9ca3af' 
          }}>
            If this problem persists, please contact our support team.
          </div>
        </div>
      </body>
    </html>
  )
}
