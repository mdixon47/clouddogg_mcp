import type { Metadata } from "next"
import { Cookie } from "lucide-react"
import LegalLayout from "@/components/legal/legal-layout"
import { LegalSection, LegalSubsection, LegalHighlight, LegalList, LegalContact } from "@/components/legal/legal-section"
import CookieManager from "@/components/legal/cookie-manager"

export const metadata: Metadata = {
  title: "Cookie Policy - CloudDogg MCP",
  description: "Learn about how CloudDogg MCP uses cookies and similar technologies. Manage your cookie preferences and understand your choices.",
  keywords: "cookie policy, cookies, tracking, privacy, data collection, preferences"
}

const sections = [
  { id: "overview", title: "Cookie Overview" },
  { id: "what-are-cookies", title: "What Are Cookies?" },
  { id: "cookie-types", title: "Types of Cookies We Use" },
  { id: "cookie-purposes", title: "Why We Use Cookies" },
  { id: "cookie-manager", title: "Manage Your Preferences" },
  { id: "third-party", title: "Third-Party Cookies" },
  { id: "cookie-control", title: "How to Control Cookies" },
  { id: "updates", title: "Policy Updates" },
  { id: "contact", title: "Contact Information" }
]

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      description="Understand how we use cookies to enhance your experience and protect your privacy."
      lastUpdated="December 15, 2024"
      readTime="8 minutes"
      icon={<Cookie className="h-4 w-4" />}
      sections={sections}
    >
      <LegalSection id="overview" title="Cookie Overview" importance="high" type="info">
        <LegalHighlight type="info" title="What This Policy Covers">
          This Cookie Policy explains how CloudDogg MCP uses cookies and similar tracking technologies 
          on our website and services. It's designed to help you understand what cookies are, 
          how we use them, and how you can control them.
        </LegalHighlight>

        <p>
          We believe in transparency about the data we collect and how we use it. This policy works 
          alongside our Privacy Policy to give you complete information about our data practices.
        </p>

        <LegalHighlight type="success" title="Your Control">
          You have full control over non-essential cookies. Use our interactive cookie manager below 
          to customize your preferences at any time.
        </LegalHighlight>
      </LegalSection>

      <LegalSection id="what-are-cookies" title="What Are Cookies?" importance="medium" type="info">
        <p>
          Cookies are small text files that are stored on your device (computer, tablet, or mobile) 
          when you visit a website. They help websites remember information about your visit, 
          which can make your next visit easier and the site more useful to you.
        </p>

        <LegalSubsection id="cookie-characteristics" title="Cookie Characteristics">
          <LegalList
            type="bullet"
            items={[
              {
                title: "Small Size",
                description: "Cookies are typically very small files, usually just a few bytes of data"
              },
              {
                title: "Text-Based",
                description: "They contain only text information, not executable code or viruses"
              },
              {
                title: "Domain-Specific",
                description: "Cookies can only be read by the website that created them"
              },
              {
                title: "Expiration Dates",
                description: "Each cookie has an expiration date after which it's automatically deleted"
              }
            ]}
          />
        </LegalSubsection>

        <LegalSubsection id="similar-technologies" title="Similar Technologies">
          <p>
            We also use similar technologies that work like cookies:
          </p>

          <LegalList
            type="bullet"
            items={[
              {
                title: "Local Storage",
                description: "Browser storage that persists longer than session cookies"
              },
              {
                title: "Session Storage",
                description: "Temporary storage that's cleared when you close your browser"
              },
              {
                title: "Web Beacons",
                description: "Small transparent images used to track email opens and page views"
              },
              {
                title: "Pixels",
                description: "Tiny tracking images used for analytics and advertising"
              }
            ]}
          />
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="cookie-types" title="Types of Cookies We Use" importance="high" type="info">
        <p>
          We categorize our cookies into four main types based on their purpose and functionality:
        </p>

        <LegalSubsection id="essential-cookies" title="Essential Cookies">
          <LegalHighlight type="success" title="Always Active">
            These cookies are necessary for our website to function properly and cannot be disabled.
          </LegalHighlight>

          <LegalList
            type="checklist"
            items={[
              {
                title: "Authentication",
                description: "Keep you logged in and secure your session"
              },
              {
                title: "Security",
                description: "Protect against fraud and security threats"
              },
              {
                title: "Load Balancing",
                description: "Distribute traffic across our servers for optimal performance"
              },
              {
                title: "Cookie Consent",
                description: "Remember your cookie preferences"
              }
            ]}
          />
        </LegalSubsection>

        <LegalSubsection id="functional-cookies" title="Functional Cookies">
          <p>
            These cookies enhance your experience by remembering your preferences and settings.
          </p>

          <LegalList
            type="bullet"
            items={[
              {
                title: "User Preferences",
                description: "Theme, language, and display settings"
              },
              {
                title: "Course Progress",
                description: "Your learning progress and bookmarks"
              },
              {
                title: "Form Data",
                description: "Temporarily save form inputs to prevent data loss"
              },
              {
                title: "Accessibility",
                description: "Remember accessibility settings and preferences"
              }
            ]}
          />
        </LegalSubsection>

        <LegalSubsection id="analytics-cookies" title="Analytics Cookies">
          <p>
            Help us understand how visitors interact with our website to improve user experience.
          </p>

          <LegalList
            type="bullet"
            items={[
              {
                title: "Usage Statistics",
                description: "Track page views, session duration, and user flows"
              },
              {
                title: "Performance Monitoring",
                description: "Identify slow-loading pages and technical issues"
              },
              {
                title: "A/B Testing",
                description: "Test different versions of pages to improve user experience"
              },
              {
                title: "Error Tracking",
                description: "Identify and fix bugs and technical problems"
              }
            ]}
          />
        </LegalSubsection>

        <LegalSubsection id="marketing-cookies" title="Marketing Cookies">
          <p>
            Used to deliver relevant advertisements and measure the effectiveness of marketing campaigns.
          </p>

          <LegalList
            type="bullet"
            items={[
              {
                title: "Ad Personalization",
                description: "Show you relevant ads based on your interests"
              },
              {
                title: "Campaign Tracking",
                description: "Measure the effectiveness of our marketing efforts"
              },
              {
                title: "Retargeting",
                description: "Show you relevant ads on other websites"
              },
              {
                title: "Social Media Integration",
                description: "Enable sharing and social media features"
              }
            ]}
          />
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="cookie-purposes" title="Why We Use Cookies" importance="high" type="info">
        <p>
          We use cookies for several important purposes that benefit both you and our service:
        </p>

        <LegalList
          type="numbered"
          items={[
            {
              title: "Essential Functionality",
              description: "Enable core features like user authentication, security, and basic site operations"
            },
            {
              title: "Personalization",
              description: "Customize your experience based on your preferences and past interactions"
            },
            {
              title: "Performance Optimization",
              description: "Monitor and improve site performance, loading times, and user experience"
            },
            {
              title: "Analytics & Insights",
              description: "Understand how users interact with our site to make data-driven improvements"
            },
            {
              title: "Security & Fraud Prevention",
              description: "Protect against malicious activities and ensure secure transactions"
            },
            {
              title: "Marketing & Communication",
              description: "Deliver relevant content and measure the effectiveness of our communications"
            }
          ]}
        />

        <LegalHighlight type="tip" title="Legitimate Interests">
          We process cookies based on your consent (for non-essential cookies) and our legitimate 
          interests in providing and improving our services (for essential cookies).
        </LegalHighlight>
      </LegalSection>

      <LegalSection id="cookie-manager" title="Manage Your Cookie Preferences" importance="critical" type="success">
        <LegalHighlight type="success" title="Interactive Cookie Management">
          Use the cookie manager below to customize your preferences. Your choices will be saved 
          and applied immediately across our website.
        </LegalHighlight>

        <CookieManager />
      </LegalSection>

      <LegalSection id="third-party" title="Third-Party Cookies" importance="high" type="warning">
        <LegalHighlight type="warning" title="External Services">
          Some cookies on our site are set by third-party services we use to enhance functionality 
          and analyze usage. These services have their own privacy policies.
        </LegalHighlight>

        <LegalSubsection id="analytics-services" title="Analytics Services">
          <LegalList
            type="bullet"
            items={[
              {
                title: "Google Analytics",
                description: "Provides detailed website analytics and user behavior insights",
                important: true
              },
              {
                title: "Hotjar",
                description: "Offers heatmaps and user session recordings for UX optimization"
              },
              {
                title: "Mixpanel",
                description: "Tracks user events and conversion funnels"
              }
            ]}
          />
        </LegalSubsection>

        <LegalSubsection id="marketing-services" title="Marketing Services">
          <LegalList
            type="bullet"
            items={[
              {
                title: "Facebook Pixel",
                description: "Tracks conversions from Facebook advertising campaigns"
              },
              {
                title: "Google Ads",
                description: "Measures effectiveness of Google advertising campaigns"
              },
              {
                title: "LinkedIn Insight Tag",
                description: "Tracks professional audience engagement and conversions"
              }
            ]}
          />
        </LegalSubsection>

        <LegalHighlight type="info" title="Third-Party Privacy Policies">
          We recommend reviewing the privacy policies of these third-party services:
          <ul className="mt-2 space-y-1">
            <li>• <a href="https://policies.google.com/privacy" className="text-blue-400 hover:text-blue-300">Google Privacy Policy</a></li>
            <li>• <a href="https://www.hotjar.com/legal/policies/privacy/" className="text-blue-400 hover:text-blue-300">Hotjar Privacy Policy</a></li>
            <li>• <a href="https://www.facebook.com/privacy/policy/" className="text-blue-400 hover:text-blue-300">Facebook Privacy Policy</a></li>
          </ul>
        </LegalHighlight>
      </LegalSection>

      <LegalSection id="cookie-control" title="How to Control Cookies" importance="medium" type="info">
        <p>
          You have several options for controlling cookies beyond our cookie manager:
        </p>

        <LegalSubsection id="browser-settings" title="Browser Settings">
          <p>
            Most web browsers allow you to control cookies through their settings:
          </p>

          <LegalList
            type="bullet"
            items={[
              {
                title: "Block All Cookies",
                description: "Prevent all cookies from being stored (may break website functionality)"
              },
              {
                title: "Block Third-Party Cookies",
                description: "Allow only cookies from the website you're visiting"
              },
              {
                title: "Delete Existing Cookies",
                description: "Remove all currently stored cookies from your browser"
              },
              {
                title: "Incognito/Private Mode",
                description: "Browse without storing cookies or browsing history"
              }
            ]}
          />
        </LegalSubsection>

        <LegalSubsection id="browser-instructions" title="Browser-Specific Instructions">
          <LegalList
            type="bullet"
            items={[
              {
                title: "Chrome",
                description: "Settings > Privacy and Security > Cookies and other site data"
              },
              {
                title: "Firefox",
                description: "Settings > Privacy & Security > Cookies and Site Data"
              },
              {
                title: "Safari",
                description: "Preferences > Privacy > Manage Website Data"
              },
              {
                title: "Edge",
                description: "Settings > Cookies and site permissions > Cookies and site data"
              }
            ]}
          />
        </LegalSubsection>

        <LegalHighlight type="warning" title="Impact of Blocking Cookies">
          Blocking essential cookies may prevent our website from functioning properly. 
          Some features may not work as expected if you disable all cookies.
        </LegalHighlight>
      </LegalSection>

      <LegalSection id="updates" title="Policy Updates" importance="medium" type="info">
        <p>
          We may update this Cookie Policy from time to time to reflect changes in our practices 
          or for legal reasons.
        </p>

        <LegalHighlight type="info" title="Notification of Changes">
          When we make significant changes to this policy, we will:
          <ul className="mt-2 space-y-1">
            <li>• Update the "Last Updated" date at the top of this page</li>
            <li>• Notify you via email if you have an account with us</li>
            <li>• Display a prominent notice on our website</li>
            <li>• Request renewed consent for new cookie categories if required</li>
          </ul>
        </LegalHighlight>

        <p>
          We encourage you to review this policy periodically to stay informed about how we use cookies.
        </p>
      </LegalSection>

      <LegalContact
        title="Cookie Questions?"
        email="privacy@clouddogg.com"
        phone="+1 (555) 123-4567"
        address="CloudDogg MCP Privacy Team, 123 Tech Street, San Francisco, CA 94105"
        hours="Monday - Friday, 9:00 AM - 5:00 PM PST"
      />
    </LegalLayout>
  )
}
