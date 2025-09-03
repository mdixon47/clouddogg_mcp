import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Home, HeartPulse, Store, Rocket, Briefcase, Landmark } from "lucide-react"

const caseStudies = [
  {
    id: "real-estate",
    title: "Real Estate",
    subtitle: "How Prestige Real Estate Group Increased Productivity by 68%",
    description: "Transforming agent productivity and client experience through intelligent automation",
    icon: Home,
    color: "from-blue-500 to-cyan-500",
    path: "/case-studies/real-estate",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    subtitle: "How Cornerstone Health Partners Reduced No-Shows by 72%",
    description: "Transforming patient engagement and practice efficiency while maintaining HIPAA compliance",
    icon: HeartPulse,
    color: "from-green-500 to-teal-500",
    path: "/case-studies/healthcare",
  },
  {
    id: "local-business",
    title: "Local Business",
    subtitle: "How Riverside Craft Supply Increased Revenue by 47%",
    description: "Helping a small local retailer compete with national chains through intelligent automation",
    icon: Store,
    color: "from-amber-500 to-orange-500",
    path: "/case-studies/local-business",
  },
  {
    id: "startups",
    title: "Startups",
    subtitle: "How TechLaunch Scaled Operations Without Adding Headcount",
    description: "Enabling rapid growth through comprehensive workflow automation",
    icon: Rocket,
    color: "from-purple-500 to-pink-500",
    path: "/case-studies/startups",
  },
  {
    id: "financial",
    title: "Financial Services",
    subtitle: "How Heritage Financial Advisors Streamlined Client Onboarding",
    description: "Reducing compliance overhead while enhancing the client experience",
    icon: Briefcase,
    color: "from-indigo-500 to-blue-500",
    path: "/case-studies/financial",
  },
  {
    id: "government",
    title: "Government",
    subtitle: "How Westlake City Improved Citizen Services Response Time",
    description: "Modernizing municipal services through intelligent automation",
    icon: Landmark,
    color: "from-red-500 to-rose-500",
    path: "/case-studies/government",
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100">
      <div className="relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

        <main className="pt-32 pb-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Customer Success Stories
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how organizations across industries are transforming their operations with CloudDogg's AI automation
                platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:bg-gray-800/50 transition-all"
                >
                  <div className={`h-2 w-full bg-gradient-to-r ${study.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-r ${study.color} flex items-center justify-center flex-shrink-0`}
                      >
                        <study.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-400">{study.title}</h3>
                        <h2 className="text-xl font-semibold text-white">{study.subtitle}</h2>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6">{study.description}</p>
                    <Button
                      asChild
                      variant="default"
                      className={`bg-gradient-to-r ${study.color} hover:opacity-90 text-white border-0`}
                    >
                      <Link href={study.path}>Read Case Study</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
