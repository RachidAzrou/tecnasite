import { users, type User, type InsertUser, type ContactMessage, type InsertContactMessage, type JobApplication, type InsertJobApplication } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  createJobApplication(application: InsertJobApplication): Promise<JobApplication>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  private jobApplications: Map<number, JobApplication>;
  userCurrentId: number;
  contactCurrentId: number;
  jobApplicationCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.jobApplications = new Map();
    this.userCurrentId = 1;
    this.contactCurrentId = 1;
    this.jobApplicationCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.contactCurrentId++;
    const now = new Date();
    const contactMessage: ContactMessage = { 
      ...message, 
      id, 
      createdAt: now 
    };
    this.contactMessages.set(id, contactMessage);
    return contactMessage;
  }

  async createJobApplication(application: InsertJobApplication): Promise<JobApplication> {
    const id = this.jobApplicationCurrentId++;
    const now = new Date();
    const jobApplication: JobApplication = {
      ...application,
      id,
      createdAt: now,
      phone: application.phone || null,
      experience: application.experience || null,
      resumeFileName: application.resumeFileName || null
    };
    this.jobApplications.set(id, jobApplication);
    return jobApplication;
  }
}

export const storage = new MemStorage();
