import type { ReactNode } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

const spanClasses = {
  3: "col-span-12 md:col-span-6 lg:col-span-3",
  4: "col-span-12 md:col-span-6 lg:col-span-4",
  5: "col-span-12 lg:col-span-5",
  6: "col-span-12 lg:col-span-6",
  7: "col-span-12 lg:col-span-7",
  8: "col-span-12 lg:col-span-8",
  12: "col-span-12",
} as const

const variantClasses = {
  default: "bg-muted",
  primary: "bg-primary text-primary-foreground border-primary",
  accent: "bg-accent text-accent-foreground border-accent",
  ghost: "bg-background",
  image: "bg-muted p-0 min-h-0",
} as const

/** Minimum heights — use sparingly; prefer size="auto" so cells hug content. */
const sizeClasses = {
  auto: "",
  sm: "min-h-[120px]",
  md: "min-h-[168px]",
  lg: "min-h-[240px]",
  xl: "min-h-[320px]",
} as const

type BentoSpan = keyof typeof spanClasses
type BentoVariant = keyof typeof variantClasses
type BentoSize = keyof typeof sizeClasses

interface BentoTileProps {
  children: ReactNode
  span?: BentoSpan
  variant?: BentoVariant
  /** auto = height from content (default). sm–xl = minimum height for hero/feature tiles only. */
  size?: BentoSize
  /** Stretch to fill the grid row when parent BentoGrid has stretch enabled. */
  fill?: boolean
  href?: string
  interactive?: boolean
  className?: string
}

export function BentoTile({
  children,
  span = 4,
  variant = "default",
  size = "auto",
  fill = false,
  href,
  interactive,
  className,
}: BentoTileProps) {
  const isInteractive = interactive ?? Boolean(href)

  const classes = cn(
    "group relative overflow-hidden rounded-2xl border border-border p-4 md:p-5",
    spanClasses[span],
    variantClasses[variant],
    size !== "auto" && variant !== "image" && sizeClasses[size],
    fill && "flex h-full flex-col",
    isInteractive &&
      "cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:scale-100",
    className,
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return <div className={classes}>{children}</div>
}
