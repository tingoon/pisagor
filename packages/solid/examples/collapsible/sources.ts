import { ControlledSource as Controlled } from "./controlled";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { DisabledSource as Disabled } from "./disabled";
import { NestedSource as Nested } from "./nested";
import { PartialCollapseSource as PartialCollapse } from "./partial-collapse";

export const imports = `import { Collapsible } from "@pisagor/solid";`;

export const sources = {
  Controlled,
  CustomRecipe,
  Default,
  Disabled,
  Nested,
  PartialCollapse,
} as const;
