import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aera.example.com";

  const routes = [
    "",
    "/features",
    "/industries",
    "/pricing",
    "/about",
    "/contact",
    "/blog",
    "/legal",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
