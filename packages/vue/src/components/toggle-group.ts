import { ToggleGroup as ToggleGroupPrimitive } from "@ark-ui/vue";
import type {
  ToggleGroupPresetItem as BaseToggleGroupPresetItem,
  ToggleGroupRootContract,
  ToggleGroupContract,
} from "@pisagor/contracts";
import {
  buttonRecipe,
  type ToggleGroupRecipe,
  toggleGroupRecipe,
  toggleRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import {
  computed,
  defineComponent,
  h,
  type PropType,
  type VNodeChild,
} from "vue";
import {
  type ClassValue,
  createContext,
  createSlotRecipeContext,
} from "../internal";

// #region Slot recipe context
const { provideStyles: provideToggleGroupStyles, useStyles } =
  createSlotRecipeContext({
    name: "ToggleGroup",
    recipe: toggleGroupRecipe,
  });
// #endregion

export type ToggleGroupVariant = "ghost" | "outline";
export type ToggleGroupSize = "lg" | "md" | "sm";

interface ToggleGroupContextValue {
  size: ToggleGroupSize;
  slots: ToggleGroupRecipe;
  spacing: number;
  variant: ToggleGroupVariant;
}

export interface ToggleGroupRootProps extends Omit<
  ToggleGroupRootContract,
  "items"
> {
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

export interface ToggleGroupPresetItem extends Omit<
  BaseToggleGroupPresetItem,
  "content"
> {
  value: string;
  disabled?: boolean;
  content: VNodeChild;
}

export type { ToggleGroupItemProps } from "@ark-ui/vue";

export interface ToggleGroupProps
  extends
    Omit<ToggleGroupRootProps, "children">,
    ToggleGroupRootContract,
    ToggleGroupContract {
  items?: ToggleGroupPresetItem[];
}

type ArkPart = Parameters<typeof h>[0];

const [ToggleGroupContextProvider, useToggleGroupContext] = createContext(
  "ToggleGroup",
)<ToggleGroupContextValue>({ strict: false });

export const ToggleGroupRoot = defineComponent({
  inheritAttrs: false,
  name: "ToggleGroupRoot",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    defaultValue: {
      default: undefined,
      type: Array as PropType<string[] | undefined>,
    },
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
    value: {
      default: undefined,
      type: Array as PropType<string[] | undefined>,
    },
    variant: { default: "ghost", type: String as PropType<ToggleGroupVariant> },
  },
  setup(props, { attrs, slots }) {
    const recipeSlots = computed(() =>
      props.recipe({ orientation: props.orientation }),
    );

    provideToggleGroupStyles({
      get slots() {
        return recipeSlots.value;
      },
      variants: {},
    });

    ToggleGroupContextProvider({
      get size() {
        return props.size;
      },
      get slots() {
        return recipeSlots.value;
      },
      get spacing() {
        return props.spacing;
      },
      get variant() {
        return props.variant;
      },
    });

    return () => {
      const variantSlots = recipeSlots.value;

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
                const nextValue = props.multiple
                  ? details.value
                  : (details.value[0] ?? "");

                return props.onValueChange?.(nextValue);
              }
            : undefined,
          orientation: props.orientation,
          style: [{ "--gap": props.spacing }, attrs.style],
        },
        slots,
      );
    };
  },
});

/** Item; styled like `Toggle` from the group's `variant` / `size`. */
export const ToggleGroupItem = defineComponent({
  inheritAttrs: false,
  name: "ToggleGroup.Item",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useStyles();
    const ctx = useToggleGroupContext();

    return () => {
      const variant = ctx?.variant ?? "ghost";

      return h(
        ToggleGroupPrimitive.Item as ArkPart,
        {
          ...attrs,
          class: cn(
            buttonRecipe({ clickEffect: false, variant }).base(),
            toggleRecipe({ size: ctx?.size ?? "md" }),
            (ctx?.slots ?? styles.slots).item({ class: cn(props.class) }),
          ),
          "data-spacing": ctx?.spacing ?? 0,
          "data-variant": variant,
        },
        slots,
      );
    };
  },
});

export const ToggleGroupShorthand = defineComponent({
  inheritAttrs: false,
  name: "ToggleGroup",
  props: {
    classNames: {
      default: undefined,
      type: Object as PropType<ToggleGroupProps["classNames"]>,
    },
    defaultValue: {
      default: undefined,
      type: Array as PropType<string[] | undefined>,
    },
    disabled: { default: undefined, type: Boolean },
    items: {
      default: undefined,
      type: Array as PropType<ToggleGroupPresetItem[] | undefined>,
    },
    multiple: { default: true, type: Boolean },
    onValueChange: {
      default: undefined,
      type: Function as PropType<ToggleGroupRootProps["onValueChange"]>,
    },
    orientation: {
      default: "horizontal",
      type: String as PropType<"horizontal" | "vertical">,
    },
    size: { default: "md", type: String as PropType<ToggleGroupSize> },
    spacing: { default: 0, type: Number },
    value: {
      default: undefined,
      type: Array as PropType<string[] | undefined>,
    },
    variant: { default: "ghost", type: String as PropType<ToggleGroupVariant> },
  },
  setup(props, { attrs }) {
    return () =>
      h(
        ToggleGroupRoot as ArkPart,
        {
          ...(attrs as object),
          class: cn(props.classNames?.base, attrs.class as ClassValue),
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
              {
                class: props.classNames?.item,
                disabled: item.disabled,
                key: item.value,
                value: item.value,
              },
              () => item.content,
            ),
          ) ?? [],
      );
  },
});

export const ToggleGroup = Object.assign(ToggleGroupShorthand, {
  Item: ToggleGroupItem,
  Root: ToggleGroupRoot,
});
