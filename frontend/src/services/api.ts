/**
 * API Service Client for WAYPOINT Backend
 */
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api"

export async function checkBackendHealth(): Promise<{ status: string; timestamp: string }> {
  try {
    const res = await fetch(`${BASE_URL}/health`)
    if (!res.ok) {
      throw new Error(`Health check failed with status: ${res.status}`)
    }
    return await res.json()
  } catch (error) {
    console.warn("Backend health check failed:", error)
    return { status: "offline", timestamp: new Date().toISOString() }
  }
}
