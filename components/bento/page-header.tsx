import Link from "next/link"

import { siteContainerClass } from "./bento-grid"

interface PageHeaderProps {
  title: string
  description?: string
  breadcrumbs?: { label: string; href?: string }[]
}

export function PageHeader({
  title,
  description,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <header className="border-b border-border bg-background py-8 md:py-12 lg:py-14">
      <div className={siteContainerClass}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-3 text-sm text-muted-foreground">
            {breadcrumbs.map((crumb, index) => (
              <span key={`${crumb.label}-${index}`}>
                {index > 0 && " / "}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="cursor-pointer transition-colors duration-200 hover:text-primary"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  crumb.label
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-heading text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight text-balance text-primary">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-prose text-base text-pretty text-muted-foreground md:mt-4 md:text-lg">
            {description}
          </p>
        )}
      </div>
    </header>
  )
}
