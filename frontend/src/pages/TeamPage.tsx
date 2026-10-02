import { Users } from "lucide-react"
import { PageHeader } from "@/components/common/PageHeader"
import { PlaceholderCard } from "@/components/common/PlaceholderCard"

export function TeamPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Team"
        description="Collaborator directory, skill specializations, and workspace access roles."
        icon={Users}
      />
      <PlaceholderCard
        title="Team Directory & Roles"
        description="Directory for engineering, design, and product team members with role-based permissions and project allocation."
        icon={Users}
        plannedFeatures={[
          "Member roster with engineering roles & titles",
          "Role-based access control (Admin, Member, Viewer)",
          "Workload capacity & active assignment visibility",
          "Direct invite and team member onboarding",
        ]}
      />
    </div>
  )
}
