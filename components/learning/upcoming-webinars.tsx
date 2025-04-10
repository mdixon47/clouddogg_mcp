"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users } from "lucide-react"
import Link from "next/link"

const webinars = [
  {
    title: "MCP Server Implementation for Veteran Businesses",
    description:
      "Learn how to set up and configure your MCP server for maximum efficiency in your veteran-owned business.",
    date: "June 15, 2023",
    time: "2:00 PM EST",
    instructor: "John Doe, Army Veteran",
    attendees: 156,
    link: "/learn/webinars/mcp-implementation",
  },
  {
    title: "Securing Funding for Your Tech Business",
    description:
      "Discover funding opportunities specifically available for veteran entrepreneurs in the technology sector.",
    date: "June 22, 2023",
    time: "1:00 PM EST",
    instructor: "Jane Smith, Navy Veteran",
    attendees: 203,
    link: "/learn/webinars/veteran-funding",
  },
  {
    title: "AI Automation Case Studies: Veteran Success Stories",
    description:
      "Real-world examples of how veteran entrepreneurs have leveraged AI automation to grow their businesses.",
    date: "June 29, 2023",
    time: "3:00 PM EST",
    instructor: "Mike Johnson, Marine Corps Veteran",
    attendees: 178,
    link: "/learn/webinars/ai-success-stories",
  },
]

export default function UpcomingWebinars() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-950/50 relative">
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Upcoming Live Webinars
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join our live sessions with veteran entrepreneurs and industry experts.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {webinars.map((webinar, index) => (
            <Card
              key={index}
              className={`bg-gray-800/30 backdrop-blur-sm border-gray-700 overflow-hidden transition-all duration-700 transform ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{webinar.title}</h3>
                <p className="text-gray-400 mb-4">{webinar.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="h-4 w-4 mr-2 text-blue-400" />
                    <span>{webinar.date}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="h-4 w-4 mr-2 text-blue-400" />
                    <span>{webinar.time}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="h-4 w-4 mr-2 text-blue-400" />
                    <span>{webinar.attendees} registered</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <p className="text-sm text-gray-400 mb-4">Presented by: {webinar.instructor}</p>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white"
                    asChild
                  >
                    <Link href={webinar.link}>Register Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
            asChild
          >
            <Link href="/learn/webinars">View All Webinars</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
