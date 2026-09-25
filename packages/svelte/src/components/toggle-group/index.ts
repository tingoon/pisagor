import ToggleGroupShorthand from "./toggle-group.svelte";
import ToggleGroupItem from "./toggle-group-item.svelte";
import ToggleGroupRoot from "./toggle-group-root.svelte";

export const ToggleGroup = Object.assign(ToggleGroupShorthand, {
  Item: ToggleGroupItem,
  Root: ToggleGroupRoot,
});
