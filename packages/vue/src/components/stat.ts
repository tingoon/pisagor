import { ark } from "@ark-ui/vue/factory";
import type {
  StatProps as BaseStatProps,
  StatTrendProps as BaseStatTrendProps,
} from "@pisagor/props";
import {
  type StatRecipeSlot,
  type StatTrendVariantProps,
  type StatVariantProps,
  statRecipe,
  statTrendRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../internal/types";

// #region Slot recipe context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Stat",
  recipe: statRecipe,
});
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Types
type StatVariant = NonNullable<StatVariantProps["variant"]>;
type StatTrendVariant = NonNullable<StatTrendVariantProps["trend"]>;

type StatClassNames = VariantClassNames<StatRecipeSlot>;

export interface StatProps extends BaseStatProps {
  class?: unknown;
  classNames?: StatClassNames;

  label?: VNodeChild;
  value?: VNodeChild;
  description?: VNodeChild;
  trend?: VNodeChild;

  labelProps?: Record<string, unknown>;
  valueProps?: Record<string, unknown>;
  descriptionProps?: Record<string, unknown>;
  trendProps?: Record<string, unknown>;
}

export interface StatTrendProps extends BaseStatTrendProps {
  class?: unknown;
}
// #endregion

// #region Parts
export const StatRoot = withProvider(ark.div, {
  name: "Root",
  slot: "base",
});

export const StatLabel = withContext(ark.div, {
  name: "Label",
  slot: "label",
});

export const StatValue = withContext(ark.div, {
  name: "Value",
  slot: "value",
});

export const StatDescription = withContext(ark.p, {
  name: "Description",
  slot: "description",
});

export const StatTrend = defineComponent({
  inheritAttrs: false,
  name: "StatTrend",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    recipe: {
      default: statTrendRecipe,
      type: Function as PropType<typeof statTrendRecipe>,
    },
    trend: { default: "neutral", type: String as PropType<StatTrendVariant> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(props.recipe({ trend: props.trend }), props.class),
          "data-part": "trend",
          "data-scope": "stat",
          "data-trend": props.trend,
        },
        slots.default?.(),
      );
    };
  },
});

export const StatShorthand = defineComponent({
  inheritAttrs: false,
  name: "StatShorthand",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<StatClassNames>,
    },
    description: {
      default: undefined,
      type: [String, Number, Boolean, Object, Array] as PropType<VNodeChild>,
    },
    descriptionProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown> | undefined>,
    },
    label: {
      default: undefined,
      type: [String, Number, Boolean, Object, Array] as PropType<VNodeChild>,
    },
    labelProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown> | undefined>,
    },
    trend: {
      default: undefined,
      type: [String, Number, Boolean, Object, Array] as PropType<VNodeChild>,
    },
    trendProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown> | undefined>,
    },
    value: {
      default: undefined,
      type: [String, Number, Boolean, Object, Array] as PropType<VNodeChild>,
    },
    valueProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown> | undefined>,
    },
    variant: { default: "outline", type: String as PropType<StatVariant> },
  },
  setup(props, { attrs }) {
    return () =>
      h(
        StatRoot,
        {
          ...attrs,
          class: props.class,
          classNames: props.classNames,
          variant: props.variant,
        },
        () => [
          props.label !== undefined
            ? h(
                StatLabel,
                { ...(props.labelProps ?? {}), classNames: props.classNames },
                () => props.label,
              )
            : null,
          props.value !== undefined
            ? h(
                StatValue,
                { ...(props.valueProps ?? {}), classNames: props.classNames },
                () => props.value,
              )
            : null,
          props.description !== undefined
            ? h(
                StatDescription,
                {
                  ...(props.descriptionProps ?? {}),
                  classNames: props.classNames,
                },
                () => props.description,
              )
            : null,
          props.trend !== undefined
            ? h(StatTrend, { ...(props.trendProps ?? {}) }, () => props.trend)
            : null,
        ],
      );
  },
});

// #endregion

export const Stat = Object.assign(StatShorthand, {
  Description: StatDescription,
  Label: StatLabel,
  Root: StatRoot,
  Trend: StatTrend,
  Value: StatValue,
});
