"use client"
import { Medal, DollarSign, Users, BookOpen, Briefcase, Shield } from "lucide-react"

const _benefits = [
  {
    title: "50% Course Discount",
    description: "All courses and learning paths are available at half price for verified veterans.",
    icon: DollarSign,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Veteran Mentorship",
    description: "Get paired with successful veteran entrepreneurs in the technology sector.",
    icon: Users,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Specialized Curriculum",
    description: "Courses designed specifically for veterans transitioning to technology careers.",
    icon: BookOpen,
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Business Resources",
    description: "Access to veteran-specific funding, grants, and business development resources.",
    icon: Briefcase,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Veteran Network",
    description: "Connect with a community of veteran entrepreneurs building technology businesses.",
    icon: Medal,
    color: "from-red-500 to-rose-500",
  },
  {
    title: "Priority Support",
    description: "Get priority technical and business support from our team of veteran staff members.",
    icon: Shield,
    color: "from-indigo-500 to-violet-500",
  },
]

export default function VeteranProgramBenefits() {
  return (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Content will be added here */}
        <div className="h-1"></div>
      </div>
    </section>
  )
}
