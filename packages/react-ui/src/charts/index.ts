import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "./chart";

export type {
  ChartConfig,
  ChartLegendContentProps,
  CustomTooltipProps,
  Formatter,
  NameType,
  TooltipType,
} from "./chart";

export const Chart = Object.assign(ChartContainer, {
  Legend: ChartLegend,
  LegendContent: ChartLegendContent,
  Style: ChartStyle,
  Tooltip: ChartTooltip,
  TooltipContent: ChartTooltipContent,
});
