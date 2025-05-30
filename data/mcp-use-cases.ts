import { Home, HeartPulse, Store, Rocket, ChevronLeft, ChevronRight } from "lucide-react"

export const useCases = [
  {
    id: "real-estate",
    title: "Real Estate",
    icon: Home,
    color: "from-blue-500 to-cyan-500",
    description:
      "Automate lead nurturing, property matching, and transaction management. CloudDogg helps agents focus on relationships while AI handles the paperwork.",
    benefits: [
      "Automated property listing updates across platforms",
      "AI-powered lead qualification and follow-up",
      "Smart scheduling for showings and open houses",
      "Document generation and transaction tracking",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    icon: HeartPulse,
    color: "from-green-500 to-teal-500",
    description:
      "Streamline patient communications, appointment scheduling, and administrative tasks while maintaining HIPAA compliance and data security.",
    benefits: [
      "HIPAA-compliant patient communication automation",
      "Intelligent appointment scheduling and reminders",
      "Automated insurance verification workflows",
      "Secure document processing and management",
    ],
  },
  {
    id: "local-business",
    title: "Local Businesses",
    icon: Store,
    color: "from-amber-500 to-orange-500",
    description:
      "Help small businesses compete with enterprise-level automation. From appointment booking to customer follow-ups, CloudDogg levels the playing field.",
    benefits: [
      "Customer review management and response automation",
      "Inventory tracking and reordering workflows",
      "Personalized marketing campaigns at scale",
      "Streamlined booking and reservation systems",
    ],
  },
  {
    id: "startups",
    title: "Startups",
    icon: Rocket,
    color: "from-purple-500 to-pink-500",
    description:
      "Scale operations without scaling headcount. CloudDogg helps startups automate repetitive tasks so founders can focus on growth and innovation.",
    benefits: [
      "Automated customer onboarding sequences",
      "Lead qualification and sales pipeline automation",
      "Investor updates and reporting workflows",
      "Cross-platform social media management",
    ],
  },
]