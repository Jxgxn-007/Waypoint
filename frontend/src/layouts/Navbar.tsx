import { useLocation, Link } from "react-router-dom"
import { Menu, Search, Bell, Database, ExternalLink } from "lucide-react"
import { NAV_ITEMS } from "@/routes/navItems"
import { isSupabaseConfigured } from "@/lib/supabase"

interface NavbarProps {
  onToggleSidebar: () => void
}

export function Navbar({ onToggleSidebar }: NavbarProps) {
  const location = useLocation()

  // Find active nav item based on route pathname
  const currentItem = NAV_ITEMS.find((item) =>
    item.href === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(item.href)
  )

  const pageTitle = currentItem?.title || "Overview"

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-border bg-card/80 px-4 sm:px-6 backdrop-blur-md">
      {/* Left side: Mobile menu toggle + breadcrumbs */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground lg:hidden"
          aria-label="Open sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground hidden sm:inline">WAYPOINT</span>
          <span className="text-muted-foreground/50 hidden sm:inline">/</span>
          <span className="font-semibold text-foreground">{pageTitle}</span>
        </div>
      </div>

      {/* Center: Search input */}
      <div className="hidden md:flex items-center w-full max-w-sm mx-4">
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects, tasks, tickets..."
            className="w-full rounded-md border border-input bg-background/60 pl-8 pr-12 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
            readOnly
          />
          <kbd className="pointer-events-none absolute right-2.5 top-2 hidden h-4 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground sm:flex">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Right side: Actions & Supabase indicator */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Supabase status badge */}
        <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-border bg-muted/30 px-2.5 py-1 text-xs">
          <Database className="h-3.5 w-3.5 text-primary" />
          <span className="text-[11px] font-medium text-muted-foreground">
            Supabase:
          </span>
          <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {isSupabaseConfigured ? "Connected" : "Ready"}
          </span>
        </div>

        {/* Notifications button */}
        <Link
          to="/notifications"
          className="relative rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          title="Notifications"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary" />
        </Link>

        {/* Docs Link */}
        <a
          href="/docs"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground p-1.5 rounded-md transition-colors"
          title="Project Documentation"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          <span>Docs</span>
        </a>
      </div>
    </header>
  )
}
