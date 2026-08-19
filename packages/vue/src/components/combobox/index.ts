import {
  ComboboxClear,
  ComboboxContent,
  ComboboxContext,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxFieldInput,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPositioner,
  ComboboxRoot,
  ComboboxShorthand,
  ComboboxTrigger,
} from "./combobox";

export type { ComboboxProps, ComboboxRootProps } from "./combobox";
export { useComboboxRoot } from "./combobox";

export const Combobox = Object.assign(ComboboxShorthand, {
  Clear: ComboboxClear,
  Content: ComboboxContent,
  Context: ComboboxContext,
  Control: ComboboxControl,
  Empty: ComboboxEmpty,
  FieldInput: ComboboxFieldInput,
  Group: ComboboxGroup,
  GroupLabel: ComboboxGroupLabel,
  Input: ComboboxInput,
  Item: ComboboxItem,
  List: ComboboxList,
  Positioner: ComboboxPositioner,
  Root: ComboboxRoot,
  Trigger: ComboboxTrigger,
});
