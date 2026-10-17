import Controlled from "./controlled.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import Placements from "./placements.svelte?raw";
import TriggersDelays from "./triggers-delays.svelte?raw";
import WithoutArrow from "./without-arrow.svelte?raw";

export const imports = `import { HoverCard } from "@pisagor/svelte";`;

export const sources = {
  Controlled,
  CustomRecipe,
  Default,
  Disabled,
  Placements,
  TriggersDelays,
  WithoutArrow,
} as const;
