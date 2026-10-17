import { CompactSource as Compact } from "./compact";
import { CompoundSource as Compound } from "./compound";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { SizesSource as Sizes } from "./sizes";

export const imports = `import { EmptyState } from "@pisagor/solid";`;

export const sources = {
  Compact,
  Compound,
  CustomRecipe,
  Default,
  Sizes,
} as const;
