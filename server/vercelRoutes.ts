import type { Express } from "express";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./vercelAuth";
import { insertTestimonySchema, insertPrayerRequestSchema, insertNewsletterSubscriptionSchema, insertDonationSchema } from "@shared/schema";
import Stripe from "stripe";
import { z } from "zod";

// Initialize Stripe
const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : null;

export async function registerRoutes(app: Express) {
  // Auth middleware
  await setupAuth(app);

  // Auth routes
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

  // Testimony routes
  app.get('/api/testimonies', async (req, res) => {
    try {
      const { category, approved } = req.query;
      let testimonies;
      
      if (category) {
        testimonies = await storage.getTestimoniesByCategory(category as string, approved !== 'false');
      } else {
        testimonies = await storage.getTestimonies(approved !== 'false');
      }
      
      res.json(testimonies);
    } catch (error) {
      console.error("Error fetching testimonies:", error);
      res.status(500).json({ message: "Failed to fetch testimonies" });
    }
  });

  app.post('/api/testimonies', isAuthenticated, async (req: any, res) => {
    try {
      const userId = "mock-user-id"; // For now, use mock user ID
      const testimonyData = insertTestimonySchema.parse({ ...req.body, userId });
      
      const testimony = await storage.createTestimony(testimonyData);
      res.status(201).json(testimony);
    } catch (error) {
      console.error("Error creating testimony:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid testimony data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create testimony" });
    }
  });

  app.post('/api/testimonies/:id/approve', isAuthenticated, async (req: any, res) => {
    try {
      // For now, allow all users to approve (you can implement proper admin check)
      const testimonyId = parseInt(req.params.id);
      await storage.approveTestimony(testimonyId);
      res.json({ message: "Testimony approved" });
    } catch (error) {
      console.error("Error approving testimony:", error);
      res.status(500).json({ message: "Failed to approve testimony" });
    }
  });

  // Prayer request routes
  app.get('/api/prayer-requests', async (req, res) => {
    try {
      const { category, approved } = req.query;
      let prayerRequests;
      
      if (category) {
        prayerRequests = await storage.getPrayerRequestsByCategory(category as string, approved !== 'false');
      } else {
        prayerRequests = await storage.getPrayerRequests(approved !== 'false');
      }
      
      res.json(prayerRequests);
    } catch (error) {
      console.error("Error fetching prayer requests:", error);
      res.status(500).json({ message: "Failed to fetch prayer requests" });
    }
  });

  app.post('/api/prayer-requests', isAuthenticated, async (req: any, res) => {
    try {
      const userId = "mock-user-id"; // For now, use mock user ID
      const prayerRequestData = insertPrayerRequestSchema.parse({ ...req.body, userId });
      
      const prayerRequest = await storage.createPrayerRequest(prayerRequestData);
      res.status(201).json(prayerRequest);
    } catch (error) {
      console.error("Error creating prayer request:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid prayer request data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create prayer request" });
    }
  });

  app.post('/api/prayer-requests/:id/approve', isAuthenticated, async (req: any, res) => {
    try {
      // For now, allow all users to approve (you can implement proper admin check)
      const prayerRequestId = parseInt(req.params.id);
      await storage.approvePrayerRequest(prayerRequestId);
      res.json({ message: "Prayer request approved" });
    } catch (error) {
      console.error("Error approving prayer request:", error);
      res.status(500).json({ message: "Failed to approve prayer request" });
    }
  });

  // Newsletter subscription route
  app.post('/api/newsletter/subscribe', async (req, res) => {
    try {
      const subscriptionData = insertNewsletterSubscriptionSchema.parse(req.body);
      const subscription = await storage.subscribeToNewsletter(subscriptionData);
      res.status(201).json(subscription);
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid email address", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to subscribe to newsletter" });
    }
  });

  // Content routes
  app.get('/api/content/:category', async (req, res) => {
    try {
      const { category } = req.params;
      const content = await storage.getContentByCategory(category);
      res.json(content);
    } catch (error) {
      console.error("Error fetching content:", error);
      res.status(500).json({ message: "Failed to fetch content" });
    }
  });

  // Donation routes
  app.post("/api/create-payment-intent", isAuthenticated, async (req: any, res) => {
    if (!stripe) {
      return res.status(500).json({ message: "Stripe not configured" });
    }

    try {
      const { amount } = req.body;
      const userId = "mock-user-id"; // For now, use mock user ID
      
      if (!amount || amount <= 0) {
        return res.status(400).json({ message: "Invalid amount" });
      }

      // Create donation record
      const donation = await storage.createDonation({
        userId,
        amount: Math.round(amount * 100), // Convert to cents
        currency: "usd",
        paymentMethod: "stripe",
      });

      // Create Stripe payment intent
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100),
        currency: "usd",
        metadata: {
          donationId: donation.id.toString(),
        },
      });

      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error: any) {
      console.error("Error creating payment intent:", error);
      res.status(500).json({ message: "Error creating payment intent: " + error.message });
    }
  });

  // Webhook to handle payment confirmations
  app.post('/api/webhooks/stripe', async (req, res) => {
    if (!stripe) {
      return res.status(500).json({ message: "Stripe not configured" });
    }

    try {
      const event = stripe.webhooks.constructEvent(
        req.body,
        req.headers['stripe-signature']!,
        process.env.STRIPE_WEBHOOK_SECRET || ''
      );

      if (event.type === 'payment_intent.succeeded') {
        const paymentIntent = event.data.object;
        const donationId = paymentIntent.metadata.donationId;
        
        if (donationId) {
          await storage.updateDonationStatus(
            parseInt(donationId),
            'completed',
            paymentIntent.id
          );
        }
      }

      res.json({ received: true });
    } catch (error) {
      console.error("Webhook error:", error);
      res.status(400).json({ message: "Webhook error" });
    }
  });
} 