import * as dotenv from "dotenv";
dotenv.config({ override: true });

/**
 * Create a .env.local file for secrets 
 */
dotenv.config({ path:'.env.local', override: true });

export const CONFIG = {
  PORT: process.env.PORT ? process.env.PORT : 3000,
} as const;
