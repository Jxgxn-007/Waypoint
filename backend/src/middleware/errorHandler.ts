import { Request, Response, NextFunction } from "express"
import { logger } from "../utils/logger"
import { ApiResponse } from "../types"

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response<ApiResponse>,
  _next: NextFunction
): void {
  logger.error("Unhandled error encountered:", err.stack || err.message)

  const isProduction = process.env.NODE_ENV === "production"

  res.status(500).json({
    success: false,
    error: isProduction ? "Internal server error" : err.message,
    timestamp: new Date().toISOString(),
  })
}
