import CaseStudyLayout from "@/components/case-study/case-study-layout"
import ChallengeSection from "@/components/case-study/challenge-section"
import SolutionSection from "@/components/case-study/solution-section"
import ResultsSection from "@/components/case-study/results-section"
import ImplementationSection from "@/components/case-study/implementation-section"
import { challenges, metrics, testimonial, implementationSteps } from "@/data/real-estate-case-study"
import { MessageSquare, Calendar, Database, FileText, Zap } from "lucide-react"

export default function RealEstateCaseStudy() {

  const solutions = [
    {
      title: "Automated Lead Nurturing",
      description:
        "Implemented AI-powered lead qualification and personalized follow-up sequences that respond within minutes instead of hours.",
      icon: <MessageSquare className="h-6 w-6 text-blue-300" />,
    },
    {
      title: "Smart Scheduling",
      description:
        "Deployed an intelligent scheduling system that coordinates showings, open houses, and client meetings without agent intervention.",
      icon: <Calendar className="h-6 w-6 text-blue-300" />,
    },
    {
      title: "Cross-Platform Listing Sync",
      description:
        "Created automated workflows that ensure property listings are instantly updated across all platforms when changes are made.",
      icon: <Database className="h-6 w-6 text-blue-300" />,
    },
    {
      title: "Document Automation",
      description:
        "Implemented AI-powered document generation and processing to streamline transactions and reduce paperwork time by 80%.",
      icon: <FileText className="h-6 w-6 text-blue-300" />,
    },
    {
      title: "Market Analysis Automation",
      description:
        "Deployed automated market analysis tools that provide clients with real-time property valuations and neighborhood insights.",
      icon: <Zap className="h-6 w-6 text-blue-300" />,
    },
  ]

  return (
    <CaseStudyLayout
      industry="Real Estate"
      title="How Prestige Real Estate Group Increased Productivity by 68%"
      subtitle="Transforming agent productivity and client experience through intelligent automation"
      heroImage="/placeholder.svg?height=600&width=1200"
      nextCase={{
        name: "Healthcare",
        path: "/case-studies/healthcare",
      }}
    >
      <div className="mb-16 text-lg text-gray-300">
        <p className="mb-4">
          Prestige Real Estate Group, a mid-sized brokerage with 45 agents serving the Greater Seattle area, was
          struggling to scale their business while maintaining their high standards of client service. Manual processes
          were consuming valuable agent time, and inconsistent follow-up was leading to lost opportunities.
        </p>
        <p>
          By implementing CloudDogg's AI automation platform, Prestige was able to transform their operations,
          dramatically increasing agent productivity while delivering a more responsive and consistent client
          experience.
        </p>
      </div>

      <ChallengeSection challenges={challenges} />
      <SolutionSection solutions={solutions} />
      <ImplementationSection steps={implementationSteps} />
      <ResultsSection metrics={metrics} testimonial={testimonial} />
    </CaseStudyLayout>
  )
}
