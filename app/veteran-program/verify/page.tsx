import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Verify Veteran Status - CloudDogg MCP",
  description: "Verify your veteran status to access exclusive benefits and discounts.",
}

export default function VerifyVeteranStatusPage() {
  return (
    <div className="min-h-screen bg-[#050A14] text-gray-100">
      <div className="relative overflow-hidden">
        <Header />
        <main className="py-32 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Verify Your Veteran Status</h1>
            <p className="text-xl mb-8">This page will contain a form for veterans to verify their status.</p>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
