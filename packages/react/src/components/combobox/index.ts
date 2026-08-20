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

export { comboboxItemVariants } from "@pisagor/styles/ui/combobox";
export type {
  ComboboxClearTriggerProps,
  ComboboxContentProps,
  ComboboxControlProps,
  ComboboxEmptyProps,
  ComboboxFieldInputProps,
  ComboboxInputProps,
  ComboboxItemGroupLabelProps,
  ComboboxItemGroupProps,
  ComboboxItemProps,
  ComboboxListProps,
  ComboboxPositionerProps,
  ComboboxProps,
  ComboboxRootProps,
  ComboboxTriggerProps,
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
