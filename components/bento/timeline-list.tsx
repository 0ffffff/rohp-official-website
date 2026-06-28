import { cn } from "@/lib/utils"

export type TimelineItem = {
  time: string
  title: string
  description: string
  highlight?: "primary" | "accent"
}

interface TimelineListProps {
  items: TimelineItem[]
  className?: string
}

export function TimelineList({ items, className }: TimelineListProps) {
  return (
    <ol className={cn("divide-y divide-border", className)}>
      {items.map((item) => (
        <li
          key={`${item.time}-${item.title}`}
          className={cn(
            "flex gap-4 py-3 first:pt-0 last:pb-0",
            item.highlight === "primary" && "rounded-xl bg-brand/10 px-3 -mx-3",
            item.highlight === "accent" && "rounded-xl bg-accent/10 px-3 -mx-3",
          )}
        >
          <time
            className={cn(
              "w-16 shrink-0 pt-0.5 text-xs font-semibold tabular-nums",
              item.highlight ? "text-primary" : "text-muted-foreground",
            )}
          >
            {item.time}
          </time>
          <div className="min-w-0 flex-1">
            <h3
              className={cn(
                "font-heading text-sm font-semibold",
                item.highlight === "primary" && "text-primary",
                item.highlight === "accent" && "text-accent-foreground",
              )}
            >
              {item.title}
            </h3>
            <p
              className={cn(
                "mt-0.5 text-sm",
                item.highlight ? "text-muted-foreground" : "text-muted-foreground",
              )}
            >
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  )
}
