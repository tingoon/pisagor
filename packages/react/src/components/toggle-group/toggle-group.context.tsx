import { createContext } from "../../utils";
import type { ToggleProps } from "../toggle";

export type ToggleGroupContextProps = Pick<ToggleProps, "variant" | "size"> & {
  /**
   * Gap between items.
   *
   * @defaultValue 0
   */
  spacing?: number;
};

export const { ToggleGroupContext, useToggleGroup } = createContext<ToggleGroupContextProps>()({
  name: "ToggleGroup",
});
