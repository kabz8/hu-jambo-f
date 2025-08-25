#!/bin/bash

# FaithJourney Vercel Deployment Script

echo "🚀 Starting FaithJourney deployment to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI is not installed. Installing now..."
    npm install -g vercel
fi

# Check if user is logged in
if ! vercel whoami &> /dev/null; then
    echo "🔐 Please log in to Vercel..."
    vercel login
fi

# Build the project
echo "🔨 Building the project..."
npm run build

# Deploy to Vercel
echo "📤 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo "📝 Don't forget to set up your environment variables in the Vercel dashboard:"
echo "   - DATABASE_URL"
echo "   - SESSION_SECRET"
echo "   - STRIPE_SECRET_KEY (if using Stripe)"
echo "   - STRIPE_PUBLISHABLE_KEY (if using Stripe)"
echo "   - STRIPE_WEBHOOK_SECRET (if using Stripe)" 