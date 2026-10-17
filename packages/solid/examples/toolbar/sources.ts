import { CompoundSource as Compound } from "./compound";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { WrappedActionsSource as WrappedActions } from "./wrapped-actions";

export const imports = `import { Toolbar } from "@pisagor/solid";`;

export const sources = {
  Compound,
  CustomRecipe,
  Default,
  WrappedActions,
} as const;
