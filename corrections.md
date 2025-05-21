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

### Medium Priority
1. Light theme not applied for closing CTA block in closing-cta.tsx
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

2. Redudant footer in how-it-works.tsx
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
- 2025-05-21: Fixed header clipping issue by adding padding and background clip properties (PR #XX)

## References
- https://tailwindcss.com/docs/background-clip
- https://tailwindcss.com/docs/top-right-bottom-left
- https://tailwindcss.com/docs/dark-mode

---
Last updated: May 21, 2025