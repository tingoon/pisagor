import { Combobox as ComboboxPrimitive } from "@ark-ui/svelte/combobox";
import { useComboboxRoot } from "./combobox.context";
import ComboboxShorthand from "./combobox.svelte";
import ComboboxClearTrigger from "./combobox-clear-trigger.svelte";
import ComboboxContent from "./combobox-content.svelte";
import ComboboxControl from "./combobox-control.svelte";
import ComboboxEmpty from "./combobox-empty.svelte";
import ComboboxFieldInput from "./combobox-field-input.svelte";
import ComboboxInput from "./combobox-input.svelte";
import ComboboxItem from "./combobox-item.svelte";
import ComboboxItemGroup from "./combobox-item-group.svelte";
import ComboboxItemGroupLabel from "./combobox-item-group-label.svelte";
import ComboboxList from "./combobox-list.svelte";
import ComboboxPositioner from "./combobox-positioner.svelte";
import ComboboxRoot from "./combobox-root.svelte";
import ComboboxTrigger from "./combobox-trigger.svelte";

export { useComboboxRoot };

export const Combobox = Object.assign(ComboboxShorthand, {
  ClearTrigger: ComboboxClearTrigger,
  Content: ComboboxContent,
  Context: ComboboxPrimitive.Context,
  Control: ComboboxControl,
  Empty: ComboboxEmpty,
  FieldInput: ComboboxFieldInput,
  Input: ComboboxInput,
  Item: ComboboxItem,
  ItemGroup: ComboboxItemGroup,
  ItemGroupLabel: ComboboxItemGroupLabel,
  List: ComboboxList,
  Positioner: ComboboxPositioner,
  Root: ComboboxRoot,
  Trigger: ComboboxTrigger,
});
