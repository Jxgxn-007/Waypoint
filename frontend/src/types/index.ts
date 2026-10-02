import { LucideIcon } from "lucide-react"

export interface NavItem {
  title: string
  href: string
  icon: LucideIcon
  badge?: string | number
  description?: string
}

export interface WorkspaceInfo {
  name: string
  tagline: string
  plan: string
}

export interface CurrentUser {
  id: string
  name: string
  email: string
  role: string
  avatarUrl?: string
}
