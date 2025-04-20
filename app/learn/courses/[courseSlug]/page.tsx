import type { Metadata } from "next"
import CourseHeader from "@/components/learning/course-header"
import CourseSidebar from "@/components/learning/course-sidebar"
import CourseContent from "@/components/learning/course-content"
import CourseInstructor from "@/components/learning/course-instructor"
import CourseReviews from "@/components/learning/course-reviews"
import RelatedCourses from "@/components/learning/related-courses"

interface CoursePageProps {
  params: {
    courseSlug: string
  }
}

export const metadata: Metadata = {
  title: "Course Details | CloudDogg Learning",
  description: "Detailed information about this course and its curriculum.",
}

export default function CoursePage({ params: { courseSlug } }: CoursePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
      <main className="container mx-auto px-4 py-12">
        <CourseHeader slug={courseSlug} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <CourseContent courseSlug={courseSlug} />
             <CourseInstructor slug={courseSlug} />
            <CourseReviews slug={courseSlug} />
          </div>
          <div className="lg:col-span-1">
            <CourseSidebar slug={courseSlug} />
          </div>
        </div>

           <RelatedCourses slug={courseSlug} />
      </main>
    </div>
  )
}