import { Card, CardContent } from "@/components/ui/card"
import { Shield, FileCheck, Database, Award, Users } from "lucide-react"

export default function SecurityComplianceCourseHighlights() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-white light:text-gray-800">Course Highlights</h2>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="bg-gray-800/50 border-gray-700 overflow-hidden light:bg-white light:border-gray-200 light:shadow-md">
          <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-600"></div>
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white light:text-gray-800">Military-Grade Security</h3>
            <p className="text-gray-300 light:text-gray-600">
              Apply military security principles to protect your business and customer data with proven strategies.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50 border-gray-700 overflow-hidden light:bg-white light:border-gray-200 light:shadow-md">
          <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-600"></div>
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center mb-4">
              <FileCheck className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white light:text-gray-800">Compliance Frameworks</h3>
            <p className="text-gray-300 light:text-gray-600">
              Navigate CMMC, FedRAMP, and other compliance frameworks required for government contracts.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50 border-gray-700 overflow-hidden light:bg-white light:border-gray-200 light:shadow-md">
          <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-600"></div>
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center mb-4">
              <Database className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white light:text-gray-800">Secure MCP Automation</h3>
            <p className="text-gray-300 light:text-gray-600">
              Implement secure automation workflows for sensitive operations using CloudDogg MCP.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50 border-gray-700 overflow-hidden light:bg-white light:border-gray-200 light:shadow-md">
          <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-600"></div>
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white light:text-gray-800">Veteran-Specific Resources</h3>
            <p className="text-gray-300 light:text-gray-600">
              Access templates, checklists, and resources specifically designed for veteran-owned businesses.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50 border-gray-700 overflow-hidden light:bg-white light:border-gray-200 light:shadow-md">
          <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-600"></div>
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white light:text-gray-800">Taught by Veterans</h3>
            <p className="text-gray-300 light:text-gray-600">
              Learn from instructors with both military and cybersecurity expertise who understand your unique
              challenges.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
