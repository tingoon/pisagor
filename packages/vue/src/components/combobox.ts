import {
  Combobox as ComboboxPrimitive,
  createListCollection,
  useComboboxContext,
} from "@ark-ui/vue";
import type {
  CollectionItem,
  ComboboxRootProps as ArkComboboxRootProps,
} from "@ark-ui/vue";
import { PhCaretUpDown, PhCheck, PhX } from "@phosphor-icons/vue";
import type {
  ComboboxContract,
  ComboboxPresetItem as BaseComboboxPresetItem,
  ComboboxRootContract,
} from "@pisagor/contracts";
import { comboboxRecipe } from "@pisagor/recipes";
import { defineComponent, h, Teleport } from "vue";
import type { Component, PropType } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { InputGroup } from "./input-group";
import { useLocale } from "./provider/context";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Combobox",
  recipe: comboboxRecipe,
});
// #endregion

// #region Types
type FormControlVariant = "primary" | "secondary";

interface ComboboxPresetItem extends Omit<BaseComboboxPresetItem, "label"> {
  label: string;
  value: string;
}

export type ComboboxRootProps<T extends CollectionItem = CollectionItem> =
  ArkComboboxRootProps<T> & ComboboxRootContract;

export interface ComboboxProps
  extends
    Omit<ComboboxRootProps, "children" | "collection" | "onValueChange">,
    Omit<ComboboxContract, "items" | "placeholder"> {
  /**
   * Whether to show a clear button when the input has a value.
   *
   * @defaultValue false
   */
  clearable?: boolean;
  /** Input id forwarded to the shorthand field. */
  id?: string;
  items?: Array<ComboboxPresetItem | string>;
  /** Placeholder for the shorthand field. */
  placeholder?: string;
  /**
   * Whether to show the toggle trigger.
   *
   * @defaultValue true
   */
  showTrigger?: boolean;
  /** Input size. Defaults to `md`. */
  size?: "sm" | "md" | "lg";
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
  onValueChange?: (value: string[]) => void;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];
type ArkHost = Component;

// #region Parts
const Root = withProvider<ComboboxRootContract>(
  ComboboxPrimitive.Root as ArkHost,
  {
    name: "Root",
    slot: "base",
  },
);

const Control = withContext(ComboboxPrimitive.Control as ArkHost, {
  name: "Control",
});

const Input = withContext(ComboboxPrimitive.Input as ArkHost, {
  name: "Input",
});

const Trigger = withContext(ComboboxPrimitive.Trigger as ArkHost, {
  name: "Trigger",
});

const ClearTrigger = withContext(ComboboxPrimitive.ClearTrigger as ArkHost, {
  name: "ClearTrigger",
});

const Positioner = withContext(ComboboxPrimitive.Positioner as ArkHost, {
  name: "Positioner",
});

const Content = withContext(ComboboxPrimitive.Content as ArkHost, {
  name: "Content",
});

const ItemGroup = withContext(ComboboxPrimitive.ItemGroup as ArkHost, {
  name: "ItemGroup",
});

const ItemGroupLabel = withContext(
  ComboboxPrimitive.ItemGroupLabel as ArkHost,
  {
    name: "ItemGroupLabel",
  },
);

const Item = withContext(ComboboxPrimitive.Item as ArkHost, {
  name: "Item",
});

const ItemIndicator = withContext(ComboboxPrimitive.ItemIndicator as ArkHost, {
  name: "ItemIndicator",
});

const Empty = withContext(ComboboxPrimitive.Empty as ArkHost, {
  name: "Empty",
});

const List = withContext(ComboboxPrimitive.List as ArkHost, {
  name: "List",
});
// #endregion

// #region Shorthand
const ComboboxClearButton = defineComponent({
  name: "ComboboxClearButton",
  setup() {
    const { m } = useLocale();
    const api = useComboboxContext();

    return () => {
      if (!api.value.inputValue) return null;

      return h(ClearTrigger as ArkPart, { asChild: true }, () =>
        h(
          InputGroup.Button as ArkPart,
          {
            "aria-label": m("combobox.clear"),
            size: "icon-xs",
            variant: "ghost",
          },
          () => h(PhX, { "aria-hidden": true }),
        ),
      );
    };
  },
});

