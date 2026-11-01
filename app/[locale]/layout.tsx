import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/layout/back-to-top"
import { getDictionary } from "@/lib/i18n"
import { LanguageSetter } from "@/components/layout/language-setter"

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "vi" }, { locale: "ja" }]
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  if (locale === "vi") {
    return {
      title: {
        default: "Võ Hữu Thắng | Lập trình viên Full Stack",
        template: "%s | Võ Hữu Thắng",
      },
      description:
        "Hồ sơ năng lực của Võ Hữu Thắng (huuthangvo) - Lập trình viên Full Stack xuất thân Backend với 4 năm kinh nghiệm thực chiến phát triển nền tảng công nghệ sức khỏe, xử lý dữ liệu lớn, định danh OIDC chuẩn doanh nghiệp và giải pháp AI.",
      icons: {
        icon: "/icon.svg",
        shortcut: "/favicon.ico",
      },
    }
  }

  if (locale === "ja") {
    return {
      title: {
        default: "ヴォ・フー・タン | フルスタックエンジニア",
        template: "%s | ヴォ・フー・タン",
      },
      description:
        "ヴォ・フー・タン (huuthangvo) のポートフォリオ。実務経験4年のフルスタックエンジニア。ヘルスケアデータ連携基盤、企業標準OIDC統合認証、業務管理ポータル、実用AI自動化ソリューション。",
      icons: {
        icon: "/icon.svg",
        shortcut: "/favicon.ico",
      },
    }
  }

  return {
    title: {
      default: "Vo Huu Thang | Full Stack Developer",
      template: "%s | Vo Huu Thang",
    },
    description:
      "Portfolio of Vo Huu Thang (huuthangvo) - Full Stack Developer with 4 years of hands-on experience in HealthTech platforms, big data pipelines, enterprise OIDC identity systems, and applied AI.",
    icons: {
      icon: "/icon.svg",
      shortcut: "/favicon.ico",
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  const dict = getDictionary(locale)

  return (
    <>
      <LanguageSetter locale={locale} />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Navbar locale={locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} dict={dict} />
        <BackToTop label={dict.footer?.top || "Top"} />
      </ThemeProvider>
    </>
  )
}
