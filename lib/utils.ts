import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAssetUrl(path?: string): string {
  if (!path) return "";
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:")
  ) {
    return path;
  }

  let basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  // Client-side fallback detection for GitHub Pages subfolder
  if (!basePath && typeof window !== "undefined") {
    const match = window.location.pathname.match(/^(\/[^\/]+)\/(?:vi|en|ja)(?:\/|$)/);
    if (match) {
      basePath = match[1];
    }
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  // Prevent duplicate basePath prefixing
  if (basePath && cleanPath.startsWith(basePath)) {
    return cleanPath;
  }

  return `${basePath}${cleanPath}`;
}
