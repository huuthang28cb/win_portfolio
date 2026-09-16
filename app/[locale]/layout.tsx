import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { getDictionary } from "@/lib/i18n"
import { LanguageSetter } from "@/components/layout/language-setter"

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "vi" }, { locale: "ja" }]
}

export const dynamicParams = false;

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
      </ThemeProvider>
    </>
  )
}
