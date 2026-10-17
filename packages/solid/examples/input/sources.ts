import { ClearableSource as Clearable } from "./clearable";
import { ControlledSource as Controlled } from "./controlled";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DisabledSource as Disabled } from "./disabled";
import { FileSource as File } from "./file";
import { InvalidSource as Invalid } from "./invalid";
import { SizesSource as Sizes } from "./sizes";
import { VariantsSource as Variants } from "./variants";

export const imports = `import { Input } from "@pisagor/solid";`;

export const sources = {
  Clearable,
  Controlled,
  CustomRecipe,
  Disabled,
  File,
  Invalid,
  Sizes,
  Variants,
} as const;
