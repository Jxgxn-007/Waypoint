import { CheckSquare } from "lucide-react"
import { PageHeader } from "@/components/common/PageHeader"
import { PlaceholderCard } from "@/components/common/PlaceholderCard"

export function TasksPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="My Tasks"
        description="Focused individual task queue across all assigned projects and bug reports."
        icon={CheckSquare}
      />
      <PlaceholderCard
        title="Task Execution"
        description="Individual execution view to prioritize sprint issues, update progress states, log time, and organize personal checklists."
        icon={CheckSquare}
        plannedFeatures={[
          "Custom filtered views (Due Today, High Priority)",
          "Status workflows (Backlog, In Progress, In Review, Done)",
          "Subtasks, checklist items, and rich descriptions",
          "Automated deadline reminders and blocker flags",
        ]}
      />
    </div>
  )
}
