"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie, Shield, BarChart3, Settings, Users, Save, RotateCcw } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"

interface CookieCategory {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  required: boolean
  enabled: boolean
  cookies: Array<{
    name: string
    purpose: string
    duration: string
    provider: string
  }>
}

export default function CookieManager() {
  const [categories, setCategories] = useState<CookieCategory[]>([
    {
      id: "essential",
      name: "Essential Cookies",
      description: "Required for basic site functionality and security. Cannot be disabled.",
      icon: <Shield className="h-5 w-5" />,
      required: true,
      enabled: true,
      cookies: [
        {
          name: "session_id",
          purpose: "Maintains your login session",
          duration: "Session",
          provider: "CloudDogg MCP"
        },
        {
          name: "csrf_token",
          purpose: "Prevents cross-site request forgery attacks",
          duration: "Session",
          provider: "CloudDogg MCP"
        },
        {
          name: "cookie_consent",
          purpose: "Remembers your cookie preferences",
          duration: "1 year",
          provider: "CloudDogg MCP"
        }
      ]
    },
    {
      id: "functional",
      name: "Functional Cookies",
      description: "Remember your preferences and provide enhanced features.",
      icon: <Settings className="h-5 w-5" />,
      required: false,
      enabled: true,
      cookies: [
        {
          name: "theme_preference",
          purpose: "Remembers your dark/light mode preference",
          duration: "1 year",
          provider: "CloudDogg MCP"
        },
        {
          name: "language_preference",
          purpose: "Stores your language selection",
          duration: "1 year",
          provider: "CloudDogg MCP"
        },
        {
          name: "course_progress",
          purpose: "Saves your course progress and bookmarks",
          duration: "2 years",
          provider: "CloudDogg MCP"
        }
      ]
    },
    {
      id: "analytics",
      name: "Analytics Cookies",
      description: "Help us understand how visitors use our site to improve user experience.",
      icon: <BarChart3 className="h-5 w-5" />,
      required: false,
      enabled: false,
      cookies: [
        {
          name: "_ga",
          purpose: "Distinguishes unique users",
          duration: "2 years",
          provider: "Google Analytics"
        },
        {
          name: "_gid",
          purpose: "Distinguishes unique users",
          duration: "24 hours",
          provider: "Google Analytics"
        },
        {
          name: "hotjar_session",
          purpose: "Tracks user behavior for UX improvements",
          duration: "30 minutes",
          provider: "Hotjar"
        }
      ]
    },
    {
      id: "marketing",
      name: "Marketing Cookies",
      description: "Used to deliver relevant advertisements and track campaign effectiveness.",
      icon: <Users className="h-5 w-5" />,
      required: false,
      enabled: false,
      cookies: [
        {
          name: "facebook_pixel",
          purpose: "Tracks conversions from Facebook ads",
          duration: "90 days",
          provider: "Facebook"
        },
        {
          name: "google_ads",
          purpose: "Tracks conversions from Google ads",
          duration: "90 days",
          provider: "Google Ads"
        },
        {
          name: "linkedin_insight",
          purpose: "Tracks professional audience engagement",
          duration: "90 days",
          provider: "LinkedIn"
        }
      ]
    }
  ])

  const [hasChanges, setHasChanges] = useState(false)
  const [_savedSettings, setSavedSettings] = useState<Record<string, boolean>>({})

  useEffect(() => {
    // Load saved preferences from localStorage
    const saved = localStorage.getItem('cookie_preferences')
    if (saved) {
      const preferences = JSON.parse(saved)
      setSavedSettings(preferences)
      setCategories(prev => prev.map(cat => ({
        ...cat,
        enabled: cat.required || preferences[cat.id] || false
      })))
    }
  }, [])

  const toggleCategory = (categoryId: string) => {
    setCategories(prev => prev.map(cat => 
      cat.id === categoryId && !cat.required
        ? { ...cat, enabled: !cat.enabled }
        : cat
    ))
    setHasChanges(true)
  }

  const savePreferences = () => {
    const preferences = categories.reduce((acc, cat) => {
      acc[cat.id] = cat.enabled
      return acc
    }, {} as Record<string, boolean>)

    localStorage.setItem('cookie_preferences', JSON.stringify(preferences))
    setSavedSettings(preferences)
    setHasChanges(false)

    // Trigger cookie consent update
    window.dispatchEvent(new CustomEvent('cookiePreferencesUpdated', { detail: preferences }))
  }

  const resetToDefaults = () => {
    setCategories(prev => prev.map(cat => ({
      ...cat,
      enabled: cat.required || cat.id === 'functional'
    })))
    setHasChanges(true)
  }

  const acceptAll = () => {
    setCategories(prev => prev.map(cat => ({ ...cat, enabled: true })))
    setHasChanges(true)
  }

  const rejectAll = () => {
    setCategories(prev => prev.map(cat => ({
      ...cat,
      enabled: cat.required
    })))
    setHasChanges(true)
  }

  const getCategoryColor = (category: CookieCategory) => {
    if (category.required) return "border-green-500 bg-green-900/20"
    if (category.enabled) return "border-blue-500 bg-blue-900/20"
    return "border-gray-600 bg-gray-800/20"
  }

  const getToggleColor = (category: CookieCategory) => {
    if (category.required) return "bg-green-600"
    return category.enabled ? "bg-blue-600" : "bg-gray-600"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Cookie className="h-6 w-6 text-blue-400" />
            Cookie Preferences
          </CardTitle>
          <CardDescription className="text-base">
            Customize your cookie settings to control how we collect and use data to improve your experience.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3">
        <Button onClick={acceptAll} className="bg-green-600 hover:bg-green-700">
          Accept All
        </Button>
        <Button onClick={rejectAll} variant="outline" className="border-red-500 text-red-400 hover:bg-red-900/20">
          Reject All
        </Button>
        <Button onClick={resetToDefaults} variant="outline" className="border-gray-600">
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset to Defaults
        </Button>
      </div>

      {/* Cookie Categories */}
      <div className="space-y-4">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className={`${getCategoryColor(category)} border backdrop-blur-sm transition-all duration-300`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${category.enabled ? 'bg-blue-500/20' : 'bg-gray-700/20'}`}>
                      {category.icon}
                    </div>
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {category.name}
                        {category.required && (
                          <Badge variant="outline" className="text-xs bg-green-900/20 border-green-500/30 text-green-300">
                            Required
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {category.description}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-sm font-medium ${category.enabled ? 'text-green-400' : 'text-gray-500'}`}>
                      {category.enabled ? 'Enabled' : 'Disabled'}
                    </span>
                    <Switch
                      checked={category.enabled}
                      onCheckedChange={() => toggleCategory(category.id)}
                      disabled={category.required}
                      className={`${getToggleColor(category)} data-[state=checked]:bg-blue-600`}
                    />
                  </div>
                </div>
              </CardHeader>

              <AnimatePresence>
                {category.enabled && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-gray-300 mb-3">
                          Cookies in this category:
                        </h4>
                        {category.cookies.map((cookie, cookieIndex) => (
                          <motion.div
                            key={cookie.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: cookieIndex * 0.05 }}
                            className="bg-gray-800/30 rounded-lg p-3 border border-gray-700/50"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-sm">
                              <div>
                                <span className="text-gray-400">Name:</span>
                                <p className="font-mono text-blue-300">{cookie.name}</p>
                              </div>
                              <div>
                                <span className="text-gray-400">Purpose:</span>
                                <p className="text-gray-300">{cookie.purpose}</p>
                              </div>
                              <div>
                                <span className="text-gray-400">Duration:</span>
                                <p className="text-gray-300">{cookie.duration}</p>
                              </div>
                              <div>
                                <span className="text-gray-400">Provider:</span>
                                <p className="text-gray-300">{cookie.provider}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Save Settings */}
      <AnimatePresence>
        {hasChanges && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="sticky bottom-6 z-10"
          >
            <Card className="bg-gradient-to-r from-blue-900/90 to-purple-900/90 border-blue-500/50 backdrop-blur-lg">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white">Unsaved Changes</h4>
                    <p className="text-sm text-gray-300">You have modified your cookie preferences.</p>
                  </div>
                  <Button onClick={savePreferences} className="bg-blue-600 hover:bg-blue-700">
                    <Save className="h-4 w-4 mr-2" />
                    Save Preferences
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Statistics */}
      <Card className="bg-gray-800/30 border-gray-700">
        <CardHeader>
          <CardTitle className="text-lg">Cookie Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-400">
                {categories.filter(cat => cat.enabled).length}
              </div>
              <div className="text-sm text-gray-400">Categories Enabled</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">
                {categories.reduce((acc, cat) => acc + (cat.enabled ? cat.cookies.length : 0), 0)}
              </div>
              <div className="text-sm text-gray-400">Active Cookies</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">
                {categories.filter(cat => cat.required).length}
              </div>
              <div className="text-sm text-gray-400">Required Categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">
                {categories.filter(cat => !cat.enabled && !cat.required).length}
              </div>
              <div className="text-sm text-gray-400">Disabled Categories</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
