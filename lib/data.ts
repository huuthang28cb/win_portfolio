import fs from "node:fs";
import path from "node:path";
import {
  ProjectData,
  CategoryData,
  ProfileData,
  ExperienceItem,
  CredentialItem,
  SolutionItem,
  SkillGroup,
} from "../types";

const baseDataDir = path.join(process.cwd(), "data");

function readJsonFile<T>(filePath: string, fallback: T): T {
  try {
    if (!fs.existsSync(filePath)) return fallback;
    const content = fs.readFileSync(filePath, "utf8");
    return JSON.parse(content) as T;
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err);
    return fallback;
  }
}

export function getProfile(locale: string): ProfileData {
  const filePath = path.join(baseDataDir, locale, "profile.json");
  const fallbackPath = path.join(baseDataDir, "vi", "profile.json");
  return readJsonFile<ProfileData>(
    filePath,
    readJsonFile<ProfileData>(fallbackPath, {
      name: "Võ Hữu Thắng",
      nativeName: "huuthangvo",
      avatar: "/avatar.jpg",
      headline: "Lập trình viên Full Stack (Thế mạnh Backend & Hệ thống Dữ liệu)",
      bio: "Lập trình viên Full Stack xuất thân từ Backend với 4 năm kinh nghiệm thực chiến trong phát triển nền tảng công nghệ sức khỏe, xử lý dữ liệu lớn từ thiết bị đeo thông minh, xây dựng hệ thống định danh OIDC chuẩn doanh nghiệp, phát triển các cổng quản trị portal và tích hợp các giải pháp AI tự động hóa.",
      email: "huuthang28.work@gmail.com",
      location: "Nha Trang, Khánh Hòa, Việt Nam",
      links: {
        github: "https://github.com/huuthangvo",
        facebook: "https://facebook.com/thangreal.1368",
        linkedin: "https://linkedin.com",
        resume: "/resume.pdf",
      },
    })
  );
}

export function getExperiences(locale: string): ExperienceItem[] {
  const filePath = path.join(baseDataDir, locale, "experiences.json");
  return readJsonFile<ExperienceItem[]>(filePath, []);
}

export function getCredentials(locale: string): CredentialItem[] {
  const filePath = path.join(baseDataDir, locale, "credentials.json");
  const fallbackPath = path.join(baseDataDir, "vi", "credentials.json");
  if (fs.existsSync(filePath)) return readJsonFile<CredentialItem[]>(filePath, []);
  return readJsonFile<CredentialItem[]>(fallbackPath, []);
}

export function getSolutions(locale: string): SolutionItem[] {
  const filePath = path.join(baseDataDir, locale, "solutions.json");
  const fallbackPath = path.join(baseDataDir, "vi", "solutions.json");
  if (fs.existsSync(filePath)) return readJsonFile<SolutionItem[]>(filePath, []);
  return readJsonFile<SolutionItem[]>(fallbackPath, []);
}

export function getSkills(locale: string): SkillGroup[] {
  const filePath = path.join(baseDataDir, locale, "skills.json");
  return readJsonFile<SkillGroup[]>(filePath, []);
}

export function getCategories(locale: string): CategoryData[] {
  const filePath = path.join(baseDataDir, locale, "categories.json");
  return readJsonFile<CategoryData[]>(filePath, []);
}

const priorityOrder: Record<string, number> = {
  "health-sync-platform": 1,
  "enterprise-oidc-sso": 2,
  "windprompt": 3,
  "ai-customer-service": 4,
  "ai-video-generator": 5,
};

export function getAllProjects(locale: string): ProjectData[] {
  const projectsDir = path.join(baseDataDir, locale, "projects");
  if (!fs.existsSync(projectsDir)) return [];

  const fileNames = fs.readdirSync(projectsDir);
  const allProjects = fileNames
    .filter((fileName) => fileName.endsWith(".json"))
    .map((fileName) => {
      const filePath = path.join(projectsDir, fileName);
      return readJsonFile<ProjectData>(filePath, null as any);
    })
    .filter(Boolean);

  return allProjects.sort((a, b) => {
    const rankA = priorityOrder[a.slug] ?? 999;
    const rankB = priorityOrder[b.slug] ?? 999;
    if (rankA !== rankB) return rankA - rankB;
    return b.year - a.year;
  });
}

export function getProjectBySlug(locale: string, slug: string): ProjectData | null {
  const filePath = path.join(baseDataDir, locale, "projects", `${slug}.json`);
  if (!fs.existsSync(filePath)) {
    const fallbackVi = path.join(baseDataDir, "vi", "projects", `${slug}.json`);
    if (fs.existsSync(fallbackVi)) return readJsonFile<ProjectData>(fallbackVi, null as any);
    const fallbackEn = path.join(baseDataDir, "en", "projects", `${slug}.json`);
    if (fs.existsSync(fallbackEn)) return readJsonFile<ProjectData>(fallbackEn, null as any);
    return null;
  }
  return readJsonFile<ProjectData>(filePath, null as any);
}

export function getFeaturedProjects(locale: string): ProjectData[] {
  return getAllProjects(locale).filter((project) => project.featured);
}
