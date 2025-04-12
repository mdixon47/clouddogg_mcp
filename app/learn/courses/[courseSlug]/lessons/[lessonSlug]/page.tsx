import type { Metadata } from "next"
import Footer from "@/components/footer"
import CourseHeader from "@/components/learning/course-header"
import CourseSidebar from "@/components/learning/course-sidebar"
import CourseContent from "@/components/learning/course-content"
import CourseInstructor from "@/components/learning/course-instructor"
import CourseReviews from "@/components/learning/course-reviews"
import RelatedCourses from "@/components/learning/related-courses"

export const metadata: Metadata = {
  title: "MCP Server Fundamentals - CloudDogg Learning",
  description: "Learn the fundamentals of Model Context Protocol servers and how to implement them in your business.",
}

export default async function CoursePage({ params }: { params: { courseSlug: string } }) {
  // Await the params object
  const { courseSlug } = await params

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100">
      <div className="relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

        
        <main className="pt-32 pb-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <CourseHeader courseSlug={courseSlug} />

            <div className="flex flex-col lg:flex-row gap-8 mt-8">
              <div className="lg:w-2/3">
                <CourseContent courseSlug={courseSlug} />
                <CourseInstructor courseSlug={courseSlug} />
                <CourseReviews courseSlug={courseSlug} />
              </div>
              <div className="lg:w-1/3">
                <CourseSidebar courseSlug={courseSlug} />
              </div>
            </div>

            <RelatedCourses courseSlug={courseSlug} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
