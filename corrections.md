# Corrections and Known Issues

## Overview
This document tracks corrections, known issues, and their solutions for the project. Use this as a reference when encountering common problems or for implementing planned improvements.

## Current Issues and Solutions

### Critical
- *No critical issues at this time.*

### High Priority
1. Logo not visible in footer.tsx
    - Issue: CloudDogg logo not visible in light theme in footer section
    - Solution: Fix the gradient values
    - Implementation:
        ```tsx
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            CloudDogg
        </span>
        ```

2. Light theme not applied for closing CTA block in closing-cta.tsx
    - Issue: Closing CTA block appears dark in light theme 
    - Solution: Setting default styles for light mode and overriding them with dark variants
    - Implementation:
      1. Default Light Theme with Dark Overrides:
            ```tsx
            <div className="absolute inset-0 bg-gradient-to-b from-blue-100/30 to-gray-100/0 dark:from-blue-900/20 dark:to-gray-950/0"></div>
            ```
      2. Main Container Background:
            ```tsx
            className={`max-w-5xl mx-auto 
            bg-gradient-to-b from-white/90 to-gray-50/90 dark:from-gray-800/50 dark:to-gray-900/50
            backdrop-blur-sm 
            border border-gray-200 dark:border-gray-700
            ```
       3. Text Colors:
             ```tsx
             <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-600 dark:from-white dark:via-blue-100 dark:to-cyan-200 bg-clip-text text-transparent">
             ```
       4. Benefit Tags:
             ```tsx
             <div 
                className="flex items-center bg-white/80 dark:bg-gray-800/50 rounded-full px-4 py-2 border border-gray-200 dark:border-transparent shadow-sm">
                <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-gray-800 dark:text-gray-200">{benefit}</span>
                </div>
             ```           

3. Redudant footer in how-it-works.tsx
    - Issue: Duplicate footer
    - Solution: Remove footer tag from page function
    - Implementation:
        ```tsx
        return (
            <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100">
            <div className="relative overflow-hidden">
                {/* Background glow effects */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

                <main>
                    <HowItWorksHero />
                    <HowItWorksSteps />
                    <HowItWorksTechnical />
                    <HowItWorksFAQ />
                    <ClosingCTA />
                </main>
            </div>
            </div>
        )
        ``` 
    - Notes: Apply same solution wherever applicable    

4. Content not visible in learning-hero.tsx
    - Issue: When switched to light theme content still appears to be dark
    - Solution: Setting default styles for light mode and overriding them with dark variants
    - Implementation:
        1. Course Card Background
            ```tsx
            <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200 dark:bg-gray-800/60 dark:border-gray-700 rounded-3xl p-6 shadow-2xl">
            ```
        2. Course Card Book Icon Container
            ```tsx
            <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-blue-500 dark:text-blue-400 opacity-50" />
            </div>
            ```
        3. Course Card Text Colors
            ```tsx
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
            <span className="ml-2 text-gray-600 dark:text-gray-300 text-sm">
            ```
        4. Course Card Progress Bar Background
            ```tsx
            <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            ```
        5. Course Card Border Colors
            ```tsx
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
            ```
        6. Tagline (Apply same solution for similar issue)
            ```tsx
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 text-gray-300 dark:bg-blue-500/20 dark:text-blue-300 mb-6">
              <Medal className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Veteran-Owned, Veteran-Focused</span>
            </div>
            ```            

5. Content not visible in course-header.tsx
    - Issue: When switched to light theme the course info content still appears to be dark
    - Solution: Setting default styles for light mode and overriding them with dark variants
    - Implementation:
        ```tsx
        <div className="bg-white/90 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-xl">
        ```
        ```tsx
        <Button variant="outline" className="w-full dark:border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white" asChild>
            <Link href={`/learn/courses/${slug}/syllabus`}>View Syllabus</Link>
        </Button>
        ```

### Medium Priority
1. Featured course card content issues in closing-cta.tsx
    - Issue: Course duration and level not appears to be dark even in light theme
    - Solution: Setting default styles for light mode and overriding them with dark variants
    - Implementation:
        ```tsx
         <div className="flex space-x-2">
            <span className="px-2 py-1 bg-gray-300/50 dark:bg-gray-700/50 rounded-full text-xs text-gray-300">
                {course.level}
            </span>
            <span className="px-2 py-1 bg-gray-300/50 dark:bg-gray-700/50 rounded-full text-xs text-gray-300">
                {course.duration}
            </span>
        </div>
        ```   
    - Notes: Apply same solution for similar issues                    

2. Data and components in same file
    - Issue: Data required for the components is in the same file
    - Solution: Move the data to seperate directory so that the data can be updated in future without touching the component code
    - Implementation for MCP features data:
        1. Inside `data` directory create `mcp-features.ts` file
        2. Copy the `features` array into the file and export the array
            ```tsx            
            import { Workflow, Database, Calendar, MessageSquare, Users, Globe } from "lucide-react"

            export const features = [
                {
                    title: "AI-Powered Workflow Automation",
                    description: "Automate complex workflows across thousands of apps with natural language commands.",
                    icon: Workflow,
                    color: "from-blue-500 to-cyan-500",
                },
                {
                    title: "Secure Database Integration",
                    description: "Connect to Postgres and other databases with enterprise-grade security protocols.",
                    icon: Database,
                    color: "from-purple-500 to-pink-500",
                },
                {
                    title: "Natural Language Scheduling & Messaging",
                    description: "Let AI handle your calendar and communications with human-like understanding.",
                    icon: Calendar,
                    color: "from-amber-500 to-orange-500",
                },
                {
                    title: "Social Media & Community Management",
                    description: "Automate content creation, scheduling, and engagement across all platforms.",
                    icon: Users,
                    color: "from-green-500 to-emerald-500",
                },
                {
                    title: "No-Code Web Scraping",
                    description: "Extract and process data from any website without writing a single line of code.",
                    icon: Globe,
                    color: "from-red-500 to-rose-500",
                },
                {
                    title: "Conversational AI Interface",
                    description: "Talk to your AI in plain English and watch it execute complex tasks automatically.",
                    icon: MessageSquare,
                    color: "from-indigo-500 to-violet-500",
                },
            ]
            ```
        3. Import the features array in `features-section.tsx` file 
            ```tsx
            import { features } from "@/data/mcp-features"
            ```
    - Notes: Use the same solution for others         

### Low Priority
1. Headers getting clipped
    - Issue: Header content is being visually clipped in the UI.
    - Solution: Add `bg-clip-padding p-3` in the className of the header component.
    - Implementation for hero-section.tsx:
        ```tsx
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-700 dark:from-white dark:via-blue-100 dark:to-cyan-200 bg-clip-text bg-clip-padding p-3 text-transparent mb-6">
            Connect Your AI to Everything. Automate Anything.
        </h1>
        ```
    - Notes: Use the same solution for all other hearders having clipping issues    

2. Incorrect heading in how-it-works-section.tsx
    - Issue: Incorrect title `How CloudDogg Works`
    - Solution: Replace with `How CloudDogg MCP Works`
    - Implementation:
        ```tsx
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text bg-clip-padding p-3 text-transparent">
            How CloudDogg MCP Works
        </h2>
        ```   
3. Animated dots on the line in how-it-works-section.tsx
    - Issue: Animated dots not appearing correctly on the connection line
    - Solution: Correct value of `left` parameter
    - Implementation: 
        ```tsx
        <div className="hidden md:block">
            {inView && (
                <>
                <div className="absolute top-1/2 left-0 w-3 h-3 rounded-full bg-blue-500 transform -translate-y-1/2 animate-ping"></div>
                <div className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-purple-500 transform -translate-y-1/2 animate-ping animation-delay-300"></div>
                <div className="absolute top-1/2 left-full w-3 h-3 rounded-full bg-green-500 transform -translate-y-1/2 animate-ping animation-delay-600"></div>
                </>
            )}
        </div>
        ```                   

4. Incorrect punctuation in closing-cta.tsx
    - Issue: Incorrect use of period (.) in title `Start Automating Smarter. Today.`
    - Solution: Replace period (.) with comma (,)
    - Implementation:
        ```tsx
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
            Start Automating Smarter, Today.
        </h2>
        ```

5. Missing border for `View Pricing` button in closing-cta.tsx
    - Issue: No border around the button
    - Solution: Fix the values for border
    - Implementation:
        ```tsx
        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white px-8 py-6 text-lg rounded-xl"
        >
            View Pricing
        </Button>
        ```

6. Missing border for `View Pricing` button in closing-cta.tsx
    - Issue:
    - Solution:
    - Implementation:
        ```tsx
        ```
        
      

## Recently Fixed
- 2025-05-21: Added .gitignore file (PR [#1](https://github.com/mdixon47/clouddogg_mcp/pull/1))

## References
- https://tailwindcss.com/docs/background-clip
- https://tailwindcss.com/docs/top-right-bottom-left
- https://tailwindcss.com/docs/dark-mode

---
Last updated: May 21, 2025