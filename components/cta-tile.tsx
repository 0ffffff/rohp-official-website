import type { ReactNode } from "react"

import { BentoTile } from "@/components/bento-tile"

interface CtaTileProps {
  title: string
  description: string
  actions: ReactNode
}

export function CtaTile({ title, description, actions }: CtaTileProps) {
  return (
    <BentoTile span={12} className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="font-heading text-xl font-semibold text-primary">{title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="flex shrink-0 flex-col gap-2 sm:flex-row">{actions}</div>
    </BentoTile>
  )
}
