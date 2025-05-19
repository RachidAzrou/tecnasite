import * as React from "react"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"
import { Link } from "wouter"

interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {
  segments: {
    name: string
    href: string
  }[]
  separator?: React.ReactNode
  home?: boolean
}

export function Breadcrumb({
  segments,
  separator = <ChevronRight className="h-4 w-4" />,
  home = true,
  className,
  ...props
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="breadcrumb"
      className={cn("flex items-center text-sm text-neutral-light", className)}
      {...props}
    >
      <ol className="flex items-center gap-1.5">
        {home && (
          <li>
            <Link
              to="/"
              className="flex items-center gap-1 text-neutral-light hover:text-tecnarit-lime transition-colors duration-200"
            >
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
        )}
        {segments.map((segment, index) => (
          <React.Fragment key={segment.href}>
            {index > 0 || home ? (
              <li className="text-neutral-light" aria-hidden="true">
                {separator}
              </li>
            ) : null}
            <li key={`li-${segment.href}`}>
              {index === segments.length - 1 ? (
                <span aria-current="page" className="font-medium text-tecnarit-lime">
                  {segment.name}
                </span>
              ) : (
                <Link
                  to={segment.href}
                  className="text-neutral-light hover:text-tecnarit-lime transition-colors duration-200"
                >
                  {segment.name}
                </Link>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  )
}