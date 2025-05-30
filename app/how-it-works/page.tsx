import HowItWorksHero from "@/components/how-it-works-hero"
import HowItWorksSteps from "@/components/how-it-works-steps"
import HowItWorksTechnical from "@/components/how-it-works-technical"
import HowItWorksFAQ from "@/components/how-it-works-faq"
import ClosingCTA from "@/components/closing-cta"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100">
      <div className="relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

        <main>
          <HowItWorksHero />
          <HowItWorksSteps />
          <HowItWorksTechnical />
          <HowItWorksFAQ />
          <ClosingCTA />
        </main>
      </div>
    </div>
  )
}
