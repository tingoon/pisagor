import { ToggleGroupItem, ToggleGroupRoot, ToggleGroupShorthand } from "./toggle-group";

export type { ToggleGroupProps } from "./toggle-group";

export const ToggleGroup = Object.assign(ToggleGroupShorthand, {
  Item: ToggleGroupItem,
  Root: ToggleGroupRoot,
});
