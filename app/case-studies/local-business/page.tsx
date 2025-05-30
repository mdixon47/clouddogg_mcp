import CaseStudyLayout from "@/components/case-study/case-study-layout"
import ChallengeSection from "@/components/case-study/challenge-section"
import SolutionSection from "@/components/case-study/solution-section"
import ResultsSection from "@/components/case-study/results-section"
import ImplementationSection from "@/components/case-study/implementation-section"
import { challenges, implementationSteps, metrics, testimonial } from "@/data/local-business-case-study"
import { MessageSquare, Star, ShoppingCart, Users, Zap } from "lucide-react"

export default function LocalBusinessCaseStudy() {

  const solutions = [
    {
      title: "Automated Marketing Campaigns",
      description:
        "Implemented personalized, multi-channel marketing automation that maintains consistent customer engagement.",
      icon: <MessageSquare className="h-6 w-6 text-amber-300" />,
    },
    {
      title: "Review Management System",
      description:
        "Deployed automated review solicitation and response workflows to build and maintain a strong online reputation.",
      icon: <Star className="h-6 w-6 text-amber-300" />,
    },
    {
      title: "Inventory Automation",
      description:
        "Created smart inventory tracking and reordering workflows that prevent stockouts and optimize inventory levels.",
      icon: <ShoppingCart className="h-6 w-6 text-amber-300" />,
    },
    {
      title: "Customer Relationship Automation",
      description:
        "Implemented personalized customer communication sequences that build loyalty and increase repeat business.",
      icon: <Users className="h-6 w-6 text-amber-300" />,
    },
    {
      title: "Operational Workflow Automation",
      description:
        "Deployed automations for routine business tasks, freeing staff to focus on high-value customer interactions.",
      icon: <Zap className="h-6 w-6 text-amber-300" />,
    },
  ]

  return (
    <CaseStudyLayout
      industry="Local Business"
      title="How Riverside Craft Supply Increased Revenue by 47%"
      subtitle="Helping a small local retailer compete with national chains through intelligent automation"
      heroImage="/placeholder.svg?height=600&width=1200"
      prevCase={{
        name: "Healthcare",
        path: "/case-studies/healthcare",
      }}
    >
      <div className="mb-16 text-lg text-gray-300">
        <p className="mb-4">
          Riverside Craft Supply, a local arts and crafts retailer with a single location and e-commerce presence, was
          struggling to compete with national chains and online giants. With limited staff and resources, they found it
          challenging to maintain consistent marketing, provide responsive customer service, and efficiently manage
          inventory.
        </p>
        <p>
          By implementing CloudDogg's AI automation platform, Riverside was able to transform their operations,
          dramatically increasing efficiency and delivering a customer experience that rivals or exceeds their larger
          competitors.
        </p>
      </div>

      <ChallengeSection challenges={challenges} />
      <SolutionSection solutions={solutions} />
      <ImplementationSection steps={implementationSteps} />
      <ResultsSection metrics={metrics} testimonial={testimonial} />
    </CaseStudyLayout>
  )
}
