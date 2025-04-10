import type { Metadata } from "next"
import Header from "@/components/header"
import CourseHeader from "@/components/learning/course-header"
import CourseSidebar from "@/components/learning/course-sidebar"
import CourseContent from "@/components/learning/course-content"
import CourseInstructor from "@/components/learning/course-instructor"
import CourseReviews from "@/components/learning/course-reviews"
import RelatedCourses from "@/components/learning/related-courses"
import ZapierCourseOverview from "@/components/learning/zapier-course/zapier-course-overview"
import ZapierCourseHighlights from "@/components/learning/zapier-course/zapier-course-highlights"
import ZapierCourseRequirements from "@/components/learning/zapier-course/zapier-course-requirements"

export const metadata: Metadata = {
  title: "Zapier Integration Masterclass - CloudDogg Learning",
  description: "Learn how to connect your MCP server to thousands of apps and create powerful automation workflows.",
}

export default function ZapierIntegrationCoursePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100">
      <div className="relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

        <Header />
        <main className="pt-32 pb-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <CourseHeader slug="zapier-integration" />

            <div className="flex flex-col lg:flex-row gap-8 mt-8">
              <div className="lg:w-2/3">
                <ZapierCourseOverview />
                <ZapierCourseHighlights />
                <ZapierCourseRequirements />
                <CourseContent slug="zapier-integration" />
                <CourseInstructor slug="zapier-integration" />
                <CourseReviews slug="zapier-integration" />
              </div>
              <div className="lg:w-1/3">
                <CourseSidebar slug="zapier-integration" />
              </div>
            </div>

            <RelatedCourses slug="zapier-integration" />
          </div>
        </main>
      </div>
    </div>
  )
}
