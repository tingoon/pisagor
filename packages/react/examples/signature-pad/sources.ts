import { CompoundSource as Compound } from "./compound";
import { ControlledSource as Controlled } from "./controlled";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { DisabledSource as Disabled } from "./disabled";
import { ImagePreviewSource as ImagePreview } from "./image-preview";
import { InvalidSource as Invalid } from "./invalid";

export const imports = `import { SignaturePad } from "@pisagor/react";`;

export const sources = {
  Compound,
  Controlled,
  CustomRecipe,
  Default,
  Disabled,
  ImagePreview,
  Invalid,
} as const;
