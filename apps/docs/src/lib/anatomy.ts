import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { withDocsBase } from "#/lib/nav";

/** Public anatomy SVG for a component id, if present (`public/images/anatomy/{id}.svg`). */
export function resolveAnatomySrc(componentId: string): string | null {
  const file = fileURLToPath(
    new URL(`../../public/images/anatomy/${componentId}.svg`, import.meta.url),
  );
  if (!existsSync(file)) return null;
  return withDocsBase(`/images/anatomy/${componentId}.svg`);
}
