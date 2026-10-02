import { createClient, SupabaseClient } from "@supabase/supabase-js"
import { config } from "./env"

let supabaseClient: SupabaseClient | null = null
let supabaseAdminClient: SupabaseClient | null = null

export function getSupabase(): SupabaseClient | null {
  if (!config.supabase.isConfigured) {
    return null
  }

  if (!supabaseClient) {
    supabaseClient = createClient(
      config.supabase.url,
      config.supabase.anonKey,
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      }
    )
  }

  return supabaseClient
}

export function getSupabaseAdmin(): SupabaseClient | null {
  if (!config.supabase.isConfigured || !config.supabase.serviceRoleKey) {
    return null
  }

  if (!supabaseAdminClient) {
    supabaseAdminClient = createClient(
      config.supabase.url,
      config.supabase.serviceRoleKey,
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      }
    )
  }

  return supabaseAdminClient
}
