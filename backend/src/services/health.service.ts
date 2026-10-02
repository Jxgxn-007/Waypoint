import { config } from "../config/env"
import { HealthCheckData } from "../types"

export class HealthService {
  public static getHealthStatus(): HealthCheckData {
    return {
      status: "ok",
      uptime: process.uptime(),
      environment: config.nodeEnv,
      version: "0.1.0",
      supabase: {
        configured: config.supabase.isConfigured,
        urlConfigured: Boolean(config.supabase.url),
      },
    }
  }
}
