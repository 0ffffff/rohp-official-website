"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

function isActiveRoute(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/"
  }
  return pathname.startsWith(href)
}

const SCROLL_THRESHOLD = 48

export function Navigation() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const showBar = !isHome || isScrolled || isOpen

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(false)
      return
    }

    const updateScroll = (scrollY = window.scrollY) => {
      setIsScrolled(scrollY > SCROLL_THRESHOLD)
    }

    const onNativeScroll = () => updateScroll()

    const onLenisScroll = (event: Event) => {
      const detail = (event as CustomEvent<{ scrollY: number }>).detail
      updateScroll(detail.scrollY)
    }

    updateScroll()
    window.addEventListener("scroll", onNativeScroll, { passive: true })
    window.addEventListener("rohp:scroll", onLenisScroll)
    return () => {
      window.removeEventListener("scroll", onNativeScroll)
      window.removeEventListener("rohp:scroll", onLenisScroll)
    }
  }, [isHome])

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
    <nav
      className={cn(
        "sticky top-0 z-50 w-full transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 motion-reduce:transition-none md:top-4 md:mx-auto md:max-w-screen-2xl md:px-2",
        showBar
          ? "border-b border-border bg-background/80 shadow-sm backdrop-blur-sm md:rounded-2xl md:border"
          : "border-b border-transparent bg-transparent",
      )}
    >
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
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-200 md:hidden",
            isOpen ? "max-h-96 border-t border-border opacity-100" : "max-h-0 opacity-0",
          )}
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
