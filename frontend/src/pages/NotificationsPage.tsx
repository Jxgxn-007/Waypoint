import { Bell } from "lucide-react"
import { PageHeader } from "@/components/common/PageHeader"
import { PlaceholderCard } from "@/components/common/PlaceholderCard"

export function NotificationsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Notifications"
        description="Stay up to date with task handoffs, comment mentions, and project updates."
        icon={Bell}
      />
      <PlaceholderCard
        title="Activity & Alert Center"
        description="Activity inbox delivering real-time project alerts, task assignments, pull request merges, and discussion mentions."
        icon={Bell}
        plannedFeatures={[
          "Real-time event stream via Supabase Realtime",
          "Notification categorization (Assignments, Mentions, System)",
          "Mark all as read & batch archive controls",
          "Email & desktop push alert preferences",
        ]}
      />
    </div>
  )
}
