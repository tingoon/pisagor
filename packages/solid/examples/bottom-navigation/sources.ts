import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { IconOnlySource as IconOnly } from "./icon-only";
import { WithLinksSource as WithLinks } from "./with-links";

export const imports = `import { BottomNavigation } from "@pisagor/solid";`;

export const sources = {
  CustomRecipe,
  Default,
  IconOnly,
  WithLinks,
} as const;
