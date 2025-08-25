@echo off
echo 🚀 Starting FaithJourney deployment to Vercel...

REM Check if Vercel CLI is installed
vercel --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Vercel CLI is not installed. Installing now...
    npm install -g vercel
)

REM Check if user is logged in
vercel whoami >nul 2>&1
if errorlevel 1 (
    echo 🔐 Please log in to Vercel...
    vercel login
)

REM Build the project
echo 🔨 Building the project...
npm run build

REM Deploy to Vercel
echo 📤 Deploying to Vercel...
vercel --prod

echo ✅ Deployment complete!
echo 📝 Don't forget to set up your environment variables in the Vercel dashboard:
echo    - DATABASE_URL
echo    - SESSION_SECRET
echo    - STRIPE_SECRET_KEY (if using Stripe)
echo    - STRIPE_PUBLISHABLE_KEY (if using Stripe)
echo    - STRIPE_WEBHOOK_SECRET (if using Stripe)

pause 