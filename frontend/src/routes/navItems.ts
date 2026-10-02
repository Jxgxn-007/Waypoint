import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Ticket,
  Users,
  Calendar,
  Bell,
  Settings,
} from "lucide-react"
import { NavItem } from "@/types"

export const NAV_ITEMS: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
    description: "Overview of workspace activity, key metrics, and active deliverables.",
  },
  {
    title: "Projects",
    href: "/projects",
    icon: FolderKanban,
    description: "Manage client projects, milestones, timelines, and progress.",
  },
  {
    title: "My Tasks",
    href: "/tasks",
    icon: CheckSquare,
    description: "Personal tasks, assigned deliverables, and upcoming due dates.",
  },
  {
    title: "Tickets",
    href: "/tickets",
    icon: Ticket,
    description: "Client support tickets, bugs, requests, and triage resolution.",
  },
  {
    title: "Team",
    href: "/team",
    icon: Users,
    description: "Workspace members, roles, availability, and collaborative assignments.",
  },
  {
    title: "Calendar",
    href: "/calendar",
    icon: Calendar,
    description: "Sprint deadlines, client reviews, milestones, and team meetings.",
  },
  {
    title: "Notifications",
    href: "/notifications",
    icon: Bell,
    description: "Real-time updates on assignments, project alerts, and mentions.",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
    description: "Workspace configuration, member permissions, integrations, and preferences.",
  },
]
