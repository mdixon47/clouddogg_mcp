# Corrections and Known Issues

## Overview
This document tracks corrections, known issues, and their solutions for the project. Use this as a reference when encountering common problems or for implementing planned improvements.

## Current Issues and Solutions

### Critical
1. Code incompatiable with Next.js 15 in `learn/courses/[courseSlug]/lessons/[lessonSlug]/page.tsx`
    - Issue: `params` is not awaited before accessing its properties
    - Solution: `params` should be awaited before using its properties
    - Implementation: 
        1. Update interface type
            ```tsx
            interface LessonPageProps {
                params: Promise<{
                    courseSlug: string
                    lessonSlug: string
                }>
            }
            ```  
        2. Make component async
            ```tsx
            export default async function LessonPage({ params }: LessonPageProps) 
            ```     
        3.  Await params 
            ```tsx
            const { courseSlug, lessonSlug } = await params
            ```       
2. Route `/learn/courses/[courseSlug]/lessons/[lessonSlug]` is not rendering the page properly
    - Issue: Component `learn/courses/[courseSlug]/lessons/[lessonSlug]/page.tsx` has improper visual cohesion
    - Solution: Align the compents and use consistent theming
    - Implementation:
        ```tsx
        return (
            <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
            <LessonNavigation
                courseSlug={courseSlug}
                lessonSlug={lessonSlug}
            />
            <main className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3">
                    <LessonContent solutions={[
                        {
                        title: "Course Content",
                        description: "Interactive lessons and exercises",
                        icon: <div />
                        }
                    ]} />
                    <LessonResources courseSlug={courseSlug} lessonSlug={lessonSlug} />
                </div>
                </div>
            </main>
            </div>
        )
        ``` 
3. Code incompatiable with Next.js 15 in `/learn/courses/[courseSlug]/syllabus/page.tsx` 
    - Issue: `params` is not awaited before accessing its properties
    - Solution: `params` should be awaited before using its properties
    - Implementation:
        ```tsx
       interface CoursePageProps {
            params: Promise<{
                courseSlug: string
            }>
        }

        export default async function CoursePage({ params }: CoursePageProps) {
            const { courseSlug } = await params

            return (
                <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100">
                <div className="relative overflow-hidden">
                    {/* Background glow effects */}
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

                
                    <main className="pt-32 pb-20 px-4 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <CourseHeader slug={courseSlug} />

                        <div className="flex flex-col lg:flex-row gap-8 mt-8">
                        <div className="lg:w-2/3">
                            <CourseContent courseSlug={courseSlug} />
                            <CourseInstructor slug={courseSlug} />
                            <CourseReviews slug={courseSlug} />
                        </div>
                        <div className="lg:w-1/3">
                            <CourseSidebar slug={courseSlug} />
                        </div>
                        </div>

                        <RelatedCourses slug={courseSlug} />
                    </div>
                    </main>
                </div>
                </div>
            )
        }
        ``` 

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

