import { CollapsedSource as Collapsed } from "./collapsed";
import { CompoundSource as Compound } from "./compound";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { CustomSeparatorSource as CustomSeparator } from "./custom-separator";
import { DefaultSource as Default } from "./default";
import { WithLinkSource as WithLink } from "./with-link";
import { WithMenuSource as WithMenu } from "./with-menu";

export const imports = `import { Breadcrumb } from "@pisagor/solid";`;

export const sources = {
  Collapsed,
  Compound,
  CustomRecipe,
  CustomSeparator,
  Default,
  WithLink,
  WithMenu,
} as const;
