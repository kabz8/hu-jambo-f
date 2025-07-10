import {
  users,
  testimonies,
  prayerRequests,
  newsletterSubscriptions,
  donations,
  content,
  type User,
  type UpsertUser,
  type Testimony,
  type InsertTestimony,
  type PrayerRequest,
  type InsertPrayerRequest,
  type NewsletterSubscription,
  type InsertNewsletterSubscription,
  type Donation,
  type InsertDonation,
  type Content,
  type InsertContent,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and } from "drizzle-orm";

export interface IStorage {
  // User operations (mandatory for Replit Auth)
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // Testimony operations
  getTestimonies(approved?: boolean): Promise<Testimony[]>;
  getTestimoniesByCategory(category: string, approved?: boolean): Promise<Testimony[]>;
  createTestimony(testimony: InsertTestimony): Promise<Testimony>;
  approveTestimony(id: number): Promise<void>;
  
  // Prayer request operations
  getPrayerRequests(approved?: boolean): Promise<PrayerRequest[]>;
  getPrayerRequestsByCategory(category: string, approved?: boolean): Promise<PrayerRequest[]>;
  createPrayerRequest(prayerRequest: InsertPrayerRequest): Promise<PrayerRequest>;
  approvePrayerRequest(id: number): Promise<void>;
  
  // Newsletter operations
  subscribeToNewsletter(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
  
  // Donation operations
  createDonation(donation: InsertDonation): Promise<Donation>;
  updateDonationStatus(id: number, status: string, transactionId?: string): Promise<void>;
  
  // Content operations
  getContentByCategory(category: string): Promise<Content[]>;
  createContent(content: InsertContent): Promise<Content>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  // Testimony operations
  async getTestimonies(approved?: boolean): Promise<Testimony[]> {
    const query = db
      .select()
      .from(testimonies)
      .orderBy(desc(testimonies.createdAt));
    
    if (approved !== undefined) {
      return query.where(eq(testimonies.isApproved, approved));
    }
    
    return query;
  }

  async getTestimoniesByCategory(category: string, approved: boolean = true): Promise<Testimony[]> {
    return db
      .select()
      .from(testimonies)
      .where(and(
        eq(testimonies.category, category as any),
        eq(testimonies.isApproved, approved)
      ))
      .orderBy(desc(testimonies.createdAt));
  }

  async createTestimony(testimony: InsertTestimony): Promise<Testimony> {
    const [newTestimony] = await db
      .insert(testimonies)
      .values(testimony)
      .returning();
    return newTestimony;
  }

  async approveTestimony(id: number): Promise<void> {
    await db
      .update(testimonies)
      .set({ isApproved: true, updatedAt: new Date() })
      .where(eq(testimonies.id, id));
  }

  // Prayer request operations
  async getPrayerRequests(approved?: boolean): Promise<PrayerRequest[]> {
    const query = db
      .select()
      .from(prayerRequests)
      .orderBy(desc(prayerRequests.createdAt));
    
    if (approved !== undefined) {
      return query.where(eq(prayerRequests.isApproved, approved));
    }
    
    return query;
  }

  async getPrayerRequestsByCategory(category: string, approved: boolean = true): Promise<PrayerRequest[]> {
    return db
      .select()
      .from(prayerRequests)
      .where(and(
        eq(prayerRequests.category, category as any),
        eq(prayerRequests.isApproved, approved)
      ))
      .orderBy(desc(prayerRequests.createdAt));
  }

  async createPrayerRequest(prayerRequest: InsertPrayerRequest): Promise<PrayerRequest> {
    const [newPrayerRequest] = await db
      .insert(prayerRequests)
      .values(prayerRequest)
      .returning();
    return newPrayerRequest;
  }

  async approvePrayerRequest(id: number): Promise<void> {
    await db
      .update(prayerRequests)
      .set({ isApproved: true, updatedAt: new Date() })
      .where(eq(prayerRequests.id, id));
  }

  // Newsletter operations
  async subscribeToNewsletter(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    const [newSubscription] = await db
      .insert(newsletterSubscriptions)
      .values(subscription)
      .returning();
    return newSubscription;
  }

  // Donation operations
  async createDonation(donation: InsertDonation): Promise<Donation> {
    const [newDonation] = await db
      .insert(donations)
      .values(donation)
      .returning();
    return newDonation;
  }

  async updateDonationStatus(id: number, status: string, transactionId?: string): Promise<void> {
    await db
      .update(donations)
      .set({ 
        status: status as any, 
        transactionId
      })
      .where(eq(donations.id, id));
  }

  // Content operations
  async getContentByCategory(category: string): Promise<Content[]> {
    return db
      .select()
      .from(content)
      .where(and(
        eq(content.category, category as any),
        eq(content.isActive, true)
      ))
      .orderBy(desc(content.createdAt));
  }

  async createContent(contentData: InsertContent): Promise<Content> {
    const [newContent] = await db
      .insert(content)
      .values(contentData)
      .returning();
    return newContent;
  }
}

export const storage = new DatabaseStorage();
