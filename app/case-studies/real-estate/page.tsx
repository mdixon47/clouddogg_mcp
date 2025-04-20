import CaseStudyLayout from "@/components/case-study/case-study-layout"
import ChallengeSection from "@/components/case-study/challenge-section"
import SolutionSection from "@/components/case-study/solution-section"
import ResultsSection from "@/components/case-study/results-section"
import ImplementationSection from "@/components/case-study/implementation-section"
import { MessageSquare, Calendar, Database, FileText, Zap } from "lucide-react"

export default function RealEstateCaseStudy() {
  const challenges = [
    {
      title: "Manual Lead Follow-up",
      description:
        "Agents were spending 15+ hours per week manually following up with leads, resulting in delayed responses and missed opportunities.",
    },
    {
      title: "Inconsistent Communication",
      description:
        "Communication with clients varied between agents, creating an inconsistent brand experience and varying levels of client satisfaction.",
    },
    {
      title: "Property Listing Management",
      description:
        "Updating listings across multiple platforms was time-consuming and error-prone, with information often becoming outdated.",
    },
    {
      title: "Document Processing",
      description:
        "Managing and processing transaction documents required significant administrative time that could be better spent with clients.",
    },
  ]

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

  const metrics = [
    {
      value: "68%",
      label: "Increase in Lead Conversion",
      color: "from-blue-600 to-cyan-600",
    },
    {
      value: "15hrs",
      label: "Weekly Time Saved Per Agent",
      color: "from-purple-600 to-pink-600",
    },
    {
      value: "42%",
      label: "Increase in Listings Managed",
      color: "from-amber-600 to-orange-600",
    },
    {
      value: "93%",
      label: "Client Satisfaction Rating",
      color: "from-green-600 to-emerald-600",
    },
  ]

  const testimonial = {
    quote:
      "CloudDogg has completely transformed how our agency operates. Our agents now spend their time building relationships instead of doing paperwork. We've increased our transaction volume by 40% with the same number of agents, and our clients love the responsiveness.",
    author: "Michael Chen",
    role: "Managing Broker",
    company: "Prestige Real Estate Group",
  }

  const implementationSteps = [
    {
      number: 1,
      title: "Initial Assessment & Strategy",
      description:
        "CloudDogg analyzed our existing workflows, identified automation opportunities, and created a customized implementation plan.",
    },
    {
      number: 2,
      title: "CRM & MLS Integration",
      description:
        "Connected CloudDogg to our CRM system and MLS database to enable seamless data flow and automated listing management.",
    },
    {
      number: 3,
      title: "Workflow Automation Setup",
      description:
        "Configured custom automation workflows for lead nurturing, appointment scheduling, and transaction management.",
    },
    {
      number: 4,
      title: "Agent Training & Onboarding",
      description:
        "Conducted comprehensive training sessions to ensure all agents could effectively leverage the new automation tools.",
    },
    {
      number: 5,
      title: "Optimization & Scaling",
      description:
        "Continuously refined automation workflows based on performance data and expanded capabilities as the agency grew.",
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
