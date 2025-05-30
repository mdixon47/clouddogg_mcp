import { Medal, Rocket, Store, HeartPulse } from "lucide-react"

export const learningPaths = [
  {
    id: "veteran-entrepreneur",
    title: "Veteran Entrepreneur",
    description: "A comprehensive path for veterans starting or growing a business with AI automation.",
    icon: Medal,
    color: "from-blue-500 to-cyan-500",
    courses: 5,
    duration: "25 hours",
    popular: true,
  },
  {
    id: "startup-founder",
    title: "Startup Founder",
    description: "Learn how to leverage MCP servers to scale your startup without scaling headcount.",
    icon: Rocket,
    color: "from-purple-500 to-pink-500",
    courses: 4,
    duration: "20 hours",
    popular: false,
  },
  {
    id: "small-business",
    title: "Small Business Owner",
    description: "Practical automation solutions for local businesses to compete with larger companies.",
    icon: Store,
    color: "from-amber-500 to-orange-500",
    courses: 3,
    duration: "15 hours",
    popular: false,
  },
  {
    id: "healthcare-provider",
    title: "Healthcare Provider",
    description: "HIPAA-compliant automation solutions for healthcare practices and providers.",
    icon: HeartPulse,
    color: "from-green-500 to-emerald-500",
    courses: 4,
    duration: "22 hours",
    popular: false,
  },
]