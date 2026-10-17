const HEADING_RE = /^(#{1,6})\s+(.+?)\s*$/;
const FENCE_RE = /^\s*(```|~~~)/;

/** GitHub-style slug for TOC / heading ids. */
export function slugifyHeading(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s_-]/gu, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export type TocHeading = {
  depth: number;
  slug: string;
  text: string;
};

/** H2/h3 headings from skill markdown/MDX body — source of truth for docs TOC. */
export function extractTocHeadings(body: string): TocHeading[] {
  const headings: TocHeading[] = [];
  let inFence = false;
  for (const line of body.split(/\r?\n/)) {
    if (FENCE_RE.test(line)) inFence = !inFence;
    const heading = inFence ? null : HEADING_RE.exec(line);
    if (!heading?.[1] || !heading[2]) continue;
    const depth = heading[1].length;
    if (depth !== 2 && depth !== 3) continue;
    const text = heading[2].trim();
    if (!text) continue;
    const slug = slugifyHeading(text);
    if (!slug) continue;
    headings.push({ depth, slug, text });
  }
  return headings;
}
