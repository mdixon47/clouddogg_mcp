import type { ReactNode } from "react"

interface SolutionSectionProps {
  solutions: {
    title: string
    description: string
    icon: ReactNode
  }[]
}

export default function SolutionSection({ solutions }: SolutionSectionProps) {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        The CloudDogg Solution
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/50 transition-all"
          >
            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
              {solution.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">{solution.title}</h3>
            <p className="text-gray-300">{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

