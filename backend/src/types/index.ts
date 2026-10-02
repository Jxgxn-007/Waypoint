export interface ApiResponse<T = unknown> {
  success: boolean
  message?: string
  data?: T
  error?: string
  timestamp: string
}

export interface HealthCheckData {
  status: "ok" | "degraded" | "error"
  uptime: number
  environment: string
  version: string
  supabase: {
    configured: boolean
    urlConfigured: boolean
  }
}

export interface AppConfig {
  port: number
  nodeEnv: "development" | "production" | "test"
  corsOrigin: string
  supabase: {
    url: string
    anonKey: string
    serviceRoleKey: string
    isConfigured: boolean
  }
}
