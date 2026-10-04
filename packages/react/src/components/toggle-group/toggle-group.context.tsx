import type { ToggleGroupRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";
import type { ToggleProps } from "../toggle";

export interface ToggleGroupContextProps
  extends Pick<ToggleProps, "variant" | "size"> {
  /**
   * Gap between items.
   *
   * @defaultValue 0
   */
  spacing?: number;
  slots: ToggleGroupRecipe;
}

export const { ToggleGroupContext, useToggleGroup } =
  createContext("ToggleGroup")<ToggleGroupContextProps>();
