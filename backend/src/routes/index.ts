import { Router } from "express"
import { healthRoutes } from "./health.routes"

const apiRouter = Router()

// System and health routes
apiRouter.use("/health", healthRoutes)

export { apiRouter }
