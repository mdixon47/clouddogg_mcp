"use client"
import { faqs } from "@/data/veteran-program-faqs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function VeteranProgramFAQ() {
  return (
    <section className="py-20 px-4 md:px-8">
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
