"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Medal, Upload, CheckCircle, AlertCircle } from "lucide-react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  
  branch: string
  status: string
  yearsOfService: string
  skills: string
  
  verificationFile: File | null
  comments: string
  terms: boolean
}

interface FormErrors {
  [key: string]: string
}

export default function VeteranProgramApplicationForm() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    branch: '',
    status: '',
    yearsOfService: '',
    skills: '',
    verificationFile: null,
    comments: '',
    terms: false
  })

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    const cleanPhone = phone.replace(/[^\d+]/g, '')
    return cleanPhone.length >= 10 && phoneRegex.test(cleanPhone)
  }

  const validateFirstName = (firstName: string): boolean => {
    const firstNameRegex = /^[a-zA-Z]+$/
    return firstNameRegex.test(firstName)
  }

  const validateStep1 = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    } else if (!validateFirstName(formData.firstName)) {
      newErrors.firstName = 'First name is required'
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'Please enter a valid first name'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.branch) {
      newErrors.branch = 'Please select your branch of service'
    }

    if (!formData.status) {
      newErrors.status = 'Please select your current status'
    }

    if (!formData.yearsOfService) {
      newErrors.yearsOfService = 'Years of service is required'
    } else {
      const years = parseInt(formData.yearsOfService)
      if (isNaN(years) || years < 0 || years > 40) {
        newErrors.yearsOfService = 'Please enter a valid number of years (0-40)'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep3 = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.verificationFile) {
      newErrors.verificationFile = 'Please upload a verification document'
    } else {
      if (formData.verificationFile.size > 10 * 1024 * 1024) {
        newErrors.verificationFile = 'File size must be less than 10MB'
      }
      
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png']
      if (!allowedTypes.includes(formData.verificationFile.type)) {
        newErrors.verificationFile = 'Please upload a PDF, JPG, or PNG file'
      }
    }

    if (!formData.terms) {
      newErrors.terms = 'You must agree to the terms and conditions'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string | boolean | File | null) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    handleInputChange('verificationFile', file)
  }

  const handleNext = (currentStep: number) => {
    let isValid = false
    
    switch (currentStep) {
      case 1:
        isValid = validateStep1()
        break
      case 2:
        isValid = validateStep2()
        break
      default:
        isValid = true
    }

    if (isValid) {
      setStep(currentStep + 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateStep3()) {
      return
    }

    setIsSubmitting(true)

    try {
      const submitData = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        if (value instanceof File) {
          submitData.append(key, value)
        } else {
          submitData.append(key, String(value))
        }
      })

      await new Promise((resolve) => setTimeout(resolve, 1500))

      setIsSubmitting(false)
      setIsSubmitted(true)
    } catch (error) {
      setIsSubmitting(false)
      setErrors({ submit: 'An error occurred while submitting your application. Please try again.' })
    }
  }

  const ErrorMessage = ({ error }: { error: string }) => (
    <div className="flex items-center mt-1 text-red-600 dark:text-red-400 text-sm">
      <AlertCircle className="h-4 w-4 mr-1" />
      {error}
    </div>
  )

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
              {/* Progress Indicator */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex space-x-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-blue-600 dark:bg-blue-600 dark:text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>
                    1
                  </div>
                  <div className={`w-16 h-1 mt-3.5 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-blue-600 dark:bg-blue-600 dark:text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>
                    2
                  </div>
                  <div className={`w-16 h-1 mt-3.5 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-blue-600 dark:bg-blue-600 dark:text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>
                    3
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Personal Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input 
                          id="firstName" 
                          placeholder="John" 
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className={errors.firstName ? 'border-red-500 focus:border-red-500' : ''}
                        />
                        {errors.firstName && <ErrorMessage error={errors.firstName} />}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Doe" 
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className={errors.lastName ? 'border-red-500 focus:border-red-500' : ''}
                        />
                        {errors.lastName && <ErrorMessage error={errors.lastName} />}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john.doe@example.com" 
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={errors.email ? 'border-red-500 focus:border-red-500' : ''}
                      />
                      {errors.email && <ErrorMessage error={errors.email} />}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        placeholder="(555) 123-4567" 
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={errors.phone ? 'border-red-500 focus:border-red-500' : ''}
                      />
                      {errors.phone && <ErrorMessage error={errors.phone} />}
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        type="button" 
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                        onClick={() => handleNext(1)}
                      >
                        Continue to Military Service
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Military Service */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Military Service</h2>
                    
                    <div className="space-y-2">
                      <Label htmlFor="branch">Branch of Service *</Label>
                      <select 
                        id="branch" 
                        value={formData.branch}
                        onChange={(e) => handleInputChange('branch', e.target.value)}
                        className={`w-full rounded-md border px-3 py-2 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 ${errors.branch ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}`}
                      >
                        <option value="">Select Branch</option>
                        <option value="army">Army</option>
                        <option value="navy">Navy</option>
                        <option value="air-force">Air Force</option>
                        <option value="marines">Marines</option>
                        <option value="coastguard">Coast Guard</option>
                        <option value="space-force">Space Force</option>
                      </select>
                      {errors.branch && <ErrorMessage error={errors.branch} />}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="status">Current Status *</Label>
                      <select 
                        id="status" 
                        value={formData.status}
                        onChange={(e) => handleInputChange('status', e.target.value)}
                        className={`w-full rounded-md border px-3 py-2 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 ${errors.status ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}`}
                      >
                        <option value="">Select Status</option>
                        <option value="veteran">Veteran</option>
                        <option value="active">Active Duty</option>
                        <option value="reserve">Reserve</option>
                        <option value="guard">National Guard</option>
                        <option value="spouse">Military Spouse</option>
                      </select>
                      {errors.status && <ErrorMessage error={errors.status} />}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="yearsOfService">Years of Service *</Label>
                      <Input 
                        id="yearsOfService" 
                        type="number" 
                        min="0" 
                        max="40" 
                        placeholder="5" 
                        value={formData.yearsOfService}
                        onChange={(e) => handleInputChange('yearsOfService', e.target.value)}
                        className={errors.yearsOfService ? 'border-red-500 focus:border-red-500' : ''}
                      />
                      {errors.yearsOfService && <ErrorMessage error={errors.yearsOfService} />}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="skills">Military Skills Relevant to Technology</Label>
                      <Textarea 
                        id="skills" 
                        placeholder="Please describe any military skills or experiences that you believe are relevant to technology or entrepreneurship."
                        rows={4}
                        value={formData.skills}
                        onChange={(e) => handleInputChange('skills', e.target.value)}
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
                        onClick={() => handleNext(2)}
                      >
                        Continue to Verification
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Verification */}
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
                      <Label htmlFor="verification">Upload Verification Document *</Label>
                      <div className={`border-2 border-dashed rounded-lg p-6 text-center ${errors.verificationFile ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}`}>
                        <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {formData.verificationFile ? formData.verificationFile.name : 'Drag and drop your file here, or click to browse'}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          Supported formats: PDF, JPG, PNG (Max 10MB)
                        </p>
                        <input 
                          id="verification" 
                          type="file" 
                          className="hidden" 
                          accept=".pdf,.jpg,.jpeg,.png" 
                          onChange={handleFileChange}
                        />
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="sm" 
                          className="mt-4 border-gray-300 dark:border-gray-700"
                          onClick={() => document.getElementById('verification')?.click()}
                        >
                          {formData.verificationFile ? 'Change File' : 'Select File'}
                        </Button>
                      </div>
                      {errors.verificationFile && <ErrorMessage error={errors.verificationFile} />}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="comments">Additional Comments</Label>
                      <Textarea 
                        id="comments" 
                        placeholder="Is there anything else you'd like us to know about your application?"
                        rows={3}
                        value={formData.comments}
                        onChange={(e) => handleInputChange('comments', e.target.value)}
                      />
                    </div>
                    
                    <div className="flex items-start space-x-2 pt-2">
                      <input 
                        type="checkbox" 
                        id="terms" 
                        className={`mt-1 rounded ${errors.terms ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}`}
                        checked={formData.terms}
                        onChange={(e) => handleInputChange('terms', e.target.checked)}
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I certify that all information provided is accurate and I agree to the{" "}
                        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                          Privacy Policy
                        </a>
                      </Label>
                    </div>
                    {errors.terms && <ErrorMessage error={errors.terms} />}
                    
                    {errors.submit && (
                      <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                        <ErrorMessage error={errors.submit} />
                      </div>
                    )}
                    
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
