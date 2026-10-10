import custom_recipeRaw from "./custom-recipe.astro?raw";
import defaultRaw from "./default.astro?raw";
import footerRaw from "./footer.astro?raw";
import not_hoverableRaw from "./not-hoverable.astro?raw";
import variantsRaw from "./variants.astro?raw";

export const imports = `---
import type { BadgeVariant } from "@pisagor/astro";
import { Badge, Table } from "@pisagor/astro";
import { workspaceUsers } from "./helpers";
---`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Footer: footerRaw,
  NotHoverable: not_hoverableRaw,
  Variants: variantsRaw,
} as const;
