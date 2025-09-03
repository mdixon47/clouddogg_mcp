"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, CreditCard, Shield, Users, Clock, CheckCircle } from "lucide-react"

export default function VeteranVerificationInfo() {
  const acceptedDocuments = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "DD-214 (Discharge Papers)",
      description: "Certificate of Release or Discharge from Active Duty",
      badge: "Most Common"
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "VA ID Card",
      description: "Department of Veterans Affairs identification card",
      badge: "Recommended"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Military ID Card",
      description: "Active duty, reserve, or retired military ID",
      badge: "Active/Reserve"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "NGB-22 (Guard/Reserve)",
      description: "National Guard Bureau Form 22 for Guard/Reserve members",
      badge: "Guard/Reserve"
    }
  ]

  const eligiblePersons = [
    {
      icon: <Users className="h-5 w-5" />,
      title: "Veterans",
      description: "All honorably discharged U.S. military veterans"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Active Duty",
      description: "Currently serving active duty service members"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Reservists",
      description: "National Guard and Reserve members"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Military Spouses",
      description: "Spouses of active duty, veteran, or deceased service members"
    }
  ]

  const verificationSteps = [
    {
      step: "1",
      title: "Choose Document Type",
      description: "Select the type of military document you'll be uploading"
    },
    {
      step: "2", 
      title: "Upload Document",
      description: "Securely upload a clear photo or scan of your document"
    },
    {
      step: "3",
      title: "Verification Review",
      description: "Our team reviews your submission (usually within 24 hours)"
    },
    {
      step: "4",
      title: "Access Benefits",
      description: "Once approved, immediately access all veteran benefits"
    }
  ]

  return (
    <section id="verification-info" className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Verification Information
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Learn about our secure verification process, accepted documents, and who's eligible for veteran benefits.
          </p>
        </div>

        {/* Who Can Apply */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Who Can Apply</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eligiblePersons.map((person, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
                <CardHeader className="text-center pb-3">
                  <div className="mx-auto mb-3 p-3 bg-blue-500/20 rounded-full w-fit">
                    <span className="text-blue-400">{person.icon}</span>
                  </div>
                  <CardTitle className="text-lg text-white">{person.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-center">
                    {person.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Accepted Documents */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Accepted Documents</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {acceptedDocuments.map((doc, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-500/20 rounded-lg">
                        <span className="text-green-400">{doc.icon}</span>
                      </div>
                      <div>
                        <CardTitle className="text-lg text-white">{doc.title}</CardTitle>
                        <Badge variant="outline" className="mt-1 text-xs">
                          {doc.badge}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    {doc.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Verification Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Verification Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {verificationSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="bg-gray-800/50 border-gray-700 h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-3 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg text-white">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400 text-center">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
                {index < verificationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Security & Privacy */}
        <Card className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-gray-700">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-3 bg-green-500/20 rounded-full w-fit">
              <Shield className="h-8 w-8 text-green-400" />
            </div>
            <CardTitle className="text-2xl text-white">Security & Privacy</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <CheckCircle className="h-6 w-6 text-green-400 mx-auto mb-2" />
                <h4 className="font-semibold text-white mb-2">Encrypted Storage</h4>
                <p className="text-gray-400 text-sm">All documents are encrypted and stored securely</p>
              </div>
              <div>
                <Clock className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <h4 className="font-semibold text-white mb-2">Quick Processing</h4>
                <p className="text-gray-400 text-sm">Most verifications completed within 24 hours</p>
              </div>
              <div>
                <Shield className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <h4 className="font-semibold text-white mb-2">HIPAA Compliant</h4>
                <p className="text-gray-400 text-sm">Meets all federal privacy requirements</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
