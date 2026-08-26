import type { CollectionItem, ListCollection } from "@ark-ui/vue/collection";
import { createListCollection } from "@ark-ui/vue/collection";
import type { SelectRootProps as ArkSelectRootProps } from "@ark-ui/vue/select";
import { Select as SelectPrimitive, useSelectContext as useSelect } from "@ark-ui/vue/select";
import { PhCaretUpDown, PhCheck, PhX } from "@phosphor-icons/vue";
import type { FormControlShellVariantProps } from "@pisagor/styles/ui/form-control";
import { selectVariants } from "@pisagor/styles/ui/select";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, Teleport, type VNodeChild } from "vue";
import { FormControlVariantProvider } from "../../internal/form-control/form-control-variant-context";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import {
  formControlShellProps,
  formControlShellVariants,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import { Separator } from "../separator/separator";

// #region Types
interface SelectPresetItem {
  label: string;
  value: string;
}

export type SelectRootProps<T extends CollectionItem = CollectionItem> = Omit<
  ArkSelectRootProps<T>,
  "collection" | "onValueChange"
> & {
  /**
   * Visual shell variant. When omitted, resolves from the nearest `Surface` context.
   */
  variant?: FormControlVariant;
  collection?: ListCollection<T>;
  onValueChange?: (value: string | string[]) => void;
};

export interface SelectProps extends Omit<SelectRootProps, "children"> {
  items?: Array<SelectPresetItem | string>;
  /**
   * Whether to show a clear button when a value is selected.
   *
   * @defaultValue false
   */
  clearable?: boolean;
  placeholder?: string;
}

export type SelectTriggerSize = FormControlShellVariantProps["size"];
// #endregion

// #region Parts
type ArkPart = Parameters<typeof h>[0];

export const SelectContext = SelectPrimitive.Context;

export const SelectRoot = defineComponent({
  inheritAttrs: false,
  name: "SelectRoot",
  props: {
    collection: {
      default: undefined,
      type: Object as PropType<ListCollection<CollectionItem> | undefined>,
    },
    lazyMount: { default: true, type: Boolean },
    onValueChange: {
      default: undefined,
      type: Function as PropType<SelectRootProps["onValueChange"]>,
    },
    unmountOnExit: { default: true, type: Boolean },
    variant: { default: undefined, type: String as PropType<FormControlVariant | undefined> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(FormControlVariantProvider as ArkPart, { value: props.variant }, () => {
        return h(
          SelectPrimitive.Root as ArkPart,
          {
            ...attrs,
            collection: props.collection,
            lazyMount: props.lazyMount,
            onValueChange: props.onValueChange
              ? (details: { value: string | string[] }) => props.onValueChange?.(details.value)
              : undefined,
            unmountOnExit: props.unmountOnExit,
          },
          () => [slots.default?.(), h(SelectPrimitive.HiddenSelect as ArkPart)],
        );
      });
  },
});

export const SelectTrigger = defineComponent({
  inheritAttrs: false,
  name: "SelectTrigger",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    clearable: { default: false, type: Boolean },
    size: { default: "md", type: String as PropType<SelectTriggerSize> },
    variant: { default: undefined, type: String as PropType<FormControlVariant | undefined> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const resolved = useFormControlVariant(props.variant);
      const shellArgs = shellVariantArgs(resolved);
      const controlProps = formControlShellProps(resolved);
      const styleSlots = selectVariants();

      return h(SelectPrimitive.Control as ArkPart, {}, () =>
        h(
          SelectPrimitive.Trigger as ArkPart,
          {
            ...attrs,
            ...controlProps,
            class: cn(
              formControlShellVariants({ size: props.size, ...shellArgs }),
              styleSlots.trigger(),
              props.class,
              attrs.class,
            ),
            "data-size": props.size,
          },
          () => [
            slots.default?.(),
            h("div", { class: styleSlots.triggerActions() }, () => [
              props.clearable
                ? h(SelectClearTrigger as ArkPart, null, () => h(PhX, { "aria-hidden": true }))
                : null,
              h(SelectPrimitive.Indicator as ArkPart, {}, () =>
                h(PhCaretUpDown, { "aria-hidden": true }),
              ),
            ]),
          ],
        ),
      );
    };
  },
});

export const SelectSeparator = defineComponent({
  inheritAttrs: false,
  name: "SelectSeparator",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const styleSlots = selectVariants();

      return h(
        Separator as ArkPart,
        {
          ...attrs,
          class: cn(styleSlots.separator(), props.class, attrs.class),
          dataPart: "separator",
          dataScope: "select",
          orientation: "horizontal",
        },
        slots,
      );
    };
  },
});

export const SelectValueText = defineComponent({
  inheritAttrs: false,
  name: "SelectValueText",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    placeholder: { default: undefined, type: String as PropType<string | undefined> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const styleSlots = selectVariants();

      return h(
        SelectPrimitive.ValueText as ArkPart,
        {
          ...attrs,
          class: cn(styleSlots.valueText(), props.class, attrs.class),
          placeholder: props.placeholder,
        },
        slots.default?.(),
      );
    };
  },
});

