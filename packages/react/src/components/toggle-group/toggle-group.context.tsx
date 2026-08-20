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

const [ToggleGroupContext, useToggleGroupContext] = createContext<ToggleGroupContextProps>({
  name: "ToggleGroup",
});

export { ToggleGroupContext, useToggleGroupContext };
