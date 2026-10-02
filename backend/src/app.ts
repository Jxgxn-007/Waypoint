import express, { Application, Request, Response } from "express"
import cors from "cors"
import { config } from "./config/env"
import { requestLogger } from "./middleware/requestLogger"
import { errorHandler } from "./middleware/errorHandler"
import { notFoundHandler } from "./middleware/notFound"
import { apiRouter } from "./routes"
import { ApiResponse } from "./types"

const app: Application = express()

// Global Middlewares
app.use(
  cors({
    origin: config.corsOrigin,
    credentials: true,
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(requestLogger)

// Root Welcome Endpoint
app.get("/", (_req: Request, res: Response<ApiResponse>) => {
  res.status(200).json({
    success: true,
    message: "WAYPOINT Backend API — Foundation Active",
    data: {
      name: "WAYPOINT API",
      version: "0.1.0",
      status: "operational",
      docs: "/api/health",
    },
    timestamp: new Date().toISOString(),
  })
})

// API Router Prefix
app.use("/api", apiRouter)

// 404 and Error Handling
app.use(notFoundHandler)
app.use(errorHandler)

export default app
