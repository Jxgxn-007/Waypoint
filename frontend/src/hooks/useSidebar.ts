import { useState, useEffect } from "react"

export function useSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  // Auto-close sidebar on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return {
    isOpen,
    toggle: () => setIsOpen((prev) => !prev),
    close: () => setIsOpen(false),
    open: () => setIsOpen(true),
  }
}
