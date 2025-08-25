# Deploying FaithJourney to Vercel

## Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com))
2. Your Neon database URL
3. Git repository with your code

## Environment Variables

You'll need to set these environment variables in your Vercel project:

### Required
- `DATABASE_URL` - Your Neon database connection string
- `SESSION_SECRET` - A random string for session encryption (generate one with: `openssl rand -base64 32`)

### Optional (depending on your features)
- `GOOGLE_CLIENT_ID` - If using Google OAuth
- `GOOGLE_CLIENT_SECRET` - If using Google OAuth
- `STRIPE_SECRET_KEY` - If using Stripe payments
- `STRIPE_PUBLISHABLE_KEY` - If using Stripe payments
- `PAYPAL_CLIENT_ID` - If using PayPal payments
- `PAYPAL_CLIENT_SECRET` - If using PayPal payments

## Deployment Steps

### Method 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from your project directory:
   ```bash
   vercel
   ```

4. Follow the prompts to:
   - Link to existing project or create new one
   - Set environment variables
   - Deploy

### Method 2: Deploy via GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and create a new project
3. Import your GitHub repository
4. Configure environment variables in the Vercel dashboard
5. Deploy

## Configuration Files

The following files have been created/modified for Vercel deployment:

- `vercel.json` - Vercel configuration
- `api/index.ts` - Serverless function entry point
- `server/vercelAuth.ts` - Vercel-compatible authentication setup
- `server/vercelRoutes.ts` - Vercel-compatible routes
- `package.json` - Updated build scripts
- `deploy.sh` / `deploy.bat` - Deployment scripts

## Authentication Setup

The application has been configured with a simplified authentication system for Vercel deployment:

- **Current Setup**: Uses mock authentication for development/testing
- **Session Storage**: Uses PostgreSQL session store when DATABASE_URL is available
- **OAuth**: Currently returns placeholder responses (you can implement your preferred OAuth provider)

### To implement proper authentication:

1. **Option 1: Keep Replit OAuth**
   - Set the required Replit environment variables in Vercel
   - Update `server/vercelAuth.ts` to use the original Replit authentication

2. **Option 2: Switch to another OAuth provider**
   - Implement Google OAuth, GitHub OAuth, or another provider
   - Update the authentication logic in `server/vercelAuth.ts`

3. **Option 3: Use API key authentication**
   - Implement API key-based authentication for server-to-server communication

## Post-Deployment

1. Set up your environment variables in the Vercel dashboard
2. Run database migrations if needed
3. Test your application

## Troubleshooting

### Common Issues

1. **Database Connection Errors**: Make sure your `DATABASE_URL` is correct and your Neon database is accessible
2. **Build Errors**: Check that all dependencies are properly installed
3. **Environment Variables**: Ensure all required environment variables are set in Vercel

### Getting Help

- Check Vercel deployment logs in the dashboard
- Review the Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
- Check your application logs for specific errors 