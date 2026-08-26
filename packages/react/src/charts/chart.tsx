import {
  chartInline2Variants,
  chartInline3Variants,
  chartInline4Variants,
  chartInline5Variants,
  chartInline6Variants,
  chartInline7Variants,
  chartInline8Variants,
  chartInline9Variants,
  chartInline10Variants,
  chartInline11Variants,
  chartInline12Variants,
  chartInline13Variants,
  chartInlineVariants,
  chartVariants,
} from "@pisagor/styles/ui/chart";
import { cn } from "@pisagor/utils";
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
  className?: string;
  hideIcon?: boolean;
  nameKey?: string;
  payload?: LegendPayload[];
  verticalAlign?: LegendProps["verticalAlign"];
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
export function ChartContainer({ children, className, config, id, ...rest }: ChartContainerProps) {
  const uniqueId = useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext value={{ config }}>
      <div
        {...rest}
        className={chartVariants({ className })}
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
  active,
  className,
  color,
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
}: CustomTooltipProps) {
  const { config } = useChart();

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
        <div className={cn(chartInlineVariants(), labelClassName)}>
          {labelFormatter(value, payload)}
        </div>
      );
    }

    if (!value) {
      return null;
    }

    return <div className={cn(chartInline2Variants(), labelClassName)}>{value}</div>;
  }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);

  if (!(active && payload?.length)) {
    return null;
  }

  const nestLabel = payload.length === 1 && indicator !== "dot";

  return (
    <div className={chartInline3Variants({ className })}>
      {nestLabel ? null : tooltipLabel}
      <div className={chartInline9Variants()}>
        {payload.map((item, index) => {
          const key = `${nameKey || item.name || item.dataKey || "value"}`;
          const itemConfig = getPayload(config, item, key);
          const indicatorColor = color || item.payload.fill || item.color;

          return (
            <div
              className={cn(chartInline4Variants(), indicator === "dot" && "items-center")}
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
                        className={cn(chartInline5Variants(), {
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
                  <div
                    className={cn(chartInline6Variants(), nestLabel ? "items-end" : "items-center")}
                  >
                    <div className={chartInline10Variants()}>
                      {nestLabel ? tooltipLabel : null}
                      <span className={chartInline11Variants()}>
                        {itemConfig?.label || item.name}
                      </span>
                    </div>
                    {item.value && (
                      <span className={chartInline12Variants()}>{item.value.toLocaleString()}</span>
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
  className,
  hideIcon = false,
  nameKey,
  payload,
  verticalAlign = "bottom",
}: ChartLegendContentProps) {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      className={cn(chartInline7Variants(), verticalAlign === "top" ? "pb-3" : "pt-3", className)}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = getPayload(config, item, key);

        return (
          <div className={chartInline8Variants()} key={item.value}>
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className={chartInline13Variants()}
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
