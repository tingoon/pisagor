import type { ToggleGroupVariants } from "@pisagor/recipes/toggle-group";
import { createContext } from "../../internal/utils";
import type { ToggleProps } from "../toggle";

export type ToggleGroupContextProps = Pick<ToggleProps, "variant" | "size"> & {
  /**
   * Gap between items.
   *
   * @defaultValue 0
   */
  spacing?: number;
  slots: ToggleGroupVariants;
};

export const { ToggleGroupContext, useToggleGroup } = createContext<ToggleGroupContextProps>()({
  name: "ToggleGroup",
});
