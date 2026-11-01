import Image from "next/image"
import { Mail, GraduationCap, Github, FileText, Linkedin, Facebook, MessageSquare, MapPin } from "lucide-react"
import { ProfileData } from "@/types"

export function ProfileHeader({
  profile,
  dict,
  locale,
}: {
  profile: ProfileData
  dict: any
  locale: string
}) {
  return (
    <section id="home" className="pt-8 pb-12 sm:py-14 border-b border-border/60">
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] lg:grid-cols-[210px_1fr] gap-8 md:gap-10 items-start">
        {/* Left Column: Portrait Avatar */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-40 h-48 sm:w-44 sm:h-52 md:w-48 md:h-56 rounded-xl overflow-hidden bg-muted border border-border shadow-sm">
            <Image
              src={profile.avatar || "/avatar.jpg"}
              alt={profile.name}
              fill
              priority
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Right Column: Name, Bio & Quick Contact Links */}
        <div className="flex flex-col space-y-4">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground flex flex-wrap items-baseline gap-2">
              <span>{profile.name}</span>
              {profile.nativeName && profile.nativeName !== profile.name && (
                <span className="text-muted-foreground font-normal text-lg sm:text-xl">
                  ({profile.nativeName})
                </span>
              )}
            </h1>
            <p className="mt-1 text-sm font-medium text-primary flex items-center gap-1.5">
              <span>{profile.headline}</span>
              {profile.location && (
                <>
                  <span className="text-muted-foreground/40">•</span>
                  <span className="text-muted-foreground flex items-center gap-1 font-normal">
                    <MapPin className="h-3 w-3" /> {profile.location}
                  </span>
                </>
              )}
            </p>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-foreground/90 font-normal max-w-3xl">
            {profile.bio}
          </p>

          {/* Contact & Links List matching reference photo */}
          <div className="pt-2 flex flex-col space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground font-medium text-xs sm:text-sm">
                {dict.hero?.email_label || "Email"}:
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="academic-link font-mono text-xs sm:text-sm"
              >
                {profile.email}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm pt-1">
              {profile.links.scholar && (
                <a
                  href={profile.links.scholar}
                  target="_blank"
                  rel="noreferrer"
                  className="academic-link flex items-center gap-1"
                >
                  <GraduationCap className="h-3.5 w-3.5" />
                  <span>{dict.hero?.scholar || "Google Scholar"}</span>
                </a>
              )}

              {profile.links.scholar && profile.links.github && (
                <span className="text-muted-foreground/40">/</span>
              )}

              {profile.links.github && (
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="academic-link flex items-center gap-1"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>{dict.hero?.github || "GitHub"}</span>
                </a>
              )}

              {profile.links.resume && (
                <>
                  <span className="text-muted-foreground/40">/</span>
                  <a
                    href={profile.links.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="academic-link flex items-center gap-1"
                  >
                    <FileText className="h-3.5 w-3.5" />
                    <span>{dict.hero?.resume || "Resume"}</span>
                  </a>
                </>
              )}

              {profile.links.linkedin && (
                <>
                  <span className="text-muted-foreground/40">/</span>
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="academic-link flex items-center gap-1"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                    <span>{dict.hero?.linkedin || "LinkedIn"}</span>
                  </a>
                </>
              )}

              {profile.links.facebook && (
                <>
                  <span className="text-muted-foreground/40">/</span>
                  <a
                    href={profile.links.facebook.startsWith("http") ? profile.links.facebook : `https://facebook.com/${profile.links.facebook}`}
                    target="_blank"
                    rel="noreferrer"
                    className="academic-link flex items-center gap-1"
                  >
                    <Facebook className="h-3.5 w-3.5" />
                    <span>Facebook</span>
                  </a>
                </>
              )}

              {profile.links.wechat && (
                <>
                  <span className="text-muted-foreground/40">/</span>
                  <span className="text-muted-foreground flex items-center gap-1">
                    <MessageSquare className="h-3.5 w-3.5 text-primary" />
                    <span>{dict.hero?.wechat || "WeChat"}: {profile.links.wechat}</span>
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
