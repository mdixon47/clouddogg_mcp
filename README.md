T# ☁️ CloudDogg MCP – AI Agent Services Platform

CloudDogg MCP is a modular, AI-powered agent platform built for developers, founders, and veteran-owned businesses. It leverages **Model Context Protocol (MCP)**, **Google Gemini 2.5**, **OpenRouter**, and **Brave Search** to help users build intelligent AI tools—without needing to write code.

From search engines and SEO audits to CRM connectors and proposal writers, CloudDogg MCP is the ultimate AI toolkit for building smarter, faster, and cheaper in the cloud.

---

## 🚀 Features

- ✅ AI agents powered by Google Gemini and Brave Search
- 🔄 Dynamic switching between API providers (Gemini, Claude, etc.)
- 🔌 Ready-to-use MCP agents for Stripe, Discord, Shopify, and more
- 🌐 Build real-time tools like search engines, content generators, and dashboards
- 🧱 No-code setup inside Client (KleI) or VS Code
- 🔐 Secure API key management via AWS Secrets Manager

---

## 🧠 What is MCP?

**MCP (Model Context Protocol)** allows AI models to interact with APIs and tools in real-time through prompt-based workflows. Instead of coding logic manually, you define what the agent should do using simple instructions or natural language.

---

## 🛠️ Tech Stack

| Layer            | Tool/Tech                      |
|------------------|--------------------------------|
| AI Models        | Google Gemini 2.5, OpenRouter, Claude |
| Search Layer     | Brave Search API (free quota)  |
| Frontend (Basic) | HTML, TailwindCSS, AlpineJS    |
| Frontend (Adv)   | Next.js, Vercel (optional)     |
| Cloud Backend    | AWS Lambda, API Gateway, S3, Cognito |
| DevOps           | GitHub Actions, Terraform (optional) |
| Agent IDE        | Client (KleI) + CLAI plugin     |

---

## 📦 Installation

### 1. Clone the Repo

```bash
git clone https://github.com/clouddogg/clouddogg-mcp.git
cd clouddogg-mcp

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
