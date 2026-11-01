import Link from "next/link"
import { ArrowRight, Code2, Briefcase, Download, ArrowLeft } from "lucide-react"
import { getProfile, getExperiences, getSkills } from "@/lib/data"
import { getDictionary } from "@/lib/i18n"
import { OrgLogo } from "@/components/home/org-logo"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (locale === "vi") return { title: "Giới thiệu & Quá trình Công tác" }
  if (locale === "ja") return { title: "プロフィール & 経歴概要" }
  return { title: "About & Professional Journey" }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const profile = getProfile(locale)
  const experiences = getExperiences(locale)
  const skills = getSkills(locale)
  const dict = getDictionary(locale)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-12">
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
            {dict.sections?.experience_kanji || "关于"}
          </span>
          <span className="text-muted-foreground/60 font-normal text-base sm:text-lg ml-2">
            / {profile.name}
          </span>
        </div>

        <p className="mt-4 text-base sm:text-lg text-foreground/90 leading-relaxed font-medium">
          {profile.headline}
        </p>
        <p className="mt-3 text-sm sm:text-base text-foreground/80 leading-relaxed">
          {profile.bio}
        </p>
      </div>

      {/* Experience Timeline */}
      <section className="space-y-6 pt-4 border-t border-border/70">
        <div className="academic-heading !text-lg !mb-2">
          <span className="academic-heading-accent">
            {dict.sections?.experience_title || "Experience & Education"}
          </span>
        </div>

        <div className="space-y-6">
          {experiences.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-lg border border-border/70 bg-card space-y-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div className="flex items-center gap-3">
                  <OrgLogo id={item.id} name={item.organization} />
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">
                      {item.organization}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-primary">
                      {item.role}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs text-muted-foreground shrink-0">
                  {item.period}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed pt-2">
                {item.description}
              </p>

              {item.highlights && (
                <ul className="space-y-1 pt-1 text-xs text-foreground/75">
                  {item.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-6 pt-4 border-t border-border/70">
        <div className="academic-heading !text-lg !mb-2">
          <span className="academic-heading-accent">
            {dict.sections?.skills_title || "Technical Stack"}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((group) => (
            <div
              key={group.category}
              className="p-4 rounded-lg border border-border/70 bg-card space-y-2"
            >
              <h3 className="text-xs font-bold text-primary uppercase tracking-wider">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono px-2.5 py-0.5 rounded bg-muted text-foreground/85 border border-border/50"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
