import { type ChartVariants, chartVariants } from "@pisagor/recipes/chart";
import { cn } from "@pisagor/utils";
import { computed, defineComponent, h, type PropType, type VNodeChild } from "vue";
import { createContext } from "../internal/utils/create-context";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export type ChartConfig = Record<
  string,
  (
    | { color?: never; theme: Record<"dark" | "light", string> }
    | { color?: string; theme?: never }
  ) & {
    icon?: ArkPart;
    label?: VNodeChild;
  }
>;

export interface ChartLegendContentProps {
  className?: string;
  hideIcon?: boolean;
  nameKey?: string;
  payload?: unknown[];
  verticalAlign?: "top" | "bottom";
}

export interface ChartTooltipContentProps {
  active?: boolean;
  className?: string;
  color?: string;
  formatter?: (
    value: unknown,
    name: unknown,
    item: unknown,
    index: number,
    payload: readonly unknown[],
  ) => unknown;
  hideIndicator?: boolean;
  hideLabel?: boolean;
  indicator?: "dashed" | "dot" | "line";
  label?: unknown;
  labelClassName?: string;
  labelKey?: string;
  nameKey?: string;
  payload?: unknown[];
}
// #endregion

// #region Context
interface ChartContextValue {
  config: ChartConfig;
  slots: ChartVariants;
}

const [provideChartContext, useChartContext] = createContext<ChartContextValue>({
  name: "Chart",
  strict: true,
});

function useChart(): ChartContextValue {
  // `createContext(..., { strict: true })` ensures this is never undefined at runtime.
  return useChartContext() as ChartContextValue;
}
// #endregion

// #region Helpers
const THEMES = { dark: ".dark", light: "" } as const;
type ChartPayloadValue = {
  fill?: unknown;
  color?: unknown;
  value?: unknown;
  [key: string]: unknown;
};

type ChartPayloadEntry = {
  dataKey?: unknown;
  name?: unknown;
  payload?: ChartPayloadValue;
  fill?: unknown;
  color?: unknown;
  value?: unknown;
  [key: string]: unknown;
};

function resolvePayloadKey(item: ChartPayloadEntry, key: string, fallback: string) {
  if (typeof item?.dataKey === "string") return item.dataKey;
  if (typeof item?.name === "string") return item.name;
  if (typeof key === "string") return key || fallback;
  return fallback;
}

function getPayloadConfig(config: ChartConfig, item: ChartPayloadEntry, key: string) {
  const resolvedKey = resolvePayloadKey(item, key, key);
  if (resolvedKey in config) return config[resolvedKey];

  if (key in config) return config[key];

  // Best-effort fallback: try `item.name` / `item.dataKey`.
  const name = typeof item?.name === "string" ? item.name : undefined;
  if (name && name in config) return config[name];
  return undefined;
}
// #endregion

// #region Parts
export const ChartStyle = defineComponent({
  inheritAttrs: false,
  name: "ChartStyle",
  props: {
    config: { required: true, type: Object as PropType<ChartConfig> },
    id: { required: true, type: String },
  },
  setup(props) {
    return () => {
      const colorConfig = Object.entries(props.config).filter(
        (value): value is [string, ChartConfig[string]] =>
          Boolean(value[1]?.theme || value[1]?.color),
      );

      if (colorConfig.length === 0) {
        return null;
      }

      const css = Object.entries(THEMES)
        .map(([theme, prefix]) => {
          const themeKey = theme as "dark" | "light";
          return `
            ${prefix} [data-chart=${props.id}] {
              ${colorConfig
                .map(([key, itemConfig]) => {
                  const color = itemConfig.theme?.[themeKey] ?? itemConfig.color;
                  return color ? `--color-${key}: ${color};` : null;
                })
                .filter((line): line is string => Boolean(line))
                .join("\n")}
            }
          `;
        })
        .join("\n");

      return h("style", null, css);
    };
  },
});

export const ChartContainer = defineComponent({
  inheritAttrs: false,
  name: "ChartContainer",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    config: { required: true, type: Object as PropType<ChartConfig> },
    id: { default: undefined, type: String },
  },
  setup(props, { attrs, slots }) {
    const uniqueId = computed(() => props.id ?? `chart-${Math.random().toString(36).slice(2)}`);
    const variantSlots = chartVariants();
    provideChartContext(computed(() => ({ config: props.config, slots: variantSlots })));

    return () =>
      h(
        "div" as ArkPart,
        {
          ...attrs,
          class: cn(variantSlots.base(), props.class),
          "data-chart": uniqueId.value,
          "data-part": "root",
          "data-scope": "chart",
        },
        () => [h(ChartStyle, { config: props.config, id: uniqueId.value }), slots.default?.()],
      );
  },
});

