import { Server, Zap, MessageCircle } from "lucide-react"

export const steps = [
  {
    id: 1,
    title: "Create your MCP Server",
    description:
      "Set up your secure Model Context Protocol server in minutes. Connect to your existing tools and data sources.",
    icon: Server,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Add AI-Driven Zapier Actions",
    description: "Connect to thousands of apps through Zapier and define custom actions your AI can perform.",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Talk to your AI – it gets it done",
    description:
      "Simply tell your AI what you need in plain language. It understands context and executes the right actions.",
    icon: MessageCircle,
    color: "from-green-500 to-emerald-500",
  },
]