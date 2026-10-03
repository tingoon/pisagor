import { stripAstroExample } from "@pisagor/utils";
import compoundRaw from "./compound.astro?raw";
import defaultRaw from "./default.astro?raw";
import variantsRaw from "./variants.astro?raw";
import without_badgeRaw from "./without-badge.astro?raw";

export const imports = `---
import { Announcement } from "@pisagor/astro/announcement";
---`;

export const sources = {
  Compound: stripAstroExample(compoundRaw),
  Default: stripAstroExample(defaultRaw),
  Variants: stripAstroExample(variantsRaw),
  WithoutBadge: stripAstroExample(without_badgeRaw),
} as const;

export { default as Compound } from "./compound.astro";
export { default as Default } from "./default.astro";
export { default as Variants } from "./variants.astro";
export { default as WithoutBadge } from "./without-badge.astro";
