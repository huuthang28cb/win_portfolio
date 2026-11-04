"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  Briefcase,
  Layers,
  Cpu,
  ShieldCheck,
  Languages,
  Menu,
  X,
} from "lucide-react"

import { cn, getAssetUrl } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar({ locale, dict }: { locale: string; dict: any }) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`

  const navItems = [
    {
      href: isHome ? "#home" : `/${locale}#home`,
      label: dict.nav?.home || "Home",
      icon: Home,
    },
    {
      href: isHome ? "#experience" : `/${locale}#experience`,
      label: dict.nav?.experience || "Experience",
      icon: Briefcase,
    },
    {
      href: `/${locale}/works`,
      label: dict.nav?.works || "Projects",
      icon: Layers,
    },
    {
      href: isHome ? "#solutions" : `/${locale}#solutions`,
      label: dict.nav?.solutions || "Solutions",
      icon: Cpu,
    },
    {
      href: isHome ? "#credentials" : `/${locale}#credentials`,
      label: dict.nav?.credentials || "Credentials",
      icon: ShieldCheck,
    },
  ]

  const switchLanguage = (newLocale: string) => {
    const segments = pathname.split("/").filter(Boolean)
    if (segments.length > 0 && (segments[0] === "vi" || segments[0] === "en" || segments[0] === "ja")) {
      segments[0] = newLocale
    } else {
      segments.unshift(newLocale)
    }
    const newPath = `/${segments.join("/")}`
    const hash = typeof window !== "undefined" ? window.location.hash : ""
    window.location.href = `${getAssetUrl(newPath)}${hash}`
  }

  const currentLangLabel =
    locale === "vi"
      ? "TIẾNG VIỆT"
      : locale === "ja"
      ? "日本語"
      : "ENGLISH"

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Left: Brand / Name with Logo */}
        <Link
          href={`/${locale}`}
          className="font-bold text-lg tracking-tight text-foreground hover:text-primary transition-colors flex items-center gap-2.5 group"
        >
          <span>Võ Hữu Thắng  </span>
        </Link>

        {/* Desktop Navigation Links matching reference screenshot */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon className="h-3.5 w-3.5 opacity-70" />
                <span>{item.label}</span>
              </Link>
            )
          })}

          {/* Language Switcher button in style of '文/A ENGLISH MODE' */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 gap-1.5 px-2.5 font-semibold text-xs tracking-wide text-foreground/80 hover:text-foreground hover:bg-muted/80 rounded-md"
              >
                <Languages className="h-3.5 w-3.5 text-primary" />
                <span>{currentLangLabel}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-36 rounded-md border-border bg-popover shadow-md"
            >
              <DropdownMenuItem
                onClick={() => switchLanguage("vi")}
                className={cn(
                  "cursor-pointer font-medium text-xs",
                  locale === "vi" && "text-primary font-bold bg-accent"
                )}
              >
                🇻🇳 Tiếng Việt
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => switchLanguage("en")}
                className={cn(
                  "cursor-pointer font-medium text-xs",
                  locale === "en" && "text-primary font-bold bg-accent"
                )}
              >
                🇬🇧 English
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => switchLanguage("ja")}
                className={cn(
                  "cursor-pointer font-medium text-xs",
                  locale === "ja" && "text-primary font-bold bg-accent"
                )}
              >
                🇯🇵 日本語
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme toggle */}
          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center space-x-2">
          {/* Quick Lang Switch */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Languages className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-32">
              <DropdownMenuItem onClick={() => switchLanguage("vi")}>Tiếng Việt</DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLanguage("en")}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLanguage("ja")}>日本語</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md"
              >
                <Icon className="h-4 w-4 opacity-70" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}
