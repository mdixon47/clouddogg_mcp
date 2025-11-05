"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Medal, Upload, CheckCircle } from "lucide-react"

export default function VeteranProgramApplicationForm() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-700 dark:text-blue-300 mb-4">
            <Medal className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Veteran Program Application</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-cyan-700 dark:from-white dark:via-blue-100 dark:to-cyan-200 bg-clip-text text-transparent">
            Join Our Veteran Community
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Complete this application to join our exclusive program for veteran entrepreneurs.
          </p>
        </div>

        {isSubmitted ? (
          <Card className="bg-white dark:bg-gray-800/30 backdrop-blur-sm border-gray-200 dark:border-gray-700 overflow-hidden">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Application Submitted!</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Thank you for applying to our veteran program. We'll review your application and get back to you within 2 business days.
              </p>
              <Button
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                asChild
              >
                <a href="/learn">Explore Courses While You Wait</a>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-white dark:bg-gray-800/30 backdrop-blur-sm border-gray-200 dark:border-gray-700 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex justify-between items-center mb-8">
                <div className="flex space-x-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>
                    1
                  </div>
                  <div className={`w-16 h-1 mt-3.5 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>
                    2
                  </div>
                  <div className={`w-16 h-1 mt-3.5 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>
                    3
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Personal Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="(555) 123-4567" />
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        type="button" 
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                        onClick={() => setStep(2)}
                      >
                        Continue to Military Service
                      </Button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Military Service</h2>
                    
                    <div className="space-y-2">
                      <Label htmlFor="branch">Branch of Service</Label>
                      <select 
                        id="branch" 
                        className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-gray-100"
                        required
                      >
                        <option value="">Select Branch</option>
                        <option value="army">Army</option>
                        <option value="navy">Navy</option>
                        <option value="air-force">Air Force</option>
                        <option value="marines">Marines</option>
                        <option value="coastguard">Coast Guard</option>
                        <option value="space-force">Space Force</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="status">Current Status</Label>
                      <select 
                        id="status" 
                        className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-gray-100"
                        required
                      >
                        <option value="">Select Status</option>
                        <option value="veteran">Veteran</option>
                        <option value="active">Active Duty</option>
                        <option value="reserve">Reserve</option>
                        <option value="guard">National Guard</option>
                        <option value="spouse">Military Spouse</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="yearsOfService">Years of Service</Label>
                      <Input id="yearsOfService" type="number" min="0" max="40" placeholder="5" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="skills">Military Skills Relevant to Technology</Label>
                      <Textarea 
                        id="skills" 
                        placeholder="Please describe any military skills or experiences that you believe are relevant to technology or entrepreneurship."
                        rows={4}
                      />
                    </div>
                    
                    <div className="flex justify-between pt-4">
                      <Button 
                        type="button" 
                        variant="outline"
                        className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                        onClick={() => setStep(1)}
                      >
                        Back
                      </Button>
                      <Button 
                        type="button" 
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                        onClick={() => setStep(3)}
                      >
                        Continue to Verification
                      </Button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Verification</h2>
                    
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <p className="text-blue-800 dark:text-blue-300 text-sm">
                        Please upload a document that verifies your military service (DD-214, VA ID card, military ID, etc.). 
                        All documents are securely stored and handled in compliance with privacy regulations.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="verification">Upload Verification Document</Label>
                      <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center">
                        <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          Drag and drop your file here, or click to browse
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          Supported formats: PDF, JPG, PNG (Max 10MB)
                        </p>
                        <input 
                          id="verification" 
                          type="file" 
                          className="hidden" 
                          accept=".pdf,.jpg,.jpeg,.png" 
                          required
                        />
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="sm" 
                          className="mt-4 border-gray-300 dark:border-gray-700"
                          onClick={() => document.getElementById('verification')?.click()}
                        >
                          Select File
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="comments">Additional Comments</Label>
                      <Textarea 
                        id="comments" 
                        placeholder="Is there anything else you'd like us to know about your application?"
                        rows={3}
                      />
                    </div>
                    
                    <div className="flex items-start space-x-2 pt-2">
                      <input 
                        type="checkbox" 
                        id="terms" 
                        className="mt-1 rounded border-gray-300 dark:border-gray-700" 
                        required
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I certify that all information provided is accurate and I agree to the{" "}
                        <a href="/terms" className="text-blue-600 dark:text-blue-400 hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">
                          Privacy Policy
                        </a>
                      </Label>
                    </div>
                    
                    <div className="flex justify-between pt-4">
                      <Button 
                        type="button" 
                        variant="outline"
                        className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                        onClick={() => setStep(2)}
                      >
                        Back
                      </Button>
                      <Button 
                        type="submit" 
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        )}
      </div>
  </section>
  )
}
