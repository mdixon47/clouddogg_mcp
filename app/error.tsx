"use client"

import { useEffect } from 'react'
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

/**
 * Next.js App Router Error Boundary
 * 
 * This is a special error boundary that Next.js uses to handle errors
 * at the route level. It automatically wraps page components.
 */
export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to console and potentially to an error reporting service
    console.error('Route Error:', error)
    
    // In production, you might want to log this to an error reporting service
    if (process.env.NODE_ENV === 'production') {
      // Example: logErrorToService(error)
    }
  }, [error])

  const handleGoHome = () => {
    window.location.href = '/'
  }

  const handleGoBack = () => {
    window.history.back()
  }

  const isNetworkError = error.message.toLowerCase().includes('network') || 
                        error.message.toLowerCase().includes('fetch') ||
                        error.message.toLowerCase().includes('connection')

  const is404Error = error.message.toLowerCase().includes('not found') ||
                     error.message.toLowerCase().includes('404')

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-gray-950 to-gray-900">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
            <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
          </div>
          <CardTitle className="text-2xl font-bold">
            {is404Error ? 'Page Not Found' : isNetworkError ? 'Connection Error' : 'Something went wrong'}
          </CardTitle>
          <CardDescription className="text-base">
            {is404Error 
              ? "The page you're looking for doesn't exist or has been moved."
              : isNetworkError 
                ? "We're having trouble connecting to our servers. Please check your internet connection and try again."
                : "We encountered an unexpected error. Our team has been notified and is working on a fix."
            }
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Error details for development */}
          {process.env.NODE_ENV === 'development' && (
            <div className="rounded-md bg-red-50 dark:bg-red-900/20 p-4">
              <h4 className="text-sm font-medium text-red-800 dark:text-red-200 mb-2">
                Error Details (Development Only):
              </h4>
              <div className="space-y-2">
                <div>
                  <span className="text-xs font-medium text-red-700 dark:text-red-300">Message:</span>
                  <pre className="text-xs text-red-600 dark:text-red-400 whitespace-pre-wrap break-words mt-1">
                    {error.message}
                  </pre>
                </div>
                {error.digest && (
                  <div>
                    <span className="text-xs font-medium text-red-700 dark:text-red-300">Digest:</span>
                    <pre className="text-xs text-red-600 dark:text-red-400 mt-1">
                      {error.digest}
                    </pre>
                  </div>
                )}
                {error.stack && (
                  <details className="mt-2">
                    <summary className="text-xs font-medium text-red-700 dark:text-red-300 cursor-pointer">
                      Stack Trace
                    </summary>
                    <pre className="text-xs text-red-600 dark:text-red-400 whitespace-pre-wrap break-words mt-1 max-h-40 overflow-y-auto">
                      {error.stack}
                    </pre>
                  </details>
                )}
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-col gap-3">
            <Button onClick={reset} variant="default" className="w-full" size="lg">
              <RefreshCw className="mr-2 h-5 w-5" />
              Try Again
            </Button>
            
            <div className="grid grid-cols-2 gap-3">
              <Button onClick={handleGoBack} variant="outline" className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Button>
              <Button onClick={handleGoHome} variant="outline" className="w-full">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
            </div>
          </div>

          {/* Additional help text */}
          <div className="text-center text-sm text-gray-500 dark:text-gray-400 border-t pt-4">
            {isNetworkError ? (
              <p>If the problem persists, please check your internet connection or try again later.</p>
            ) : (
              <p>If this problem continues, please contact our support team.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

/**
 * Error boundary specifically for the root layout
 * This handles errors that occur in the layout itself
 */
export function LayoutError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Layout Error:', error)
  }, [error])

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
          <div className="text-center max-w-md">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
              <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Application Error
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              The application encountered a critical error and needs to be restarted.
            </p>
            <div className="space-y-3">
              <button
                onClick={reset}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Restart Application
              </button>
              <button
                onClick={() => window.location.reload()}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Reload Page
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
