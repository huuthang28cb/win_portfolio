import Link from "next/link"
import { ArrowUp } from "lucide-react"

export function Footer({ locale, dict }: { locale: string; dict: any }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border/70 bg-background/50 py-10 mt-16 text-xs text-muted-foreground">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p>
            © {currentYear} Win Nguyen (Nguyễn Thắng). {dict.footer?.rights || "All rights reserved."}
          </p>
          <p className="mt-1 text-[11px] text-muted-foreground/80">
            {dict.footer?.tagline || "Designed for clarity, engineered for extreme performance."}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link href={`/${locale}`} className="hover:text-foreground transition-colors">
            {dict.nav?.home || "Home"}
          </Link>
          <span>•</span>
          <Link href={`/${locale}/works`} className="hover:text-foreground transition-colors">
            {dict.nav?.works || "Projects"}
          </Link>
          <span>•</span>
          <a
            href="#home"
            className="flex items-center gap-1 hover:text-foreground transition-colors font-medium text-primary"
          >
            <ArrowUp className="h-3.5 w-3.5" />
            <span>{dict.footer?.top || "Top"}</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
