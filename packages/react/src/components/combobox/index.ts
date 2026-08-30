import {
  ComboboxClearTrigger,
  ComboboxContent,
  ComboboxContext,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxFieldInput,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
  ComboboxList,
  ComboboxPositioner,
  ComboboxRoot,
  ComboboxShorthand,
  ComboboxTrigger,
} from "./combobox";

export type {
  ComboboxClearTriggerProps,
  ComboboxControlProps,
  ComboboxEmptyProps,
  ComboboxItemGroupLabelProps,
  ComboboxListProps,
  ComboboxPositionerProps,
  ComboboxTriggerProps,
} from "@ark-ui/react/combobox";

export type {
  ComboboxContentProps,
  ComboboxFieldInputProps,
  ComboboxInputProps,
  ComboboxItemGroupProps,
  ComboboxItemProps,
  ComboboxProps,
  ComboboxRootProps,
} from "./combobox";

export { useComboboxRoot } from "./combobox.context";

export const Combobox = Object.assign(ComboboxShorthand, {
  ClearTrigger: ComboboxClearTrigger,
  Content: ComboboxContent,
  Context: ComboboxContext,
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
