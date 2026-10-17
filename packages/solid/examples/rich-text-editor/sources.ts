import { CompoundSource as Compound } from "./compound";
import { ControlledSource as Controlled } from "./controlled";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { DisabledSource as Disabled } from "./disabled";
import { InvalidSource as Invalid } from "./invalid";

export const imports = `import { RichTextEditor } from "@pisagor/solid/rich-text-editor";`;

export const sources = {
  Compound,
  Controlled,
  CustomRecipe,
  Default,
  Disabled,
  Invalid,
} as const;
