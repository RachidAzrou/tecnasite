import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact messages schema
export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contactMessageSchema = createInsertSchema(contactMessages).pick({
  name: true,
  email: true,
  company: true,
  message: true,
});

export type InsertContactMessage = z.infer<typeof contactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

// Job Application Schema
export const jobApplications = pgTable("job_applications", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  position: text("position").notNull(),
  experience: text("experience"),
  message: text("message").notNull(),
  resumeFileName: text("resume_file_name"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const jobApplicationSchema = createInsertSchema(jobApplications).pick({
  name: true,
  email: true,
  phone: true,
  position: true,
  experience: true,
  message: true,
  resumeFileName: true
});

export type InsertJobApplication = z.infer<typeof jobApplicationSchema>;
export type JobApplication = typeof jobApplications.$inferSelect;
