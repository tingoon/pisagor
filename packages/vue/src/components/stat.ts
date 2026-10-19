import { PhArrowDown, PhArrowUp, PhMinus } from "@phosphor-icons/vue";
import type {
  StatContract,
  StatRootContract,
  StatTrendRootContract,
} from "@pisagor/contracts";
import { statRecipe, statTrendRecipe } from "@pisagor/recipes";
import type { StatTrendVariantProps, StatVariantProps } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";
import { type MessageKey, useLocale } from "./provider/context";

// #region Slot recipe context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Stat",
  recipe: statRecipe,
});
// #endregion

// #region Types
type StatVariant = NonNullable<StatVariantProps["variant"]>;
type StatTrendVariant = NonNullable<StatTrendVariantProps["trend"]>;

export interface StatProps extends StatRootContract, StatContract {
  class?: unknown;

  label?: VNodeChild;
  value?: VNodeChild;
  description?: VNodeChild;
  trend?: VNodeChild;

  labelProps?: Record<string, unknown>;
  valueProps?: Record<string, unknown>;
  descriptionProps?: Record<string, unknown>;
  trendProps?: Record<string, unknown>;
}

export interface StatTrendProps extends StatTrendRootContract {
  class?: unknown;
  /**
   * Icon shown before the content. Defaults to an arrow matching `trend`; pass
   * `false` to hide it (or use the `icon` slot).
   */
  icon?: boolean;
}
// #endregion

// #region Parts
export const StatRoot = withProvider<StatRootContract>("div", {
  name: "Root",
  slot: "base",
});

export const StatLabel = withContext("div", {
  name: "Label",
  slot: "label",
});

export const StatValue = withContext("div", {
  name: "Value",
  slot: "value",
});

export const StatDescription = withContext("p", {
  name: "Description",
  slot: "description",
});

const TREND_ICONS = {
  down: PhArrowDown,
  neutral: PhMinus,
  up: PhArrowUp,
};

export const StatTrend = defineComponent({
  inheritAttrs: false,
  name: "StatTrend",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    /**
     * Icon shown before the content. Defaults to an arrow matching `trend`;
     * pass `false` to hide it (or use the `icon` slot).
     */
    icon: { default: true, type: Boolean },
    recipe: {
      default: statTrendRecipe,
      type: Function as PropType<typeof statTrendRecipe>,
    },
    trend: { default: "neutral", type: String as PropType<StatTrendVariant> },
  },
  setup(props, { attrs, slots }) {
    const { m } = useLocale();

    return () => {
      return h(
        "div",
        {
          ...attrs,
          class: cn(props.recipe({ trend: props.trend }), props.class),
          "data-part": "trend",
          "data-scope": "stat",
          "data-trend": props.trend,
        },
        [
          slots.icon?.() ??
            (props.icon
              ? h(TREND_ICONS[props.trend ?? "neutral"], {
                  "aria-hidden": true,
                })
              : null),
          h(
            "span",
            { class: "sr-only" },
            m(`stat.trend.${props.trend}` as MessageKey),
          ),
          slots.default?.(),
        ],
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
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<StatProps["classNames"]>,
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