const ComboboxShorthand = defineComponent({
  inheritAttrs: false,
  name: "Combobox",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<ComboboxProps["classNames"]>,
    },
    clearable: { default: false, type: Boolean },
    id: { default: undefined, type: String },
    items: {
      default: undefined,
      type: Array as PropType<ComboboxProps["items"]>,
    },
    onValueChange: {
      default: undefined,
      type: Function as PropType<ComboboxProps["onValueChange"]>,
    },
    placeholder: { default: undefined, type: String },
    showTrigger: { default: true, type: Boolean },
    size: {
      default: "md",
      type: String as PropType<NonNullable<ComboboxProps["size"]>>,
    },
    variant: {
      default: undefined,
      type: String as PropType<FormControlVariant | undefined>,
    },
  },
  setup(props, { attrs }) {
    const { m } = useLocale();

    return () => {
      const items = props.items ?? [];
      const normalized = items.map((item) =>
        typeof item === "string" ? { label: item, value: item } : item,
      );
      const collection = createListCollection({ items: normalized });

      return h(
        Root as ArkPart,
        {
          ...attrs,
          collection,
          onValueChange: props.onValueChange
            ? (details: { value: string[] }) =>
                props.onValueChange?.(details.value)
            : undefined,
          openOnClick: true,
        },
        () => [
          h(Control as ArkPart, null, () =>
            h(
              InputGroup as ArkPart,
              {
                class: props.class,
                size: props.size,
                variant: props.variant,
              },
              () => [
                h(Input as ArkPart, { asChild: true }, () =>
                  h(InputGroup.Input as ArkPart, {
                    id: props.id,
                    placeholder: props.placeholder,
                  }),
                ),
                h(InputGroup.Addon as ArkPart, { align: "inline-end" }, () => [
                  props.showTrigger
                    ? h(
                        InputGroup.Button as ArkPart,
                        {
                          asChild: true,
                          class: props.classNames?.triggerHidden,
                          size: "icon-xs",
                          variant: "ghost",
                        },
                        () =>
                          h(Trigger as ArkPart, null, () =>
                            h(
                              Button as ArkPart,
                              {
                                "aria-label": m("combobox.toggle"),
                                class: props.classNames?.triggerButton,
                                variant: "ghost",
                              },
                              () => h(PhCaretUpDown, { "aria-hidden": true }),
                            ),
                          ),
                      )
                    : null,
                  props.clearable ? h(ComboboxClearButton) : null,
                ]),
              ],
            ),
          ),
          h(Teleport, { to: "body" }, () =>
            h(Positioner as ArkPart, null, () =>
              h(
                Content as ArkPart,
                { class: props.classNames?.content },
                () => [
                  h(List as ArkPart, { class: props.classNames?.list }, () =>
                    normalized.map((item) =>
                      h(
                        Item as ArkPart,
                        {
                          class: props.classNames?.item,
                          item,
                          key: item.value,
                          persistFocus: true,
                        },
                        () => [
                          item.label,
                          h(
                            ItemIndicator as ArkPart,
                            { class: props.classNames?.itemIndicator },
                            () => h(PhCheck),
                          ),
                        ],
                      ),
                    ),
                  ),
                  h(Empty as ArkPart, { class: props.classNames?.empty }, () =>
                    m("combobox.empty"),
                  ),
                ],
              ),
            ),
          ),
        ],
      );
    };
  },
});
// #endregion

export const Combobox = Object.assign(ComboboxShorthand, {
  ClearTrigger,
  Content,
  Context: ComboboxPrimitive.Context,
  Control,
  Empty,
  Input,
  Item,
  ItemGroup,
  ItemGroupLabel,
  ItemIndicator,
  List,
  Positioner,
  Root,
  Trigger,
});
