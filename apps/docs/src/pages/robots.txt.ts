import type { APIRoute } from "astro";

/** Robots.txt with an absolute sitemap URL built from `site` + `base`. */
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, "/");
  const sitemap = site
    ? new URL(`${base}sitemap-index.xml`, site.origin)
    : null;
  const lines = [
    "User-agent: *",
    "Allow: /",
    `Disallow: ${base}preview/`,
    ...(sitemap ? ["", `Sitemap: ${sitemap.href}`] : []),
  ];
  return new Response(`${lines.join("\n")}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
