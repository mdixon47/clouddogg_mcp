"use client"

import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertCircle, RefreshCw, Wifi, WifiOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
  onRetry?: () => void
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
  isNetworkError: boolean
  retryCount: number
}

/**
 * Async Error Boundary Component
 * 
 * Specialized error boundary for handling async operations, API calls,
 * and network-related errors with retry functionality.
 */
export class AsyncErrorBoundary extends Component<Props, State> {
  private maxRetries = 3
  private retryTimeout?: NodeJS.Timeout

  constructor(props: Props) {
    super(props)
    this.state = { 
      hasError: false, 
      isNetworkError: false,
      retryCount: 0
    }
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    const isNetworkError = AsyncErrorBoundary.isNetworkError(error)
    return { 
      hasError: true, 
      error,
      isNetworkError
    }
  }

  static isNetworkError(error: Error): boolean {
    // Check for common network error patterns
    const networkErrorPatterns = [
      /network/i,
      /fetch/i,
      /connection/i,
      /timeout/i,
      /cors/i,
      /failed to fetch/i,
      /load failed/i
    ]

    return networkErrorPatterns.some(pattern => 
      pattern.test(error.message) || pattern.test(error.name)
    )
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Async Error Boundary caught an error:', error, errorInfo)
    
    this.setState({
      error,
      errorInfo
    })

    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }

    // Auto-retry for network errors (up to maxRetries)
    if (this.state.isNetworkError && this.state.retryCount < this.maxRetries) {
      this.scheduleRetry()
    }
  }

  componentWillUnmount() {
    if (this.retryTimeout) {
      clearTimeout(this.retryTimeout)
    }
  }

  scheduleRetry = () => {
    const delay = Math.min(1000 * Math.pow(2, this.state.retryCount), 10000) // Exponential backoff, max 10s
    
    this.retryTimeout = setTimeout(() => {
      this.handleRetry()
    }, delay)
  }

  handleRetry = () => {
    this.setState(prevState => ({
      hasError: false,
      error: undefined,
      retryCount: prevState.retryCount + 1
    }))

    if (this.props.onRetry) {
      this.props.onRetry()
    }
  }

  handleManualRetry = () => {
    this.setState({
      hasError: false,
      error: undefined,
      retryCount: 0
    })

    if (this.props.onRetry) {
      this.props.onRetry()
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      const { error, isNetworkError, retryCount } = this.state
      const canRetry = retryCount < this.maxRetries

      return (
        <Card className="w-full max-w-md mx-auto">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/20">
              {isNetworkError ? (
                <WifiOff className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              ) : (
                <AlertCircle className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              )}
            </div>
            <CardTitle className="text-lg font-semibold">
              {isNetworkError ? 'Connection Problem' : 'Loading Error'}
            </CardTitle>
            <CardDescription>
              {isNetworkError 
                ? 'Unable to connect to our servers. Please check your internet connection.'
                : 'Something went wrong while loading this content.'
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {process.env.NODE_ENV === 'development' && error && (
              <div className="rounded-md bg-orange-50 dark:bg-orange-900/20 p-3">
                <h4 className="text-sm font-medium text-orange-800 dark:text-orange-200 mb-2">
                  Error Details (Development Only):
                </h4>
                <pre className="text-xs text-orange-700 dark:text-orange-300 whitespace-pre-wrap break-words">
                  {error.message}
                </pre>
              </div>
            )}

            {retryCount > 0 && (
              <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Retry attempt {retryCount} of {this.maxRetries}
              </div>
            )}

            <div className="flex flex-col gap-2">
              <Button 
                onClick={this.handleManualRetry} 
                variant="default" 
                className="w-full"
                disabled={!canRetry && isNetworkError}
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                {isNetworkError ? 'Retry Connection' : 'Try Again'}
              </Button>
              
              {isNetworkError && (
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Wifi className="h-4 w-4" />
                  Check your connection
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )
    }

    return this.props.children
  }
}

/**
 * Hook-based Async Error Boundary wrapper
 */
interface WithAsyncErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
  onRetry?: () => void
}

export function WithAsyncErrorBoundary({ 
  children, 
  fallback, 
  onError, 
  onRetry 
}: WithAsyncErrorBoundaryProps) {
  return (
    <AsyncErrorBoundary 
      fallback={fallback} 
      onError={onError}
      onRetry={onRetry}
    >
      {children}
    </AsyncErrorBoundary>
  )
}

/**
 * Lightweight async error boundary for inline use
 */
interface InlineAsyncErrorProps {
  children: ReactNode
  message?: string
  onRetry?: () => void
}

export function InlineAsyncError({ children, message, onRetry }: InlineAsyncErrorProps) {
  return (
    <AsyncErrorBoundary
      fallback={
        <div className="rounded-lg border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20 p-4 text-center">
          <AlertCircle className="mx-auto h-6 w-6 text-orange-600 dark:text-orange-400 mb-2" />
          <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
            {message || 'Failed to load content'}
          </p>
          {onRetry && (
            <Button onClick={onRetry} size="sm" variant="outline">
              <RefreshCw className="mr-2 h-3 w-3" />
              Retry
            </Button>
          )}
        </div>
      }
      onRetry={onRetry}
    >
      {children}
    </AsyncErrorBoundary>
  )
}