function resolveTooltipLabel(
  config: ChartConfig,
  payload: unknown[],
  label: unknown,
  labelKey?: string,
) {
  if (!payload.length) return null;
  if (!label || typeof labelKey === "string") return label ?? null;

  const key = typeof label === "string" ? label : undefined;
  if (!key) return null;

  const itemConfig = config[key];
  return itemConfig?.label ?? label;
}

export const ChartTooltipContent = defineComponent({
  inheritAttrs: false,
  name: "ChartTooltipContent",
  props: {
    active: { default: false, type: Boolean },
    className: { default: undefined, type: String },
    color: { default: undefined, type: String },
    hideIndicator: { default: false, type: Boolean },
    hideLabel: { default: false, type: Boolean },
    indicator: { default: "dot", type: String as PropType<ChartTooltipContentProps["indicator"]> },
    label: { default: undefined, type: null as unknown as PropType<unknown> },
    labelClassName: { default: undefined, type: String },
    labelKey: { default: undefined, type: String },
    nameKey: { default: undefined, type: String },
    payload: { default: undefined, type: Array as PropType<unknown[]> },
  },
  setup(props, { slots }) {
    return () => {
      const payload = props.payload ?? [];

      const { config, slots: variantSlots } = useChart();

      if (!(props.active && payload.length)) {
        return null;
      }

      const tooltipLabelValue = props.hideLabel
        ? null
        : resolveTooltipLabel(config, payload, props.label, props.labelKey);

      const nestLabel = payload.length === 1 && props.indicator !== "dot";

      return h("div" as ArkPart, { class: cn(variantSlots.tooltip(), props.className) }, () => [
        nestLabel
          ? null
          : tooltipLabelValue != null
            ? h(
                "div",
                { class: cn(variantSlots.label(), props.labelClassName) },
                () => tooltipLabelValue,
              )
            : null,
        h(
          "div" as ArkPart,
          { class: variantSlots.tooltipStack() },
          payload.map((entry, index) => {
            const item = entry as ChartPayloadEntry;
            const itemKey = (
              props.nameKey && typeof item?.[props.nameKey] === "string"
                ? (item[props.nameKey] as string)
                : typeof item?.dataKey === "string"
                  ? item.dataKey
                  : typeof item?.name === "string"
                    ? item.name
                    : "value"
            ) as string;

            const itemConfig = getPayloadConfig(config, item, itemKey);
            const indicatorColor =
              props.color ??
              (typeof item?.payload?.fill === "string" ? item.payload.fill : undefined) ??
              (typeof item?.fill === "string" ? item.fill : undefined) ??
              (typeof item?.color === "string" ? item.color : undefined);
            const itemLabel =
              itemConfig?.label ?? (typeof item?.name === "string" ? item.name : itemKey);
            const itemValue = item?.value ?? item?.payload?.value ?? item?.payload?.[itemKey];

            return h(
              "div" as ArkPart,
              { class: variantSlots.tooltipItem(), key: itemKey + String(index) },
              () => [
                props.hideIndicator
                  ? null
                  : h("div" as ArkPart, {
                      class: cn(variantSlots.indicator()),
                      style: {
                        "--color-bg": indicatorColor ?? "",
                        "--color-border": indicatorColor ?? "",
                      },
                    }),
                h("div" as ArkPart, { class: variantSlots.tooltipRow() }, () =>
                  [
                    h("div" as ArkPart, { class: variantSlots.tooltipStack() }, () =>
                      [
                        nestLabel ? tooltipLabelValue : null,
                        h(
                          "span" as ArkPart,
                          { class: variantSlots.tooltipLabel() },
                          () => itemLabel,
                        ),
                      ].filter(Boolean),
                    ),
                    itemValue != null
                      ? h("span" as ArkPart, { class: variantSlots.tooltipValue() }, () =>
                          String(itemValue),
                        )
                      : null,
                  ].filter(Boolean),
                ),
              ],
            );
          }),
        ),
        slots.default?.(),
      ]);
    };
  },
});

