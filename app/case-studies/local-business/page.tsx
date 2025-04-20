import CaseStudyLayout from "@/components/case-study/case-study-layout"
import ChallengeSection from "@/components/case-study/challenge-section"
import SolutionSection from "@/components/case-study/solution-section"
import ResultsSection from "@/components/case-study/results-section"
import ImplementationSection from "@/components/case-study/implementation-section"
import { MessageSquare, Star, ShoppingCart, Users, Zap } from "lucide-react"

export default function LocalBusinessCaseStudy() {
  const challenges = [
    {
      title: "Limited Resources for Marketing",
      description:
        "With a small team, the business struggled to maintain consistent marketing efforts across multiple channels.",
    },
    {
      title: "Customer Service Bandwidth",
      description:
        "Staff were overwhelmed by customer inquiries, leading to delayed responses and potential lost sales.",
    },
    {
      title: "Inventory Management",
      description:
        "Manual inventory tracking was time-consuming and error-prone, resulting in stockouts or excess inventory.",
    },
    {
      title: "Competing with Larger Chains",
      description:
        "The business struggled to match the efficiency and customer experience of larger competitors with more resources.",
    },
  ]

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

  const metrics = [
    {
      value: "47%",
      label: "Increase in Revenue",
      color: "from-amber-600 to-orange-600",
    },
    {
      value: "78%",
      label: "More Online Reviews",
      color: "from-green-600 to-emerald-600",
    },
    {
      value: "32%",
      label: "Reduction in Inventory Costs",
      color: "from-blue-600 to-cyan-600",
    },
    {
      value: "3.2x",
      label: "Customer Lifetime Value",
      color: "from-purple-600 to-pink-600",
    },
  ]

  const testimonial = {
    quote:
      "As a small business, we were always at a disadvantage compared to the big chains. CloudDogg has completely leveled the playing field. We now have enterprise-level automation that our competitors can't match, and we've been able to grow without adding overhead. Our customers are amazed by how responsive and personalized our service is.",
    author: "James Wilson",
    role: "Owner",
    company: "Riverside Craft Supply",
  }

  const implementationSteps = [
    {
      number: 1,
      title: "Business Process Analysis",
      description:
        "CloudDogg analyzed existing workflows and identified key automation opportunities with the highest ROI potential.",
    },
    {
      number: 2,
      title: "System Integration",
      description:
        "Connected CloudDogg to the store's POS, e-commerce platform, and marketing tools to create a unified automation ecosystem.",
    },
    {
      number: 3,
      title: "Custom Automation Development",
      description:
        "Configured tailored automation workflows for marketing, inventory, customer service, and operations.",
    },
    {
      number: 4,
      title: "Staff Training & Adoption",
      description:
        "Provided hands-on training to ensure the small team could effectively leverage and maintain the automation tools.",
    },
    {
      number: 5,
      title: "Scaling & Optimization",
      description:
        "Continuously refined automations based on business results and expanded capabilities as the business grew.",
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
