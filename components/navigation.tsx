"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

function isActiveRoute(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/"
  }
  return pathname.startsWith(href)
}

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/agenda", label: "Agenda" },
    { href: "/faq", label: "FAQ" },
    { href: "/housing", label: "Housing Tours" },
    { href: "/committee", label: "Committee" },
  ]

  const linkClassName = (href: string) =>
    isActiveRoute(pathname, href)
      ? "text-sm font-semibold text-primary cursor-pointer"
      : "text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 cursor-pointer"

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm md:top-4 md:mx-auto md:max-w-screen-2xl md:rounded-2xl md:border md:px-2">
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex cursor-pointer items-center space-x-2">
            <img
              src="/rohp-logo.png"
              alt="ROHP Logo"
              className="h-8 w-8 object-contain"
            />
            <div className="font-heading text-xl font-bold text-primary">ROHP</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkClassName(item.href)}
                aria-current={isActiveRoute(pathname, item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild>
              <Link href="/registration" className="cursor-pointer">
                Register Now
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="cursor-pointer md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden transition-all duration-200 md:hidden ${
            isOpen ? "max-h-96 border-t opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!isOpen}
          {...(!isOpen ? { inert: true } : {})}
        >
          <div className="flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkClassName(item.href)}
                aria-current={isActiveRoute(pathname, item.href) ? "page" : undefined}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="w-full">
              <Link href="/registration" className="cursor-pointer" onClick={() => setIsOpen(false)}>
                Register Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
