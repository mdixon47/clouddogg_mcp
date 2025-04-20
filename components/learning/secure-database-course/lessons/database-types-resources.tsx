import { FileText, Link, Download, ExternalLink } from "lucide-react"

export default function DatabaseTypesResources() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3 text-white light:text-gray-800">Lesson Resources</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FileText className="h-5 w-5 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
            <a href="#" className="text-blue-400 hover:text-blue-300 light:text-blue-600 light:hover:text-blue-700">
              Database Types Comparison Chart (PDF)
            </a>
          </li>
          <li className="flex items-start">
            <Download className="h-5 w-5 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
            <a href="#" className="text-blue-400 hover:text-blue-300 light:text-blue-600 light:hover:text-blue-700">
              Security Features Matrix Spreadsheet
            </a>
          </li>
          <li className="flex items-start">
            <Link className="h-5 w-5 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
            <a href="#" className="text-blue-400 hover:text-blue-300 light:text-blue-600 light:hover:text-blue-700">
              Database Selection Decision Tree
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3 text-white light:text-gray-800">Additional Reading</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <ExternalLink className="h-5 w-5 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
            <a href="#" className="text-blue-400 hover:text-blue-300 light:text-blue-600 light:hover:text-blue-700">
              NIST Database Security Guidelines
            </a>
          </li>
          <li className="flex items-start">
            <ExternalLink className="h-5 w-5 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
            <a href="#" className="text-blue-400 hover:text-blue-300 light:text-blue-600 light:hover:text-blue-700">
              OWASP Database Security Cheat Sheet
            </a>
          </li>
          <li className="flex items-start">
            <ExternalLink className="h-5 w-5 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
            <a href="#" className="text-blue-400 hover:text-blue-300 light:text-blue-600 light:hover:text-blue-700">
              Comparing Database Encryption Methods
            </a>
          </li>
        </ul>
      </div>

      <div className="bg-blue-900/20 p-4 rounded-lg light:bg-blue-50">
        <h3 className="text-lg font-semibold mb-2 text-white light:text-gray-800">Hands-on Exercise</h3>
        <p className="text-gray-300 mb-3 light:text-gray-600">
          Complete the "Database Selection for Healthcare Data" exercise to apply what you've learned.
        </p>
        <a
          href="#"
          className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 light:text-blue-600 light:hover:text-blue-700"
        >
          Start Exercise <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>
  )
}
