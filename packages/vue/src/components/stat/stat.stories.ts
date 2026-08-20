import { PhArrowDown, PhArrowUp } from "@phosphor-icons/vue";
import { Stat } from "@pisagor/vue";
import { h } from "vue";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: Stat,
  parameters: {
    docs: {
      description: {
        component:
          "Displays a metric with supporting context so users can quickly scan performance and changes.",
      },
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
  render: () => ({
    components: { Stat },
    setup() {
      return {
        description: "Updated 2 minutes ago",
        label: "Monthly recurring revenue",
        value: "$124,320",
      };
    },
    template: `<Stat :label="label" :value="value" :description="description" />`,
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { Stat },
    template: `
      <div class="grid gap-2 sm:grid-cols-3">
        <Stat label="Default" value="2,404" variant="default" />
        <Stat label="Muted" value="2,404" variant="muted" />
        <Stat label="Outline" value="2,404" variant="outline" />
      </div>
    `,
  }),
});

export const WithTrend = meta.story({
  render: () => ({
    components: { PhArrowDown, PhArrowUp, Stat },
    setup() {
      const upTrend = h("span", { class: "inline-flex items-center gap-1" }, [
        h(PhArrowUp),
        "+12.6%",
      ]);

      const downTrend = h("span", { class: "inline-flex items-center gap-1" }, [
        h(PhArrowDown),
        "-0.8%",
      ]);

      return {
        downTrend,
        upTrend,
      };
    },
    template: `
      <div class="grid gap-2 sm:grid-cols-2">
        <Stat
          description="Compared with last week"
          label="New signups"
          :trend="upTrend"
          :trendProps="{ trend: 'up' }"
          value="1,284"
        />
        <Stat
          description="Compared with last month"
          label="Churn rate"
          :trend="downTrend"
          :trendProps="{ trend: 'down' }"
          value="3.2%"
        />
      </div>
    `,
  }),
});

export const Compound = meta.story({
  render: () => ({
    components: { PhArrowDown, PhArrowUp, Stat },
    template: `
      <Stat.Root>
        <Stat.Label>Monthly recurring revenue</Stat.Label>
        <Stat.Value>$124,320</Stat.Value>
        <Stat.Trend trend="up">
          <PhArrowUp />
          +12.6%
        </Stat.Trend>
        <Stat.Description>Updated 2 minutes ago</Stat.Description>
      </Stat.Root>
    `,
  }),
});