6. Form validation missing
    - Issue: No validation for form fields in veteran-program-application-form.tsx
    - Solution: Add client side validation for each form field with proper error messages
    - Implementation:
        1. Add FormData interface
            ```tsx
            interface FormData {
                firstName: string
                lastName: string
                email: string
                phone: string
                branch: string
                status: string
                yearsOfService: string
                skills: string
                verificationFile: File | null
                comments: string
                terms: boolean
            }
            ```
        2. Add FormErrors interface for error indication
            ```tsx
            interface FormErrors {
                [key: string]: string
            }
            ```
        3. Add centralized state management for FormData and FormErrors
            ```tsx
            const [errors, setErrors] = useState<FormErrors>({})
            const [formData, setFormData] = useState<FormData>({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                branch: '',
                status: '',
                yearsOfService: '',
                skills: '',
                verificationFile: null,
                comments: '',
                terms: false
            })
            ```
        4. Add regex to validate form fields
            ```tsx
            const validateEmail = (email: string): boolean => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                return emailRegex.test(email)
            }

            const validatePhone = (phone: string): boolean => {
                const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
                const cleanPhone = phone.replace(/[^\d+]/g, '')
                return cleanPhone.length >= 10 && phoneRegex.test(cleanPhone)
            }

            const validateFirstName = (firstName: string): boolean => {
                const firstNameRegex = /^[a-zA-Z]+$/
                return firstNameRegex.test(firstName)
            }
            ```
        5. Validate each field of form for each step
            ```tsx
            const validateStep1 = (): boolean => {
                const newErrors: FormErrors = {}

                if (!formData.firstName.trim()) {
                    newErrors.firstName = 'First name is required'
                    } else if (!validateFirstName(formData.firstName)) {
                    newErrors.firstName = 'First name is required'
                    } else if (formData.firstName.trim().length < 2) {
                    newErrors.firstName = 'Please enter a valid first name'
                }

                if (!formData.lastName.trim()) {
                    newErrors.lastName = 'Last name is required'
                    } else if (formData.lastName.trim().length < 2) {
                    newErrors.lastName = 'Last name must be at least 2 characters'
                }

                if (!formData.email.trim()) {
                    newErrors.email = 'Email is required'
                    } else if (!validateEmail(formData.email)) {
                    newErrors.email = 'Please enter a valid email address'
                }

                if (formData.phone && !validatePhone(formData.phone)) {
                    newErrors.phone = 'Please enter a valid phone number'
                }

                setErrors(newErrors)
                    return Object.keys(newErrors).length === 0
            }

            const validateStep2 = (): boolean => {
                const newErrors: FormErrors = {}

                if (!formData.branch) {
                    newErrors.branch = 'Please select your branch of service'
                }

                if (!formData.status) {
                    newErrors.status = 'Please select your current status'
                }

                if (!formData.yearsOfService) {
                    newErrors.yearsOfService = 'Years of service is required'
                    } else {
                    const years = parseInt(formData.yearsOfService)
                    if (isNaN(years) || years < 0 || years > 40) {
                        newErrors.yearsOfService = 'Please enter a valid number of years (0-40)'
                    }
                }

                setErrors(newErrors)
                return Object.keys(newErrors).length === 0
            }

            const validateStep3 = (): boolean => {
                const newErrors: FormErrors = {}

                if (!formData.verificationFile) {
                    newErrors.verificationFile = 'Please upload a verification document'
                    } else {
                    if (formData.verificationFile.size > 10 * 1024 * 1024) {
                        newErrors.verificationFile = 'File size must be less than 10MB'
                }
                
                const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png']
                if (!allowedTypes.includes(formData.verificationFile.type)) {
                    newErrors.verificationFile = 'Please upload a PDF, JPG, or PNG file'
                }
                }

                if (!formData.terms) {
                    newErrors.terms = 'You must agree to the terms and conditions'
                }

                setErrors(newErrors)
                return Object.keys(newErrors).length === 0
            }

            const handleInputChange = (field: keyof FormData, value: string | boolean | File | null) => {
                setFormData(prev => ({ ...prev, [field]: value }))
                if (errors[field]) {
                    setErrors(prev => ({ ...prev, [field]: '' }))
                }
            }

            const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                const file = e.target.files?.[0] || null
                handleInputChange('verificationFile', file)
            }

            const handleNext = (currentStep: number) => {
                let isValid = false
                
                switch (currentStep) {
                case 1:
                    isValid = validateStep1()
                    break
                case 2:
                    isValid = validateStep2()
                    break
                default:
                    isValid = true
                }

                if (isValid) {
                setStep(currentStep + 1)
                }
            }
            ```
        6. Add function to display error message for field validation and invoke it from each field
            ```tsx
            const ErrorMessage = ({ error }: { error: string }) => (
                <div className="flex items-center mt-1 text-red-600 dark:text-red-400 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                {error}
                </div>
            )

            
            ```
        7. Invoke `ErrorMessage` function from each form input field
            ```tsx
            <Input 
                id="firstName" 
                placeholder="John" 
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className={errors.firstName ? 'border-red-500 focus:border-red-500' : ''}
            />
            {errors.firstName && <ErrorMessage error={errors.firstName} />}
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

6. Missing aria-lables
    - Issue: No aria-lables, making it difficult for screen reader users to understand the purpose of different sections and interactive elements
    - Solution: Add Semantic `aria-label` and hide icons and animations from screen readers by using `aira-hidden=true`
    - Implementation:
        ```tsx
        <section className="pt-32 pb-20 px-4 md:px-8 relative" aria-label="Hero section">

        <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
        ```
7. Don't Repeat Yourself
    - Issue: Long Tailwind class strings and repetitive animation classes can become difficult to manage
    - Solution: Extract CSS Classes into Variables
    - Implementation:
        ```tsx
        const headingClasses = "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-700 dark:from-white dark:via-blue-100 dark:to-cyan-200 bg-clip-text text-transparent mb-6"
        const primaryButtonClasses = "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1"

        <Button className={primaryButtonClasses} aria-label="Book a free demonstration">
        ```
8. Lack of cleanup function
    - Issue: Lack of a cleanup function which could lead to memory leaks if the component unmounted while animations were still in progress
    - Solution: Add a useRef Hook for component mounting status
    - Implementation:
        ```tsx
        const isMounted = useRef(false)

        useEffect(() => {
            isMounted.current = true
            setIsVisible(true)
            
            return () => {
                isMounted.current = false
            }
        }, [])
        ```

## Implementation Notes
- Replace the faulty code with the code given in implementation for each issue 
- Apply the solution given in this file for similar issues wherever applicable      

## Recently Fixed
- 2025-05-21: Added .gitignore file (PR [#1](https://github.com/mdixon47/clouddogg_mcp/pull/1))

## References
- https://tailwindcss.com/docs/background-clip
- https://tailwindcss.com/docs/top-right-bottom-left
- https://tailwindcss.com/docs/dark-mode
- https://nextjs.org/docs/messages/sync-dynamic-apis
- https://nextjs.org/docs/app/guides/upgrading/version-15

---
Last updated: May 22, 2025