"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Medal, ArrowRight } from "lucide-react"
import Link from "next/link"

const successStories = [
  {
    name: "James Wilson",
    role: "Former Army Captain",
    company: "TechSecure Solutions",
    image: "/placeholder.svg?height=400&width=400",
    story:
      "After 12 years in the Army as a communications officer, I struggled to translate my skills to the civilian sector. CloudDogg's Military to Tech Transition course helped me identify how my leadership and technical skills could be applied to building a cybersecurity business. Today, my company TechSecure Solutions provides security services to over 50 clients, and we've grown to a team of 15 people, 80% of whom are veterans.",
    results: [
      "Founded cybersecurity firm with $1.2M in annual revenue",
      "Created jobs for 12 fellow veterans",
      "Secured government contracts using MCP automation",
    ],
    quote:
      "CloudDogg's veteran program didn't just teach me technology—it taught me how to be an entrepreneur while leveraging my military experience as an advantage.",
  },
  {
    name: "Sarah Martinez",
    role: "Navy Veteran",
    company: "DataOps Automation",
    image: "/placeholder.svg?height=400&width=400",
    story:
      "I served as a data specialist in the Navy for 8 years before transitioning to civilian life. The CloudDogg veteran program helped me turn my data analysis skills into a business opportunity. I learned how to use MCP servers to automate data workflows for healthcare companies. The veteran network introduced me to my first three clients, and the business has been growing steadily ever since.",
    results: [
      "Built a data automation company serving healthcare clients",
      "Increased efficiency by 300% using MCP automation",
      "Hired and trained 5 veterans in data science",
    ],
    quote:
      "The 50% discount made advanced training accessible, but the veteran community was priceless. Having mentors who understood both the military and tech worlds made all the difference.",
  },
  {
    name: "Michael Johnson",
    role: "Marine Corps Veteran",
    company: "LogisticsMCP",
    image: "/placeholder.svg?height=400&width=400",
    story:
      "My experience in logistics with the Marine Corps gave me a unique perspective on supply chain challenges. Through CloudDogg's courses, I learned how to apply MCP automation to logistics operations. I started by building custom integrations for small businesses, and now my company provides end-to-end logistics automation for manufacturing companies across the country.",
    results: [
      "Developed logistics automation platform using MCP",
      "Reduced client shipping costs by average of 32%",
      "Scaled to serving 25+ manufacturing clients",
    ],
    quote:
      "The Security & Compliance for Veterans course was crucial for my business. It helped me understand how to build secure systems that meet the strict requirements of manufacturing clients.",
  },
]

export default function VeteranSuccessStories() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-700 dark:text-blue-300 mb-4">
            <Medal className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Veteran Success Stories</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-cyan-700 dark:from-white dark:via-blue-100 dark:to-cyan-200 bg-clip-text text-transparent">
            From Military Service to Tech Entrepreneurship
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Read how veterans have leveraged CloudDogg MCP to build successful technology businesses after their
            military service.
          </p>
        </div>

        <div ref={ref} className="space-y-16">
          {successStories.map((story, index) => (
            <Card
              key={index}
              className={`bg-white dark:bg-gray-800/30 backdrop-blur-sm border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-700 transform ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 relative">
                    <div className="absolute top-4 left-4 z-10 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center">
                      <Medal className="h-3 w-3 mr-1" />
                      Veteran Success
                    </div>
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      className="w-full h-full object-cover object-center lg:h-full"
                      style={{ minHeight: "300px" }}
                    />
                  </div>
                  <div className="lg:w-2/3 p-6 lg:p-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{story.name}</h2>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{story.role}</p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">Founder, {story.company}</p>

                    <p className="text-gray-700 dark:text-gray-300 mb-6">{story.story}</p>

                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Results:</h3>
                    <ul className="space-y-2 mb-6">
                      {story.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 flex-shrink-0"></div>
                          <span className="ml-3 text-gray-700 dark:text-gray-300">{result}</span>
                        </li>
                      ))}
                    </ul>

                    <blockquote className="italic text-gray-700 dark:text-gray-300 border-l-4 border-blue-500 pl-4 py-2 mb-6">
                      "{story.quote}"
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
            Ready to start your own success story? Join our veteran program today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1"
              asChild
            >
              <Link href="/veteran-program/apply">
                Apply for Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white px-8 py-6 text-lg rounded-xl"
              asChild
            >
              <Link href="/veteran-program">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
