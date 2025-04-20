interface ChallengeSectionProps {
  challenges: {
    title: string
    description: string
  }[]
}

export default function ChallengeSection({ challenges }: ChallengeSectionProps) {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        The Challenges
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/50 transition-all"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">{challenge.title}</h3>
            <p className="text-gray-300">{challenge.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}