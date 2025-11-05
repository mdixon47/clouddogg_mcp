"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Medal } from "lucide-react"

interface CourseInstructorProps {
  slug: string
}

export default function CourseInstructor({ slug: _slug }: CourseInstructorProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // This would normally fetch instructor data based on the course slug
  const instructor = {
    name: "John Doe",
    role: "Senior MCP Engineer",
    isVeteran: true,
    militaryBranch: "Army",
    bio: "John is a veteran and senior MCP engineer with over 10 years of experience in AI automation. After serving in the Army for 8 years, he transitioned to the tech industry where he has helped hundreds of businesses implement MCP servers and automation workflows. He specializes in helping veteran-owned businesses leverage technology to scale their operations.",
    expertise: ["MCP Server Architecture", "AI Automation", "Zapier Integration", "Business Process Optimization"],
    courses: 5,
    students: 3500,
    rating: 4.8,
  }

  return (
    <div
      ref={ref}
      className={`mb-12 transition-all duration-1000 transform ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      <h2 className="text-2xl font-bold mb-6 text-white">Your Instructor</h2>

      <Card className="bg-gray-800/30 backdrop-blur-sm border-gray-700 overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center text-white text-2xl font-bold mb-4">
                JD
              </div>
              <h3 className="text-xl font-semibold text-white">{instructor.name}</h3>
              <p className="text-gray-400">{instructor.role}</p>

              {instructor.isVeteran && (
                <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-300">
                  <Medal className="h-4 w-4 mr-1" />
                  <span className="text-sm">{instructor.militaryBranch} Veteran</span>
                </div>
              )}

              <div className="mt-4 text-center">
                <div className="text-2xl font-bold text-white">{instructor.courses}</div>
                <div className="text-sm text-gray-400">Courses</div>
              </div>

              <div className="mt-2 text-center">
                <div className="text-2xl font-bold text-white">{instructor.students.toLocaleString()}</div>
                <div className="text-sm text-gray-400">Students</div>
              </div>

              <div className="mt-2 text-center">
                <div className="text-2xl font-bold text-white">{instructor.rating}</div>
                <div className="text-sm text-gray-400">Rating</div>
              </div>
            </div>

            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold mb-4 text-white">About the Instructor</h3>
              <p className="text-gray-300 mb-6">{instructor.bio}</p>

              <h4 className="text-lg font-medium mb-3 text-white">Areas of Expertise</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {instructor.expertise.map((area, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
