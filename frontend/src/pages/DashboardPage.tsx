import { LayoutDashboard } from "lucide-react"
import { PageHeader } from "@/components/common/PageHeader"
import { PlaceholderCard } from "@/components/common/PlaceholderCard"

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        description="Unified hub for active client deliverables, workspace health, and project metrics."
        icon={LayoutDashboard}
      />
      <PlaceholderCard
        title="Workspace Overview"
        description="The primary command center for your software team to observe ongoing sprints, track project velocity, and prioritize daily objectives."
        icon={LayoutDashboard}
        plannedFeatures={[
          "Live sprint and project progress gauges",
          "Recent team activity and status feed",
          "Urgent tickets and overdue task highlights",
          "Personalized daily workload digest",
        ]}
      />
    </div>
  )
}
