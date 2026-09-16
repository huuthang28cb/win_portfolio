import { ExperienceItem } from "@/types"
import { OrgLogo } from "./org-logo"

export function ExperienceSection({
  experiences,
  dict,
}: {
  experiences: ExperienceItem[]
  dict: any
}) {
  return (
    <section id="experience" className="py-10 sm:py-12 border-b border-border/60">
      <div className="academic-heading">
        <span className="academic-heading-accent">
          {dict.sections?.experience_title || "Experience & Education"}
        </span>
      </div>

      <div className="space-y-8 sm:space-y-10">
        {experiences.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 sm:grid-cols-[56px_1fr] gap-4 sm:gap-6 items-start"
          >
            {/* Logo on the left (matching the reference photo) */}
            <div className="hidden sm:block pt-0.5">
              <OrgLogo id={item.id} name={item.organization} />
            </div>

            {/* Content on the right */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div className="flex items-center gap-3">
                  <div className="sm:hidden">
                    <OrgLogo id={item.id} name={item.organization} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    {item.organization}
                  </h3>
                </div>
                <span className="font-mono text-xs sm:text-sm text-muted-foreground shrink-0">
                  {item.period}
                </span>
              </div>

              <p className="text-sm font-semibold text-primary/90">
                {item.role}
              </p>

              <p className="text-sm leading-relaxed text-foreground/85">
                {item.description}
              </p>

              {item.highlights && item.highlights.length > 0 && (
                <ul className="space-y-1.5 pt-1">
                  {item.highlights.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm leading-relaxed text-foreground/80 flex items-start gap-2"
                    >
                      <span className="text-primary mt-1 font-bold">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {item.techStack && item.techStack.length > 0 && (
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
