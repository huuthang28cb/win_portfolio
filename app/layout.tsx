import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Võ Hữu Thắng | Lập trình viên Full Stack",
  description:
    "Hồ sơ năng lực của Võ Hữu Thắng (huuthangvo) - Lập trình viên Full Stack xuất thân Backend với 4 năm kinh nghiệm phát triển nền tảng công nghệ sức khỏe, xử lý dữ liệu lớn, định danh OIDC và giải pháp AI.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
