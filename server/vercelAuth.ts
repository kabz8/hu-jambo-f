import session from "express-session";
import type { Express, RequestHandler } from "express";
import connectPg from "connect-pg-simple";
import { storage } from "./storage";

// For Vercel deployment, we'll use a simpler session setup
// You can extend this to support multiple OAuth providers

export function getSession() {
  const sessionTtl = 7 * 24 * 60 * 60 * 1000; // 1 week
  
  // Use PostgreSQL session store if DATABASE_URL is available
  if (process.env.DATABASE_URL) {
    const pgStore = connectPg(session);
    const sessionStore = new pgStore({
      conString: process.env.DATABASE_URL,
      createTableIfMissing: false,
      ttl: sessionTtl,
      tableName: "sessions",
    });
    
    return session({
      secret: process.env.SESSION_SECRET!,
      store: sessionStore,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: sessionTtl,
        sameSite: "lax" as const,
      },
    });
  }
  
  // Fallback to memory store for development
  return session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: sessionTtl,
      sameSite: "lax" as const,
    },
  });
}

// Simple authentication middleware for development/testing
export const isAuthenticated: RequestHandler = async (req, res, next) => {
  // For now, we'll allow all requests through
  // You can implement proper authentication here
  // For example, check for a valid session or API key
  
  // If you want to require authentication, uncomment the following:
  /*
  if (!req.session.userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  */
  
  next();
};

// Setup basic auth routes
export async function setupAuth(app: Express) {
  app.use(getSession());
  
  // Basic auth routes for development
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      // For now, return a mock user
      // You can implement proper user fetching here
      res.json({
        id: "mock-user-id",
        email: "user@example.com",
        firstName: "Test",
        lastName: "User",
        isAdmin: false
      });
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });
  
  app.get('/api/login', (req, res) => {
    // Redirect to your preferred OAuth provider
    // For now, just return a message
    res.json({ message: "Please implement OAuth login" });
  });
  
  app.get('/api/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Error logging out" });
      }
      res.json({ message: "Logged out successfully" });
    });
  });
} 