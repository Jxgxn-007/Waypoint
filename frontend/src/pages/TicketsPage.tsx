import { Ticket } from "lucide-react"
import { PageHeader } from "@/components/common/PageHeader"
import { PlaceholderCard } from "@/components/common/PlaceholderCard"

export function TicketsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Tickets"
        description="Centralized bug reporting, client requests, and technical support triage."
        icon={Ticket}
      />
      <PlaceholderCard
        title="Ticket & Bug Tracking"
        description="Streamlined ticket system to log customer issues, assign severity levels, attach crash traces, and resolve blocking bugs."
        icon={Ticket}
        plannedFeatures={[
          "Priority queues (Critical, High, Medium, Low)",
          "Client request portal and intake forms",
          "Resolution lifecycle with SLA tracking",
          "Automated notification triggers upon status updates",
        ]}
      />
    </div>
  )
}
