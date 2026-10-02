import { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PlaceholderCardProps {
  title: string
  description: string
  icon: LucideIcon
  plannedFeatures: string[]
}

export function PlaceholderCard({
  title,
  description,
  icon: Icon,
  plannedFeatures,
}: PlaceholderCardProps) {
  return (
    <Card className="border-border/80 shadow-sm bg-card/50">
      <CardContent className="p-8 sm:p-12 flex flex-col items-center text-center">
        <div className="h-14 w-14 rounded-2xl bg-muted/80 border border-border/80 flex items-center justify-center text-foreground/80 mb-5 shadow-xs">
          <Icon className="h-7 w-7 stroke-[1.75]" />
        </div>
        <div className="inline-flex items-center gap-1.5 mb-2">
          <Badge variant="secondary" className="font-mono text-[11px] tracking-wide uppercase px-2 py-0.5">
            Module Shell
          </Badge>
          <span className="text-xs text-muted-foreground">• Ready for integration</span>
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground mb-2">
          {title}
        </h2>
        <p className="text-sm text-muted-foreground max-w-lg mb-8 leading-relaxed">
          {description}
        </p>

        <div className="w-full max-w-xl rounded-lg border border-dashed border-border/80 bg-background/50 p-6 text-left">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Planned Capabilities for this Module
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-foreground/80">
            {plannedFeatures.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
