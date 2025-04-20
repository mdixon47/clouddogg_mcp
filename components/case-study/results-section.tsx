interface ResultsSectionProps {
  metrics: {
    value: string
    label: string
    color: string
  }[]
  testimonial?: {
    quote: string
    author: string
    role: string
    company: string
  }
}

export default function ResultsSection({ metrics, testimonial }: ResultsSectionProps) {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        The Results
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {metrics.map((metric, index) => (
          <div key={index} className={`bg-gradient-to-br ${metric.color} rounded-xl p-6 text-center`}>
            <div className="text-4xl font-bold mb-2 text-white">{metric.value}</div>
            <div className="text-white/80">{metric.label}</div>
          </div>
        ))}
      </div>

      {testimonial && (
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 md:p-10">
          <blockquote className="text-xl md:text-2xl italic text-gray-300 mb-6">"{testimonial.quote}"</blockquote>
          <div>
            <div className="font-semibold text-white">{testimonial.author}</div>
            <div className="text-gray-400">
              {testimonial.role}, {testimonial.company}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
