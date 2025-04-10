import type { Metadata } from "next"
import AuthForm from "@/components/auth/auth-form"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: "CloudDogg - Login or Sign Up",
  description: "Access your CloudDogg account or create a new one to start automating with AI.",
}

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100">
      <div className="relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

        <Header />
        <main className="pt-32 pb-20 px-4 md:px-8">
          <div className="max-w-md mx-auto">
            <AuthForm />
          </div>
        </main>
      </div>
    </div>
  )
}
