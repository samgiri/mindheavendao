import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://mind-heaven-dao-sample.blockchain444.chatgpt.site", lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
