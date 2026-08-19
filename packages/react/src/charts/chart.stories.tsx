import { Chart, type ChartConfig } from "@pisagor/react/charts";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import preview from "#/react/preview";

const meta = preview.meta({
  component: Chart,
  parameters: {
    docs: {
      aliases: ["graph"],
      api: "compound",
      checklist: {
        accessibleColor: "partial",
        definedBehaviors: true,
        definedOptions: true,
        interactiveStates: true,
        keyboardInteractions: "partial",
        platformScales: true,
      },
      description: {
        component:
          "Wraps charts in themed, accessible layout so data visualizations match the rest of the interface.",
      },
      taxonomy: "pattern",
    },
  },
  title: "Charts/Bar",
});

export const Default = meta.story({
  render: () => {
    const chartData = [
      { desktop: 186, mobile: 80, month: "January" },
      { desktop: 305, mobile: 200, month: "February" },
      { desktop: 237, mobile: 120, month: "March" },
      { desktop: 73, mobile: 190, month: "April" },
      { desktop: 209, mobile: 130, month: "May" },
      { desktop: 214, mobile: 140, month: "June" },
    ];

    const chartConfig = {
      desktop: {
        color: "var(--chart-1)",
        label: "Desktop",
      },
      mobile: {
        color: "var(--chart-2)",
        label: "Mobile",
      },
    } satisfies ChartConfig;

    return (
      <Chart className="min-h-[200px]" config={chartConfig}>
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            axisLine={false}
            dataKey="month"
            tickFormatter={(value) => value.slice(0, 3)}
            tickLine={false}
            tickMargin={10}
          />
          <Chart.Tooltip content={(props) => <Chart.TooltipContent {...props} />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </Chart>
    );
  },
});
