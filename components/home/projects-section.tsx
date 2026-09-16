import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { ProjectData } from "@/types"

export function ProjectsSection({
  projects,
  dict,
  locale,
}: {
  projects: ProjectData[]
  dict: any
  locale: string
}) {
  return (
    <section id="projects" className="py-10 sm:py-12 border-b border-border/60">
      <div className="flex items-baseline justify-between mb-2">
        <div className="academic-heading !mb-0">
          <span className="academic-heading-accent">
            {dict.sections?.projects_title || "Selected Projects"}
          </span>
        </div>

        <Link
          href={`/${locale}/works`}
          className="academic-link text-xs sm:text-sm font-semibold flex items-center gap-1"
        >
          <span>{dict.sections?.view_all_projects || "View All"}</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <p className="text-xs sm:text-sm text-muted-foreground mb-8">
        {dict.works?.desc || "A curated collection of distributed systems, AI engines, and high-performance tools."}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.slice(0, 4).map((project) => (
          <div
            key={project.slug}
            className="group rounded-xl border border-border/70 bg-card hover:border-primary/50 transition-all duration-200 overflow-hidden flex flex-col justify-between p-5"
          >
            <div>
              {/* Image / Thumbnail */}
              <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-muted mb-4 border border-border/50">
                <Image
                  src={project.thumbnail}
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
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                </h3>
              </Link>

              <p className="mt-2 text-xs sm:text-sm text-foreground/80 leading-relaxed line-clamp-3">
                {project.shortDescription}
              </p>

              {/* Key Metrics Highlight if present */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="mt-3.5 pt-3 border-t border-border/50 grid grid-cols-2 gap-2">
                  {project.metrics.slice(0, 2).map((metric, idx) => (
                    <div key={idx} className="bg-muted/60 rounded px-2 py-1.5">
                      <p className="text-[10px] text-muted-foreground font-medium truncate">{metric.label}</p>
                      <p className="text-xs font-bold font-mono text-primary">{metric.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Tags & Action Links */}
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
                  <span>{dict.sections?.view_case_study || "Case Study"}</span>
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
    </section>
  )
}
