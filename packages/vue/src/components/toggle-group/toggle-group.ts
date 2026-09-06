import { ToggleGroup as ToggleGroupPrimitive } from "@ark-ui/vue/toggle-group";
import { type ToggleGroupRecipe, toggleGroupRecipe } from "@pisagor/recipes/toggle-group";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { createContext } from "../../internal/utils/create-context";
import { Toggle } from "../toggle";

export type ToggleGroupVariant = "ghost" | "outline";
export type ToggleGroupSize = "lg" | "md" | "sm";

interface ToggleGroupContextValue {
  size: ToggleGroupSize;
  slots: ToggleGroupRecipe;
  spacing: number;
  variant: ToggleGroupVariant;
}

export interface ToggleGroupRootProps {
  /**
   * Style recipe. Defaults to `toggleGroupRecipe` from `@pisagor/recipes/toggle-group`.
   *
   * @defaultValue toggleGroupRecipe
   */
  recipe?: typeof toggleGroupRecipe;
  class?: unknown;
  defaultValue?: string[];
  disabled?: boolean;
  multiple?: boolean;
  orientation?: "horizontal" | "vertical";
  onValueChange?: (value: string | string[]) => void;
  spacing?: number;
  variant?: ToggleGroupVariant;
  size?: ToggleGroupSize;
  value?: string[];
}

export interface ToggleGroupPresetItem {
  value: string;
  disabled?: boolean;
  children: VNodeChild;
}

export interface ToggleGroupItemProps {
  class?: unknown;
  disabled?: boolean;
  value: string;
}

type ArkPart = Parameters<typeof h>[0];

const [ToggleGroupContextProvider, useToggleGroupContext] = createContext<ToggleGroupContextValue>({
  name: "ToggleGroup",
  strict: false,
});

export const ToggleGroupRoot = defineComponent({
  inheritAttrs: false,
  name: "ToggleGroupRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    defaultValue: { default: undefined, type: Array as PropType<string[] | undefined> },
    disabled: { default: undefined, type: Boolean },
    multiple: { default: true, type: Boolean },
    onValueChange: {
      default: undefined,
      type: Function as PropType<ToggleGroupRootProps["onValueChange"]>,
    },
    orientation: {
      default: "horizontal",
      type: String as PropType<"horizontal" | "vertical">,
    },
    recipe: {
      default: toggleGroupRecipe,
      type: Function as PropType<typeof toggleGroupRecipe>,
    },
    size: { default: "md", type: String as PropType<ToggleGroupSize> },
    spacing: { default: 0, type: Number },
    value: { default: undefined, type: Array as PropType<string[] | undefined> },
    variant: { default: "ghost", type: String as PropType<ToggleGroupVariant> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe({ orientation: props.orientation });

      ToggleGroupContextProvider({
        size: props.size,
        slots: variantSlots,
        spacing: props.spacing,
        variant: props.variant,
      });

      return h(
        ToggleGroupPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: cn(variantSlots.base(), props.class),
          defaultValue: props.defaultValue,
          modelValue: props.value,
          multiple: props.multiple,
          onValueChange: props.onValueChange
            ? (details: { value: string[] }) => {
                const nextValue = props.multiple ? details.value : (details.value[0] ?? "");
                return props.onValueChange?.(nextValue);
              }
            : undefined,
          orientation: props.orientation,
          style: {
            ...(attrs as object),
            ...(typeof (props as unknown as { style?: unknown }).style === "object"
              ? (((props as unknown as { style: Record<string, unknown> }).style ?? {}) as object)
              : {}),
            "--gap": props.spacing,
          } as unknown as Record<string, unknown>,
        },
        slots,
      );
    };
  },
});

export const ToggleGroupItem = defineComponent({
  inheritAttrs: false,
  name: "ToggleGroupItem",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    disabled: { default: undefined, type: Boolean },
    recipe: {
      default: toggleGroupRecipe,
      type: Function as PropType<typeof toggleGroupRecipe>,
    },
    value: { required: true, type: String },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const ctx = useToggleGroupContext();

      return h(
        ToggleGroupPrimitive.Item as ArkPart,
        {
          ...attrs,
          asChild: true,
          disabled: props.disabled,
          value: props.value,
        },
        () =>
          h(
            Toggle as ArkPart,
            {
              ...attrs,
              class: cn(ctx?.slots.item() ?? props.recipe().item(), props.class),
              "data-spacing": ctx?.spacing ?? 0,
              "data-variant": ctx?.variant ?? "ghost",
              disabled: props.disabled,
              size: ctx?.size ?? "md",
              variant: ctx?.variant ?? "ghost",
            },
            () => slots.default?.(),
          ),
      );
    };
  },
});

export const ToggleGroupShorthand = defineComponent({
  inheritAttrs: false,
  name: "ToggleGroup",
  props: {
    defaultValue: { default: undefined, type: Array as PropType<string[] | undefined> },
    disabled: { default: undefined, type: Boolean },
    items: { default: undefined, type: Array as PropType<ToggleGroupPresetItem[] | undefined> },
    multiple: { default: true, type: Boolean },
    onValueChange: {
      default: undefined,
      type: Function as PropType<ToggleGroupRootProps["onValueChange"]>,
    },
    orientation: { default: "horizontal", type: String as PropType<"horizontal" | "vertical"> },
    size: { default: "md", type: String as PropType<ToggleGroupSize> },
    spacing: { default: 0, type: Number },
    value: { default: undefined, type: Array as PropType<string[] | undefined> },
    variant: { default: "ghost", type: String as PropType<ToggleGroupVariant> },
  },
  setup(props, { attrs }) {
    return () =>
      h(
        ToggleGroupRoot as ArkPart,
        {
          ...(attrs as object),
          defaultValue: props.defaultValue,
          disabled: props.disabled,
          multiple: props.multiple,
          onValueChange: props.onValueChange,
          orientation: props.orientation,
          size: props.size,
          spacing: props.spacing,
          value: props.value,
          variant: props.variant,
        },
        () =>
          props.items?.map((item) =>
            h(
              ToggleGroupItem as ArkPart,
              { disabled: item.disabled, key: item.value, value: item.value },
              () => item.children,
            ),
          ) ?? [],
      );
  },
});
