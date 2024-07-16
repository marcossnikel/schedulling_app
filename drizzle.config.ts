import { defineConfig } from "drizzle-kit";
import { env } from "./env";
export default defineConfig({
  dialect: "sqlite",
  schema: "./src/db/schema.ts",
  driver: "turso",
  dbCredentials: {
    url: env.TURSO_DATABASE_URL,
    authToken: env.TURSO_AUTH_TOKEN,
  },
});
