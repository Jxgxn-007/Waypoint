import dotenv from "dotenv"
import { AppConfig } from "../types"

// Load environment variables from .env file
dotenv.config()

const port = parseInt(process.env.PORT || "5000", 10)
const nodeEnv = (process.env.NODE_ENV || "development") as AppConfig["nodeEnv"]
const corsOrigin = process.env.CORS_ORIGIN || "http://localhost:5173"

const supabaseUrl = process.env.SUPABASE_URL || ""
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || ""
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ""

const isSupabaseConfigured = Boolean(
  supabaseUrl &&
    supabaseUrl !== "https://your-project.supabase.co" &&
    supabaseAnonKey &&
    supabaseAnonKey !== "your-anon-key-here"
)

export const config: AppConfig = {
  port: isNaN(port) ? 5000 : port,
  nodeEnv,
  corsOrigin,
  supabase: {
    url: supabaseUrl,
    anonKey: supabaseAnonKey,
    serviceRoleKey: supabaseServiceRoleKey,
    isConfigured: isSupabaseConfigured,
  },
}