function selectTeleport(content: ReturnType<typeof h> | Array<ReturnType<typeof h>>) {
  return h(Teleport, { to: "body" }, () => content);
}

export const SelectContent = defineComponent({
  inheritAttrs: false,
  name: "SelectContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const styleSlots = selectVariants();

      return selectTeleport(
        h(SelectPrimitive.Positioner as ArkPart, {}, () =>
          h(
            SelectPrimitive.Content as ArkPart,
            {
              ...attrs,
              class: cn(styleSlots.content(), props.class, attrs.class),
            },
            slots.default?.(),
          ),
        ),
      );
    };
  },
});

export const SelectItemGroup = defineComponent({
  inheritAttrs: false,
  name: "SelectItemGroup",
  props: {
    heading: { default: undefined, type: [String, Object] as PropType<VNodeChild | undefined> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        SelectPrimitive.ItemGroup as ArkPart,
        {
          ...attrs,
        },
        () => [
          props.heading !== undefined ? h(SelectItemGroupLabel, null, () => props.heading) : null,
          slots.default?.(),
        ],
      );
  },
});

export const SelectItemGroupLabel = defineComponent({
  inheritAttrs: false,
  name: "SelectItemGroupLabel",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const styleSlots = selectVariants();

      return h(
        SelectPrimitive.ItemGroupLabel as ArkPart,
        {
          ...attrs,
          class: cn(styleSlots.itemGroupLabel(), props.class, attrs.class),
        },
        slots.default?.(),
      );
    };
  },
});

export const SelectItem = defineComponent({
  inheritAttrs: false,
  name: "SelectItem",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    // Ark uses `item` for collection items.
    item: { default: undefined, type: Object as PropType<unknown> },
  },
  setup(props, { attrs, slots: children }) {
    return () => {
      const styleSlots = selectVariants();

      return h(
        SelectPrimitive.Item as ArkPart,
        {
          ...attrs,
          class: styleSlots.item({ class: cn(props.class, attrs.class) }),
          item: props.item,
        },
        () => [
          h(
            SelectPrimitive.ItemText as ArkPart,
            {
              class: styleSlots.itemText(),
            },
            children.default?.(),
          ),
          h("span", { class: styleSlots.itemIndicator() }, () =>
            h(SelectPrimitive.ItemIndicator as ArkPart, {}, () =>
              h(PhCheck, { "aria-hidden": true }),
            ),
          ),
        ],
      );
    };
  },
});

export const SelectClearTrigger = defineComponent({
  inheritAttrs: false,
  name: "SelectClearTrigger",
  props: {
    "aria-label": { default: "Clear selected value(s)", type: String },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const styleSlots = selectVariants();

      return h(
        SelectPrimitive.ClearTrigger as ArkPart,
        {
          ...attrs,
          "aria-label": props["aria-label"],
          class: cn(styleSlots.clearTrigger(), props.class, attrs.class),
        },
        slots.default?.(),
      );
    };
  },
});

export const SelectEmpty = defineComponent({
  inheritAttrs: false,
  name: "SelectEmpty",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const api = useSelect();
      const styleSlots = selectVariants();

      if (api.value.empty) {
        return h(
          "div",
          {
            ...attrs,
            class: cn(styleSlots.empty(), props.class, attrs.class),
            "data-part": "empty",
            "data-scope": "select",
            role: "presentation",
          },
          slots.default?.(),
        );
      }

      return null;
    };
  },
});

export const SelectShorthand = defineComponent({
  inheritAttrs: false,
  name: "PisagorSelect",
  props: {
    clearable: { default: false, type: Boolean },
    items: {
      default: undefined,
      type: Array as PropType<Array<SelectPresetItem | string> | undefined>,
    },
    placeholder: { default: undefined, type: String as PropType<string | undefined> },
    variant: { default: undefined, type: String as PropType<FormControlVariant | undefined> },
  },
  setup(props, { attrs }) {
    return () => {
      const items = props.items ?? [];
      const normalized = items.map((item) =>
        typeof item === "string" ? { label: item, value: item } : item,
      );
      const collection = createListCollection({ items: normalized });

      return h(
        SelectRoot as ArkPart,
        {
          ...attrs,
          collection,
          variant: props.variant,
        },
        () => [
          h(SelectTrigger as ArkPart, { clearable: props.clearable }, () =>
            h(SelectValueText as ArkPart, { placeholder: props.placeholder }),
          ),
          h(SelectContent as ArkPart, null, () =>
            normalized.map((item) =>
              h(
                SelectItem as ArkPart,
                { item, key: item.value, value: item.value },
                () => item.label,
              ),
            ),
          ),
        ],
      );
    };
  },
});
// #endregion
