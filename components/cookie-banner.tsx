"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Cookie, Settings } from "lucide-react"
import Link from "next/link"

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)

  // Cookie preference states
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true and can't be changed
    analytics: true,
    marketing: true,
    personalization: true,
  })

  useEffect(() => {
    // Force the banner to show on first render in development
    // In production, you'd want to check localStorage
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "all")
    setIsVisible(false)
  }

  const handleRejectNonEssential = () => {
    setPreferences({
      ...preferences,
      analytics: false,
      marketing: false,
      personalization: false,
    })
    localStorage.setItem("cookie-consent", "necessary")
    setIsVisible(false)
  }

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences))
    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed left-4 bottom-4 z-50 max-w-sm animate-in fade-in slide-in-from-bottom-10 duration-500">
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-xl">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-gray-900 dark:text-white flex items-center">
              <Cookie className="h-5 w-5 mr-2 text-blue-500" />
              Cookie Preferences
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={handleClose}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {!showCustomize ? (
            <div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
                traffic. By clicking "Accept All", you consent to our use of cookies. Learn more in our{" "}
                <Link href="/privacy" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/cookies" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline">
                  Cookie Policy
                </Link>.
              </p>
              <div
                className="flex items-center text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer mb-2"
                onClick={() => setShowCustomize(true)}
              >
                <Settings className="h-3 w-3 mr-1" />
                <span>Customize cookie preferences</span>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300 text-sm">Select which cookies you want to accept:</p>

              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex items-center h-5 mt-1">
                    <input
                      id="necessary"
                      type="checkbox"
                      checked={preferences.necessary}
                      disabled
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="necessary" className="font-medium text-gray-900 dark:text-white">
                      Necessary
                    </label>
                    <p className="text-gray-500 dark:text-gray-400">
                      Essential for the website to function properly. Cannot be disabled.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5 mt-1">
                    <input
                      id="analytics"
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="analytics" className="font-medium text-gray-900 dark:text-white">
                      Analytics
                    </label>
                    <p className="text-gray-500 dark:text-gray-400">
                      Help us improve by tracking anonymous usage data.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5 mt-1">
                    <input
                      id="marketing"
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="marketing" className="font-medium text-gray-900 dark:text-white">
                      Marketing
                    </label>
                    <p className="text-gray-500 dark:text-gray-400">
                      Allow us to provide personalized marketing content.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5 mt-1">
                    <input
                      id="personalization"
                      type="checkbox"
                      checked={preferences.personalization}
                      onChange={(e) => setPreferences({ ...preferences, personalization: e.target.checked })}
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="personalization" className="font-medium text-gray-900 dark:text-white">
                      Personalization
                    </label>
                    <p className="text-gray-500 dark:text-gray-400">
                      Enhance your experience with personalized content and features.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="flex items-center text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer"
                onClick={() => setShowCustomize(false)}
              >
                <span>Back to summary</span>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-2">
          {!showCustomize ? (
            <>
              <Button
                variant="outline"
                size="sm"
                className="w-full sm:w-auto border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={handleRejectNonEssential}
              >
                Necessary Only
              </Button>
              <Button
                size="sm"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white"
                onClick={handleAcceptAll}
              >
                Accept All
              </Button>
            </>
          ) : (
            <Button
              size="sm"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white"
              onClick={handleSavePreferences}
            >
              Save Preferences
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
