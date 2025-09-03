#!/bin/bash

# CloudDogg MCP Development Server Startup Script
# This script starts the Next.js development server with proper host binding

echo "🚀 Starting CloudDogg MCP Development Server..."
echo "📍 Server will be available at:"
echo "   - http://localhost:3000"
echo "   - http://127.0.0.1:3000" 
echo "   - http://169.254.208.51:3002 (if running on port 3002)"
echo ""

# Kill any existing Next.js processes
echo "🔄 Stopping any existing Next.js processes..."
pkill -f "next dev" || true

# Clear Next.js cache
echo "🧹 Clearing Next.js cache..."
rm -rf .next

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start the development server
echo "🎯 Starting development server..."
echo "   Press Ctrl+C to stop the server"
echo ""

# Start with host binding to allow external access
npm run dev -- --hostname 0.0.0.0 --port 3002

echo "👋 Development server stopped."
