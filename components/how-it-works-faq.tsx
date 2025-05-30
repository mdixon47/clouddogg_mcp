"use client"
import { useInView } from "react-intersection-observer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqs } from "@/data/how-it-works-faqs"

export default function HowItWorksFAQ() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get answers to common questions about CloudDogg and AI automation.
          </p>
        </div>

        <div
          ref={ref}
          className={`transition-all duration-1000 transform ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-white hover:no-underline">
                  <span className="text-lg font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
