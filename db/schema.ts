
import {
  unique,
  serial,
  text,
  boolean,
  uuid,
  timestamp,
  integer,
  pgTable,
  primaryKey,
} from "drizzle-orm/pg-core";

// Posts table
export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  text: text("text").notNull(),
  imageUrl: text("image_url")
    .notNull()
    .default("https://picsum.photos/300/200"),
});
export type Post = typeof posts.$inferSelect;

// Users table
export const users = pgTable("users", {
  id: uuid("id").primaryKey(),
  isSubscribed: boolean("is_subscribed").notNull().default(false),
});
export type DBUser = typeof users.$inferSelect;

// Subscriptions table
export const subscriptions = pgTable("subscriptions", {
  id: serial("id").primaryKey(),
  userId: uuid("user_id").notNull().references(() => users.id),
  stripeCustomerId: text("stripe_customer_id").notNull(),
  stripeSubscriptionId: text("stripe_subscription_id").notNull(),
  status: text("status").notNull(), // 'active', 'incomplete', etc.
  priceId: text("price_id"),
  quantity: integer("quantity"),
  cancelAtPeriodEnd: boolean("cancel_at_period_end"),
  currentPeriodStart: timestamp("current_period_start", { withTimezone: true }),
  currentPeriodEnd: timestamp("current_period_end", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});
export type Subscription = typeof subscriptions.$inferSelect;

// Lessons Completed table
export const lessonCompletions = pgTable(
  "lesson_completions",
  {
    id: serial("id").primaryKey(),
    userId: uuid("user_id").notNull().references(() => users.id),
    lessonId: text("lesson_id").notNull(),
    score: integer("score").notNull(),
    completedAt: timestamp("completed_at", { withTimezone: true }).defaultNow(),
  },
  (table) => ({
    uniqueUserLesson: unique().on(table.userId, table.lessonId),
  })
);
export type LessonCompletion = typeof lessonCompletions.$inferSelect;


export const lessonReviews = pgTable(
  "lesson_reviews",
  {
    id: serial("id").primaryKey(),
    userId: uuid("user_id").notNull().references(() => users.id),
    lessonId: text("lesson_id").notNull(),
    level: integer("level").notNull().default(0), // Level for spaced repetition
    lastReviewed: timestamp("last_reviewed", { withTimezone: true }).defaultNow(),
    nextReview: timestamp("next_review", { withTimezone: true }).notNull(),
    score: integer("score").notNull(),
  },
  (table) => ({
    uniqueUserLesson: unique().on(table.userId, table.lessonId), // Ensures each user can have only one review per lesson
  })
);
export type LessonReview = typeof lessonReviews.$inferSelect;