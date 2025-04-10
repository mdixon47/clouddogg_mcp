import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CourseFilters from "@/components/learning/course-filters"
import CourseGrid from "@/components/learning/course-grid"
import CoursePagination from "@/components/learning/course-pagination"

export const metadata: Metadata = {
  title: "CloudDogg Courses - MCP Server Training",
  description: "Browse our comprehensive catalog of courses on MCP servers, AI automation, and business applications.",
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100">
      <div className="relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

        <Header />
        <main className="pt-32 pb-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Course Catalog
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive library of courses designed to help you master MCP servers and AI automation.
              </p>
            </div>

            <CourseFilters />
            <CourseGrid />
            <CoursePagination />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
