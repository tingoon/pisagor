import CustomRecipe from "./custom-recipe.astro?raw";
import Default from "./default.astro?raw";
import Footer from "./footer.astro?raw";
import NotHoverable from "./not-hoverable.astro?raw";
import Sizes from "./sizes.astro?raw";
import Variants from "./variants.astro?raw";

export const imports = `---
import type { BadgeVariant } from "@pisagor/astro";
import { Badge, Table } from "@pisagor/astro";
import { workspaceUsers } from "./helpers";
---`;

export const sources = {
  CustomRecipe,
  Default,
  Footer,
  NotHoverable,
  Sizes,
  Variants,
} as const;
