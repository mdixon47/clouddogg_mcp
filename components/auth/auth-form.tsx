"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LoginForm from "./login-form"
import SignupForm from "./signup-form"
import AuthTabsHandler from "./auth-tabs-handler"

export default function AuthForm() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<string>("login")

  useEffect(() => {
    // Check if there's a tab parameter in the URL
    const tabParam = searchParams.get("tab")
    if (tabParam === "signup") {
      setActiveTab("signup")
    }
  }, [searchParams])

  return (
    <div className="bg-white dark:bg-gray-800/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-xl">
      <AuthTabsHandler setActiveTab={setActiveTab} />
      <div className="p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Welcome to CloudDogg MCP
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            {activeTab === "login" ? "Sign in to your account to continue" : "Create an account to get started"}
          </p>
        </div>

        <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger
              value="login"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm onSwitchToSignup={() => setActiveTab("signup")} />
          </TabsContent>
          <TabsContent value="signup">
            <SignupForm onSwitchToLogin={() => setActiveTab("login")} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
