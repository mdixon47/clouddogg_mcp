import { Server, Zap, MessageCircle } from "lucide-react"

export const steps = [
  {
    id: 1,
    title: "Create your MCP Server",
    description:
      "Set up your secure Model Context Protocol server in minutes. Connect to your existing tools and data sources.",
    icon: Server,
    color: "from-blue-500 to-cyan-500",
    details: [
      "Sign up for CloudDogg and create your account",
      "Choose your deployment region for optimal performance",
      "Set up authentication and security protocols",
      "Connect your existing data sources and tools",
      "Configure your MCP server settings",
    ],
  },
  {
    id: 2,
    title: "Add AI-Driven Zapier Actions",
    description: "Connect to thousands of apps through Zapier and define custom actions your AI can perform.",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    details: [
      "Connect your Zapier account to CloudDogg",
      "Select from thousands of app integrations",
      "Define custom actions for your AI to perform",
      "Set up triggers and conditions for automation",
      "Test your integrations with sample data",
    ],
  },
  {
    id: 3,
    title: "Talk to your AI – it gets it done",
    description:
      "Simply tell your AI what you need in plain language. It understands context and executes the right actions.",
    icon: MessageCircle,
    color: "from-green-500 to-emerald-500",
    details: [
      "Communicate with your AI using natural language",
      "AI understands context and intent of your requests",
      "AI selects and executes the appropriate actions",
      "Receive notifications and updates on task progress",
      "Review and refine your automation workflows",
    ],
  },
]