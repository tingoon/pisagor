import { CompoundSource as Compound } from "./compound";
import { CountSource as Count } from "./count";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { FallbacksSource as Fallbacks } from "./fallbacks";
import { GroupSource as Group } from "./group";
import { InitialsSource as Initials } from "./initials";
import { ShapesSource as Shapes } from "./shapes";
import { SizesSource as Sizes } from "./sizes";

export const imports = `import { Avatar } from "@pisagor/solid";`;

export const sources = {
  Compound,
  Count,
  CustomRecipe,
  Default,
  Fallbacks,
  Group,
  Initials,
  Shapes,
  Sizes,
} as const;
