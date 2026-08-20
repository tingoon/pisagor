import type { CollectionItem, ListCollection } from "@ark-ui/vue/collection";
import { createListCollection } from "@ark-ui/vue/collection";
import { defineComponent, h, type PropType } from "vue";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import type { WithTestId } from "../../internal/types";
import { Combobox } from "../combobox";
import type { ComboboxRootProps } from "../combobox/combobox";
import { Separator } from "../separator/separator";

// #region Types
interface AutocompletePresetItem {
  label: string;
  value: string;
}

export type AutocompleteRootProps<T extends CollectionItem = CollectionItem> = Omit<
  ComboboxRootProps<T>,
  "children"
> & {
  collection?: ListCollection<T>;
} & WithTestId & {
    variant?: FormControlVariant;
  };

export interface AutocompleteProps extends Omit<AutocompleteRootProps, "children"> {
  items?: Array<AutocompletePresetItem | string>;
  /**
   * Whether to show a clear button when the input has a value.
   *
   * @defaultValue false
   */
  clearable?: boolean;
}
// #endregion

// #region Parts
type ArkPart = Parameters<typeof h>[0];

export const AutocompleteRoot = defineComponent({
  inheritAttrs: false,
  name: "AutocompleteRoot",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        Combobox.Root as ArkPart,
        {
          ...attrs,
          allowCustomValue: true,
          inputBehavior: "autocomplete",
        },
        slots,
      );
  },
});

export const AutocompleteControl = defineComponent({
  inheritAttrs: false,
  name: "AutocompleteControl",
  setup(_, { attrs, slots }) {
    return () => h(Combobox.Control as ArkPart, { ...attrs }, slots.default?.());
  },
});

export const AutocompleteInput = defineComponent({
  inheritAttrs: false,
  name: "AutocompleteInput",
  props: {
    clearable: { default: false, type: Boolean },
    showTrigger: { default: false, type: Boolean },
  },
  setup(props, { attrs }) {
    return () =>
      h(Combobox.Input as ArkPart, {
        ...attrs,
        clearable: props.clearable,
        showTrigger: props.showTrigger,
      });
  },
});

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
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
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
        slots.default?.(),
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
      type: Array as PropType<Array<AutocompletePresetItem | string> | undefined>,
    },
    testId: String,
    variant: { default: undefined, type: String as PropType<FormControlVariant | undefined> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const items = props.items ?? [];
      const normalized = items.map((item) =>
        typeof item === "string" ? { label: item, value: item } : item,
      );

      const collection = createListCollection({ items: normalized });

      return h(
        AutocompleteRoot as ArkPart,
        {
          ...attrs,
          collection,
          testId: props.testId,
          variant: props.variant,
        },
        () => [
          h(AutocompleteInput as ArkPart, { clearable: props.clearable }),
          h(AutocompleteContent as ArkPart, null, () =>
            h(AutocompleteList as ArkPart, null, () =>
              normalized.map((item) =>
                h(
                  AutocompleteItem as ArkPart,
                  { item, key: item.value, value: item.value },
                  () => item.label,
                ),
              ),
            ),
          ),
          slots.default?.(),
        ],
      );
    };
  },
});
// #endregion
