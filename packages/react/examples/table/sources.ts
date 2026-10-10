import actionsRaw from "./actions.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import footerRaw from "./footer.tsx?raw";
import not_hoverableRaw from "./not-hoverable.tsx?raw";
import variantsRaw from "./variants.tsx?raw";

export const imports = `import { Table } from "@pisagor/react";`;

export const sources = {
  Actions: actionsRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Footer: footerRaw,
  NotHoverable: not_hoverableRaw,
  Variants: variantsRaw,
} as const;
