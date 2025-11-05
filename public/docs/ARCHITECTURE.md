# CloudDogg MCP - Architecture Documentation

**Project:** CloudDogg MCP - AI Integration Platform  
**Framework:** Next.js 15.2.5 with App Router  
**Language:** TypeScript  
**Styling:** Tailwind CSS

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Component Architecture](#component-architecture)
5. [Styling System](#styling-system)
6. [Routing](#routing)
7. [Best Practices](#best-practices)

---

## Project Overview

CloudDogg MCP is a modern web application that provides AI integration services through the Model Context Protocol (MCP). The platform offers:

- **Learning Platform** - Educational courses on MCP integration
- **Veteran Program** - Special programs for military veterans
- **Case Studies** - Real-world implementation examples
- **Authentication** - User login and signup flows
- **Legal Pages** - Privacy policy, terms of service, cookie management

---

## Technology Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.2.5 | React framework with App Router |
| React | 19.x | UI library |
| TypeScript | 5.x | Type-safe JavaScript |
| Tailwind CSS | 3.x | Utility-first CSS framework |
| Framer Motion | 11.x | Animation library |
| Lucide React | Latest | Icon library |

### Development Tools

- **ESLint** - Code linting with Next.js config
- **TypeScript Compiler** - Type checking
- **npm** - Package management

---

## Project Structure

```
clouddogg_mcp/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with header/footer
│   ├── page.tsx                 # Home page
│   ├── auth/                    # Authentication pages
│   ├── case-studies/            # Case study pages
│   ├── learn/                   # Learning platform pages
│   ├── veteran-program/         # Veteran program pages
│   ├── cookies/                 # Cookie management
│   ├── privacy/                 # Privacy policy
│   ├── terms/                   # Terms of service
│   └── globals.css              # Global styles
│
├── components/                   # React components
│   ├── auth/                    # Authentication components
│   ├── case-study/              # Case study components
│   ├── learning/                # Learning platform components
│   ├── legal/                   # Legal page components
│   ├── veteran-program/         # Veteran program components
│   ├── ui/                      # Reusable UI components
│   ├── header.tsx               # Global header
│   ├── footer.tsx               # Global footer
│   ├── theme-provider.tsx       # Theme management
│   └── ...                      # Other shared components
│
├── public/                       # Static assets
│   ├── docs/                    # Documentation files
│   └── ...                      # Images, fonts, etc.
│
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.ts               # Next.js configuration
└── package.json                 # Dependencies
```

---

## Component Architecture

### Component Categories

#### 1. Layout Components
**Location:** `app/layout.tsx`, `components/header.tsx`, `components/footer.tsx`

**Purpose:** Provide consistent structure across all pages

**Key Features:**
- Global header with navigation
- Global footer with links
- Theme provider wrapper
- Responsive design

#### 2. Page Components
**Location:** `app/*/page.tsx`

**Purpose:** Define page-level content and structure

**Pattern:**
```typescript
export default function PageName() {
  return (
    <main>
      <HeroSection />
      <ContentSection />
      <CTASection />
    </main>
  )
}
```

#### 3. Feature Components
**Location:** `components/[feature]/`

**Purpose:** Implement specific features (auth, learning, etc.)

**Examples:**
- `components/auth/login-form.tsx`
- `components/learning/course-content.tsx`
- `components/veteran-program/veteran-verification-form.tsx`

#### 4. UI Components
**Location:** `components/ui/`

**Purpose:** Reusable, generic UI elements

**Examples:**
- `Button` - Styled button component
- `Card` - Container component
- `Input` - Form input component
- `Label` - Form label component

---

### Component Patterns

#### Client Components
Components that use React hooks or browser APIs must use `"use client"` directive:

```typescript
"use client"

import { useState } from "react"

export default function InteractiveComponent() {
  const [state, setState] = useState(false)
  // ...
}
```

#### Server Components
Default in Next.js App Router - no directive needed:

```typescript
export default function StaticComponent() {
  return <div>Static content</div>
}
```

---

## Styling System

### Tailwind CSS

The project uses Tailwind CSS with a custom configuration for:
- Custom colors
- Dark/light mode support
- Responsive breakpoints
- Animation utilities

### Theme System

**Implementation:** Custom CSS classes (`.light` and `.dark`)

**Location:** `app/globals.css`

**Usage:**
```tsx
<div className="bg-white dark:bg-gray-900">
  <h1 className="text-gray-900 dark:text-white">
    Title
  </h1>
</div>
```

### Custom Styles

**Location:** `app/globals.css`

**Features:**
- CSS custom properties for theming
- Light mode overrides
- Animation keyframes
- Global resets

**Example:**
```css
.light .bg-gradient-to-b.from-gray-800\/50.to-gray-900\/50 {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.95)) !important;
}
```

---

## Routing

### App Router Structure

Next.js 15 uses the App Router with file-based routing:

```
app/
├── page.tsx                    → /
├── auth/page.tsx              → /auth
├── learn/
│   ├── page.tsx               → /learn
│   └── courses/
│       ├── page.tsx           → /learn/courses
│       └── [courseSlug]/
│           ├── page.tsx       → /learn/courses/:courseSlug
│           └── lessons/
│               └── [lessonSlug]/
│                   └── page.tsx → /learn/courses/:courseSlug/lessons/:lessonSlug
```

### Navigation

**Internal Links:** Use Next.js `Link` component
```tsx
import Link from "next/link"

<Link href="/learn/courses">Courses</Link>
```

**External Links:** Use standard `<a>` tag
```tsx
<a href="https://external.com" target="_blank" rel="noopener noreferrer">
  External Link
</a>
```

---

## Best Practices

### 1. Import Organization

**Order:**
1. React imports
2. Third-party libraries
3. Internal components
4. UI components
5. Icons
6. Types

**Example:**
```typescript
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, AlertTriangle } from "lucide-react"
```

### 2. Component Structure

**Recommended Pattern:**
```typescript
"use client" // If needed

// Imports
import { useState } from "react"

// Types
interface ComponentProps {
  title: string
  description?: string
}

// Component
export default function Component({ title, description }: ComponentProps) {
  // Hooks
  const [state, setState] = useState(false)
  
  // Handlers
  const handleClick = () => {
    setState(!state)
  }
  
  // Render
  return (
    <div>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      <button onClick={handleClick}>Toggle</button>
    </div>
  )
}
```

### 3. TypeScript Usage

**Always define prop types:**
```typescript
interface ButtonProps {
  label: string
  onClick: () => void
  variant?: "primary" | "secondary"
  disabled?: boolean
}
```

**Use type inference where possible:**
```typescript
const [count, setCount] = useState(0) // Type inferred as number
```

### 4. Styling Guidelines

**Use Tailwind utilities:**
```tsx
<div className="flex items-center justify-between p-4 bg-white dark:bg-gray-900">
```

**Responsive design:**
```tsx
<div className="text-sm md:text-base lg:text-lg">
```

**Dark mode support:**
```tsx
<div className="text-gray-900 dark:text-white">
```

### 5. Performance Optimization

**Use dynamic imports for heavy components:**
```typescript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
})
```

**Optimize images:**
```tsx
import Image from 'next/image'

<Image 
  src="/image.jpg" 
  alt="Description"
  width={800}
  height={600}
  priority={false}
/>
```

### 6. Error Handling

**Use try-catch for async operations:**
```typescript
const handleSubmit = async () => {
  try {
    await submitForm(data)
    setStatus('success')
  } catch {
    setStatus('error')
  }
}
```

### 7. Accessibility

**Always include ARIA labels:**
```tsx
<button aria-label="Close menu" onClick={handleClose}>
  <X />
</button>
```

**Support keyboard navigation:**
```tsx
<div 
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
  role="button"
  tabIndex={0}
>
```

---

## Code Quality Standards

### ESLint Rules

The project follows Next.js ESLint configuration with additional rules:

- No duplicate imports
- Unused variables must be prefixed with `_`
- Use Next.js Link for internal navigation
- Prefer Next.js Image over `<img>`
- Escape JSX entities

### TypeScript Configuration

- Strict mode enabled
- No implicit any
- Strict null checks
- No unused locals/parameters

---

## Development Workflow

### 1. Development Server
```bash
npm run dev
```
Starts development server on `http://localhost:3000`

### 2. Linting
```bash
npm run lint
```
Runs ESLint on all files

### 3. Type Checking
```bash
npx tsc --noEmit
```
Checks TypeScript types without emitting files

### 4. Build
```bash
npm run build
```
Creates production build

### 5. Production Server
```bash
npm start
```
Starts production server

---

## Deployment

### Build Output

- **Static Pages:** Pre-rendered at build time
- **Dynamic Pages:** Server-rendered on demand
- **API Routes:** Serverless functions

### Environment Variables

Configure in `.env.local`:
```
NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## Documentation

All documentation is located in `public/docs/`:

- `CODE_REVIEW_REPORT.md` - Comprehensive code review findings
- `FIXES_APPLIED.md` - Detailed list of all fixes
- `ARCHITECTURE.md` - This document

---

**Last Updated:** 2025-11-05  
**Version:** 1.0  
**Maintainer:** CloudDogg MCP Team

