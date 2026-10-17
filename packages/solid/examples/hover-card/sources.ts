import { ControlledSource as Controlled } from "./controlled";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { DisabledSource as Disabled } from "./disabled";
import { PlacementsSource as Placements } from "./placements";
import { TriggersDelaysSource as TriggersDelays } from "./triggers-delays";
import { WithoutArrowSource as WithoutArrow } from "./without-arrow";

export const imports = `import { HoverCard } from "@pisagor/solid";`;

export const sources = {
  Controlled,
  CustomRecipe,
  Default,
  Disabled,
  Placements,
  TriggersDelays,
  WithoutArrow,
} as const;
