"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Medal, DollarSign, Users, BookOpen, Briefcase, Shield } from "lucide-react"

const benefits = [
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

export default function VeteranBenefits() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-950/50 relative">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Veteran Entrepreneur Benefits
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Exclusive advantages for veterans building technology businesses with CloudDogg.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`bg-gray-800/30 backdrop-blur-sm border-gray-700 overflow-hidden transition-all duration-700 transform ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-4`}
                >
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
