import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, MessageCircle, Calendar, Award } from 'lucide-react'

export default function VeteranCommunity() {
  const communityFeatures = [
    {
      icon: Users,
      title: "Veteran Network",
      description: "Connect with fellow veteran entrepreneurs and share experiences",
      stats: "500+ Members"
    },
    {
      icon: MessageCircle,
      title: "Discussion Forums",
      description: "Get advice, share insights, and collaborate on business ideas",
      stats: "1,200+ Posts"
    },
    {
      icon: Calendar,
      title: "Monthly Meetups",
      description: "Join virtual and in-person networking events and workshops",
      stats: "24 Events/Year"
    },
    {
      icon: Award,
      title: "Mentorship Program",
      description: "Get paired with successful veteran business owners",
      stats: "50+ Mentors"
    }
  ]

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Veteran Community</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Connect, learn, and grow with a supportive network of veteran entrepreneurs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {communityFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                    <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {feature.stats}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Join?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Become part of a thriving community of veteran entrepreneurs who support each other's success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Join Community
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
