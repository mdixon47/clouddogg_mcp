interface ImplementationSectionProps {
  steps: {
    number: number
    title: string
    description: string
  }[]
}

export default function ImplementationSection({ steps }: ImplementationSectionProps) {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Implementation Process
      </h2>

      <div className="relative">
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500"></div>

        <div className="space-y-12">
          {steps.map((step) => (
            <div key={step.number} className="relative pl-12 md:pl-20">
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
