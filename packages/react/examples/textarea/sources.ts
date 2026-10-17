import { AutoresizeSource as Autoresize } from "./autoresize";
import { ClearableSource as Clearable } from "./clearable";
import { ControlledSource as Controlled } from "./controlled";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DisabledSource as Disabled } from "./disabled";
import { InvalidSource as Invalid } from "./invalid";
import { SizesSource as Sizes } from "./sizes";
import { VariantsSource as Variants } from "./variants";

export const imports = `import { Textarea } from "@pisagor/react";`;

export const sources = {
  Autoresize,
  Clearable,
  Controlled,
  CustomRecipe,
  Disabled,
  Invalid,
  Sizes,
  Variants,
} as const;
