import { Cpu, Terminal, Layout, Cloud } from "lucide-react"
import { SkillGroup } from "@/types"

export function SkillsSection({
  skills,
  dict,
}: {
  skills: SkillGroup[]
  dict: any
}) {
  if (!skills || skills.length === 0) return null

  const icons = [Cpu, Terminal, Layout, Cloud]

  return (
    <section id="skills" className="py-10 sm:py-12">
      <div className="academic-heading">
        <span className="academic-heading-accent">
          {dict.sections?.skills_title || "Technical Expertise"}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {skills.map((group, idx) => {
          const IconComponent = icons[idx % icons.length]
          return (
            <div
              key={group.category}
              className="p-4 sm:p-5 rounded-lg border border-border/70 bg-card space-y-3"
            >
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <IconComponent className="h-4 w-4" />
                <h3 className="text-foreground">{group.category}</h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-muted text-foreground/85 border border-border/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
