import type { MetadataRoute } from "next";
import siteConfig from "@/data/site-config.json";
import themes from "@/data/themes.json";
import type { Theme } from "@/lib/types";

const themesData = themes as Theme[];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.fr.url;
  const now = new Date();

  const pagesStatiques: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, priority: 1 },
    { url: `${baseUrl}/a-propos`, lastModified: now, priority: 0.8 },
    { url: `${baseUrl}/formations`, lastModified: now, priority: 0.9 },
    { url: `${baseUrl}/seminaires`, lastModified: now, priority: 0.9 },
    { url: `${baseUrl}/inscription`, lastModified: now, priority: 0.7 },
    { url: `${baseUrl}/historique`, lastModified: now, priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: now, priority: 0.7 },
  ];

  const pagesFormations: MetadataRoute.Sitemap = themesData.map((theme) => ({
    url: `${baseUrl}/formations/${theme.slug}`,
    lastModified: now,
    priority: 0.6,
  }));

  return [...pagesStatiques, ...pagesFormations];
}
