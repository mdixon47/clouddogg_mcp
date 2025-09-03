"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Who is eligible for the veteran program?",
    answer:
      "The program is open to all U.S. military veterans, active duty service members, reservists, and their spouses. You'll need to verify your status through our simple verification process.",
  },
  {
    question: "What benefits do veterans receive?",
    answer:
      "Veterans receive a 50% discount on all courses and learning paths, access to veteran-specific courses, mentorship from successful veteran entrepreneurs, priority support, and access to our veteran business network.",
  },
  {
    question: "How do I verify my veteran status?",
    answer:
      "You can verify your status by uploading a copy of your DD-214, VA ID card, military ID, or other proof of service through our secure verification portal. We partner with ID.me for seamless verification.",
  },
  {
    question: "Are there courses specifically designed for veterans?",
    answer:
      "Yes, we offer several courses specifically designed for veterans, including Military to Tech Transition, Veteran Business Automation, Security & Compliance for Veterans, and Veteran Funding & Grants.",
  },
  {
    question: "Can I use my GI Bill benefits for these courses?",
    answer:
      "While we don't directly accept GI Bill benefits, our 50% veteran discount makes our courses affordable, and many veterans find they can use their education stipend to cover the costs.",
  },
  {
    question: "Is there a veteran community I can join?",
    answer:
      "Yes, all verified veterans gain access to our exclusive Veteran Entrepreneur Network, which includes a private Slack channel, monthly virtual meetups, and in-person events in select cities.",
  },
]

export default function VeteranProgramFAQ() {
  return (
    <section className="pt-4 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-cyan-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-400">
            Common questions about our veteran program and benefits.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 dark:text-gray-300">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="h-1"></div>
      </div>
    </section>
  )
}
