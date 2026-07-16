import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://mind-heaven-dao-sample.blockchain444.chatgpt.site/sitemap.xml" };
}
