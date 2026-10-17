import { CollapsibleSource as Collapsible } from "./collapsible";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { EdgeHandleSource as EdgeHandle } from "./edge-handle";
import { HandleSource as Handle } from "./handle";
import { MinMaxSource as MinMax } from "./min-max";
import { MultiplePanelsSource as MultiplePanels } from "./multiple-panels";
import { OrientationHorizontalSource as OrientationHorizontal } from "./orientation-horizontal";
import { OrientationVerticalSource as OrientationVertical } from "./orientation-vertical";

export const imports = `import { Resizable } from "@pisagor/solid";`;

export const sources = {
  Collapsible,
  CustomRecipe,
  Default,
  EdgeHandle,
  Handle,
  MinMax,
  MultiplePanels,
  OrientationHorizontal,
  OrientationVertical,
} as const;
