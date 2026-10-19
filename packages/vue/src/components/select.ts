import {
  Select as SelectPrimitive,
  createListCollection,
  useSelectContext,
} from "@ark-ui/vue";
import type {
  CollectionItem,
  SelectClearTriggerProps,
  SelectContentProps,
  SelectItemGroupLabelProps,
  SelectItemProps,
  SelectRootProps as SelectRootPrimitiveProps,
  SelectTriggerProps as SelectTriggerPrimitiveProps,
  SelectValueTextProps,
} from "@ark-ui/vue";
import { PhCaretUpDown, PhCheck, PhX } from "@phosphor-icons/vue";
import type {
  SelectContract,
  SelectPresetItem as BaseSelectPresetItem,
  SelectRootContract,
} from "@pisagor/contracts";
import { selectRecipe } from "@pisagor/recipes";
import {
  defineComponent,
  h,
  type PropType,
  Teleport,
  type VNodeChild,
} from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";
import { useLocale } from "./provider/context";
import { Separator, type SeparatorProps } from "./separator";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { Context, withContext, useStyles } = createSlotRecipeContext({
  name: "Select",
  recipe: selectRecipe,
});
// #endregion

// #region Types
interface SelectPresetItem extends Omit<BaseSelectPresetItem, "label"> {
  label: string;
}

type SelectRootProps<T extends CollectionItem = CollectionItem> = Omit<
  SelectRootPrimitiveProps<T>,
  "onValueChange"
> &
  SelectRootContract & {
    onValueChange?: (value: string | string[]) => void;
  };

export interface SelectProps
  extends
    Omit<SelectRootProps, "children" | "collection">,
    Omit<SelectContract, "items" | "placeholder"> {
  /**
   * Whether to show a clear button when a value is selected.
   *
   * @defaultValue false
   */
  clearable?: boolean;
  items?: Array<SelectPresetItem | string>;
  placeholder?: string;
}

type SelectTriggerProps = Omit<SelectTriggerPrimitiveProps, "size"> & {
  /**
   * Whether to show a clear button when a value is selected.
   *
   * @defaultValue false
   */
  clearable?: boolean;
};

type SelectEmptyProps = {
  class?: unknown;
};
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
const SelectContext = SelectPrimitive.Context;

const Root = defineComponent({
  inheritAttrs: false,
  name: "Select.Root",
  props: {
    onValueChange: {
      default: undefined,
      type: Function as PropType<SelectRootProps["onValueChange"]>,
    },
    recipe: {
      default: selectRecipe,
      type: Function as PropType<typeof selectRecipe>,
    },
    size: {
      default: "md",
      type: String as PropType<SelectRootContract["size"]>,
    },
    surfaceVariant: {
      default: undefined,
      type: String as PropType<SelectRootContract["surfaceVariant"]>,
    },
    variant: {
      default: undefined,
      type: String as PropType<SelectRootContract["variant"]>,
    },
  },
  setup(props, { attrs, slots }) {
    const surfaceFromContext = useFormControlSurface();

    return () => {
      const resolved = {
        size: props.size,
        surfaceVariant: props.surfaceVariant ?? surfaceFromContext,
        variant: props.variant,
      };
      const recipeSlots = props.recipe(resolved);

      return h(
        Context,
        { value: { slots: recipeSlots, variants: resolved as never } },
        () =>
          h(
            SelectPrimitive.Root as ArkPart,
            {
              ...attrs,
              onValueChange: props.onValueChange
                ? (details: { value: string | string[] }) =>
                    props.onValueChange?.(details.value)
                : undefined,
            },
            () => [
              slots.default?.(),
              h(SelectPrimitive.HiddenSelect as ArkPart),
            ],
          ),
      );
    };
  },
});

const Control = withContext(SelectPrimitive.Control, {
  name: "Control",
});

const TriggerBase = withContext<SelectTriggerProps>(SelectPrimitive.Trigger, {
  name: "Trigger",
});

const Trigger = defineComponent({
  inheritAttrs: false,
  name: "Select.Trigger",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    clearable: { default: false, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    const styles = useStyles();

    return () =>
      h(Control, null, () => [
        h(
          TriggerBase,
          {
            ...attrs,
            class: props.class as string | undefined,
            "data-clearable": props.clearable || undefined,
          },
          () => [
            slots.default?.(),
            h("div", { class: styles.slots.triggerActions() }, [
              h(SelectPrimitive.Indicator as ArkPart, null, () =>
                h(PhCaretUpDown),
              ),
            ]),
          ],
        ),
        props.clearable ? h(ClearTrigger, null, () => h(PhX)) : null,
      ]);
  },
});

