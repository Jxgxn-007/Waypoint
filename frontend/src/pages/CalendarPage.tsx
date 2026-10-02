import { Calendar } from "lucide-react"
import { PageHeader } from "@/components/common/PageHeader"
import { PlaceholderCard } from "@/components/common/PlaceholderCard"

export function CalendarPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Calendar"
        description="Synchronized schedule for sprint milestones, code freezes, and team meetings."
        icon={Calendar}
      />
      <PlaceholderCard
        title="Schedule & Deadlines"
        description="Unified timeline view connecting task due dates, client demos, sprint checkpoints, and team syncs."
        icon={Calendar}
        plannedFeatures={[
          "Month, week, and agenda timeline views",
          "Synchronized task due dates and project milestones",
          "Client review and sprint planning scheduling",
          "Meeting link attachments and agenda notes",
        ]}
      />
    </div>
  )
}
