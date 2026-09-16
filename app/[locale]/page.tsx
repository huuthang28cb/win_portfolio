import {
  getProfile,
  getExperiences,
  getFeaturedProjects,
  getSolutions,
  getCredentials,
  getSkills,
} from "@/lib/data"
import { getDictionary } from "@/lib/i18n"
import { ProfileHeader } from "@/components/home/profile-header"
import { ExperienceSection } from "@/components/home/experience-section"
import { ProjectsSection } from "@/components/home/projects-section"
import { SolutionsSection } from "@/components/home/solutions-section"
import { CredentialsSection } from "@/components/home/credentials-section"
import { SkillsSection } from "@/components/home/skills-section"

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const profile = getProfile(locale)
  const experiences = getExperiences(locale)
  const projects = getFeaturedProjects(locale)
  const solutions = getSolutions(locale)
  const credentials = getCredentials(locale)
  const skills = getSkills(locale)
  const dict = getDictionary(locale)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      {/* 1. Header Profile block (Portrait on left, Name/Bio/Contacts on right) */}
      <ProfileHeader profile={profile} dict={dict} locale={locale} />

      {/* 2. Kinh nghiệm (Experience & Education) */}
      <ExperienceSection experiences={experiences} dict={dict} />

      {/* 3. Dự án (Featured Case Studies & Projects) */}
      <ProjectsSection projects={projects} dict={dict} locale={locale} />

      {/* 4. Kiến trúc & Giải pháp (Architecture & Core Solutions) */}
      <SolutionsSection solutions={solutions} dict={dict} />

      {/* 5. Chứng chỉ & Bằng cấp (Certifications & Credentials) */}
      <CredentialsSection credentials={credentials} dict={dict} />

      {/* 6. Kỹ năng (Technical Skills & Stacks) */}
      <SkillsSection skills={skills} dict={dict} />
    </div>
  )
}
