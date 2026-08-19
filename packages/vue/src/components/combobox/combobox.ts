import type { CollectionItem, ListCollection } from "@ark-ui/vue/collection";
import { createListCollection } from "@ark-ui/vue/collection";
import type { ComboboxRootProps as ArkComboboxRootProps } from "@ark-ui/vue/combobox";
import {
  Combobox as ComboboxPrimitive,
  useComboboxContext as useCombobox,
} from "@ark-ui/vue/combobox";
import { PhCaretUpDown, PhCheck, PhX } from "@phosphor-icons/vue";
import {
  comboboxContentVariants,
  comboboxControlVariants,
  comboboxEmptyVariants,
  comboboxGroupLabelVariants,
  comboboxInline2Variants,
  comboboxInline3Variants,
  comboboxInlineVariants,
  comboboxItemVariants,
  comboboxListVariants,
  comboboxTriggerVariants,
} from "@pisagor/styles/ui/combobox";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, Teleport, type VNodeChild } from "vue";
import { FormControlVariantProvider } from "../../internal/form-control/form-control-variant-context";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import type { WithTestId } from "../../internal/types";
import { createContext } from "../../utils/create-context";
import { Button } from "../button";
import { InputGroup } from "../input-group";

// #region Types
interface ComboboxPresetItem {
  label: string;
  value: string;
}

export type ComboboxRootProps<T extends CollectionItem = CollectionItem> = Omit<
  ArkComboboxRootProps<T>,
  "collection" | "onValueChange"
> & {
  /**
   * Visual shell variant. When omitted, resolves from the nearest `Surface` context.
   */
  variant?: FormControlVariant;
  collection?: ListCollection<T>;
  onValueChange?: (value: string[]) => void;
} & WithTestId;

export interface ComboboxProps extends Omit<ComboboxRootProps, "children"> {
  items?: Array<ComboboxPresetItem | string>;
  /**
   * Whether to show a clear button when the input has a value.
   *
   * @defaultValue false
   */
  clearable?: boolean;
}

export interface ComboboxInputProps {
  size?: "lg" | "md" | "sm";
  variant?: FormControlVariant;
  clearable?: boolean;
  showTrigger?: boolean;
  disabled?: boolean;
  class?: unknown;
}

export interface ComboboxGroupProps {
  heading?: string | VNodeChild;
  class?: unknown;
}
// #endregion

// #region Context
const [ComboboxRootContext, useComboboxRoot] = createContext<{ testId?: string }>({
  name: "ComboboxRoot",
  strict: false,
});

export { useComboboxRoot };

// #endregion

// #region Components
type ArkPart = Parameters<typeof h>[0];

export const ComboboxContext = ComboboxPrimitive.Context;

function comboboxTeleport(content: ReturnType<typeof h> | Array<ReturnType<typeof h>>) {
  return h(Teleport, { to: "body" }, () => content);
}

export const ComboboxRoot = defineComponent({
  inheritAttrs: false,
  name: "ComboboxRoot",
  props: {
    collection: {
      default: undefined,
      type: Object as PropType<ListCollection<CollectionItem> | undefined>,
    },
    lazyMount: { default: true, type: Boolean },
    onValueChange: {
      default: undefined,
      type: Function as PropType<ComboboxRootProps["onValueChange"]>,
    },
    openOnClick: { default: true, type: Boolean },
    testId: String,
    unmountOnExit: { default: true, type: Boolean },
    variant: { default: undefined, type: String as PropType<FormControlVariant | undefined> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const { "data-testid": _, ...restAttrs } = attrs;

      return h(FormControlVariantProvider as ArkPart, { value: props.variant }, () => {
        ComboboxRootContext({ testId: props.testId });

        return h(
          ComboboxPrimitive.Root as ArkPart,
          {
            ...restAttrs,
            collection: props.collection,
            "data-testid": props.testId,
            lazyMount: props.lazyMount,
            onValueChange: props.onValueChange
              ? (details: { value: string[] }) => props.onValueChange?.(details.value)
              : undefined,
            openOnClick: props.openOnClick,
            unmountOnExit: props.unmountOnExit,
          },
          slots.default?.(),
        );
      });
    };
  },
});

export const ComboboxControl = defineComponent({
  inheritAttrs: false,
  name: "ComboboxControl",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    // Allow consumers to pass data-size via attrs; styled root uses variants.
  },
  setup(props, { attrs, slots }) {
    return () => {
      const { testId } = useComboboxRoot() ?? {};

      return h(
        ComboboxPrimitive.Control as ArkPart,
        {
          ...attrs,
          class: cn(comboboxControlVariants(), props.class, attrs.class),
          "data-testid": testId,
        },
        slots.default?.(),
      );
    };
  },
});

export const ComboboxInput = defineComponent({
  inheritAttrs: false,
  name: "ComboboxInput",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    clearable: { default: false, type: Boolean },
    disabled: { default: undefined, type: Boolean },
    showTrigger: { default: true, type: Boolean },
    size: { default: "md", type: String as PropType<ComboboxInputProps["size"]> },
    testId: String,
    variant: { default: undefined, type: String as PropType<FormControlVariant | undefined> },
  },
  setup(props, { attrs, slots }) {
    const api = useCombobox();

    return () => {
      return h(ComboboxControl as ArkPart, { "data-size": props.size }, () =>
        h(
          InputGroup as ArkPart,
          {
            class: cn(props.class),
            size: props.size,
            variant: props.variant,
          },
          () => [
            slots.default?.(),
            h(ComboboxPrimitive.Input as ArkPart, { asChild: true }, () =>
              h(InputGroup.Input as ArkPart, {
                ...attrs,
                clearable: false,
                disabled: props.disabled,
              }),
            ),
            h(
              InputGroup.Addon as ArkPart,
              { align: "inline-end", "data-part": "addon", "data-scope": "combobox" },
              () => [
                props.showTrigger
                  ? h(ComboboxTrigger as ArkPart, { class: comboboxInlineVariants() })
                  : null,
                props.clearable && api.value.inputValue
                  ? h(ComboboxClear as ArkPart, { asChild: true }, () =>
                      h(InputGroup.Button as ArkPart, { size: "icon-xs", variant: "ghost" }, () =>
                        h(PhX, { "aria-hidden": true }),
                      ),
                    )
                  : null,
              ],
            ),
          ],
        ),
      );
    };
  },
});

