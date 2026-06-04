import type { MetadataRoute } from "next";

const baseUrl = "https://rvfrontend.netlify.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/*.json$"],
        crawlDelay: 1
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 0.5
      },
      {
        userAgent: "Baiduspider",
        disallow: "/"
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  };
}
