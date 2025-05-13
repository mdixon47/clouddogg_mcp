"use client"

import { useState } from "react"
import { CheckCircle, Clock, AlertTriangle, Upload, FileText, Trash2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function VerificationDocuments({ documents }: { documents: Array<{ id: string; name: string; status: string; uploadDate: string }> })  {
  const [uploadingNew, setUploadingNew] = useState(false)

  // Helper function to get status display elements
   const getStatusDisplay = (status: string) => {
    switch (status) {
      case "verified":
        return {
          icon: <CheckCircle className="h-5 w-5 text-green-500" />,
          label: "Verified",
          color: "text-green-500",
        }
      case "pending":
        return {
          icon: <Clock className="h-5 w-5 text-yellow-500" />,
          label: "Pending",
          color: "text-yellow-500",
        }
      case "rejected":
        return {
          icon: <AlertTriangle className="h-5 w-5 text-red-500" />,
          label: "Rejected",
          color: "text-red-500",
        }
      default:
        return {
          icon: <FileText className="h-5 w-5 text-gray-500" />,
          label: "Unknown",
          color: "text-gray-500",
        }
    }
  }

  return (
    <Card className="border border-gray-200 dark:border-gray-800">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Verification Documents</CardTitle>
        <Button onClick={() => setUploadingNew(true)} disabled={uploadingNew}>
          <Upload className="h-4 w-4 mr-2" />
          Upload New Document
        </Button>
      </CardHeader>
      <CardContent>
        {uploadingNew && (
          <div className="mb-6 p-4 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
            <div className="text-center">
              <FileText className="h-10 w-10 mx-auto mb-2 text-gray-400" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Upload Document</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Drag and drop your file here, or click to browse
              </p>
              <div className="flex justify-center space-x-2">
                <Button>Browse Files</Button>
                <Button variant="outline" onClick={() => setUploadingNew(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Document</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Upload Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((doc) => {
              const status = getStatusDisplay(doc.status)
              return (
                <TableRow key={doc.id}>
                  <TableCell className="font-medium">{doc.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {status.icon}
                      <span className={status.color}>{status.label}</span>
                    </div>
                  </TableCell>
                  <TableCell>{new Date(doc.uploadDate).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <span className="sr-only">View document</span>
                      <FileText className="h-4 w-4" />
                    </Button>
                    {doc.status !== "verified" && (
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500">
                        <span className="sr-only">Delete document</span>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>

        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Accepted Document Types</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            <li>• DD214 (Certificate of Release or Discharge from Active Duty)</li>
            <li>• Military ID Card (front and back)</li>
            <li>• VA Letter confirming veteran status</li>
            <li>• NGB Form 22 (National Guard Report of Separation)</li>
            <li>• Certificate of Eligibility for VA benefits</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            All documents must be in PDF, JPG, or PNG format and under 10MB.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
