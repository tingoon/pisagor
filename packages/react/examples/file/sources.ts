import { CompoundSource as Compound } from "./compound";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { WithActionsSource as WithActions } from "./with-actions";

export const imports = `import { File } from "@pisagor/react";`;

export const sources = {
  Compound,
  CustomRecipe,
  Default,
  WithActions,
} as const;
