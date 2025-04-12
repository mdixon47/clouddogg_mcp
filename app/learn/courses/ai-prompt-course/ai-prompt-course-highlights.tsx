import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Zap, Code, Database, BarChart } from "lucide-react"

export default function AIPromptCourseHighlights() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-white light:text-gray-800">Course Highlights</h2>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="bg-gray-800/50 border-gray-700 overflow-hidden light:bg-white light:border-gray-200 light:shadow-md">
          <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-600"></div>
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mb-4">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white light:text-gray-800">Interactive Exercises</h3>
            <p className="text-gray-300 light:text-gray-600">
              Practice your prompt engineering skills with hands-on exercises and real-time feedback.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50 border-gray-700 overflow-hidden light:bg-white light:border-gray-200 light:shadow-md">
          <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-600"></div>
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white light:text-gray-800">Prompt Templates</h3>
            <p className="text-gray-300 light:text-gray-600">
              Access a library of proven prompt templates for different use cases and industries.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50 border-gray-700 overflow-hidden light:bg-white light:border-gray-200 light:shadow-md">
          <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-600"></div>
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white light:text-gray-800">MCP Integration</h3>
            <p className="text-gray-300 light:text-gray-600">
              Learn how to integrate optimized prompts with CloudDogg MCP servers for maximum efficiency.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50 border-gray-700 overflow-hidden light:bg-white light:border-gray-200 light:shadow-md">
          <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-600"></div>
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mb-4">
              <Database className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white light:text-gray-800">Prompt Library</h3>
            <p className="text-gray-300 light:text-gray-600">
              Build and manage your own library of effective prompts for different business needs.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50 border-gray-700 overflow-hidden light:bg-white light:border-gray-200 light:shadow-md">
          <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-600"></div>
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mb-4">
              <BarChart className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white light:text-gray-800">Performance Metrics</h3>
            <p className="text-gray-300 light:text-gray-600">
              Learn how to measure and optimize the effectiveness of your prompts with key metrics.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
