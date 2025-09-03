import type { Metadata } from "next"
import { Shield } from "lucide-react"
import LegalLayout from "@/components/legal/legal-layout"
import { LegalSection, LegalSubsection, LegalHighlight, LegalList, LegalContact } from "@/components/legal/legal-section"

export const metadata: Metadata = {
  title: "Privacy Policy - CloudDogg MCP",
  description: "Learn how CloudDogg MCP collects, uses, and protects your personal information. Our comprehensive privacy policy explains your rights and our commitments.",
  keywords: "privacy policy, data protection, personal information, GDPR, CCPA, data rights"
}

const sections = [
  { id: "overview", title: "Privacy Overview" },
  { id: "information-collection", title: "Information We Collect" },
  { id: "information-use", title: "How We Use Information" },
  { id: "information-sharing", title: "Information Sharing" },
  { id: "data-security", title: "Data Security" },
  { id: "your-rights", title: "Your Privacy Rights" },
  { id: "cookies", title: "Cookies & Tracking" },
  { id: "third-party", title: "Third-Party Services" },
  { id: "international", title: "International Transfers" },
  { id: "children", title: "Children's Privacy" },
  { id: "changes", title: "Policy Changes" },
  { id: "contact", title: "Contact Information" }
]

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      description="Your privacy is fundamental to our mission. Learn how we protect and respect your personal information."
      lastUpdated="December 15, 2024"
      readTime="12 minutes"
      icon={<Shield className="h-4 w-4" />}
      sections={sections}
    >
      <LegalSection id="overview" title="Privacy Overview" importance="high" type="info">
        <LegalHighlight type="info" title="Our Commitment">
          At CloudDogg MCP, we believe privacy is a fundamental right. This policy explains how we collect, 
          use, and protect your personal information when you use our services.
        </LegalHighlight>

        <p>
          This Privacy Policy applies to all CloudDogg MCP services, including our website, mobile applications, 
          and any related services. By using our services, you agree to the collection and use of information 
          in accordance with this policy.
        </p>

        <LegalHighlight type="success" title="Key Principles">
          <LegalList
            type="checklist"
            items={[
              {
                title: "Transparency",
                description: "We clearly explain what data we collect and why"
              },
              {
                title: "Control",
                description: "You have control over your personal information"
              },
              {
                title: "Security",
                description: "We use industry-standard security measures"
              },
              {
                title: "Minimal Collection",
                description: "We only collect data necessary for our services"
              }
            ]}
          />
        </LegalHighlight>
      </LegalSection>

      <LegalSection id="information-collection" title="Information We Collect" importance="high" type="info">
        <p>
          We collect information to provide better services to our users. The types of information we collect include:
        </p>

        <LegalSubsection id="personal-info" title="Personal Information">
          <LegalList
            type="bullet"
            items={[
              {
                title: "Account Information",
                description: "Name, email address, phone number, and profile information when you create an account"
              },
              {
                title: "Payment Information",
                description: "Billing address and payment method details (processed securely by our payment providers)"
              },
              {
                title: "Communication Data",
                description: "Messages, feedback, and support requests you send to us"
              },
              {
                title: "Verification Data",
                description: "Documents and information for identity verification (e.g., veteran status verification)"
              }
            ]}
          />
        </LegalSubsection>

        <LegalSubsection id="usage-info" title="Usage Information">
          <LegalList
            type="bullet"
            items={[
              {
                title: "Device Information",
                description: "Device type, operating system, browser type, and unique device identifiers"
              },
              {
                title: "Log Data",
                description: "IP address, access times, pages viewed, and actions taken on our platform"
              },
              {
                title: "Performance Data",
                description: "Information about how our services perform on your device"
              },
              {
                title: "Location Data",
                description: "General location information based on IP address (not precise location)"
              }
            ]}
          />
        </LegalSubsection>

        <LegalHighlight type="warning" title="Sensitive Information">
          We do not intentionally collect sensitive personal information such as social security numbers, 
          health information, or financial account details beyond what's necessary for payment processing.
        </LegalHighlight>
      </LegalSection>

      <LegalSection id="information-use" title="How We Use Information" importance="high" type="info">
        <p>
          We use the information we collect for the following purposes:
        </p>

        <LegalList
          type="numbered"
          items={[
            {
              title: "Service Provision",
              description: "To provide, maintain, and improve our services and features"
            },
            {
              title: "Account Management",
              description: "To create and manage your account, process payments, and provide customer support"
            },
            {
              title: "Communication",
              description: "To send you service updates, security alerts, and marketing communications (with your consent)"
            },
            {
              title: "Personalization",
              description: "To customize your experience and provide relevant content and recommendations"
            },
            {
              title: "Security & Fraud Prevention",
              description: "To protect our services and users from fraud, abuse, and security threats"
            },
            {
              title: "Legal Compliance",
              description: "To comply with applicable laws, regulations, and legal processes"
            },
            {
              title: "Analytics & Improvement",
              description: "To analyze usage patterns and improve our services"
            }
          ]}
        />

        <LegalHighlight type="tip" title="Legal Basis for Processing">
          We process your personal information based on:
          <ul className="mt-2 space-y-1">
            <li>• Your consent (which you can withdraw at any time)</li>
            <li>• Performance of our contract with you</li>
            <li>• Our legitimate business interests</li>
            <li>• Legal obligations</li>
          </ul>
        </LegalHighlight>
      </LegalSection>

      <LegalSection id="information-sharing" title="Information Sharing" importance="critical" type="warning">
        <LegalHighlight type="warning" title="We Don't Sell Your Data">
          CloudDogg MCP does not sell, rent, or trade your personal information to third parties for their marketing purposes.
        </LegalHighlight>

        <p>
          We may share your information in the following limited circumstances:
        </p>

        <LegalList
          type="bullet"
          items={[
            {
              title: "Service Providers",
              description: "With trusted third-party service providers who help us operate our services (e.g., payment processors, hosting providers)",
              important: true
            },
            {
              title: "Legal Requirements",
              description: "When required by law, court order, or government request"
            },
            {
              title: "Business Transfers",
              description: "In connection with a merger, acquisition, or sale of assets (with notice to you)"
            },
            {
              title: "Safety & Security",
              description: "To protect the rights, property, or safety of CloudDogg MCP, our users, or others"
            },
            {
              title: "With Your Consent",
              description: "When you explicitly consent to sharing your information"
            }
          ]}
        />

        <LegalHighlight type="info" title="Data Processing Agreements">
          All third-party service providers are bound by strict data processing agreements and are required 
          to protect your information according to our standards.
        </LegalHighlight>
      </LegalSection>

      <LegalSection id="data-security" title="Data Security" importance="critical" type="success">
        <LegalHighlight type="success" title="Enterprise-Grade Security">
          We implement comprehensive security measures to protect your personal information against 
          unauthorized access, alteration, disclosure, or destruction.
        </LegalHighlight>

        <LegalList
          type="checklist"
          items={[
            {
              title: "Encryption",
              description: "Data is encrypted in transit (TLS 1.3) and at rest (AES-256)"
            },
            {
              title: "Access Controls",
              description: "Strict access controls and authentication for all systems"
            },
            {
              title: "Regular Audits",
              description: "Regular security audits and penetration testing"
            },
            {
              title: "Employee Training",
              description: "All employees receive privacy and security training"
            },
            {
              title: "Incident Response",
              description: "Comprehensive incident response and breach notification procedures"
            },
            {
              title: "Compliance",
              description: "SOC 2 Type II, GDPR, and CCPA compliance"
            }
          ]}
        />

        <LegalHighlight type="warning" title="No System is 100% Secure">
          While we implement strong security measures, no method of transmission over the internet or 
          electronic storage is completely secure. We cannot guarantee absolute security.
        </LegalHighlight>
      </LegalSection>

      <LegalSection id="your-rights" title="Your Privacy Rights" importance="high" type="info">
        <p>
          You have important rights regarding your personal information. Depending on your location, 
          these may include:
        </p>

        <LegalList
          type="bullet"
          items={[
            {
              title: "Access",
              description: "Request a copy of the personal information we hold about you"
            },
            {
              title: "Correction",
              description: "Request correction of inaccurate or incomplete information"
            },
            {
              title: "Deletion",
              description: "Request deletion of your personal information (subject to legal requirements)"
            },
            {
              title: "Portability",
              description: "Request your data in a portable format"
            },
            {
              title: "Restriction",
              description: "Request restriction of processing in certain circumstances"
            },
            {
              title: "Objection",
              description: "Object to processing based on legitimate interests"
            },
            {
              title: "Withdraw Consent",
              description: "Withdraw consent for processing where consent is the legal basis"
            }
          ]}
        />

        <LegalHighlight type="tip" title="How to Exercise Your Rights">
          To exercise any of these rights, contact us at privacy@clouddogg.com or use our 
          <a href="/privacy/data-request" className="text-blue-400 hover:text-blue-300 ml-1">
            online data request form
          </a>. We'll respond within 30 days.
        </LegalHighlight>
      </LegalSection>

      <LegalSection id="cookies" title="Cookies & Tracking Technologies" importance="medium" type="info">
        <p>
          We use cookies and similar technologies to enhance your experience and analyze usage patterns.
        </p>

        <LegalHighlight type="info" title="Cookie Management">
          You can control cookies through your browser settings or our 
          <a href="/cookies" className="text-blue-400 hover:text-blue-300 ml-1">
            Cookie Policy page
          </a>, where you can manage your preferences.
        </LegalHighlight>

        <LegalList
          type="bullet"
          items={[
            {
              title: "Essential Cookies",
              description: "Required for basic site functionality and security"
            },
            {
              title: "Analytics Cookies",
              description: "Help us understand how visitors use our site"
            },
            {
              title: "Functional Cookies",
              description: "Remember your preferences and settings"
            },
            {
              title: "Marketing Cookies",
              description: "Used to deliver relevant advertisements (with your consent)"
            }
          ]}
        />
      </LegalSection>

      <LegalSection id="changes" title="Changes to This Policy" importance="medium" type="info">
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons.
        </p>

        <LegalHighlight type="info" title="Notification of Changes">
          We'll notify you of significant changes by:
          <ul className="mt-2 space-y-1">
            <li>• Email notification to your registered email address</li>
            <li>• Prominent notice on our website</li>
            <li>• In-app notification for mobile users</li>
          </ul>
        </LegalHighlight>

        <p>
          Your continued use of our services after changes become effective constitutes acceptance of the updated policy.
        </p>
      </LegalSection>

      <LegalContact
        title="Privacy Questions?"
        email="privacy@clouddogg.com"
        phone="+1 (555) 123-4567"
        address="CloudDogg MCP Privacy Office, 123 Tech Street, San Francisco, CA 94105"
        hours="Monday - Friday, 9:00 AM - 5:00 PM PST"
      />
    </LegalLayout>
  )
}
