import { CheckCircle, Clock, AlertTriangle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function VerificationTimeline({ timeline }: { timeline: Array<{
  id: string | number;
  status: 'complete' | 'current' | 'error' | string;
  title: string;
  description: string;
  date?: string | Date;
}> }){
  return (
    <Card className="border border-gray-200 dark:border-gray-800">
      <CardContent className="pt-6">
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div key={item.id} className="relative">
              {/* Connector line */}
              {index < timeline.length - 1 && (
                <div
                  className={`absolute left-3.5 top-6 w-0.5 h-full -ml-px ${
                    item.status === "complete" ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-700"
                  }`}
                />
              )}

              <div className="flex items-start">
                {/* Status icon */}
                <div className="flex-shrink-0 mr-4">
                  {item.status === "complete" ? (
                    <div className="h-7 w-7 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                    </div>
                  ) : item.status === "current" ? (
                    <div className="h-7 w-7 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-yellow-500" />
                    </div>
                  ) : item.status === "error" ? (
                    <div className="h-7 w-7 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                      <AlertTriangle className="h-5 w-5 text-red-500" />
                    </div>
                  ) : (
                    <div className="h-7 w-7 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-gray-400 dark:bg-gray-600" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3
                      className={`text-base font-medium ${
                        item.status === "complete"
                          ? "text-gray-900 dark:text-white"
                          : item.status === "current"
                            ? "text-yellow-700 dark:text-yellow-400"
                            : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {item.title}
                    </h3>
                    {item.date && (
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
