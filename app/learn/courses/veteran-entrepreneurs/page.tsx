import type { Metadata } from "next"
import VeteranHero from "@/components/learning/veteran-hero"
import VeteranBenefits from "@/components/learning/veteran-benefits"
import VeteranCourses from "@/components/learning/veteran-courses"
import VeteranSuccess from "@/components/learning/veteran-success"
import VeteranCommunity from "@/components/learning/veteran-community"

export const metadata: Metadata = {
  title: "Veteran Entrepreneurs Program - CloudDogg Learning",
  description:
    "Specialized training and resources for veteran entrepreneurs to leverage MCP servers and AI automation in their businesses.",
}

export default function VeteranEntrepreneursPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100">
      <div className="relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

        <main>
          <VeteranHero />
          <VeteranBenefits />
          <VeteranCourses />
          <VeteranSuccess />
          <VeteranCommunity />
        </main>
      </div>
    </div>
  )
}
