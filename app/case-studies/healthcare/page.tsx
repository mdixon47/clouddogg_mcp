import CaseStudyLayout from "@/components/case-study/case-study-layout"
import ChallengeSection from "@/components/case-study/challenge-section"
import SolutionSection from "@/components/case-study/solution-section"
import ResultsSection from "@/components/case-study/results-section"
import ImplementationSection from "@/components/case-study/implementation-section"
import { MessageSquare, Calendar, Shield, FileText, Users } from "lucide-react"

export default function HealthcareCaseStudy() {
  const challenges = [
    {
      title: "Patient Communication Bottlenecks",
      description:
        "Staff were spending 20+ hours per week on routine patient communications, causing delays and reducing time for direct patient care.",
    },
    {
      title: "Appointment Management",
      description:
        "High no-show rates (23%) and inefficient scheduling were creating significant revenue loss and underutilized provider time.",
    },
    {
      title: "Insurance Verification",
      description:
        "Manual insurance verification was time-consuming and error-prone, leading to claim rejections and delayed reimbursements.",
    },
    {
      title: "HIPAA Compliance Concerns",
      description:
        "Ensuring all communications remained HIPAA-compliant while improving efficiency presented a significant challenge.",
    },
  ]

  const solutions = [
    {
      title: "HIPAA-Compliant Communication Automation",
      description:
        "Implemented secure, compliant automated messaging for appointment reminders, follow-ups, and care instructions.",
      icon: <MessageSquare className="h-6 w-6 text-green-300" />,
    },
    {
      title: "Intelligent Scheduling System",
      description:
        "Deployed AI-powered scheduling that optimizes provider calendars and reduces gaps while sending smart reminders to patients.",
      icon: <Calendar className="h-6 w-6 text-green-300" />,
    },
    {
      title: "Automated Insurance Verification",
      description:
        "Created workflows that automatically verify insurance eligibility before appointments and alert staff to potential issues.",
      icon: <Shield className="h-6 w-6 text-green-300" />,
    },
    {
      title: "Secure Document Management",
      description:
        "Implemented HIPAA-compliant document processing that streamlines intake forms, referrals, and medical records.",
      icon: <FileText className="h-6 w-6 text-green-300" />,
    },
    {
      title: "Patient Engagement Automation",
      description:
        "Deployed personalized health education and follow-up sequences based on patient conditions and treatment plans.",
      icon: <Users className="h-6 w-6 text-green-300" />,
    },
  ]

  const metrics = [
    {
      value: "72%",
      label: "Reduction in No-Shows",
      color: "from-green-600 to-teal-600",
    },
    {
      value: "23hrs",
      label: "Weekly Admin Time Saved",
      color: "from-blue-600 to-cyan-600",
    },
    {
      value: "31%",
      label: "Increase in Patient Capacity",
      color: "from-purple-600 to-pink-600",
    },
    {
      value: "98%",
      label: "HIPAA Compliance Rate",
      color: "from-amber-600 to-orange-600",
    },
  ]

  const testimonial = {
    quote:
      "CloudDogg has revolutionized our practice operations. The HIPAA-compliant automation has freed our staff from routine tasks while actually improving patient communication. Our no-show rate has plummeted, and we're able to see more patients without feeling rushed or compromising care quality.",
    author: "Dr. Alicia Patel",
    role: "Medical Director",
    company: "Cornerstone Health Partners",
  }

  const implementationSteps = [
    {
      number: 1,
      title: "HIPAA Compliance Assessment",
      description:
        "CloudDogg conducted a thorough compliance review and configured all automations to meet strict healthcare security requirements.",
    },
    {
      number: 2,
      title: "EHR & Practice Management Integration",
      description:
        "Securely connected CloudDogg to the clinic's EHR and practice management systems to enable seamless data flow.",
    },
    {
      number: 3,
      title: "Communication Workflow Setup",
      description:
        "Configured automated patient communication workflows with appropriate consent management and opt-out mechanisms.",
    },
    {
      number: 4,
      title: "Staff Training & Process Transition",
      description:
        "Provided comprehensive training to clinical and administrative staff on using the new automation tools.",
    },
    {
      number: 5,
      title: "Continuous Monitoring & Optimization",
      description:
        "Implemented ongoing monitoring of automation performance with regular adjustments to improve outcomes.",
    },
  ]

  return (
    <CaseStudyLayout
      industry="Healthcare"
      title="How Cornerstone Health Partners Reduced No-Shows by 72%"
      subtitle="Transforming patient engagement and practice efficiency while maintaining HIPAA compliance"
      heroImage="/placeholder.svg?height=600&width=1200"
      prevCase={{
        name: "Real Estate",
        path: "/case-studies/real-estate",
      }}
      nextCase={{
        name: "Local Business",
        path: "/case-studies/local-business",
      }}
    >
      <div className="mb-16 text-lg text-gray-300">
        <p className="mb-4">
          Cornerstone Health Partners, a multi-provider primary care practice serving over 5,000 patients, was
          struggling with high no-show rates, administrative bottlenecks, and challenges in maintaining consistent
          patient communication while ensuring HIPAA compliance.
        </p>
        <p>
          By implementing CloudDogg's HIPAA-compliant AI automation platform, Cornerstone was able to transform their
          practice operations, dramatically improving patient engagement while freeing staff to focus on delivering
          exceptional care.
        </p>
      </div>

      <ChallengeSection challenges={challenges} />
      <SolutionSection solutions={solutions} />
      <ImplementationSection steps={implementationSteps} />
      <ResultsSection metrics={metrics} testimonial={testimonial} />
    </CaseStudyLayout>
  )
}