const SeparatorPart = withContext<SeparatorProps>(Separator, {
  defaultProps: { "data-scope": "select" },
  name: "Separator",
});

const ValueText = withContext<SelectValueTextProps>(SelectPrimitive.ValueText, {
  name: "ValueText",
});

const ContentBase = withContext<SelectContentProps>(SelectPrimitive.Content, {
  name: "Content",
});

const Content = defineComponent({
  inheritAttrs: false,
  name: "Select.Content",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(Teleport, { to: "body" }, [
        h(SelectPrimitive.Positioner as ArkPart, null, () =>
          h(
            ContentBase,
            {
              ...attrs,
              class: props.class as string | undefined,
            },
            slots,
          ),
        ),
      ]);
  },
});

const ItemGroup = defineComponent({
  inheritAttrs: false,
  name: "Select.ItemGroup",
  props: {
    heading: {
      default: undefined,
      type: [String, Object] as PropType<VNodeChild | undefined>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(SelectPrimitive.ItemGroup as ArkPart, { ...attrs }, () => [
        props.heading !== undefined
          ? h(ItemGroupLabel, null, () => props.heading)
          : null,
        slots.default?.(),
      ]);
  },
});

const ItemGroupLabel = withContext<SelectItemGroupLabelProps>(
  SelectPrimitive.ItemGroupLabel,
  { name: "ItemGroupLabel" },
);

const ItemBase = withContext<SelectItemProps>(SelectPrimitive.Item, {
  name: "Item",
});

const Item = defineComponent({
  inheritAttrs: false,
  name: "Select.Item",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useStyles();

    return () =>
      h(
        ItemBase as ArkPart,
        {
          ...attrs,
          class: props.class as string | undefined,
        },
        () => [
          h(
            SelectPrimitive.ItemText as ArkPart,
            { class: styles.slots.itemText() },
            slots.default,
          ),
          h("span", { class: styles.slots.itemIndicator() }, [
            h(SelectPrimitive.ItemIndicator as ArkPart, null, () => h(PhCheck)),
          ]),
        ],
      );
  },
});

const ClearTriggerBase = withContext<SelectClearTriggerProps>(
  SelectPrimitive.ClearTrigger,
  { name: "ClearTrigger" },
);

const ClearTrigger = defineComponent({
  inheritAttrs: false,
  name: "Select.ClearTrigger",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    const { m } = useLocale();

    return () =>
      h(
        ClearTriggerBase,
        {
          ...attrs,
          "aria-label": m("select.clear"),
          class: props.class as string | undefined,
        },
        slots,
      );
  },
});

const EmptyBase = withContext<SelectEmptyProps>("div", {
  defaultProps: { role: "presentation" },
  name: "Empty",
});

const Empty = defineComponent({
  inheritAttrs: false,
  name: "Select.Empty",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const api = useSelectContext();

      if (!api.value.empty) {
        return null;
      }

      return h(
        EmptyBase,
        {
          ...attrs,
          class: props.class as string | undefined,
        },
        slots,
      );
    };
  },
});
// #endregion

// #region Shorthand
const SelectShorthand = defineComponent({
  inheritAttrs: false,
  name: "Select",
  props: {
    clearable: { default: false, type: Boolean },
    items: {
      default: () => [],
      type: Array as PropType<Array<SelectPresetItem | string>>,
    },
    placeholder: { default: undefined, type: String },
  },
  setup(props, { attrs }) {
    return () => {
      const normalized = props.items.map((item) =>
        typeof item === "string" ? { label: item, value: item } : item,
      );
      const collection = createListCollection({ items: normalized });

      return h(
        Root,
        {
          ...attrs,
          collection,
        },
        () => [
          h(Trigger, { clearable: props.clearable }, () =>
            h(ValueText, { placeholder: props.placeholder }),
          ),
          h(Content, null, () =>
            normalized.map((item) =>
              h(Item, { item, key: item.value }, () => item.label),
            ),
          ),
        ],
      );
    };
  },
});
// #endregion

export type {
  SelectClearTriggerProps,
  SelectContentProps,
  SelectItemGroupLabelProps,
  SelectItemProps,
  SelectValueTextProps,
} from "@ark-ui/vue";

export const Select = Object.assign(SelectShorthand, {
  ClearTrigger,
  Content,
  Context: SelectContext,
  Empty,
  Item,
  ItemGroup,
  ItemGroupLabel,
  Root,
  Separator: SeparatorPart,
  Trigger,
  ValueText,
});
