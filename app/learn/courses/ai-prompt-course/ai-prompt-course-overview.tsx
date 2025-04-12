import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Award, BookOpen, CheckCircle } from "lucide-react"
import { aiPromptEngineering } from "@/data/courses/ai-prompt-engineering"

export default function AIPromptCourseOverview() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-white light:text-gray-800">Course Overview</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-gray-800/50 border-gray-700 overflow-hidden light:bg-white light:border-gray-200 light:shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Clock className="h-5 w-5 mr-2 text-emerald-500" />
              <h3 className="font-semibold text-white light:text-gray-800">Course Duration</h3>
            </div>
            <p className="text-gray-300 light:text-gray-600">{aiPromptEngineering.duration}</p>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <div className="bg-gray-700/50 p-2 rounded light:bg-gray-100">
                <span className="block text-gray-400 light:text-gray-500">Modules</span>
                <span className="text-white font-medium light:text-gray-800">{aiPromptEngineering.modules.length}</span>
              </div>
              <div className="bg-gray-700/50 p-2 rounded light:bg-gray-100">
                <span className="block text-gray-400 light:text-gray-500">Total Lessons</span>
                <span className="text-white font-medium light:text-gray-800">
                  {aiPromptEngineering.modules.reduce((total, module) => total + module.lessons.length, 0)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50 border-gray-700 overflow-hidden light:bg-white light:border-gray-200 light:shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Users className="h-5 w-5 mr-2 text-emerald-500" />
              <h3 className="font-semibold text-white light:text-gray-800">Target Audience</h3>
            </div>
            <ul className="space-y-2 text-gray-300 light:text-gray-600">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mr-2 text-emerald-500 mt-1 flex-shrink-0" />
                <span>AI enthusiasts looking to improve their prompt crafting skills</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mr-2 text-emerald-500 mt-1 flex-shrink-0" />
                <span>Business professionals using AI tools for content creation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mr-2 text-emerald-500 mt-1 flex-shrink-0" />
                <span>Developers integrating AI into applications</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mr-2 text-emerald-500 mt-1 flex-shrink-0" />
                <span>MCP server administrators optimizing AI workflows</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50 border-gray-700 overflow-hidden light:bg-white light:border-gray-200 light:shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Award className="h-5 w-5 mr-2 text-emerald-500" />
              <h3 className="font-semibold text-white light:text-gray-800">What You'll Learn</h3>
            </div>
            <ul className="space-y-2 text-gray-300 light:text-gray-600">
              {aiPromptEngineering.learningObjectives.slice(0, 4).map((objective, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 text-emerald-500 mt-1 flex-shrink-0" />
                  <span>{objective}</span>
                </li>
              ))}
              {aiPromptEngineering.learningObjectives.length > 4 && (
                <li className="text-emerald-500 font-medium">
                  +{aiPromptEngineering.learningObjectives.length - 4} more objectives
                </li>
              )}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50 border-gray-700 overflow-hidden light:bg-white light:border-gray-200 light:shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <BookOpen className="h-5 w-5 mr-2 text-emerald-500" />
              <h3 className="font-semibold text-white light:text-gray-800">Prerequisites</h3>
            </div>
            <ul className="space-y-2 text-gray-300 light:text-gray-600">
              {aiPromptEngineering.prerequisites.map((prerequisite, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 text-emerald-500 mt-1 flex-shrink-0" />
                  <span>{prerequisite}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
