import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight } from "lucide-react"
import { allCourses as courses } from "@/data/courses"

export default function CourseSyllabiIndex() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">CloudDogg Learning Platform Courses</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Browse our comprehensive course catalog and access detailed syllabi for each course.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(courses).map(([slug, course]) => (
          <Card
            key={slug}
            className="bg-white/90 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{course.title}</CardTitle>
                <Badge
                  variant="outline"
                  className="bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800"
                >
                  {slug.includes('veteran') ? 'Veteran' : 'General'}
                </Badge>
              </div>
              <CardDescription className="text-gray-600 dark:text-gray-400 mt-2">{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">{course.duration}</span>
                </div>
                <Badge
                  className={
                    course.level === "Beginner"
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                      : course.level === "Intermediate"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                        : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                  }
                >
                  {course.level}
                </Badge>
              </div>
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white"
                asChild
              >
                <Link href={`/learn/courses/${slug}/syllabus`}>
                  View Syllabus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
