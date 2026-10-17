import { CompoundSource as Compound } from "./compound";
import { ControlledSource as Controlled } from "./controlled";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { DisabledSource as Disabled } from "./disabled";
import { InvalidSource as Invalid } from "./invalid";
import { SizesSource as Sizes } from "./sizes";
import { VariantsSource as Variants } from "./variants";

export const imports = `import { Switch } from "@pisagor/react";`;

export const sources = {
  Compound,
  Controlled,
  CustomRecipe,
  Default,
  Disabled,
  Invalid,
  Sizes,
  Variants,
} as const;
