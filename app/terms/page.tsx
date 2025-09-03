import type { Metadata } from "next"
import { FileText } from "lucide-react"
import LegalLayout from "@/components/legal/legal-layout"
import { LegalSection, LegalSubsection, LegalHighlight, LegalList, LegalContact } from "@/components/legal/legal-section"

export const metadata: Metadata = {
  title: "Terms of Service - CloudDogg MCP",
  description: "Read CloudDogg MCP's Terms of Service to understand your rights and responsibilities when using our platform and services.",
  keywords: "terms of service, user agreement, terms and conditions, legal agreement, service terms"
}

const sections = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "description", title: "Service Description" },
  { id: "eligibility", title: "Eligibility & Registration" },
  { id: "user-accounts", title: "User Accounts" },
  { id: "acceptable-use", title: "Acceptable Use Policy" },
  { id: "content", title: "Content & Intellectual Property" },
  { id: "payments", title: "Payments & Billing" },
  { id: "privacy", title: "Privacy & Data Protection" },
  { id: "disclaimers", title: "Disclaimers & Warranties" },
  { id: "limitation", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "termination", title: "Termination" },
  { id: "dispute-resolution", title: "Dispute Resolution" },
  { id: "general", title: "General Provisions" }
]

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      title="Terms of Service"
      description="These terms govern your use of CloudDogg MCP services. Please read them carefully."
      lastUpdated="December 15, 2024"
      readTime="15 minutes"
      icon={<FileText className="h-4 w-4" />}
      sections={sections}
    >
      <LegalSection id="acceptance" title="Acceptance of Terms" importance="critical" type="warning">
        <LegalHighlight type="warning" title="Legal Agreement">
          By accessing or using CloudDogg MCP services, you agree to be bound by these Terms of Service 
          and all applicable laws and regulations. If you do not agree with any of these terms, 
          you are prohibited from using our services.
        </LegalHighlight>

        <p>
          These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") 
          and CloudDogg MCP ("Company," "we," "us," or "our") regarding your use of our website, applications, 
          and services (collectively, the "Services").
        </p>

        <LegalHighlight type="info" title="Updates to Terms">
          We reserve the right to modify these Terms at any time. We will notify you of significant changes 
          via email or through our Services. Your continued use after changes constitutes acceptance of the new Terms.
        </LegalHighlight>
      </LegalSection>

      <LegalSection id="description" title="Service Description" importance="high" type="info">
        <p>
          CloudDogg MCP provides a comprehensive learning and business development platform that includes:
        </p>

        <LegalList
          type="bullet"
          items={[
            {
              title: "Online Courses",
              description: "Access to educational content, tutorials, and training materials"
            },
            {
              title: "Business Tools",
              description: "Software tools and integrations for business automation and management"
            },
            {
              title: "Community Features",
              description: "Forums, networking opportunities, and peer-to-peer learning"
            },
            {
              title: "Mentorship Programs",
              description: "Access to mentors and coaching services"
            },
            {
              title: "Certification Programs",
              description: "Professional certifications and skill validation"
            },
            {
              title: "Veteran-Specific Services",
              description: "Specialized programs and benefits for military veterans"
            }
          ]}
        />

        <LegalHighlight type="tip" title="Service Evolution">
          Our Services are continuously evolving. We may add, modify, or discontinue features at any time. 
          We'll provide reasonable notice for significant changes that affect your use of the Services.
        </LegalHighlight>
      </LegalSection>

      <LegalSection id="eligibility" title="Eligibility & Registration" importance="high" type="info">
        <LegalSubsection id="age-requirements" title="Age Requirements">
          <LegalList
            type="bullet"
            items={[
              {
                title: "Minimum Age",
                description: "You must be at least 18 years old to use our Services",
                important: true
              },
              {
                title: "Parental Consent",
                description: "Users between 13-17 must have verifiable parental consent"
              },
              {
                title: "Children Under 13",
                description: "Our Services are not intended for children under 13"
              }
            ]}
          />
        </LegalSubsection>

        <LegalSubsection id="registration-requirements" title="Registration Requirements">
          <p>To access certain features, you must create an account by providing:</p>
          
          <LegalList
            type="checklist"
            items={[
              {
                title: "Accurate Information",
                description: "Provide true, accurate, and complete information"
              },
              {
                title: "Valid Email",
                description: "Maintain a valid email address for account communications"
              },
              {
                title: "Secure Password",
                description: "Create a strong password and keep it confidential"
              },
              {
                title: "Account Responsibility",
                description: "You are responsible for all activities under your account"
              }
            ]}
          />
        </LegalSubsection>

        <LegalHighlight type="warning" title="Account Security">
          You are responsible for maintaining the confidentiality of your account credentials. 
          Notify us immediately of any unauthorized use of your account.
        </LegalHighlight>
      </LegalSection>

      <LegalSection id="acceptable-use" title="Acceptable Use Policy" importance="critical" type="warning">
        <LegalHighlight type="warning" title="Prohibited Activities">
          The following activities are strictly prohibited when using our Services:
        </LegalHighlight>

        <LegalList
          type="bullet"
          items={[
            {
              title: "Illegal Activities",
              description: "Using our Services for any unlawful purpose or in violation of any applicable laws",
              important: true
            },
            {
              title: "Harassment & Abuse",
              description: "Harassing, threatening, or abusing other users or our staff",
              important: true
            },
            {
              title: "Spam & Unsolicited Content",
              description: "Sending spam, unsolicited messages, or promotional content"
            },
            {
              title: "Intellectual Property Violation",
              description: "Infringing on copyrights, trademarks, or other intellectual property rights"
            },
            {
              title: "System Interference",
              description: "Attempting to disrupt, hack, or gain unauthorized access to our systems"
            },
            {
              title: "False Information",
              description: "Providing false, misleading, or fraudulent information"
            },
            {
              title: "Commercial Misuse",
              description: "Using our Services for unauthorized commercial purposes"
            },
            {
              title: "Content Scraping",
              description: "Automated scraping or downloading of our content without permission"
            }
          ]}
        />

        <LegalHighlight type="info" title="Enforcement">
          We reserve the right to investigate violations and take appropriate action, including 
          account suspension or termination, without prior notice.
        </LegalHighlight>
      </LegalSection>

      <LegalSection id="content" title="Content & Intellectual Property" importance="high" type="info">
        <LegalSubsection id="our-content" title="Our Content">
          <p>
            All content provided through our Services, including but not limited to text, graphics, logos, 
            images, videos, software, and course materials, is owned by CloudDogg MCP or our licensors 
            and is protected by intellectual property laws.
          </p>

          <LegalHighlight type="info" title="Limited License">
            We grant you a limited, non-exclusive, non-transferable license to access and use our content 
            solely for your personal, non-commercial use in accordance with these Terms.
          </LegalHighlight>
        </LegalSubsection>

        <LegalSubsection id="user-content" title="User-Generated Content">
          <p>
            You may submit content to our Services, including comments, reviews, and course submissions. 
            By submitting content, you grant us a worldwide, royalty-free license to use, modify, 
            and distribute your content in connection with our Services.
          </p>

          <LegalList
            type="bullet"
            items={[
              {
                title: "Content Ownership",
                description: "You retain ownership of your original content"
              },
              {
                title: "Content Standards",
                description: "All content must comply with our community guidelines"
              },
              {
                title: "Removal Rights",
                description: "We may remove content that violates our policies"
              },
              {
                title: "Backup Responsibility",
                description: "You are responsible for backing up your important content"
              }
            ]}
          />
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="payments" title="Payments & Billing" importance="high" type="info">
        <LegalSubsection id="pricing" title="Pricing & Fees">
          <LegalList
            type="bullet"
            items={[
              {
                title: "Current Pricing",
                description: "Fees are as displayed on our website at the time of purchase"
              },
              {
                title: "Price Changes",
                description: "We may change prices with 30 days' notice to existing subscribers"
              },
              {
                title: "Taxes",
                description: "Prices may not include applicable taxes, which will be added at checkout"
              },
              {
                title: "Currency",
                description: "All prices are in USD unless otherwise specified"
              }
            ]}
          />
        </LegalSubsection>

        <LegalSubsection id="billing" title="Billing & Payment">
          <LegalHighlight type="info" title="Payment Processing">
            Payments are processed by secure third-party payment processors. We do not store your 
            complete payment information on our servers.
          </LegalHighlight>

          <LegalList
            type="bullet"
            items={[
              {
                title: "Automatic Renewal",
                description: "Subscriptions automatically renew unless cancelled before the renewal date"
              },
              {
                title: "Payment Methods",
                description: "We accept major credit cards, PayPal, and other approved payment methods"
              },
              {
                title: "Failed Payments",
                description: "Service may be suspended for failed payments until resolved"
              },
              {
                title: "Refund Policy",
                description: "Refunds are subject to our refund policy available on our website"
              }
            ]}
          />
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="disclaimers" title="Disclaimers & Warranties" importance="critical" type="warning">
        <LegalHighlight type="warning" title="Service Disclaimer">
          OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
          EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, 
          FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        </LegalHighlight>

        <LegalList
          type="bullet"
          items={[
            {
              title: "No Guarantee of Results",
              description: "We do not guarantee specific outcomes from using our Services"
            },
            {
              title: "Service Availability",
              description: "We do not guarantee uninterrupted or error-free service"
            },
            {
              title: "Content Accuracy",
              description: "We do not warrant the accuracy or completeness of content"
            },
            {
              title: "Third-Party Content",
              description: "We are not responsible for third-party content or services"
            }
          ]}
        />
      </LegalSection>

      <LegalSection id="limitation" title="Limitation of Liability" importance="critical" type="warning">
        <LegalHighlight type="warning" title="Liability Limitation">
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, CLOUDDOGG MCP SHALL NOT BE LIABLE FOR ANY 
          INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT 
          LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR RELATING TO THESE TERMS 
          OR YOUR USE OF OUR SERVICES.
        </LegalHighlight>

        <p>
          Our total liability to you for all claims arising out of or relating to these Terms or 
          your use of our Services shall not exceed the amount you paid us in the twelve (12) months 
          preceding the claim, or $100, whichever is greater.
        </p>
      </LegalSection>

      <LegalSection id="termination" title="Termination" importance="high" type="warning">
        <LegalSubsection id="termination-by-you" title="Termination by You">
          <p>
            You may terminate your account at any time by contacting us or using the account 
            cancellation feature in your account settings.
          </p>
        </LegalSubsection>

        <LegalSubsection id="termination-by-us" title="Termination by Us">
          <p>
            We may terminate or suspend your account immediately, without prior notice, for any reason, 
            including but not limited to:
          </p>

          <LegalList
            type="bullet"
            items={[
              {
                title: "Terms Violation",
                description: "Breach of these Terms or our policies"
              },
              {
                title: "Illegal Activity",
                description: "Suspected illegal or fraudulent activity"
              },
              {
                title: "Non-Payment",
                description: "Failure to pay fees when due"
              },
              {
                title: "Service Discontinuation",
                description: "Discontinuation of our Services"
              }
            ]}
          />
        </LegalSubsection>

        <LegalHighlight type="info" title="Effect of Termination">
          Upon termination, your right to use our Services will cease immediately. We may delete 
          your account and data, though some information may be retained as required by law.
        </LegalHighlight>
      </LegalSection>

      <LegalSection id="dispute-resolution" title="Dispute Resolution" importance="high" type="info">
        <LegalSubsection id="informal-resolution" title="Informal Resolution">
          <p>
            Before filing any formal dispute, please contact us at legal@clouddogg.com to attempt 
            to resolve the issue informally. We commit to working with you in good faith to resolve disputes.
          </p>
        </LegalSubsection>

        <LegalSubsection id="arbitration" title="Binding Arbitration">
          <LegalHighlight type="warning" title="Arbitration Agreement">
            Any dispute arising out of or relating to these Terms or our Services will be resolved 
            through binding arbitration rather than in court, except for certain types of disputes 
            as specified below.
          </LegalHighlight>

          <LegalList
            type="bullet"
            items={[
              {
                title: "Arbitration Rules",
                description: "Arbitration will be conducted under the rules of the American Arbitration Association"
              },
              {
                title: "Location",
                description: "Arbitration will take place in San Francisco, California"
              },
              {
                title: "Costs",
                description: "Each party will bear their own costs and attorney fees"
              },
              {
                title: "Class Action Waiver",
                description: "You waive the right to participate in class action lawsuits"
              }
            ]}
          />
        </LegalSubsection>

        <LegalSubsection id="exceptions" title="Exceptions to Arbitration">
          <p>
            The following disputes are not subject to arbitration:
          </p>

          <LegalList
            type="bullet"
            items={[
              {
                title: "Intellectual Property",
                description: "Disputes related to intellectual property rights"
              },
              {
                title: "Small Claims",
                description: "Claims that qualify for small claims court"
              },
              {
                title: "Injunctive Relief",
                description: "Requests for injunctive or equitable relief"
              }
            ]}
          />
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="general" title="General Provisions" importance="medium" type="info">
        <LegalList
          type="bullet"
          items={[
            {
              title: "Governing Law",
              description: "These Terms are governed by the laws of California, without regard to conflict of law principles"
            },
            {
              title: "Severability",
              description: "If any provision is found unenforceable, the remaining provisions will remain in effect"
            },
            {
              title: "Entire Agreement",
              description: "These Terms constitute the entire agreement between you and CloudDogg MCP"
            },
            {
              title: "Assignment",
              description: "You may not assign these Terms without our written consent"
            },
            {
              title: "Waiver",
              description: "Our failure to enforce any provision does not constitute a waiver"
            },
            {
              title: "Force Majeure",
              description: "We are not liable for delays or failures due to circumstances beyond our control"
            }
          ]}
        />

        <LegalHighlight type="info" title="Contact for Legal Matters">
          For questions about these Terms, please contact our legal team at legal@clouddogg.com.
        </LegalHighlight>
      </LegalSection>

      <LegalContact
        title="Legal Questions?"
        email="legal@clouddogg.com"
        phone="+1 (555) 123-4567"
        address="CloudDogg MCP Legal Department, 123 Tech Street, San Francisco, CA 94105"
        hours="Monday - Friday, 9:00 AM - 5:00 PM PST"
      />
    </LegalLayout>
  )
}
