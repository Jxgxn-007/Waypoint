import app from "./app"
import { config } from "./config/env"
import { logger } from "./utils/logger"

const server = app.listen(config.port, () => {
  logger.info(`==================================================`)
  logger.info(`  WAYPOINT API Server active on port ${config.port}`)
  logger.info(`  Environment: ${config.nodeEnv}`)
  logger.info(`  Health Check: http://localhost:${config.port}/api/health`)
  logger.info(`  CORS Origin: ${config.corsOrigin}`)
  logger.info(`==================================================`)
})

// Graceful Shutdown Handlers
function shutdown(signal: string) {
  logger.info(`Received ${signal}. Shutting down WAYPOINT server gracefully...`)
  server.close(() => {
    logger.info("HTTP server closed. Exiting process.")
    process.exit(0)
  })
}

process.on("SIGINT", () => shutdown("SIGINT"))
process.on("SIGTERM", () => shutdown("SIGTERM"))
