import type { Metadata } from "next"
import VeteranProgramHero from "@/components/veteran-program/veteran-program-hero"
import VeteranProgramBenefits from "@/components/veteran-program/veteran-program-benefits"
import VeteranProgramCourses from "@/components/veteran-program/veteran-program-courses"
import VeteranProgramTestimonials from "@/components/veteran-program/veteran-program-testimonials"
import VeteranProgramFAQ from "@/components/veteran-program/veteran-program-faq"
import VeteranProgramCTA from "@/components/veteran-program/veteran-program-cta"

export const metadata: Metadata = {
  title: "Veteran Program - CloudDogg MCP",
  description:
    "Exclusive benefits, resources, and training for veteran entrepreneurs leveraging AI automation with CloudDogg MCP.",
}

export default function VeteranProgramPage() {
  return (
    <div className="min-h-screen bg-[#050A14] text-gray-100">
      <div className="relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
        <main>
          <VeteranProgramHero />
          <VeteranProgramBenefits />
          <VeteranProgramCourses />
          <VeteranProgramTestimonials />
          <VeteranProgramFAQ />
          <VeteranProgramCTA />
        </main>
      </div>
    </div>
  )
}
