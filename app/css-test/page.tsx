import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "CSS Test - CloudDogg MCP",
  description: "Test page to verify CSS and Tailwind are working correctly.",
}

export default function CSSTestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
          <h1 className="text-4xl font-bold text-white mb-6 text-center">
            🎨 CSS & Tailwind Test Page
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Color Test */}
            <div className="bg-red-500 text-white p-4 rounded-lg shadow-lg">
              <h3 className="font-semibold mb-2">🔴 Red Background</h3>
              <p className="text-sm">bg-red-500 class test</p>
            </div>
            
            <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg">
              <h3 className="font-semibold mb-2">🟢 Green Background</h3>
              <p className="text-sm">bg-green-500 class test</p>
            </div>
            
            <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
              <h3 className="font-semibold mb-2">🔵 Blue Background</h3>
              <p className="text-sm">bg-blue-500 class test</p>
            </div>
          </div>

          {/* Layout Test */}
          <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">📐 Layout Test</h2>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px] bg-purple-600 text-white p-4 rounded-lg">
                <h4 className="font-semibold">Flexbox</h4>
                <p className="text-sm">flex-1 min-w-[200px]</p>
              </div>
              <div className="flex-1 min-w-[200px] bg-indigo-600 text-white p-4 rounded-lg">
                <h4 className="font-semibold">Responsive</h4>
                <p className="text-sm">Responsive design</p>
              </div>
            </div>
          </div>

          {/* Typography Test */}
          <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">📝 Typography Test</h2>
            <div className="space-y-2">
              <p className="text-xs text-gray-300">Extra small text (text-xs)</p>
              <p className="text-sm text-gray-300">Small text (text-sm)</p>
              <p className="text-base text-white">Base text (text-base)</p>
              <p className="text-lg text-white font-medium">Large text (text-lg)</p>
              <p className="text-xl text-white font-semibold">Extra large text (text-xl)</p>
              <p className="text-2xl text-white font-bold">2XL text (text-2xl)</p>
            </div>
          </div>

          {/* Animation Test */}
          <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">✨ Animation Test</h2>
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-yellow-500 rounded-full animate-bounce"></div>
              <div className="w-16 h-16 bg-pink-500 rounded-full animate-pulse"></div>
              <div className="w-16 h-16 bg-cyan-500 rounded-full animate-spin"></div>
            </div>
          </div>

          {/* Hover Effects Test */}
          <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">🖱️ Hover Effects Test</h2>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200">
                Hover Me
              </button>
              <button className="bg-green-600 hover:bg-green-700 hover:scale-105 text-white px-6 py-3 rounded-lg transition-all duration-200">
                Scale on Hover
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 hover:shadow-lg text-white px-6 py-3 rounded-lg transition-all duration-200">
                Shadow on Hover
              </button>
            </div>
          </div>

          {/* Status Indicators */}
          <div className="bg-gray-800/50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">📊 CSS Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-white">Tailwind CSS: Working</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-white">Responsive Design: Working</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-white">Animations: Working</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-white">Hover Effects: Working</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/"
              className="inline-block bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg transition-colors duration-200 backdrop-blur-sm border border-white/30"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
