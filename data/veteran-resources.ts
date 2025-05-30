import { FileText, Users, DollarSign, Briefcase, GraduationCap } from "lucide-react"

export const resources = [
  {
    title: "VA Business Loan Guide",
    description: "Learn how to secure funding for your tech business through VA programs and partnerships.",
    icon: DollarSign,
    color: "from-blue-500 to-cyan-500",
    link: "/learn/resources/va-business-loans",
  },
  {
    title: "Veteran Tech Grants",
    description: "Discover grants specifically for veteran entrepreneurs in the technology sector.",
    icon: FileText,
    color: "from-purple-500 to-pink-500",
    link: "/learn/resources/veteran-tech-grants",
  },
  {
    title: "Veteran Business Network",
    description: "Connect with other veteran entrepreneurs building technology businesses.",
    icon: Users,
    color: "from-amber-500 to-orange-500",
    link: "/learn/resources/veteran-business-network",
  },
  {
    title: "Transition to Tech",
    description: "Resources for veterans transitioning from military service to technology careers.",
    icon: Briefcase,
    color: "from-green-500 to-emerald-500",
    link: "/learn/resources/transition-to-tech",
  },
  {
    title: "Veteran Mentorship Program",
    description: "Get paired with successful veteran entrepreneurs in the technology sector.",
    icon: GraduationCap,
    color: "from-red-500 to-rose-500",
    link: "/learn/resources/veteran-mentorship",
  },
]