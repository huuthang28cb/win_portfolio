import fs from "node:fs"
import path from "node:path"

export type Locale = "en" | "vi" | "ja"
export const locales: Locale[] = ["en", "vi", "ja"]

export function getDictionary(locale: string) {
  const filePath = path.join(process.cwd(), "messages", `${locale}.json`)
  if (!fs.existsSync(filePath)) {
    // fallback to en
    return JSON.parse(fs.readFileSync(path.join(process.cwd(), "messages", "en.json"), "utf8"))
  }
  return JSON.parse(fs.readFileSync(filePath, "utf8"))
}
