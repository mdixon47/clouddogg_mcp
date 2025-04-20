import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Award, BookOpen, CheckCircle } from "lucide-react"
import { securityComplianceVeterans } from "@/data/courses/security-compliance-veterans"

export default function SecurityComplianceCourseOverview() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-white light:text-gray-800">Course Overview</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-gray-800/50 border-gray-700 overflow-hidden light:bg-white light:border-gray-200 light:shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Clock className="h-5 w-5 mr-2 text-purple-500" />
              <h3 className="font-semibold text-white light:text-gray-800">Course Duration</h3>
            </div>
            <p className="text-gray-300 light:text-gray-600">{securityComplianceVeterans.duration}</p>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <div className="bg-gray-700/50 p-2 rounded light:bg-gray-100">
                <span className="block text-gray-400 light:text-gray-500">Modules</span>
                <span className="text-white font-medium light:text-gray-800">
                  {securityComplianceVeterans.modules.length}
                </span>
              </div>
              <div className="bg-gray-700/50 p-2 rounded light:bg-gray-100">
                <span className="block text-gray-400 light:text-gray-500">Total Lessons</span>
                <span className="text-white font-medium light:text-gray-800">
                  {securityComplianceVeterans.modules.reduce((total, module) => total + module.lessons.length, 0)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50 border-gray-700 overflow-hidden light:bg-white light:border-gray-200 light:shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Users className="h-5 w-5 mr-2 text-purple-500" />
              <h3 className="font-semibold text-white light:text-gray-800">Target Audience</h3>
            </div>
            <ul className="space-y-2 text-gray-300 light:text-gray-600">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mr-2 text-purple-500 mt-1 flex-shrink-0" />
                <span>Veteran entrepreneurs starting or running businesses</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mr-2 text-purple-500 mt-1 flex-shrink-0" />
                <span>Veterans seeking government or military contracts</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mr-2 text-purple-500 mt-1 flex-shrink-0" />
                <span>Security professionals with military backgrounds</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mr-2 text-purple-500 mt-1 flex-shrink-0" />
                <span>Business owners handling sensitive military or veteran data</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50 border-gray-700 overflow-hidden light:bg-white light:border-gray-200 light:shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Award className="h-5 w-5 mr-2 text-purple-500" />
              <h3 className="font-semibold text-white light:text-gray-800">What You'll Learn</h3>
            </div>
            <ul className="space-y-2 text-gray-300 light:text-gray-600">
              {securityComplianceVeterans.learningObjectives.slice(0, 4).map((objective, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 text-purple-500 mt-1 flex-shrink-0" />
                  <span>{objective}</span>
                </li>
              ))}
              {securityComplianceVeterans.learningObjectives.length > 4 && (
                <li className="text-purple-500 font-medium">
                  +{securityComplianceVeterans.learningObjectives.length - 4} more objectives
                </li>
              )}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50 border-gray-700 overflow-hidden light:bg-white light:border-gray-200 light:shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <BookOpen className="h-5 w-5 mr-2 text-purple-500" />
              <h3 className="font-semibold text-white light:text-gray-800">Prerequisites</h3>
            </div>
            <ul className="space-y-2 text-gray-300 light:text-gray-600">
              {securityComplianceVeterans.prerequisites.map((prerequisite, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 text-purple-500 mt-1 flex-shrink-0" />
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
