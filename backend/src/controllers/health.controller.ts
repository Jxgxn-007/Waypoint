import { Request, Response } from "express"
import { HealthService } from "../services/health.service"
import { ApiResponse, HealthCheckData } from "../types"

export class HealthController {
  public static checkHealth(_req: Request, res: Response<ApiResponse<HealthCheckData>>): void {
    const healthData = HealthService.getHealthStatus()

    res.status(200).json({
      success: true,
      message: "WAYPOINT API is running smoothly",
      data: healthData,
      timestamp: new Date().toISOString(),
    })
  }
}
