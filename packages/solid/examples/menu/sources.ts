import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { WithGroupsSource as WithGroups } from "./with-groups";

export const imports = `import { Menu } from "@pisagor/solid";`;

export const sources = {
  CustomRecipe,
  Default,
  WithGroups,
} as const;
