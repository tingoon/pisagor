import { PhCheckCircle, PhCircle, PhRocket } from "@phosphor-icons/vue";
import { Timeline } from "@pisagor/vue/timeline";
import { h } from "vue";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: Timeline,
  parameters: {
    docs: {
      description: {
        component: "Displays milestones and progress over time in a compact, scannable layout.",
      },
    },
  },
  subcomponents: {
    Content: Timeline.Content,
    Description: Timeline.Description,
    Indicator: Timeline.Indicator,
    Item: Timeline.Item,
    Root: Timeline.Root,
    Separator: Timeline.Separator,
    Title: Timeline.Title,
  },
  title: "Components/Data Display/Timeline",
});

function items() {
  return [
    {
      description: "Kickoff and initial planning.",
      id: "started",
      indicator: h("span", { class: "text-primary" }, "✓"),
      title: "Project started",
    },
    {
      description: "Screens and component system locked in.",
      id: "design",
      indicator: h("span", { class: "text-primary" }, "✦"),
      title: "Design complete",
    },
    {
      description: "Engineering work in progress.",
      id: "build",
      indicator: h("span", { class: "text-primary" }, "→"),
      title: "Implementation",
    },
  ];
}

export const Default = meta.story({
  render: () => ({
    components: { Timeline },
    setup() {
      return { items: items() };
    },
    template: `
      <div class="w-96">
        <Timeline :items="items" />
      </div>
    `,
  }),
});

export const Horizontal = meta.story({
  render: () => ({
    components: { Timeline },
    setup() {
      return { items: items() };
    },
    template: `
      <div class="w-full">
        <Timeline orientation="horizontal" :items="items" />
      </div>
    `,
  }),
});

export const Compound = meta.story({
  render: () => ({
    components: { PhCheckCircle, PhCircle, PhRocket, Timeline },
    template: `
      <Timeline.Root>
        <Timeline.Item>
          <Timeline.Separator />
          <Timeline.Indicator class="size-6 border-0 bg-success text-white">
            <PhCheckCircle weight="fill" />
          </Timeline.Indicator>
          <Timeline.Content>
            <Timeline.Title>Deployed to staging</Timeline.Title>
            <Timeline.Description>All checks passed.</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Separator />
          <Timeline.Indicator class="size-6 border-0 bg-primary text-primary-foreground">
            <PhRocket weight="fill" />
          </Timeline.Indicator>
          <Timeline.Content>
            <Timeline.Title>Production rollout</Timeline.Title>
            <Timeline.Description>Canary at 10%.</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Separator />
          <Timeline.Indicator class="size-6 text-muted-foreground">
            <PhCircle />
          </Timeline.Indicator>
          <Timeline.Content>
            <Timeline.Title>Full release</Timeline.Title>
            <Timeline.Description>Pending sign-off.</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline.Root>
    `,
  }),
});
