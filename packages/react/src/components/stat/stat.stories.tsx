import { ArrowDownIcon, ArrowUpIcon } from "@phosphor-icons/react";
import { Stat } from "@pisagor/react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Stat,
  parameters: {
    docs: {
      aliases: ["metric"],
      api: "compound-shorthand",
      checklist: {
        accessibleColor: true,
        definedOptions: true,
        platformScales: true,
      },
      description: {
        component:
          "Displays a metric with supporting context so users can quickly scan performance and changes.",
      },
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Description: Stat.Description,
    Label: Stat.Label,
    Root: Stat.Root,
    Trend: Stat.Trend,
    Value: Stat.Value,
  },
  title: "Components/Data Display/Stat",
});

export const Default = meta.story({
  args: {
    description: "Updated 2 minutes ago",
    label: "Monthly recurring revenue",
    value: "$124,320",
  },
});

export const Variants = meta.story({
  render: () => (
    <div className="grid gap-2 sm:grid-cols-3">
      <Stat label="Default" value="2,404" variant="default" />
      <Stat label="Muted" value="2,404" variant="muted" />
      <Stat label="Outline" value="2,404" variant="outline" />
    </div>
  ),
});

export const WithTrend = meta.story({
  render: () => (
    <div className="grid gap-2 sm:grid-cols-2">
      <Stat
        description="Compared with last week"
        label="New signups"
        trend={
          <>
            <ArrowUpIcon />
            +12.6%
          </>
        }
        trendProps={{ trend: "up" }}
        value="1,284"
      />
      <Stat
        description="Compared with last month"
        label="Churn rate"
        trend={
          <>
            <ArrowDownIcon />
            -0.8%
          </>
        }
        trendProps={{ trend: "down" }}
        value="3.2%"
      />
    </div>
  ),
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Manual composition with `Stat.Root` when shorthand props are not enough.",
      },
    },
  },
  render: () => (
    <Stat.Root>
      <Stat.Label>Monthly recurring revenue</Stat.Label>
      <Stat.Value>$124,320</Stat.Value>
      <Stat.Trend trend="up">
        <ArrowUpIcon />
        +12.6%
      </Stat.Trend>
      <Stat.Description>Updated 2 minutes ago</Stat.Description>
    </Stat.Root>
  ),
});
