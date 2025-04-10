"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ThumbsUp, Medal } from "lucide-react"

interface CourseReviewsProps {
  slug: string
}

export default function CourseReviews({ slug }: CourseReviewsProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // This would normally fetch review data based on the course slug
  const reviewData = {
    averageRating: 4.8,
    totalReviews: 156,
    ratingDistribution: [
      { stars: 5, percentage: 85 },
      { stars: 4, percentage: 10 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 1 },
      { stars: 1, percentage: 1 },
    ],
    reviews: [
      {
        name: "Michael R.",
        isVeteran: true,
        rating: 5,
        date: "May 15, 2023",
        comment:
          "As a veteran transitioning to the tech industry, this course was exactly what I needed. The instructor's military background helped make complex concepts relatable, and the practical examples were directly applicable to my business.",
        helpful: 24,
      },
      {
        name: "Sarah J.",
        isVeteran: false,
        rating: 5,
        date: "April 28, 2023",
        comment:
          "Comprehensive and well-structured course. The MCP concepts were explained clearly, and I was able to implement my first automation within days of starting the course.",
        helpful: 18,
      },
      {
        name: "David T.",
        isVeteran: true,
        rating: 4,
        date: "June 2, 2023",
        comment:
          "Great content overall. I especially appreciated the veteran-specific examples and use cases. Would have liked more advanced content, but it's an excellent foundation.",
        helpful: 12,
      },
    ],
  }

  return (
    <div
      ref={ref}
      className={`mb-12 transition-all duration-1000 transform ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      <h2 className="text-2xl font-bold mb-6 text-white">Student Reviews</h2>

      <Card className="bg-gray-800/30 backdrop-blur-sm border-gray-700 overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">{reviewData.averageRating}</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(reviewData.averageRating) ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-400">{reviewData.totalReviews} reviews</p>
              </div>

              <div className="mt-6 space-y-2">
                {reviewData.ratingDistribution.map((item) => (
                  <div key={item.stars} className="flex items-center">
                    <div className="w-12 text-right mr-2">
                      <span className="text-gray-400">{item.stars} stars</span>
                    </div>
                    <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-400" style={{ width: `${item.percentage}%` }}></div>
                    </div>
                    <div className="w-10 text-right ml-2">
                      <span className="text-gray-400">{item.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="space-y-6">
                {reviewData.reviews.map((review, index) => (
                  <div key={index} className="pb-6 border-b border-gray-700 last:border-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="flex items-center">
                          <span className="font-medium text-white">{review.name}</span>
                          {review.isVeteran && (
                            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs">
                              <Medal className="h-3 w-3 mr-1" />
                              Veteran
                            </span>
                          )}
                        </div>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
                            />
                          ))}
                          <span className="ml-2 text-sm text-gray-400">{review.date}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-3">{review.comment}</p>

                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      Helpful ({review.helpful})
                    </Button>
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                className="mt-4 w-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                See All Reviews
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
