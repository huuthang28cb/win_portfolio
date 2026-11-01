import Link from "next/link"
import { Mail, MapPin, Clock, Github, Twitter, Linkedin, Facebook, ArrowLeft } from "lucide-react"
import { getDictionary } from "@/lib/i18n"
import { getProfile } from "@/lib/data"
import { ContactForm } from "@/components/contact-form"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = getDictionary(locale)
  return {
    title: dict.contact?.title || "Liên hệ",
    description: dict.contact?.subtitle,
  }
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = getDictionary(locale)
  const profile = getProfile(locale)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-10">
      <div>
        <Link
          href={`/${locale}`}
          className="academic-link inline-flex items-center gap-1 text-xs sm:text-sm font-semibold mb-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>{dict.nav?.home || "Home"}</span>
        </Link>

        <div className="academic-heading">
          <span className="academic-heading-accent">
            {locale === "vi" ? "Liên hệ" : locale === "ja" ? "連絡先" : "Contact"}
          </span>
          <span className="text-muted-foreground/60 font-normal text-base sm:text-lg ml-2">
            / Get in Touch
          </span>
        </div>

        <p className="mt-2 text-sm sm:text-base text-foreground/80 leading-relaxed max-w-2xl">
          {locale === "vi"
            ? "Mở cửa cho các cơ hội nghiên cứu, cố vấn kỹ thuật hệ thống phân tán, hoặc hợp tác kiến trúc phần mềm."
            : locale === "ja"
            ? "分散システム研究、技術顧問、またはソフトウェアアーキテクチャの共同開発に関するお問い合わせをお待ちしております。"
            : "Open for systems research collaborations, distributed architecture consulting, or engineering opportunities."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8 items-start">
        {/* Contact Form Panel */}
        <div className="p-6 rounded-xl border border-border/80 bg-card shadow-sm space-y-6">
          <h2 className="text-base font-bold text-foreground">
            {locale === "vi" ? "Gửi Tin nhắn Trực tiếp" : locale === "ja" ? "メッセージを送信" : "Send a Message"}
          </h2>
          <ContactForm dict={dict} />
        </div>

        {/* Info Sidebar */}
        <div className="space-y-4">
          <div className="p-5 rounded-xl border border-border/80 bg-muted/40 space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Email
              </span>
              <p>
                <a
                  href={`mailto:${profile.email}`}
                  className="academic-link text-sm font-mono font-medium"
                >
                  {profile.email}
                </a>
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Location
              </span>
              <p className="text-sm font-medium text-foreground">
                {profile.location}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Profiles & Links
              </span>
              <div className="flex flex-col space-y-1.5 pt-1 text-xs">
                {profile.links.github && (
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="academic-link flex items-center gap-1.5"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>GitHub: huuthangvo</span>
                  </a>
                )}
                {profile.links.facebook && (
                  <a
                    href={profile.links.facebook.startsWith("http") ? profile.links.facebook : `https://facebook.com/${profile.links.facebook}`}
                    target="_blank"
                    rel="noreferrer"
                    className="academic-link flex items-center gap-1.5"
                  >
                    <Facebook className="h-3.5 w-3.5" />
                    <span>Facebook: thangreal.1368</span>
                  </a>
                )}
                {profile.links.linkedin && (
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="academic-link flex items-center gap-1.5"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                    <span>LinkedIn Profile</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
