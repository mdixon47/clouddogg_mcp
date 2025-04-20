import { FileText, LinkIcon, Download, ExternalLink } from "lucide-react"

export default function VeteranSecurityLandscapeResources() {
  return (
    <div className="space-y-4">
      <div className="flex items-start">
        <div className="bg-purple-500/20 p-2 rounded mr-3">
          <FileText className="h-5 w-5 text-purple-400 light:text-purple-600" />
        </div>
        <div>
          <h3 className="text-white font-medium mb-1 light:text-gray-800">CMMC Overview Guide</h3>
          <p className="text-gray-400 text-sm mb-2 light:text-gray-600">
            Comprehensive overview of the Cybersecurity Maturity Model Certification
          </p>
          <a
            href="#"
            className="text-purple-400 text-sm flex items-center hover:text-purple-300 light:text-purple-600 light:hover:text-purple-700"
          >
            <Download className="h-4 w-4 mr-1" />
            Download PDF
          </a>
        </div>
      </div>

      <div className="flex items-start">
        <div className="bg-purple-500/20 p-2 rounded mr-3">
          <LinkIcon className="h-5 w-5 text-purple-400 light:text-purple-600" />
        </div>
        <div>
          <h3 className="text-white font-medium mb-1 light:text-gray-800">Veteran Business Security Checklist</h3>
          <p className="text-gray-400 text-sm mb-2 light:text-gray-600">
            A comprehensive checklist for assessing your business security posture
          </p>
          <a
            href="#"
            className="text-purple-400 text-sm flex items-center hover:text-purple-300 light:text-purple-600 light:hover:text-purple-700"
          >
            <Download className="h-4 w-4 mr-1" />
            Download Checklist
          </a>
        </div>
      </div>

      <div className="flex items-start">
        <div className="bg-purple-500/20 p-2 rounded mr-3">
          <ExternalLink className="h-5 w-5 text-purple-400 light:text-purple-600" />
        </div>
        <div>
          <h3 className="text-white font-medium mb-1 light:text-gray-800">SBA Veteran Business Resources</h3>
          <p className="text-gray-400 text-sm mb-2 light:text-gray-600">
            Small Business Administration resources for veteran entrepreneurs
          </p>
          <a
            href="https://www.sba.gov/business-guide/grow-your-business/veteran-owned-businesses"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 text-sm flex items-center hover:text-purple-300 light:text-purple-600 light:hover:text-purple-700"
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            Visit Website
          </a>
        </div>
      </div>

      <div className="flex items-start">
        <div className="bg-purple-500/20 p-2 rounded mr-3">
          <FileText className="h-5 w-5 text-purple-400 light:text-purple-600" />
        </div>
        <div>
          <h3 className="text-white font-medium mb-1 light:text-gray-800">Threat Landscape Report</h3>
          <p className="text-gray-400 text-sm mb-2 light:text-gray-600">
            Current cybersecurity threats facing veteran-owned businesses
          </p>
          <a
            href="#"
            className="text-purple-400 text-sm flex items-center hover:text-purple-300 light:text-purple-600 light:hover:text-purple-700"
          >
            <Download className="h-4 w-4 mr-1" />
            Download Report
          </a>
        </div>
      </div>
    </div>
  )
}
