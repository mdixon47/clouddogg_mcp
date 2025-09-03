"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Upload, FileText, AlertCircle, CheckCircle, Shield } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function VeteranVerificationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    documentType: "",
    serviceType: "",
    branchOfService: "",
    serviceStartDate: "",
    serviceEndDate: "",
    additionalInfo: "",
    agreeToTerms: false,
    agreeToPrivacy: false
  })

  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Validate file type and size
      const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf']
      const maxSize = 10 * 1024 * 1024 // 10MB

      if (!allowedTypes.includes(file.type)) {
        alert('Please upload a JPEG, PNG, or PDF file.')
        return
      }

      if (file.size > maxSize) {
        alert('File size must be less than 10MB.')
        return
      }

      setUploadedFile(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
    } catch (_error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.documentType &&
      formData.serviceType &&
      formData.branchOfService &&
      uploadedFile &&
      formData.agreeToTerms &&
      formData.agreeToPrivacy
    )
  }

  if (submitStatus === 'success') {
    return (
      <section id="verification-form" className="py-16 px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border-green-700">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-green-500/20 rounded-full w-fit">
                <CheckCircle className="h-12 w-12 text-green-400" />
              </div>
              <CardTitle className="text-2xl text-white">Verification Submitted Successfully!</CardTitle>
              <CardDescription className="text-green-300">
                Thank you for submitting your veteran verification request.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-300">
                We've received your documents and will review them within 24 hours. 
                You'll receive an email confirmation once your veteran status is verified.
              </p>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">What happens next?</h4>
                <ul className="text-sm text-gray-400 space-y-1 text-left">
                  <li>• Email confirmation sent to {formData.email}</li>
                  <li>• Document review (typically within 24 hours)</li>
                  <li>• Verification status email notification</li>
                  <li>• Immediate access to veteran benefits upon approval</li>
                </ul>
              </div>
              <Button 
                onClick={() => window.location.href = '/veteran-program'}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Return to Veteran Program
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="verification-form" className="py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Veteran Verification Form
          </h2>
          <p className="text-xl text-gray-400">
            Complete the form below to verify your veteran status and unlock exclusive benefits.
          </p>
        </div>

        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-blue-400" />
              <div>
                <CardTitle className="text-xl text-white">Secure Verification</CardTitle>
                <CardDescription>All information is encrypted and kept confidential</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-300">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="bg-gray-900/50 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-300">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="bg-gray-900/50 border-gray-600 text-white"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-gray-300">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-gray-900/50 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-300">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-gray-900/50 border-gray-600 text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Military Service Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
                  Military Service Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="serviceType" className="text-gray-300">Service Type *</Label>
                    <Select onValueChange={(value) => handleInputChange('serviceType', value)}>
                      <SelectTrigger className="bg-gray-900/50 border-gray-600 text-white">
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="veteran">Veteran</SelectItem>
                        <SelectItem value="active-duty">Active Duty</SelectItem>
                        <SelectItem value="reserve">Reserve</SelectItem>
                        <SelectItem value="national-guard">National Guard</SelectItem>
                        <SelectItem value="military-spouse">Military Spouse</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="branchOfService" className="text-gray-300">Branch of Service *</Label>
                    <Select onValueChange={(value) => handleInputChange('branchOfService', value)}>
                      <SelectTrigger className="bg-gray-900/50 border-gray-600 text-white">
                        <SelectValue placeholder="Select branch" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="army">Army</SelectItem>
                        <SelectItem value="navy">Navy</SelectItem>
                        <SelectItem value="air-force">Air Force</SelectItem>
                        <SelectItem value="marines">Marines</SelectItem>
                        <SelectItem value="coast-guard">Coast Guard</SelectItem>
                        <SelectItem value="space-force">Space Force</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="serviceStartDate" className="text-gray-300">Service Start Date</Label>
                    <Input
                      id="serviceStartDate"
                      type="date"
                      value={formData.serviceStartDate}
                      onChange={(e) => handleInputChange('serviceStartDate', e.target.value)}
                      className="bg-gray-900/50 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="serviceEndDate" className="text-gray-300">Service End Date</Label>
                    <Input
                      id="serviceEndDate"
                      type="date"
                      value={formData.serviceEndDate}
                      onChange={(e) => handleInputChange('serviceEndDate', e.target.value)}
                      className="bg-gray-900/50 border-gray-600 text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Document Upload */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
                  Document Verification
                </h3>
                <div>
                  <Label htmlFor="documentType" className="text-gray-300">Document Type *</Label>
                  <Select onValueChange={(value) => handleInputChange('documentType', value)}>
                    <SelectTrigger className="bg-gray-900/50 border-gray-600 text-white">
                      <SelectValue placeholder="Select document type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dd214">DD-214 (Discharge Papers)</SelectItem>
                      <SelectItem value="va-id">VA ID Card</SelectItem>
                      <SelectItem value="military-id">Military ID Card</SelectItem>
                      <SelectItem value="ngb22">NGB-22 (Guard/Reserve)</SelectItem>
                      <SelectItem value="other">Other Military Document</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="document-upload" className="text-gray-300">Upload Document *</Label>
                  <div className="mt-2">
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="document-upload"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-900/50 hover:bg-gray-800/50 transition-colors"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          {uploadedFile ? (
                            <>
                              <FileText className="w-8 h-8 mb-2 text-green-400" />
                              <p className="text-sm text-green-400 font-medium">{uploadedFile.name}</p>
                              <p className="text-xs text-gray-400">Click to change file</p>
                            </>
                          ) : (
                            <>
                              <Upload className="w-8 h-8 mb-2 text-gray-400" />
                              <p className="mb-2 text-sm text-gray-400">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                              </p>
                              <p className="text-xs text-gray-400">PNG, JPG, or PDF (MAX. 10MB)</p>
                            </>
                          )}
                        </div>
                        <input
                          id="document-upload"
                          type="file"
                          className="hidden"
                          accept=".jpg,.jpeg,.png,.pdf"
                          onChange={handleFileUpload}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
                  Additional Information
                </h3>
                <div>
                  <Label htmlFor="additionalInfo" className="text-gray-300">
                    Additional Comments (Optional)
                  </Label>
                  <Textarea
                    id="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                    className="bg-gray-900/50 border-gray-600 text-white"
                    placeholder="Any additional information that might help with verification..."
                    rows={3}
                  />
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
                  />
                  <Label htmlFor="terms" className="text-sm text-gray-300 leading-relaxed">
                    I agree to the <a href="/terms" className="text-blue-400 hover:underline">Terms of Service</a> and 
                    confirm that the information provided is accurate and truthful.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="privacy"
                    checked={formData.agreeToPrivacy}
                    onCheckedChange={(checked) => handleInputChange('agreeToPrivacy', checked as boolean)}
                  />
                  <Label htmlFor="privacy" className="text-sm text-gray-300 leading-relaxed">
                    I consent to the processing of my personal data as described in the{' '}
                    <a href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</a>.
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                {submitStatus === 'error' && (
                  <Alert className="mb-4 border-red-700 bg-red-900/20">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="text-red-300">
                      There was an error submitting your verification. Please try again.
                    </AlertDescription>
                  </Alert>
                )}
                
                <Button
                  type="submit"
                  disabled={!isFormValid() || isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting Verification...
                    </>
                  ) : (
                    'Submit Verification'
                  )}
                </Button>
                
                <p className="text-xs text-gray-400 text-center mt-3">
                  Your information is encrypted and secure. We'll review your submission within 24 hours.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
