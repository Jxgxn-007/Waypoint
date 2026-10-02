import { Outlet } from "react-router-dom"
import { Sidebar } from "./Sidebar"
import { Navbar } from "./Navbar"
import { useSidebar } from "@/hooks/useSidebar"

export function AppLayout() {
  const { isOpen, toggle, close } = useSidebar()

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} onClose={close} />

      {/* Main app column */}
      <div className="flex flex-1 flex-col min-w-0">
        <Navbar onToggleSidebar={toggle} />

        {/* Dynamic page content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="border-t border-border/60 py-4 px-6 text-center text-xs text-muted-foreground">
          <p>
            WAYPOINT Workspace &copy; {new Date().getFullYear()} &bull; Professional project management for software teams
          </p>
        </footer>
      </div>
    </div>
  )
}
