import { chartVariants } from "@pisagor/recipes/chart";
import type { ComponentProps, ComponentType, ReactNode } from "react";
import { useId, useMemo } from "react";
import {
  Legend,
  type LegendPayload,
  type LegendProps,
  ResponsiveContainer,
  Tooltip,
  type TooltipContentProps,
  type TooltipPayloadEntry,
  type TooltipValueType,
} from "recharts";
import { cn } from "../internal/utils";
import { ChartContext, useChart } from "./chart.context";
import "./chart-series.css";

// #region Types
export type ChartConfig = Record<
  string,
  (
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
    | { color?: string; theme?: never }
  ) & {
    icon?: ComponentType;
    label?: ReactNode;
  }
>;

export interface ChartLegendContentProps {
  hideIcon?: boolean;
  nameKey?: string;
  payload?: LegendPayload[];
  verticalAlign?: LegendProps["verticalAlign"];
  className?: string;
}

export type CustomTooltipProps = Partial<TooltipContentProps<TooltipValueType, NameType>> & {
  className?: string;
  color?: string;
  formatter?: Formatter;
  hideIndicator?: boolean;
  hideLabel?: boolean;
  indicator?: "dashed" | "dot" | "line";
  labelClassName?: string;
  labelFormatter?: (
    label: TooltipContentProps<number, string>["label"],
    payload: TooltipContentProps<number, string>["payload"],
  ) => ReactNode;
  labelKey?: string;
  nameKey?: string;
};

export type Formatter<
  TValue extends TooltipValueType = TooltipValueType,
  TName extends NameType = NameType,
> = (
  value: TValue | undefined,
  name: TName | undefined,
  item: TooltipPayloadEntry<TValue, TName>,
  index: number,
  payload: readonly TooltipPayloadEntry<TValue, TName>[],
) => [ReactNode, TName] | ReactNode;

export type NameType = number | string;

export type TooltipType = "none";

interface ChartContainerProps extends ComponentProps<"div"> {
  children: ComponentProps<typeof ResponsiveContainer>["children"];
  config: ChartConfig;
  id?: string;
}

interface ChartStyleProps {
  config: ChartConfig;
  id: string;
}
// #endregion

// #region Helpers
const THEMES = { dark: ".dark", light: "" } as const;

const getPayload = (config: ChartConfig, payload: unknown, key: string) => {
  if (typeof payload !== "object" || payload === null) {
    return;
  }

  const payloadPayload =
    "payload" in payload && typeof payload.payload === "object" && payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (key in payload && typeof payload[key as keyof typeof payload] === "string") {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string;
  }

  return configLabelKey in config ? config[configLabelKey] : config[key as keyof typeof config];
};
// #endregion

// #region Parts
export function ChartContainer({ children, config, id, className, ...rest }: ChartContainerProps) {
  const uniqueId = useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
  const slots = chartVariants();

  return (
    <ChartContext value={{ config, slots }}>
      <div
        {...rest}
        className={slots.base({ className })}
        data-chart={chartId}
        data-part="root"
        data-scope="chart"
      >
        <ChartStyle config={config} id={chartId} />
        <ResponsiveContainer>{children}</ResponsiveContainer>
      </div>
    </ChartContext>
  );
}

export function ChartStyle({ config, id }: ChartStyleProps) {
  const colorConfig = Object.entries(config).filter(([, config]) => config.theme || config.color);

  if (!colorConfig.length) {
    return null;
  }

  const css = Object.entries(THEMES)
    .map(
      ([theme, prefix]) => `
            ${prefix} [data-chart=${id}] {
            ${colorConfig
              .map(([key, itemConfig]) => {
                const color =
                  itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color;
                return color ? `  --color-${key}: ${color};` : null;
              })
              .join("\n")}
            }
            `,
    )
    .join("\n");

  return <style>{css}</style>;
}

export const ChartTooltip = Tooltip;

export function ChartTooltipContent({
  color,
  active,
  formatter,
  hideIndicator = false,
  hideLabel = false,
  indicator = "dot",
  label,
  labelClassName,
  labelFormatter,
  labelKey,
  nameKey,
  payload,
  className,
}: CustomTooltipProps) {
  const { config, slots } = useChart();

  const tooltipLabel = useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null;
    }

    const [item] = payload;
    const key = `${labelKey || item?.dataKey || item?.name || "value"}`;
    const itemConfig = getPayload(config, item, key);
    const value = (() => {
      const v =
        !labelKey && typeof label === "string"
          ? (config[label as keyof typeof config]?.label ?? label)
          : itemConfig?.label;

      return typeof v === "string" || typeof v === "number" ? v : undefined;
    })();

    if (labelFormatter) {
      return (
        <div className={slots.label({ className: labelClassName })}>
          {labelFormatter(value, payload)}
        </div>
      );
    }

    if (!value) {
      return null;
    }

    return <div className={slots.label({ className: labelClassName })}>{value}</div>;
  }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey, slots]);

  if (!(active && payload?.length)) {
    return null;
  }

  const nestLabel = payload.length === 1 && indicator !== "dot";

  return (
    <div className={slots.tooltip({ className })}>
      {nestLabel ? null : tooltipLabel}
      <div className={slots.tooltipStack()}>
        {payload.map((item, index) => {
          const key = `${nameKey || item.name || item.dataKey || "value"}`;
          const itemConfig = getPayload(config, item, key);
          const indicatorColor = color || item.payload.fill || item.color;

          return (
            <div
              className={cn(slots.tooltipItem(), indicator === "dot" && "items-center")}
              key={key}
            >
              {formatter && item?.value !== undefined && item.name ? (
                formatter(item.value, item.name, item, index, item.payload)
              ) : (
                <>
                  {itemConfig?.icon ? (
                    <itemConfig.icon />
                  ) : (
                    !hideIndicator && (
                      <div
                        className={cn(slots.indicator(), {
                          "h-2.5 w-2.5": indicator === "dot",
                          "my-0.5": nestLabel && indicator === "dashed",
                          "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                          "w-1": indicator === "line",
                        })}
                        style={{
                          "--color-bg": indicatorColor,
                          "--color-border": indicatorColor,
                        }}
                      />
                    )
                  )}
                  <div className={cn(slots.tooltipRow(), nestLabel ? "items-end" : "items-center")}>
                    <div className={slots.tooltipStack()}>
                      {nestLabel ? tooltipLabel : null}
                      <span className={slots.tooltipLabel()}>{itemConfig?.label || item.name}</span>
                    </div>
                    {item.value && (
                      <span className={slots.tooltipValue()}>{item.value.toLocaleString()}</span>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const ChartLegend = Legend;

export function ChartLegendContent({
  hideIcon = false,
  nameKey,
  payload,
  verticalAlign = "bottom",
  className,
}: ChartLegendContentProps) {
  const { config, slots } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div className={cn(slots.legend(), verticalAlign === "top" ? "pb-3" : "pt-3", className)}>
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = getPayload(config, item, key);

        return (
          <div className={slots.legendItem()} key={item.value}>
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className={slots.swatch()}
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
}
// #endregion
