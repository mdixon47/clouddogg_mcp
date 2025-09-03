import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

export default function VeteranSuccess() {
  const successStories = [
    {
      name: "Sarah Johnson",
      branch: "Army Veteran",
      business: "Tech Consulting Firm",
      story: "CloudDogg's program helped me transition from military service to running a successful tech consulting business.",
      rating: 5,
      image: "/api/placeholder/64/64"
    },
    {
      name: "Mike Rodriguez", 
      branch: "Marine Veteran",
      business: "E-commerce Store",
      story: "The business fundamentals course gave me the confidence to launch my online store. Now I'm generating 6-figure revenue.",
      rating: 5,
      image: "/api/placeholder/64/64"
    },
    {
      name: "Jennifer Chen",
      branch: "Navy Veteran", 
      business: "Digital Marketing Agency",
      story: "From zero business experience to running a thriving agency. The veteran community support was invaluable.",
      rating: 5,
      image: "/api/placeholder/64/64"
    }
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Veteran Success Stories</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real veterans who transformed their careers with our program
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-blue-500 mb-4" />
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "{story.story}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">
                      {story.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{story.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{story.branch}</p>
                    <p className="text-sm text-blue-600 dark:text-blue-400">{story.business}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mt-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
