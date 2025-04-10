"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Video, LinkIcon } from "lucide-react"

export default function IntroductionResources() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // This would normally fetch resources data based on the course and lesson slugs
  const resources = {
    title: "Lesson Resources",
    description: "Download additional materials to enhance your learning experience.",
    items: [
      {
        title: "Introduction to Zapier Integration Slides",
        description: "PDF slides covering all the key concepts from this lesson.",
        type: "pdf",
        size: "3.2 MB",
        url: "#",
      },
      {
        title: "Zapier-MCP Integration Diagram",
        description: "High-resolution diagram showing how Zapier connects with MCP.",
        type: "image",
        size: "1.5 MB",
        url: "#",
      },
      {
        title: "Sample Zapier Webhook Configuration",
        description: "Example configuration file for setting up Zapier webhooks with MCP.",
        type: "code",
        size: "8 KB",
        url: "#",
      },
      {
        title: "Video Transcript",
        description: "Full transcript of the introduction video.",
        type: "text",
        size: "95 KB",
        url: "#",
      },
    ],
    links: [
      {
        title: "Zapier Developer Documentation",
        description: "Official documentation for Zapier's developer platform.",
        url: "https://zapier.com/developer",
      },
      {
        title: "MCP-Zapier Integration Guide",
        description: "CloudDogg's comprehensive guide to MCP and Zapier integration.",
        url: "/learn/resources/mcp-zapier-guide",
      },
    ],
  }

  const getIconForType = (type: string) => {
    switch (type) {
      case "pdf":
      case "text":
      case "code":
        return <FileText className="h-5 w-5 text-purple-400" />
      case "image":
      case "video":
        return <Video className="h-5 w-5 text-purple-400" />
      default:
        return <Download className="h-5 w-5 text-purple-400" />
    }
  }

  return (
    <div
      ref={ref}
      className={`mt-12 transition-all duration-1000 transform ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <h2 className="text-2xl font-bold mb-6 text-white">{resources.title}</h2>
      <p className="text-gray-300 mb-6">{resources.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gray-800/30 backdrop-blur-sm border-gray-700 overflow-hidden">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-white">Downloadable Materials</h3>
            <div className="space-y-4">
              {resources.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700"
                >
                  <div className="flex items-center">
                    {getIconForType(item.type)}
                    <div className="ml-3">
                      <div className="text-white font-medium">{item.title}</div>
                      <div className="text-sm text-gray-400">{item.description}</div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                    asChild
                  >
                    <a href={item.url} download>
                      <Download className="h-4 w-4 mr-1" />
                      {item.size}
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/30 backdrop-blur-sm border-gray-700 overflow-hidden">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-white">Useful Links</h3>
            <div className="space-y-4">
              {resources.links.map((link, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700"
                >
                  <div className="flex items-center">
                    <LinkIcon className="h-5 w-5 text-purple-400" />
                    <div className="ml-3">
                      <div className="text-white font-medium">{link.title}</div>
                      <div className="text-sm text-gray-400">{link.description}</div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                    asChild
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      Visit
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