export const ChartLegendContent = defineComponent({
  inheritAttrs: false,
  name: "ChartLegendContent",
  props: {
    className: { default: undefined, type: String },
    hideIcon: { default: false, type: Boolean },
    nameKey: { default: undefined, type: String },
    payload: { default: undefined, type: Array as PropType<unknown[]> },
    verticalAlign: {
      default: "bottom",
      type: String as PropType<ChartLegendContentProps["verticalAlign"]>,
    },
  },
  setup(props, { slots }) {
    return () => {
      const payload = props.payload ?? [];
      const { config, slots: variantSlots } = useChart();

      if (!payload.length) {
        return null;
      }

      return h(
        "div" as ArkPart,
        {
          class: cn(
            variantSlots.legend(),
            props.verticalAlign === "top" ? "pb-3" : "pt-3",
            props.className,
          ),
        },
        () =>
          payload
            .map((entry, index) => {
              const item = entry as ChartPayloadEntry;
              const itemKey =
                typeof item?.dataKey === "string"
                  ? item.dataKey
                  : typeof item?.name === "string"
                    ? item.name
                    : `value-${index}`;
              const itemConfig = getPayloadConfig(config, item, itemKey);
              const itemLabel =
                itemConfig?.label ?? (typeof item?.name === "string" ? item.name : itemKey);
              const indicatorColor =
                (typeof item?.color === "string" ? item.color : undefined) ??
                (typeof item?.payload?.color === "string" ? item.payload.color : undefined);

              return h("div" as ArkPart, { class: variantSlots.legendItem(), key: itemKey }, () => [
                itemConfig?.icon && !props.hideIcon
                  ? h(itemConfig.icon, null)
                  : h("div" as ArkPart, {
                      class: variantSlots.swatch(),
                      style: { backgroundColor: indicatorColor ?? "" },
                    }),
                itemLabel,
              ]);
            })
            .concat(slots.default?.() ?? []),
      );
    };
  },
});

export const ChartTooltip = defineComponent({
  inheritAttrs: false,
  name: "ChartTooltip",
  props: {
    active: { default: false, type: Boolean },
    className: { default: undefined, type: String },
    color: { default: undefined, type: String },
    content: {
      default: undefined,
      type: Function as unknown as PropType<
        ((props: Record<string, unknown>) => VNodeChild) | undefined
      >,
    },
    hideIndicator: { default: false, type: Boolean },
    hideLabel: { default: false, type: Boolean },
    indicator: { default: "dot", type: String as PropType<ChartTooltipContentProps["indicator"]> },
    label: { default: undefined, type: null as unknown as PropType<unknown> },
    labelKey: { default: undefined, type: String },
    nameKey: { default: undefined, type: String },
    payload: { default: undefined, type: Array as PropType<unknown[]> },
  },
  setup(props) {
    return () => {
      const commonProps = {
        active: props.active,
        className: props.className,
        color: props.color,
        hideIndicator: props.hideIndicator,
        hideLabel: props.hideLabel,
        indicator: props.indicator,
        label: props.label,
        labelKey: props.labelKey,
        nameKey: props.nameKey,
        payload: props.payload,
      };

      if (props.content) {
        return props.content(commonProps);
      }

      return h(ChartTooltipContent, commonProps);
    };
  },
});

export const ChartLegend = defineComponent({
  inheritAttrs: false,
  name: "ChartLegend",
  props: {
    className: { default: undefined, type: String },
    content: {
      default: undefined,
      type: Function as unknown as PropType<
        ((props: Record<string, unknown>) => VNodeChild) | undefined
      >,
    },
    payload: { default: undefined, type: Array as PropType<unknown[]> },
    verticalAlign: {
      default: "bottom",
      type: String as PropType<ChartLegendContentProps["verticalAlign"]>,
    },
  },
  setup(props, { slots }) {
    return () => {
      const commonProps = {
        className: props.className,
        payload: props.payload,
        verticalAlign: props.verticalAlign,
      };

      if (props.content) {
        return props.content(commonProps);
      }

      return h(ChartLegendContent, commonProps, slots.default?.());
    };
  },
});

export const Chart = Object.assign(ChartContainer, {
  Legend: ChartLegend,
  LegendContent: ChartLegendContent,
  Style: ChartStyle,
  Tooltip: ChartTooltip,
  TooltipContent: ChartTooltipContent,
});
// #endregion
