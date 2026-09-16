import { CredentialItem } from "@/types"
import { Award, GraduationCap, Globe2, Cloud, ShieldCheck } from "lucide-react"

interface CredentialsSectionProps {
  credentials: CredentialItem[]
  dict: any
}

const credentialIcons: Record<string, any> = {
  "degree-it": GraduationCap,
  "english-proficiency": Globe2,
  "aws-cloud": Cloud,
  "oidc-security": ShieldCheck,
}

export function CredentialsSection({ credentials, dict }: CredentialsSectionProps) {
  if (!credentials || credentials.length === 0) return null

  const sectionTitle = dict.sections?.credentials || "Chứng chỉ & Bằng cấp Chuyên môn"
  const sectionSubtitle = dict.sections?.credentialsSubtitle || "Nền tảng đào tạo chính quy, năng lực ngoại ngữ và chứng nhận năng lực kỹ thuật"

  return (
    <section id="credentials" className="py-12 border-b border-slate-200">
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
          PROFESSIONAL QUALIFICATIONS
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {credentials.map((cred, index) => {
          const IconComponent = credentialIcons[cred.id] || Award

          return (
            <div
              key={cred.id || index}
              className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between hover:border-slate-300 hover:shadow-sm transition-all duration-200"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0 text-sky-700">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  {cred.badge && (
                    <span className="px-2 py-0.5 text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
                      {cred.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug mb-1">
                  {cred.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-medium text-slate-700">{cred.issuer}</span>
                  <span className="font-mono text-slate-400">{cred.year}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {cred.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
