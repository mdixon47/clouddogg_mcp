"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

interface AuthTabsHandlerProps {
  setActiveTab: (tab: string) => void
}

export default function AuthTabsHandler({ setActiveTab }: AuthTabsHandlerProps) {
  const searchParams = useSearchParams()

  useEffect(() => {
    const tab = searchParams.get("tab")
    if (tab === "signup") {
      setActiveTab("signup")
    } else if (tab === "login") {
      setActiveTab("login")
    }
  }, [searchParams, setActiveTab])

  return null
}
