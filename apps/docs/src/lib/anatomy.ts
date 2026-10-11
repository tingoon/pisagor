import { existsSync } from "node:fs";
import { join } from "node:path";
import { withDocsBase } from "#/lib/nav";

/**
 * Resolve on-disk anatomy SVG. Prefer package cwd (`apps/docs` under turbo/astro)
 * over `import.meta.url` — Vite SSR bundles rewrite that URL so
 * `../../public/...` fails during `astro build` (dev still works).
 */
function anatomyFile(componentId: string): string {
  const name = `${componentId}.svg`;
  const fromPackage = join(process.cwd(), "public/images/anatomy", name);
  if (existsSync(fromPackage)) return fromPackage;
  return join(process.cwd(), "apps/docs/public/images/anatomy", name);
}

/** Public anatomy SVG for a component id, if present (`public/images/anatomy/{id}.svg`). */
export function resolveAnatomySrc(componentId: string): string | null {
  if (!existsSync(anatomyFile(componentId))) return null;
  return withDocsBase(`/images/anatomy/${componentId}.svg`);
}
