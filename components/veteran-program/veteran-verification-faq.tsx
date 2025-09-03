"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HelpCircle, Mail, Phone, MessageCircle } from "lucide-react"

const verificationFAQs = [
  {
    question: "How long does the verification process take?",
    answer: "Most verifications are completed within 24 hours during business days. Complex cases may take up to 72 hours. You'll receive an email notification once your status is verified."
  },
  {
    question: "What if I don't have my DD-214?",
    answer: "You can request a copy of your DD-214 from the National Personnel Records Center (NPRC) or use alternative documents like your VA ID card, military ID, or NGB-22 for Guard/Reserve members."
  },
  {
    question: "Can military spouses apply for verification?",
    answer: "Yes! Military spouses of active duty, veteran, or deceased service members are eligible for our veteran program benefits. You'll need to provide proof of marriage and your spouse's military service."
  },
  {
    question: "Is my personal information secure?",
    answer: "Absolutely. We use 256-bit SSL encryption, are HIPAA compliant, and partner with ID.me for secure verification. Your documents are encrypted and stored securely, and we never share your information without consent."
  },
  {
    question: "What happens if my verification is denied?",
    answer: "If your initial submission is denied, we'll email you with specific reasons and instructions on how to resubmit with additional documentation. You can appeal the decision or provide alternative documents."
  },
  {
    question: "Can I use my CAC card for verification?",
    answer: "Yes, your Common Access Card (CAC) is an acceptable form of military ID for verification. Make sure to upload a clear image of both the front and back of the card."
  },
  {
    question: "Do I need to verify again if I'm already verified elsewhere?",
    answer: "While we partner with ID.me and other verification services, you'll need to complete our specific verification process to access CloudDogg MCP veteran benefits."
  },
  {
    question: "What benefits do I get after verification?",
    answer: "Once verified, you'll receive a 50% discount on all courses, access to veteran-specific content, priority support, mentorship opportunities, and access to our veteran business network."
  },
  {
    question: "Can I verify if I have a less-than-honorable discharge?",
    answer: "Our program is primarily for those with honorable discharges, but we review each case individually. Please contact our support team to discuss your specific situation."
  },
  {
    question: "What if I'm currently deployed or overseas?",
    answer: "You can still verify from anywhere in the world. Our online process works globally, and we understand the unique challenges of deployed service members. Contact us if you need special accommodations."
  }
]

export default function VeteranVerificationFAQ() {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/50 text-blue-300 mb-6">
            <HelpCircle className="mr-2 h-4 w-4" />
            <span className="text-sm font-medium">Verification Help</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Verification FAQ
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Common questions about the veteran verification process, requirements, and benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl text-white">Frequently Asked Questions</CardTitle>
                <CardDescription>
                  Find answers to common questions about veteran verification
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-2">
                  {verificationFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-gray-700">
                      <AccordionTrigger className="text-left text-white hover:text-blue-400 py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Support Sidebar */}
          <div className="space-y-6">
            {/* Quick Help */}
            <Card className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-blue-700">
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-blue-400" />
                  Need Help?
                </CardTitle>
                <CardDescription>
                  Our veteran support team is here to help
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-gray-600 text-gray-300 hover:bg-gray-800"
                    onClick={() => window.location.href = 'mailto:veterans@clouddogg.com'}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Email Support
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-gray-600 text-gray-300 hover:bg-gray-800"
                    onClick={() => window.location.href = 'tel:1-800-VETERAN'}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Support
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Live Chat
                  </Button>
                </div>
                <div className="text-xs text-gray-400 pt-2 border-t border-gray-700">
                  <p><strong>Support Hours:</strong></p>
                  <p>Mon-Fri: 8AM-8PM EST</p>
                  <p>Sat-Sun: 10AM-6PM EST</p>
                </div>
              </CardContent>
            </Card>

            {/* Document Help */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg text-white">Document Help</CardTitle>
                <CardDescription>
                  Need help finding your military documents?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-gray-300">
                  <h4 className="font-semibold text-white mb-2">Get Your DD-214:</h4>
                  <p className="mb-2">Request from National Personnel Records Center (NPRC)</p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-blue-400 hover:text-blue-300"
                    onClick={() => window.open('https://www.archives.gov/veterans/military-service-records', '_blank')}
                  >
                    Visit NPRC Website →
                  </Button>
                </div>
                <div className="text-sm text-gray-300 pt-3 border-t border-gray-700">
                  <h4 className="font-semibold text-white mb-2">VA ID Card:</h4>
                  <p className="mb-2">Apply for a Veteran ID Card online</p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-blue-400 hover:text-blue-300"
                    onClick={() => window.open('https://www.va.gov/records/get-veteran-id-cards/', '_blank')}
                  >
                    Apply for VA ID →
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Status Check */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg text-white">Check Status</CardTitle>
                <CardDescription>
                  Already submitted? Check your verification status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                  onClick={() => window.location.href = '/veteran-program/verification-status'}
                >
                  Check Verification Status
                </Button>
                <p className="text-xs text-gray-400 text-center mt-2">
                  Use your email address to check status
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-gray-700 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of veterans who have already unlocked exclusive benefits and training opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                  onClick={() => {
                    document.getElementById('verification-form')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    })
                  }}
                >
                  Start Verification
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  onClick={() => window.location.href = '/veteran-program'}
                >
                  Learn About Benefits
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
