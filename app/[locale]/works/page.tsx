import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink, Github } from "lucide-react"

import { getCategories, getAllProjects } from "@/lib/data"
import { getDictionary } from "@/lib/i18n"
import { getAssetUrl } from "@/lib/utils"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = getDictionary(locale)
  return {
    title: dict.works?.title || "Dự án",
    description: dict.works?.desc,
  }
}

export default async function WorksPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const projects = getAllProjects(locale)
  const categories = getCategories(locale)
  const dict = getDictionary(locale)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="academic-heading">
          <span className="academic-heading-accent text-2xl sm:text-3xl font-bold text-foreground">
            {dict.works?.title || "Dự án & Hệ thống"}
          </span>
        </div>
        <p className="mt-2 text-sm sm:text-base text-foreground/80 leading-relaxed">
          {dict.works?.desc || "A comprehensive directory of distributed systems, AI engines, developer tools, and high-performance applications."}
        </p>
      </div>

      {/* Category Badges / Tags */}
      {categories.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-border/70 text-xs">
          <span className="font-semibold text-muted-foreground mr-2">
            {dict.works?.filter_label || "Filter:"}
          </span>
          <span className="px-3 py-1 rounded-md bg-primary text-primary-foreground font-semibold">
            {dict.works?.all || "All"}
          </span>
          {categories.map((cat) => (
            <span
              key={cat.slug}
              className="px-3 py-1 rounded-md bg-muted text-muted-foreground border border-border/60 hover:text-foreground hover:border-primary/50 transition-colors"
            >
              {cat.name}
            </span>
          ))}
        </div>
      )}

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="group rounded-xl border border-border/70 bg-card hover:border-primary/50 transition-all duration-200 overflow-hidden flex flex-col justify-between p-5"
          >
            <div>
              {/* Thumbnail */}
              <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-muted mb-4 border border-border/50">
                <Image
                  src={getAssetUrl(project.thumbnail)}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute top-2.5 left-2.5 bg-background/90 backdrop-blur px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold text-primary border border-border">
                  {project.category}
                </div>
                <div className="absolute top-2.5 right-2.5 bg-background/90 backdrop-blur px-2 py-0.5 rounded text-[11px] font-mono text-muted-foreground border border-border">
                  {project.year}
                </div>
              </div>

              {/* Title & Description */}
              <Link href={`/${locale}/works/${project.slug}`}>
                <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                </h2>
              </Link>

              <p className="mt-2 text-xs sm:text-sm text-foreground/80 leading-relaxed line-clamp-3">
                {project.shortDescription}
              </p>

              {/* Metrics preview if available */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="mt-3.5 pt-3 border-t border-border/50 grid grid-cols-2 gap-2">
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="bg-muted/60 rounded px-2 py-1.5">
                      <p className="text-[10px] text-muted-foreground font-medium truncate">{m.label}</p>
                      <p className="text-xs font-bold font-mono text-primary">{m.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Tags & Actions */}
            <div className="mt-5 pt-4 border-t border-border/50">
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                    +{project.tags.length - 4}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <Link
                  href={`/${locale}/works/${project.slug}`}
                  className="font-semibold text-primary hover:underline flex items-center gap-1"
                >
                  <span>{dict.sections?.view_case_study || "Deep-dive Case Study"}</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>

                <div className="flex items-center gap-3">
                  {project.links?.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                      title={dict.project?.visit || "Live Demo"}
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Demo</span>
                    </a>
                  )}
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                      title={dict.project?.source || "Source"}
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
