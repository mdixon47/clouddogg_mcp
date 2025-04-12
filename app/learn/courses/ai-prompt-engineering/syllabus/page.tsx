import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { aiPromptEngineering } from "@/data/courses/ai-prompt-engineering"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Clock, Award, CheckCircle, Download } from "lucide-react"

export const metadata: Metadata = {
  title: `${aiPromptEngineering.title} Syllabus - CloudDogg MCP Learning`,
  description: `Complete syllabus for ${aiPromptEngineering.title} course - modules, lessons, and learning objectives.`,
}

export default function AIPromptEngineeringSyllabusPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100 dark:bg-gradient-to-b dark:from-gray-950 dark:to-gray-900 dark:text-gray-100 light:bg-gradient-to-b light:from-blue-50 light:to-white light:text-gray-800">
      <div className="relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl dark:bg-green-500/10 light:bg-green-500/5" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl dark:bg-emerald-500/10 light:bg-emerald-500/5" />

        <Header />
        <main className="pt-32 pb-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <Button
                variant="ghost"
                className="mb-4 text-gray-400 hover:text-white light:text-gray-600 light:hover:text-gray-900"
                asChild
              >
                <Link href="/learn/courses/ai-prompt-engineering">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Course
                </Link>
              </Button>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent dark:from-green-400 dark:via-emerald-300 dark:to-teal-400 light:from-green-600 light:via-emerald-500 light:to-teal-600">
                {aiPromptEngineering.title} Syllabus
              </h1>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-300 light:text-gray-600">
                  <Clock className="mr-2 h-5 w-5 text-emerald-500" />
                  <span>{aiPromptEngineering.duration}</span>
                </div>
                <div className="flex items-center text-gray-300 light:text-gray-600">
                  <BookOpen className="mr-2 h-5 w-5 text-emerald-500" />
                  <span>{aiPromptEngineering.level}</span>
                </div>
                <div className="flex items-center text-gray-300 light:text-gray-600">
                  <Award className="mr-2 h-5 w-5 text-emerald-500" />
                  <span>Certificate of Completion</span>
                </div>
              </div>

              <p className="text-xl text-gray-300 light:text-gray-700">{aiPromptEngineering.description}</p>
            </div>

            <div className="mb-12 p-6 bg-gray-800/50 rounded-xl border border-gray-700 light:bg-white light:border-gray-200 light:shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-white light:text-gray-800">Instructor</h2>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white text-xl font-bold">
                  MC
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white light:text-gray-800">
                    {aiPromptEngineering.instructor}
                  </h3>
                  <p className="text-gray-300 light:text-gray-600">{aiPromptEngineering.instructorRole}</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white light:text-gray-800">Learning Objectives</h2>
              <ul className="grid gap-3">
                {aiPromptEngineering.learningObjectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-3 h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 light:text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white light:text-gray-800">Prerequisites</h2>
              <ul className="grid gap-3">
                {aiPromptEngineering.prerequisites.map((prerequisite, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-3 h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 light:text-gray-700">{prerequisite}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white light:text-gray-800">Course Modules</h2>

              {aiPromptEngineering.modules.map((module, moduleIndex) => (
                <div key={moduleIndex} className="mb-8">
                  <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 mb-4 light:bg-white light:border-gray-200 light:shadow-md">
                    <h3 className="text-xl font-bold mb-2 text-white light:text-gray-800">
                      Module {moduleIndex + 1}: {module.title}
                    </h3>
                    <p className="text-gray-300 mb-4 light:text-gray-600">{module.description}</p>
                  </div>

                  <div className="pl-6 border-l-2 border-emerald-500/30">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <div key={lessonIndex} className="mb-4 p-4 bg-gray-800/30 rounded-lg light:bg-gray-50">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-white mb-1 light:text-gray-800">
                              {moduleIndex + 1}.{lessonIndex + 1} {lesson.title}
                            </h4>
                            <p className="text-sm text-gray-400 light:text-gray-600">{lesson.description}</p>
                          </div>
                          <div className="flex items-center text-xs text-gray-400 light:text-gray-500">
                            {lesson.type === "video" && (
                              <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-full light:bg-emerald-100 light:text-emerald-700">
                                Video • {lesson.duration}
                              </span>
                            )}
                            {lesson.type === "exercise" && (
                              <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full light:bg-blue-100 light:text-blue-700">
                                Exercise • {lesson.duration}
                              </span>
                            )}
                            {lesson.type === "quiz" && (
                              <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full light:bg-purple-100 light:text-purple-700">
                                Quiz
                              </span>
                            )}
                            {lesson.type === "project" && (
                              <span className="px-2 py-1 bg-amber-500/20 text-amber-300 rounded-full light:bg-amber-100 light:text-amber-700">
                                Project • {lesson.duration}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white light:text-gray-800">Assessment Methods</h2>
              <div className="grid gap-4">
                {aiPromptEngineering.assessments.map((assessment, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 light:bg-white light:border-gray-200 light:shadow-sm"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-white mb-1 light:text-gray-800">{assessment.title}</h3>
                        <p className="text-sm text-gray-300 light:text-gray-600">{assessment.description}</p>
                      </div>
                      <div className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs light:bg-emerald-100 light:text-emerald-700">
                        {assessment.weight}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white light:text-gray-800">Additional Resources</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {aiPromptEngineering.resources.map((resource, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 flex items-start light:bg-white light:border-gray-200 light:shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white mr-3 flex-shrink-0">
                      {resource.type === "reading" && <BookOpen className="h-5 w-5" />}
                      {resource.type === "template" && <Download className="h-5 w-5" />}
                      {resource.type === "tool" && <Award className="h-5 w-5" />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1 light:text-gray-800">{resource.title}</h3>
                      <p className="text-sm text-gray-300 light:text-gray-600">{resource.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-6 text-lg"
                asChild
              >
                <Link href="/learn/courses/ai-prompt-engineering">Enroll in This Course</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
