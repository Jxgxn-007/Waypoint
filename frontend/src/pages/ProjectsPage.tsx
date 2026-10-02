import { FolderKanban } from "lucide-react"
import { PageHeader } from "@/components/common/PageHeader"
import { PlaceholderCard } from "@/components/common/PlaceholderCard"

export function ProjectsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Projects"
        description="Organize and monitor all client client engagements, deliverables, and timelines."
        icon={FolderKanban}
      />
      <PlaceholderCard
        title="Project Management"
        description="Structured portfolio view for managing client scopes, milestones, deadlines, and team assignments across all active products."
        icon={FolderKanban}
        plannedFeatures={[
          "Custom project boards (Kanban & List views)",
          "Milestone and deliverable phase tracking",
          "Client association and stakeholder contacts",
          "Repository and resource link management",
        ]}
      />
    </div>
  )
}
