import { ToggleGroupItem, ToggleGroupRoot, ToggleGroupShorthand } from "./toggle-group";

export type {
  ToggleGroupItemProps,
  ToggleGroupPresetItem,
  ToggleGroupRootProps,
  ToggleGroupSize,
  ToggleGroupVariant,
} from "./toggle-group";

export const ToggleGroup = Object.assign(ToggleGroupShorthand, {
  Item: ToggleGroupItem,
  Root: ToggleGroupRoot,
});
