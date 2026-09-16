import { SolutionItem } from "@/types"
import { Cpu, ShieldCheck, Workflow, CheckCircle2, Layers } from "lucide-react"

interface SolutionsSectionProps {
  solutions: SolutionItem[]
  dict: any
}

const solutionIcons: Record<string, any> = {
  "health-wearable-pipeline": Workflow,
  "enterprise-oidc-sso": ShieldCheck,
  "ai-multimedia-rag": Cpu,
}

export function SolutionsSection({ solutions, dict }: SolutionsSectionProps) {
  if (!solutions || solutions.length === 0) return null

  const sectionTitle = dict.sections?.solutions || "Kiến trúc & Giải pháp Tiêu biểu"
  const sectionSubtitle = dict.sections?.solutionsSubtitle || "Các giải pháp hạ tầng lớn, kiến trúc bảo mật và hệ thống AI thực chiến đã triển khai"

  return (
    <section id="solutions" className="py-12 border-b border-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8">
        <div>
          <h2 className="academic-heading-accent text-2xl font-bold text-slate-900 tracking-tight">
            {sectionTitle}
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            {sectionSubtitle}
          </p>
        </div>
        <span className="text-xs text-slate-400 mt-2 sm:mt-0 font-mono">
          {solutions.length} CORE ARCHITECTURES
        </span>
      </div>

      <div className="space-y-6">
        {solutions.map((item, index) => {
          const IconComponent = solutionIcons[item.id] || Layers

          return (
            <div
              key={item.id || index}
              className="bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0 text-sky-700 mt-0.5">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-sky-700 mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-4 pl-0 md:pl-[52px]">
                {item.overview}
              </p>

              {item.highlights && item.highlights.length > 0 && (
                <div className="pl-0 md:pl-[52px] mb-5 space-y-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              )}

              {item.techStack && item.techStack.length > 0 && (
                <div className="pl-0 md:pl-[52px] flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
