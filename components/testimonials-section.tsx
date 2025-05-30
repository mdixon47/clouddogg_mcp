"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { testimonials } from "@/data/mcp-testimonials"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (inView && autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [inView, autoplay])

  const nextSlide = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section id="testimonials" className="py-20 px-4 md:px-8 bg-gray-950/50 relative">
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text bg-clip-padding p-1 text-transparent">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join hundreds of businesses already transforming their operations with CloudDogg.
          </p>
        </div>

        <div
          ref={ref}
          className={`relative transition-all duration-1000 transform ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-gray-800/30 backdrop-blur-sm border-gray-700 overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-gray-700">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
                            />
                          ))}
                        </div>

                        <blockquote className="text-xl text-gray-300 italic mb-6">"{testimonial.quote}"</blockquote>

                        <div>
                          <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                          <p className="text-gray-400">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? "bg-blue-500 w-6" : "bg-gray-600 hover:bg-gray-500"
                }`}
                onClick={() => {
                  setAutoplay(false)
                  setActiveIndex(index)
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              size="icon"
              className="border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800"
              onClick={nextSlide}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
