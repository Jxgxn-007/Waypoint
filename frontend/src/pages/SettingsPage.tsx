import { Settings } from "lucide-react"
import { PageHeader } from "@/components/common/PageHeader"
import { PlaceholderCard } from "@/components/common/PlaceholderCard"

export function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Settings"
        description="Configure workspace preferences, integrations, notifications, and security."
        icon={Settings}
      />
      <PlaceholderCard
        title="Workspace Configuration"
        description="Comprehensive workspace administration including client branding, authentication providers, webhook integrations, and export options."
        icon={Settings}
        plannedFeatures={[
          "Team workspace name, logo, and slug settings",
          "Supabase Auth & session configuration",
          "Webhook and third-party developer integrations",
          "Workspace audit logs and data export",
        ]}
      />
    </div>
  )
}
