import type { ReactNode } from "react"

interface LessonContentProps {
  courseSlug: string
  lessonSlug: string
}

interface SolutionSectionProps {
  solutions: {
    title: string
    description: string
    icon: ReactNode
  }[]
}

export default function LessonContent({ courseSlug, lessonSlug }: LessonContentProps) {
  return (
    <div className="prose prose-invert max-w-none">
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-white">Lesson Content</h2>
        <p className="text-gray-300 mb-4">
          This is the content for the lesson: <strong>{lessonSlug}</strong> in course: <strong>{courseSlug}</strong>
        </p>
        <p className="text-gray-400">
          Lesson content would be dynamically loaded based on the course and lesson slugs.
        </p>
      </div>
    </div>
  )
}

export function SolutionSection({ solutions }: SolutionSectionProps) {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        The CloudDogg Solution
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/50 transition-all"
          >
            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
              {solution.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">{solution.title}</h3>
            <p className="text-gray-300">{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}