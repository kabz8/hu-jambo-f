# Faith Journey Community Platform

## Overview

This is a full-stack web application for a faith-based community platform that enables users to share testimonies, submit prayer requests, make donations, and engage in various faith-building activities. The platform is built with modern web technologies and follows a monorepo structure with separate client and server directories.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- **July 2025**: Updated site title to "Hu-jambo" across all language translations
- **July 2025**: Replaced hero image with custom mountain landscape photo showing spiritual journey theme
- **July 2025**: Completed comprehensive redesign of landing page and home dashboard with modern layouts
- **July 2025**: Fixed button styling on landing page to use proper text color (text-[#000000])
- **July 2025**: Ensured Header navigation component is available on all pages throughout the site for consistent navigation experience
- **July 2025**: Comprehensive mobile optimization with touch-friendly interfaces, responsive grids, enhanced form dialogs, and mobile-specific CSS optimizations
- **December 2024**: Updated typography to use Crimson Text font for headings and Inter for body text to better suit the faith community aesthetic
- **December 2024**: Created dedicated pages for Worship, Reading, Meditation, and Games with rich content and features
- **December 2024**: Added navigation header with desktop and mobile responsive design for easy access to all sections
- **December 2024**: Updated landing page buttons to link to dedicated pages instead of combining all content on one page
- **December 2024**: Successfully created all six separate "Along" activity pages as individual, well-designed pages with rich content
- **December 2024**: Enhanced header navigation to include "Along" pages accessible via dropdown menu for easy access
- **December 2024**: Added routing for all new "Along" pages in App.tsx for both authenticated and non-authenticated users

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Replit Auth with OpenID Connect
- **Session Management**: express-session with PostgreSQL store
- **Payment Processing**: Stripe and PayPal integration
- **Database Provider**: Neon serverless PostgreSQL

### Key Design Decisions
- **Monorepo Structure**: Client and server code are separated but share common types through the `/shared` directory
- **Type Safety**: End-to-end TypeScript with shared schemas using Drizzle and Zod
- **Authentication Strategy**: Replit Auth for seamless integration with the hosting platform
- **Database Strategy**: Serverless PostgreSQL for scalability and cost-effectiveness
- **Component Architecture**: Atomic design with reusable UI components

## Key Components

### Authentication & User Management
- Replit Auth integration with OpenID Connect
- User profiles with admin role support
- Session management with PostgreSQL store
- Protected routes and middleware

### Content Management System
- **Testimonies**: User-generated content with categories (personal, group, family, marriage)
- **Prayer Requests**: Community prayer system with categorization
- **Content Moderation**: Admin approval workflow for user-generated content
- **Multilingual Support**: Built-in internationalization for multiple languages

### Payment Integration
- **Stripe**: Credit card processing with Payment Elements
- **PayPal**: Alternative payment method support
- **Donation Tracking**: Database storage of donation records with transaction status

### UI/UX Features
- **Dark/Light Mode**: Theme switching with persistence
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Library**: shadcn/ui for consistent design system
- **Form Validation**: Client and server-side validation with Zod schemas

## Data Flow

### Authentication Flow
1. Users authenticate through Replit Auth
2. User profile is created/updated in PostgreSQL
3. Session is stored in database for persistence
4. Protected routes check authentication status

### Content Creation Flow
1. Users submit testimonies/prayer requests through forms
2. Client-side validation with Zod schemas
3. Server-side validation and database storage
4. Admin approval required before public display
5. Real-time updates via React Query

### Payment Flow
1. Users initiate donation through Stripe/PayPal
2. Payment intent created on server
3. Client handles payment confirmation
4. Server updates donation status in database
5. Success/failure feedback to user

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **@stripe/stripe-js**: Payment processing
- **@paypal/paypal-server-sdk**: Alternative payment method
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight routing

### UI/Component Dependencies
- **@radix-ui/***: Accessible component primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **react-hook-form**: Form handling
- **@hookform/resolvers**: Form validation integration

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking
- **tsx**: TypeScript execution
- **esbuild**: Fast JavaScript bundler

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds optimized React application
2. **Backend**: esbuild bundles Express server for production
3. **Database**: Drizzle generates and runs migrations
4. **Assets**: Static assets served from dist/public

### Environment Configuration
- **Development**: NODE_ENV=development with hot reloading
- **Production**: NODE_ENV=production with optimized builds
- **Database**: DATABASE_URL for PostgreSQL connection
- **Authentication**: Replit-specific environment variables
- **Payments**: Stripe and PayPal API keys

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database access
- Environment variables for API keys
- HTTPS for secure authentication and payments

### Database Management
- **Migrations**: Drizzle Kit for schema management
- **Connection Pooling**: Neon serverless handles connections
- **Schema**: Shared type definitions in `/shared/schema.ts`
- **Seeding**: Manual content creation through admin interface

This architecture provides a scalable, type-safe, and maintainable platform for faith community engagement with modern web technologies and best practices.