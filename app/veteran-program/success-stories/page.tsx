import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import VeteranSuccessStories from "@/components/veteran-program/veteran-success-stories"

export const metadata: Metadata = {
  title: "Veteran Success Stories - CloudDogg MCP",
  description:
    "Read success stories from veterans who have leveraged CloudDogg MCP to build successful technology businesses.",
}

export default function VeteranSuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />

        <Header />
        <main className="pt-16">
          <VeteranSuccessStories />
        </main>
        <Footer />
      </div>
    </div>
  )
}
