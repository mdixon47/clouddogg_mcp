import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Zapier Integration Lessons - CloudDogg Learning",
  description: "Learn how to integrate Zapier with your business automation workflows.",
}

export default function ZapierLessonsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Zapier Integration Lessons</h1>
      <p className="text-gray-600 dark:text-gray-400">
        This page will contain the Zapier integration lessons.
      </p>
    </div>
  )
}