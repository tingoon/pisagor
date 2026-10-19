import type {
  CollectionItem,
  ComboboxInputValueChangeDetails,
  ListCollection,
} from "@ark-ui/vue";
import { defineComponent, h, type PropType } from "vue";
import type { ClassValue } from "../internal";
import type { ComboboxProps, ComboboxRootProps } from "./combobox";
import { Combobox } from "./combobox";
import { Separator } from "./separator";

type FormControlVariant = "primary" | "secondary";

// #region Types
interface AutocompletePresetItem {
  label: string;
  value: string;
}

export type AutocompleteRootProps<T extends CollectionItem = CollectionItem> =
  Omit<ComboboxRootProps<T>, "children"> & {
    collection?: ListCollection<T>;
  } & {
    variant?: FormControlVariant;
  };

export interface AutocompleteProps extends Omit<
  AutocompleteRootProps,
  "children" | "collection"
> {
  /**
   * Whether to show a clear button when the input has a value.
   *
   * @defaultValue false
   */
  clearable?: boolean;
  items?: Array<AutocompletePresetItem | string>;
  placeholder?: string;
  /** Input size. Defaults to `md`. */
  size?: ComboboxProps["size"];
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
}
// #endregion

// #region Parts
type ArkPart = Parameters<typeof h>[0];

export const AutocompleteRoot = defineComponent({
  inheritAttrs: false,
  name: "AutocompleteRoot",
  props: {
    onInputValueChange: {
      default: undefined,
      type: Function as PropType<
        (details: ComboboxInputValueChangeDetails) => void
      >,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        Combobox.Root as ArkPart,
        {
          ...attrs,
          allowCustomValue: true,
          inputBehavior: "autocomplete",
          onInputValueChange: props.onInputValueChange,
        },
        slots,
      );
  },
});

export const AutocompleteControl = defineComponent({
  inheritAttrs: false,
  name: "AutocompleteControl",
  setup(_, { attrs, slots }) {
    return () =>
      h(Combobox.Control as ArkPart, { ...attrs }, () => slots.default?.());
  },
});

export const AutocompleteInput = Combobox.Input;

export const AutocompleteItemGroup = Combobox.ItemGroup;
export const AutocompleteItemGroupLabel = Combobox.ItemGroupLabel;
export const AutocompleteItem = Combobox.Item;
export const AutocompleteContent = Combobox.Content;
export const AutocompleteTrigger = Combobox.Trigger;
export const AutocompleteClearTrigger = Combobox.ClearTrigger;
export const AutocompleteEmpty = Combobox.Empty;

export const AutocompleteList = Combobox.List;
export const AutocompleteCollection = Combobox.List;

export const AutocompleteSeparator = defineComponent({
  inheritAttrs: false,
  name: "AutocompleteSeparator",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        Separator as ArkPart,
        {
          ...attrs,
          class: props.class,
          dataPart: "separator",
          dataScope: "autocomplete",
        },
        () => slots.default?.(),
      );
  },
});

export const AutocompleteShorthand = defineComponent({
  inheritAttrs: false,
  name: "PisagorAutocomplete",
  props: {
    clearable: { default: false, type: Boolean },
    items: {
      default: undefined,
      type: Array as PropType<AutocompleteProps["items"]>,
    },
  },
  setup(props, { attrs }) {
    return () =>
      h(Combobox as ArkPart, {
        ...attrs,
        allowCustomValue: true,
        clearable: props.clearable,
        inputBehavior: "autocomplete",
        items: props.items,
        showTrigger: false,
      });
  },
});
// #endregion

export const Autocomplete = Object.assign(AutocompleteShorthand, {
  ClearTrigger: AutocompleteClearTrigger,
  Collection: AutocompleteCollection,
  Content: AutocompleteContent,
  Control: AutocompleteControl,
  Empty: AutocompleteEmpty,
  Input: AutocompleteInput,
  Item: AutocompleteItem,
  ItemGroup: AutocompleteItemGroup,
  ItemGroupLabel: AutocompleteItemGroupLabel,
  List: AutocompleteList,
  Root: AutocompleteRoot,
  Separator: AutocompleteSeparator,
  Trigger: AutocompleteTrigger,
});
