import type { Metadata } from "next"
import VeteranVerificationHero from "@/components/veteran-program/veteran-verification-hero"
import VeteranVerificationForm from "@/components/veteran-program/veteran-verification-form"
import VeteranVerificationInfo from "@/components/veteran-program/veteran-verification-info"
import VeteranVerificationFAQ from "@/components/veteran-program/veteran-verification-faq"

export const metadata: Metadata = {
  title: "Verify Veteran Status - CloudDogg MCP",
  description: "Verify your veteran status to access exclusive benefits, discounts, and veteran-specific courses. Quick and secure verification process.",
  keywords: "veteran verification, military status, veteran benefits, DD-214, military ID, veteran discount"
}

export default function VerifyVeteranStatusPage() {
  return (
    <div className="min-h-screen bg-[#050A14] text-gray-100">
      <div className="relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />

        <main>
          <VeteranVerificationHero />
          <VeteranVerificationInfo />
          <VeteranVerificationForm />
          <VeteranVerificationFAQ />
        </main>
      </div>
    </div>
  )
}
