import type { Metadata } from "next"
import Header from "@/components/header"
import LearningHero from "@/components/learning/learning-hero"
import FeaturedCourses from "@/components/learning/featured-courses"
import LearningPaths from "@/components/learning/learning-paths"
import VeteranResources from "@/components/learning/veteran-resources"
import UpcomingWebinars from "@/components/learning/upcoming-webinars"

export const metadata: Metadata = {
  title: "CloudDogg Learning - MCP Server Training for Veterans",
  description:
    "Learn how to leverage MCP servers for your business with courses designed specifically for veteran entrepreneurs.",
}

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100">
      <div className="relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

        <Header />
        <main>
          <LearningHero />
          <FeaturedCourses />
          <LearningPaths />
          <VeteranResources />
          <UpcomingWebinars />
        </main>
      </div>
    </div>
  )
}
