"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Clock, BookOpen, Award, FileText, Video, Code, CheckCircle } from "lucide-react"

interface Module {
  title: string
  description: string
  lessons: Lesson[]
}

interface Lesson {
  title: string
  type: "video" | "exercise" | "quiz" | "project" | "reading"
  duration?: string
  description: string
}

interface Assessment {
  title: string
  description: string
  weight: string
  type: "quiz" | "project" | "assignment" | "exam"
}

interface Resource {
  title: string
  type: "reading" | "video" | "tool" | "template" | "code"
  description: string
}

interface CourseData {
  title: string
  description: string
  level: "Beginner" | "Intermediate" | "Advanced"
  duration: string
  instructor: string
  instructorRole: string
  prerequisites: string[]
  learningObjectives: string[]
  modules: Module[]
  assessments: Assessment[]
  resources: Resource[]
}

interface CourseSyllabusProps {
  course: CourseData
}

export default function CourseSyllabus({ course }: CourseSyllabusProps) {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-8 bg-white/90 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">{course.title}</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400 mt-1">{course.description}</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Badge
                variant="outline"
                className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800"
              >
                {course.level}
              </Badge>
              <Badge
                variant="outline"
                className="bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800"
              >
                <Clock className="mr-1 h-3 w-3" />
                {course.duration}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold">
              {course.instructor
                .split(" ")
                .map((name) => name[0])
                .join("")}
            </div>
            <div className="ml-3">
              <div className="text-gray-900 dark:text-white font-medium">{course.instructor}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{course.instructorRole}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          <TabsTrigger value="assessments">Assessments</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Prerequisites</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {course.prerequisites.map((prerequisite, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{prerequisite}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Learning Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {course.learningObjectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2 flex-shrink-0 mt-0.5 text-xs font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{objective}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="curriculum" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Course Modules</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {course.modules.map((module, moduleIndex) => (
                  <AccordionItem
                    key={moduleIndex}
                    value={`module-${moduleIndex}`}
                    className="border-b border-gray-200 dark:border-gray-700"
                  >
                    <AccordionTrigger className="text-gray-900 dark:text-white hover:no-underline py-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold mr-3">
                          {moduleIndex + 1}
                        </div>
                        <div className="text-left">
                          <div className="font-medium">{module.title}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{module.description}</div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-14">
                      <ul className="space-y-3 py-2">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex} className="flex items-start">
                            <div className="flex-shrink-0 mr-3">
                              {lesson.type === "video" && <Video className="h-5 w-5 text-blue-500" />}
                              {lesson.type === "exercise" && <Code className="h-5 w-5 text-purple-500" />}
                              {lesson.type === "quiz" && <FileText className="h-5 w-5 text-amber-500" />}
                              {lesson.type === "project" && <Award className="h-5 w-5 text-green-500" />}
                              {lesson.type === "reading" && <BookOpen className="h-5 w-5 text-red-500" />}
                            </div>
                            <div>
                              <div className="text-gray-900 dark:text-white font-medium">{lesson.title}</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">{lesson.description}</div>
                              {lesson.duration && (
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                  <Clock className="inline h-3 w-3 mr-1" />
                                  {lesson.duration}
                                </div>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assessments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Assessments & Grading</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {course.assessments.map((assessment, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      {assessment.type === "quiz" && <FileText className="h-6 w-6 text-amber-500" />}
                      {assessment.type === "project" && <Award className="h-6 w-6 text-green-500" />}
                      {assessment.type === "assignment" && <Code className="h-6 w-6 text-purple-500" />}
                      {assessment.type === "exam" && <BookOpen className="h-6 w-6 text-red-500" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="text-lg font-medium text-gray-900 dark:text-white">{assessment.title}</h4>
                        <Badge>{assessment.weight}</Badge>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">{assessment.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Course Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.resources.map((resource, index) => (
                  <Card key={index} className="bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700">
                    <CardContent className="p-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-3">
                          {resource.type === "reading" && <BookOpen className="h-5 w-5 text-blue-500" />}
                          {resource.type === "video" && <Video className="h-5 w-5 text-red-500" />}
                          {resource.type === "tool" && <Code className="h-5 w-5 text-purple-500" />}
                          {resource.type === "template" && <FileText className="h-5 w-5 text-amber-500" />}
                          {resource.type === "code" && <Code className="h-5 w-5 text-green-500" />}
                        </div>
                        <div>
                          <div className="text-gray-900 dark:text-white font-medium">{resource.title}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{resource.description}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
