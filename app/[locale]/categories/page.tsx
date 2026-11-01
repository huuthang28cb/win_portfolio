import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Folder, ArrowLeft } from "lucide-react"

import { getCategories, getAllProjects } from "@/lib/data"
import { getDictionary } from "@/lib/i18n"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (locale === "vi") return { title: "Danh mục Chuyên môn" }
  if (locale === "ja") return { title: "専門カテゴリ一覧" }
  return { title: "Categories & Domains" }
}

export default async function CategoriesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = getDictionary(locale)
  const categories = getCategories(locale)
  const allProjects = getAllProjects(locale)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-10">
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
            {locale === "vi" ? "Danh mục" : locale === "ja" ? "カテゴリ" : "Categories"}
          </span>
          <span className="text-muted-foreground/60 font-normal text-base sm:text-lg ml-2">
            / Disciplines & Areas
          </span>
        </div>

        <p className="mt-2 text-sm sm:text-base text-foreground/80 leading-relaxed max-w-2xl">
          {locale === "vi"
            ? "Phân loại các dự án theo từng lĩnh vực chuyên môn: Hệ thống phân tán, Công cụ lập trình viên, Web Application và Trí tuệ Nhân tạo."
            : locale === "ja"
            ? "専門分野別にプロジェクトを分類：分散システム、開発者ツール、Webアプリケーション、人工知能。"
            : "Explore projects organized by engineering discipline: distributed systems, developer tooling, web architecture, and AI."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => {
          const categoryProjects = allProjects.filter(
            (p) => p.category.toLowerCase() === cat.slug.toLowerCase()
          )

          return (
            <div
              key={cat.slug}
              className="p-5 rounded-xl border border-border/70 bg-card hover:border-primary/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-primary flex items-center justify-center">
                    <Folder className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground font-semibold px-2 py-0.5 rounded bg-muted">
                    {categoryProjects.length} {locale === "vi" ? "dự án" : locale === "ja" ? "件" : "items"}
                  </span>
                </div>

                <h2 className="text-base font-bold text-foreground mb-2">
                  {cat.name}
                </h2>

                <p className="text-xs text-foreground/75 leading-relaxed mb-4">
                  {cat.description || `${cat.name} projects and technical architectures.`}
                </p>
              </div>

              <div className="pt-4 border-t border-border/50">
                <Link
                  href={`/${locale}/works`}
                  className="academic-link text-xs font-semibold flex items-center gap-1"
                >
                  <span>{locale === "vi" ? "Xem danh sách" : locale === "ja" ? "一覧を見る" : "View catalog"}</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
