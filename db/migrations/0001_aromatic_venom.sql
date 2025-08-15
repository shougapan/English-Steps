CREATE TABLE "lesson_reviews" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"lesson_id" text NOT NULL,
	"level" integer DEFAULT 0 NOT NULL,
	"last_reviewed" timestamp with time zone DEFAULT now(),
	"next_review" timestamp with time zone NOT NULL,
	"score" integer NOT NULL,
	CONSTRAINT "lesson_reviews_user_id_lesson_id_unique" UNIQUE("user_id","lesson_id")
);
--> statement-breakpoint
ALTER TABLE "lesson_reviews" ADD CONSTRAINT "lesson_reviews_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;