export const ComboboxTrigger = defineComponent({
  inheritAttrs: false,
  name: "ComboboxTrigger",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ComboboxPrimitive.Trigger as ArkPart,
        {
          ...attrs,
          asChild: true,
          class: cn(comboboxTriggerVariants(), props.class, attrs.class),
        },
        () =>
          slots.default?.() ??
          h(Button as ArkPart, { class: comboboxInline2Variants(), variant: "ghost" }, () =>
            h(PhCaretUpDown, { "aria-hidden": true }),
          ),
      );
  },
});

export const ComboboxClear = defineComponent({
  inheritAttrs: false,
  name: "ComboboxClear",
  props: {
    "aria-label": { default: "Clear selected value(s)", type: String },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ComboboxPrimitive.ClearTrigger as ArkPart,
        {
          ...attrs,
          "aria-label": props["aria-label"],
        },
        slots.default?.(),
      );
  },
});

export const ComboboxFieldInput = defineComponent({
  inheritAttrs: false,
  name: "ComboboxFieldInput",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        ComboboxPrimitive.Input as ArkPart,
        {
          ...attrs,
          ...(attrs as object),
        },
        slots.default?.(),
      );
  },
});

export const ComboboxPositioner = defineComponent({
  inheritAttrs: false,
  name: "ComboboxPositioner",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        ComboboxPrimitive.Positioner as ArkPart,
        {
          ...attrs,
        },
        slots.default?.(),
      );
  },
});

export const ComboboxContent = defineComponent({
  inheritAttrs: false,
  name: "ComboboxContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      comboboxTeleport(
        h(ComboboxPositioner as ArkPart, null, () =>
          h(
            ComboboxPrimitive.Content as ArkPart,
            {
              ...attrs,
              class: cn(comboboxContentVariants(), props.class, attrs.class),
            },
            slots.default?.(),
          ),
        ),
      );
  },
});

export const ComboboxGroup = defineComponent({
  inheritAttrs: false,
  name: "ComboboxGroup",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    heading: {
      default: undefined,
      type: [String, Object] as PropType<ComboboxGroupProps["heading"]>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(ComboboxPrimitive.ItemGroup as ArkPart, { ...attrs, class: props.class }, () => [
        props.heading ? h(ComboboxGroupLabel, null, () => props.heading) : null,
        slots.default?.(),
      ]);
  },
});

export const ComboboxGroupLabel = defineComponent({
  inheritAttrs: false,
  name: "ComboboxGroupLabel",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ComboboxPrimitive.ItemGroupLabel as ArkPart,
        {
          ...attrs,
          class: cn(comboboxGroupLabelVariants(), props.class, attrs.class),
        },
        slots.default?.(),
      );
  },
});

export const ComboboxItem = defineComponent({
  inheritAttrs: false,
  name: "ComboboxItem",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    item: { default: undefined, type: Object as PropType<unknown> },
    showIndicator: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ComboboxPrimitive.Item as ArkPart,
        {
          ...attrs,
          class: cn(
            comboboxItemVariants({ showIndicator: props.showIndicator }),
            props.class,
            attrs.class,
          ),
          item: props.item,
          persistFocus: true,
        },
        () => [
          slots.default?.(),
          props.showIndicator
            ? h("span", { class: comboboxInline3Variants() }, () =>
                h(ComboboxPrimitive.ItemIndicator as ArkPart, {}, () =>
                  h(PhCheck, { "aria-hidden": true }),
                ),
              )
            : null,
        ],
      );
  },
});

export const ComboboxEmpty = defineComponent({
  inheritAttrs: false,
  name: "ComboboxEmpty",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ComboboxPrimitive.Empty as ArkPart,
        {
          ...attrs,
          class: cn(comboboxEmptyVariants(), props.class, attrs.class),
        },
        slots.default?.() ?? "No results found. Try a different search.",
      );
  },
});

export const ComboboxList = defineComponent({
  inheritAttrs: false,
  name: "ComboboxList",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ComboboxPrimitive.List as ArkPart,
        {
          ...attrs,
          class: cn(comboboxListVariants(), props.class, attrs.class),
        },
        slots.default?.(),
      );
  },
});

export const ComboboxShorthand = defineComponent({
  inheritAttrs: false,
  name: "PisagorCombobox",
  props: {
    clearable: { default: false, type: Boolean },
    items: {
      default: undefined,
      type: Array as PropType<Array<ComboboxPresetItem | string> | undefined>,
    },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () => {
      const items = props.items ?? [];
      const normalized = items.map((item) =>
        typeof item === "string" ? { label: item, value: item } : item,
      );
      const collection = createListCollection({ items: normalized });

      return h(
        ComboboxRoot as ArkPart,
        {
          ...attrs,
          collection,
          testId: props.testId,
        },
        () => [
          h(ComboboxInput as ArkPart, { clearable: props.clearable }),
          h(ComboboxContent as ArkPart, null, () =>
            h(ComboboxList as ArkPart, null, () =>
              normalized.map((item) =>
                h(
                  ComboboxItem as ArkPart,
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
