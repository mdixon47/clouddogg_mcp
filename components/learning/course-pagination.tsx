"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function CoursePagination() {
  return (
    <div className="flex justify-center items-center mt-12">
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button variant="outline" className="border-gray-700 bg-gray-800 text-white">
          1
        </Button>

        <Button variant="outline" className="border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800">
          2
        </Button>

        <Button variant="outline" className="border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800">
          3
        </Button>

        <span className="text-gray-500">...</span>

        <Button variant="outline" className="border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800">
          10
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
