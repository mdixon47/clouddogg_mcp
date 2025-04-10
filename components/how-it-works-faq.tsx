"use client"
import { useInView } from "react-intersection-observer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is the Model Context Protocol (MCP)?",
    answer:
      "The Model Context Protocol is a framework developed by Zapier that enables AI models to interact with external systems and data sources. It provides a standardized way for AI to understand the context of your business operations and execute actions across different applications.",
  },
  {
    question: "Do I need technical expertise to use CloudDogg?",
    answer:
      "No, CloudDogg is designed to be user-friendly for non-technical users. You can set up automations using natural language commands without coding knowledge. However, for advanced customizations, we do offer developer tools and APIs.",
  },
  {
    question: "How secure is CloudDogg for handling sensitive business data?",
    answer:
      "As a veteran-owned company, security is our top priority. CloudDogg implements military-grade encryption, role-based access controls, and comprehensive audit logging. We're compliant with major security standards including SOC 2, HIPAA, and GDPR for businesses operating in regulated industries.",
  },
  {
    question: "Can CloudDogg integrate with my existing tools and software?",
    answer:
      "Yes, through Zapier, CloudDogg can connect to thousands of applications including CRMs, marketing platforms, project management tools, and more. If you use custom or internal tools, our API allows for direct integration with your systems.",
  },
  {
    question: "How long does it take to set up CloudDogg?",
    answer:
      "Basic setup can be completed in minutes. Most customers have their first automation running within an hour. More complex integrations and custom workflows may take longer depending on your specific requirements.",
  },
  {
    question: "What kind of support does CloudDogg offer?",
    answer:
      "We provide comprehensive support including documentation, video tutorials, and a knowledge base. All customers have access to email support, while Business and Enterprise plans include dedicated account managers and priority support with faster response times.",
  },
  {
    question: "Can I customize the AI's behavior for my specific business needs?",
    answer:
      "Absolutely. CloudDogg allows you to train the AI with your business terminology, processes, and preferences. You can create custom actions, define specific workflows, and set up guardrails to ensure the AI operates according to your business rules.",
  },
  {
    question: "Is there a limit to how many automations I can create?",
    answer:
      "Our pricing plans are based on the volume of automations and the complexity of your workflows. The Basic plan includes up to 100 automations per month, while Business and Enterprise plans offer higher or unlimited volumes. Custom plans are available for high-volume needs.",
  },
]

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
