import { Chart } from "@pisagor/vue/charts";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Chart,
  parameters: {
    docs: {
      description: {
        component:
          "Wraps charts in themed, accessible layout so data visualizations match the rest of the interface.",
      },
    },
    metadata: {
      aliases: ["graph"],
      api: "compound",
      taxonomy: "pattern",
    },
  },
  subcomponents: {
    Legend: Chart.Legend,
    LegendContent: Chart.LegendContent,
    Style: Chart.Style,
    Tooltip: Chart.Tooltip,
    TooltipContent: Chart.TooltipContent,
  },
  title: "Charts/Bar",
});

export const Default = meta.story({
  args: {},
  render: () => ({
    components: { Chart },
    setup() {
      const chartConfig = {
        desktop: {
          color: "var(--chart-1)",
          label: "Desktop",
        },
        mobile: {
          color: "var(--chart-2)",
          label: "Mobile",
        },
      };

      const legendPayload = [
        { color: "var(--color-desktop)", dataKey: "desktop", name: "desktop" },
        { color: "var(--color-mobile)", dataKey: "mobile", name: "mobile" },
      ];

      const tooltipPayload = [
        { dataKey: "desktop", fill: "var(--color-desktop)", name: "Desktop", value: 186 },
        { dataKey: "mobile", fill: "var(--color-mobile)", name: "Mobile", value: 80 },
      ];

      return { chartConfig, legendPayload, tooltipPayload };
    },
    template: `
      <div class="flex flex-col gap-2">
        <Chart :config="chartConfig" class="min-h-[200px]">
          <svg
            class="h-full w-full"
            viewBox="0 0 200 100"
            preserveAspectRatio="none"
            aria-label="Example chart"
            role="img"
          >
            <rect x="20" y="20" width="30" height="60" rx="4" :fill="'var(--color-desktop)'" />
            <rect x="60" y="40" width="30" height="40" rx="4" :fill="'var(--color-mobile)'" />
            <text x="35" y="95" text-anchor="middle" class="fill-muted-foreground text-xs">Jan</text>
          </svg>
        </Chart>

        <Chart.LegendContent :payload="legendPayload" verticalAlign="bottom" />

        <Chart.TooltipContent
          :active="true"
          :payload="tooltipPayload"
          label="January"
          indicator="dot"
          :hideLabel="false"
        />
      </div>
    `,
  }),
});
