import { ActionsSource as Actions } from "./actions";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { FooterSource as Footer } from "./footer";
import { NotHoverableSource as NotHoverable } from "./not-hoverable";
import { SizesSource as Sizes } from "./sizes";
import { VariantsSource as Variants } from "./variants";

export const imports = `import { Table } from "@pisagor/react";`;

export const sources = {
  Actions,
  CustomRecipe,
  Default,
  Footer,
  NotHoverable,
  Sizes,
  Variants,
} as const;
