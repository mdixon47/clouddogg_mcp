"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronRight, Info, AlertTriangle, CheckCircle, Lightbulb } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface LegalSectionProps {
  id: string
  title: string
  children: React.ReactNode
  collapsible?: boolean
  defaultExpanded?: boolean
  importance?: "low" | "medium" | "high" | "critical"
  type?: "info" | "warning" | "success" | "tip"
}

interface LegalSubsectionProps {
  id: string
  title: string
  children: React.ReactNode
  collapsible?: boolean
  defaultExpanded?: boolean
}

interface LegalHighlightProps {
  children: React.ReactNode
  type?: "info" | "warning" | "success" | "tip"
  title?: string
}

export function LegalSection({
  id,
  title,
  children,
  collapsible = false,
  defaultExpanded = true,
  importance = "medium",
  type = "info"
}: LegalSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  const importanceColors = {
    low: "border-gray-600 bg-gray-800/20",
    medium: "border-blue-600 bg-blue-900/20",
    high: "border-yellow-600 bg-yellow-900/20",
    critical: "border-red-600 bg-red-900/20"
  }

  const typeIcons = {
    info: <Info className="h-5 w-5 text-blue-400" />,
    warning: <AlertTriangle className="h-5 w-5 text-yellow-400" />,
    success: <CheckCircle className="h-5 w-5 text-green-400" />,
    tip: <Lightbulb className="h-5 w-5 text-purple-400" />
  }

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12 scroll-mt-24"
    >
      <Card className={`${importanceColors[importance]} border backdrop-blur-sm overflow-hidden`}>
        <div
          className={`p-6 ${collapsible ? "cursor-pointer" : ""}`}
          onClick={collapsible ? () => setIsExpanded(!isExpanded) : undefined}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {typeIcons[type]}
              <h2 className="text-2xl font-bold text-white">{title}</h2>
            </div>
            {collapsible && (
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </motion.div>
            )}
          </div>
        </div>

        <AnimatePresence>
          {(!collapsible || isExpanded) && (
            <motion.div
              initial={collapsible ? { height: 0, opacity: 0 } : false}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 prose prose-invert prose-blue max-w-none">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.section>
  )
}

export function LegalSubsection({
  id,
  title,
  children,
  collapsible = false,
  defaultExpanded = true
}: LegalSubsectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-6 scroll-mt-24"
    >
      <div className="border-l-2 border-blue-500/30 pl-6">
        <div
          className={`flex items-center gap-2 mb-3 ${collapsible ? "cursor-pointer" : ""}`}
          onClick={collapsible ? () => setIsExpanded(!isExpanded) : undefined}
        >
          {collapsible && (
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </motion.div>
          )}
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>

        <AnimatePresence>
          {(!collapsible || isExpanded) && (
            <motion.div
              initial={collapsible ? { height: 0, opacity: 0 } : false}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden prose prose-invert prose-sm max-w-none text-gray-300"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export function LegalHighlight({ children, type = "info", title }: LegalHighlightProps) {
  const typeStyles = {
    info: {
      bg: "bg-blue-900/20",
      border: "border-blue-500/30",
      icon: <Info className="h-5 w-5 text-blue-400" />,
      text: "text-blue-300"
    },
    warning: {
      bg: "bg-yellow-900/20",
      border: "border-yellow-500/30",
      icon: <AlertTriangle className="h-5 w-5 text-yellow-400" />,
      text: "text-yellow-300"
    },
    success: {
      bg: "bg-green-900/20",
      border: "border-green-500/30",
      icon: <CheckCircle className="h-5 w-5 text-green-400" />,
      text: "text-green-300"
    },
    tip: {
      bg: "bg-purple-900/20",
      border: "border-purple-500/30",
      icon: <Lightbulb className="h-5 w-5 text-purple-400" />,
      text: "text-purple-300"
    }
  }

  const style = typeStyles[type]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`${style.bg} ${style.border} border rounded-lg p-4 my-6 backdrop-blur-sm`}
    >
      <div className="flex items-start gap-3">
        {style.icon}
        <div className="flex-1">
          {title && (
            <h4 className={`font-semibold ${style.text} mb-2`}>{title}</h4>
          )}
          <div className="text-gray-300 text-sm leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

interface LegalListProps {
  items: Array<{
    title: string
    description: string
    important?: boolean
  }>
  type?: "bullet" | "numbered" | "checklist"
}

export function LegalList({ items, type = "bullet" }: LegalListProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="my-6"
    >
      <div className="space-y-3">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${
              item.important 
                ? "bg-yellow-900/10 border border-yellow-500/20" 
                : "bg-gray-800/20 hover:bg-gray-800/40"
            }`}
          >
            <div className="flex-shrink-0 mt-1">
              {type === "numbered" && (
                <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-600 rounded-full">
                  {index + 1}
                </span>
              )}
              {type === "checklist" && (
                <CheckCircle className="h-5 w-5 text-green-400" />
              )}
              {type === "bullet" && (
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
              )}
            </div>
            <div className="flex-1">
              <h4 className={`font-medium mb-1 ${item.important ? "text-yellow-300" : "text-white"}`}>
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

interface LegalContactProps {
  title?: string
  email?: string
  phone?: string
  address?: string
  hours?: string
}

export function LegalContact({
  title = "Contact Us",
  email = "legal@clouddogg.com",
  phone = "+1 (555) 123-4567",
  address = "123 Tech Street, San Francisco, CA 94105",
  hours = "Monday - Friday, 9:00 AM - 5:00 PM PST"
}: LegalContactProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-12"
    >
      <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/30 backdrop-blur-sm">
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-400" />
            {title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-400 mb-1">Email:</p>
              <a href={`mailto:${email}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                {email}
              </a>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Phone:</p>
              <a href={`tel:${phone}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                {phone}
              </a>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Address:</p>
              <p className="text-gray-300">{address}</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Hours:</p>
              <p className="text-gray-300">{hours}</p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
