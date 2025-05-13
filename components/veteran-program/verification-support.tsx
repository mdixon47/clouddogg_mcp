"use client"

import { useState } from "react"
import { MessageSquare, Mail, Phone, HelpCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Textarea } from "@/components/ui/textarea"

export default function VerificationSupport() {
  const [message, setMessage] = useState("")

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <Card className="border border-gray-200 dark:border-gray-800 h-full">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How long does the verification process take?</AccordionTrigger>
                <AccordionContent>
                  The verification process typically takes 5-7 business days from the time all required documents are
                  submitted. Complex cases may take longer. You can always check your current status on this page.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What documents are required for verification?</AccordionTrigger>
                <AccordionContent>
                  We require at least one of the following: DD214, Military ID Card, VA Letter confirming veteran
                  status, NGB Form 22, or Certificate of Eligibility for VA benefits. All documents must be legible and
                  complete.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Why was my document rejected?</AccordionTrigger>
                <AccordionContent>
                  Documents may be rejected if they are illegible, incomplete, expired, or don't clearly show your
                  veteran status. You'll receive an email with specific reasons and instructions for resubmission.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I update my information after submitting?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can update your contact information at any time. For changes to service details or to replace
                  documents, please contact our support team through the form on this page.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What benefits do I get once verified?</AccordionTrigger>
                <AccordionContent>
                  Verified veterans receive exclusive access to specialized courses, discounted pricing on all CloudDogg
                  services, priority support, networking opportunities with other veteran entrepreneurs, and access to
                  veteran-specific resources and funding opportunities.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Do I need to reverify my status in the future?</AccordionTrigger>
                <AccordionContent>
                  No, once your veteran status is verified, it remains valid for your CloudDogg account. You won't need
                  to go through the verification process again unless there are significant changes to your account
                  information.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card className="border border-gray-200 dark:border-gray-800 mb-6">
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Textarea
                placeholder="Describe your issue or question..."
                className="min-h-[120px]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button className="w-full">
                <MessageSquare className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Other Ways to Reach Us</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-500 mr-3" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">veterans@cloudogg.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-500 mr-3" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    1-800-CLOUD-VET (Mon-Fri, 9am-5pm ET)
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 dark:border-gray-800">
          <CardContent className="pt-6">
            <div className="flex items-start">
              <HelpCircle className="h-10 w-10 text-blue-500 mr-4" />
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Need Immediate Help?</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Our veteran support specialists are available for priority assistance.
                </p>
                <Button variant="outline" className="w-full">
                  Schedule a Call
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
