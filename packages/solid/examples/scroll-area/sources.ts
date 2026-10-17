import { BothDirectionsSource as BothDirections } from "./both-directions";
import { CompoundSource as Compound } from "./compound";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { HorizontalSource as Horizontal } from "./horizontal";
import { NestedSource as Nested } from "./nested";
import { ScrollFadeSource as ScrollFade } from "./scroll-fade";

export const imports = `import { ScrollArea } from "@pisagor/solid";`;

export const sources = {
  BothDirections,
  Compound,
  CustomRecipe,
  Default,
  Horizontal,
  Nested,
  ScrollFade,
} as const;
