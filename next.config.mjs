/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
let repo = "";
if (process.env.GITHUB_REPOSITORY) {
  repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
}

// Support custom domain or root user site (<username>.github.io)
const isCustomDomain = process.env.CUSTOM_DOMAIN === "true";
const isUserPage = repo.endsWith(".github.io");

const basePath = process.env.NEXT_PUBLIC_BASE_PATH !== undefined
  ? process.env.NEXT_PUBLIC_BASE_PATH
  : (isGithubActions && !isCustomDomain && !isUserPage && repo ? `/${repo}` : "");

const nextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath || "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
