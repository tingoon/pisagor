import { ark } from "@ark-ui/vue/factory";
import {
  type StatTrendVariantProps,
  type StatVariantProps,
  statTrendVariants,
  statVariants,
} from "@pisagor/styles/ui/stat";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import type { VariantClassNames, WithTestId } from "../../internal/types";

type ArkPart = Parameters<typeof h>[0];

// #region Types

type StatVariant = NonNullable<StatVariantProps["variant"]>;
type StatTrendVariant = NonNullable<StatTrendVariantProps["trend"]>;

type StatClassNames = VariantClassNames<typeof statVariants>;

export interface StatProps extends Omit<WithTestId, "testId"> {
  class?: unknown;
  classNames?: StatClassNames;
  testId?: string;
  variant?: StatVariant;

  label?: VNodeChild;
  value?: VNodeChild;
  description?: VNodeChild;
  trend?: VNodeChild;

  labelProps?: Record<string, unknown>;
  valueProps?: Record<string, unknown>;
  descriptionProps?: Record<string, unknown>;
  trendProps?: Record<string, unknown>;
}
// #endregion

// #region Parts
export const StatRoot = defineComponent({
  inheritAttrs: false,
  name: "StatRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<StatClassNames> },
    testId: String,
    variant: { default: "outline", type: String as PropType<StatVariant> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const slots_ = statVariants({ variant: props.variant });

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: slots_.base({ class: cn(props.class, props.classNames?.base) }),
          "data-part": "root",
          "data-scope": "stat",
          "data-testid": props.testId,
          "data-variant": props.variant,
        },
        slots.default?.(),
      );
    };
  },
});

export const StatLabel = defineComponent({
  inheritAttrs: false,
  name: "StatLabel",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<StatClassNames> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const slots_ = statVariants();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: slots_.label({ class: cn(props.class, props.classNames?.label) }),
          "data-part": "label",
          "data-scope": "stat",
        },
        slots.default?.(),
      );
    };
  },
});

export const StatValue = defineComponent({
  inheritAttrs: false,
  name: "StatValue",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<StatClassNames> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const slots_ = statVariants();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: slots_.value({ class: cn(props.class, props.classNames?.value) }),
          "data-part": "value",
          "data-scope": "stat",
        },
        slots.default?.(),
      );
    };
  },
});

export const StatDescription = defineComponent({
  inheritAttrs: false,
  name: "StatDescription",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<StatClassNames> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const slots_ = statVariants();

      return h(
        ark.p as ArkPart,
        {
          ...attrs,
          class: slots_.description({ class: cn(props.class, props.classNames?.description) }),
          "data-part": "description",
          "data-scope": "stat",
        },
        slots.default?.(),
      );
    };
  },
});

export const StatTrend = defineComponent({
  inheritAttrs: false,
  name: "StatTrend",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    testId: String,
    trend: { default: "neutral", type: String as PropType<StatTrendVariant> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(statTrendVariants({ trend: props.trend }), props.class),
          "data-part": "trend",
          "data-scope": "stat",
          "data-testid": props.testId,
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
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<StatClassNames> },
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
    testId: String,
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
          testId: props.testId,
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
                { ...(props.descriptionProps ?? {}), classNames: props.classNames },
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

StatRoot.displayName = "Stat.Root";
StatLabel.displayName = "Stat.Label";
StatValue.displayName = "Stat.Value";
StatDescription.displayName = "Stat.Description";
StatTrend.displayName = "Stat.Trend";
StatShorthand.displayName = "Stat";
// #endregion
