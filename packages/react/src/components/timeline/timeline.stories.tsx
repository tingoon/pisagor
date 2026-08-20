import { CheckCircleIcon, CircleIcon, RocketIcon } from "@phosphor-icons/react";
import { Timeline } from "@pisagor/react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Timeline,
  parameters: {
    docs: {
      aliases: ["activity", "milestones"],
      api: "compound-shorthand",
      checklist: {
        accessibleColor: true,
        definedOptions: true,
        platformScales: true,
      },
      description: {
        component:
          "Shows a sequence of events or milestones so users can follow progress over time.",
      },
      taxonomy: "standard",
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

export const Default = meta.story({
  args: {
    items: [
      {
        description: "Repository scaffolded with shared packages.",
        title: "Project created",
      },
      {
        description: "Primitives and form controls published.",
        title: "Design system shipped",
      },
      {
        description: "Apps consume the library in production.",
        title: "First release",
      },
    ],
  },
});

export const Horizontal = meta.story({
  args: {
    items: [{ title: "Planned" }, { title: "In progress" }, { title: "Shipped" }],
    orientation: "horizontal",
  },
});

export const Compound = meta.story({
  render: () => (
    <Timeline.Root>
      <Timeline.Item>
        <Timeline.Separator />
        <Timeline.Indicator className="size-6 border-0 bg-success text-white">
          <CheckCircleIcon weight="fill" />
        </Timeline.Indicator>
        <Timeline.Content>
          <Timeline.Title>Deployed to staging</Timeline.Title>
          <Timeline.Description>All checks passed.</Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Separator />
        <Timeline.Indicator className="size-6 border-0 bg-primary text-primary-foreground">
          <RocketIcon weight="fill" />
        </Timeline.Indicator>
        <Timeline.Content>
          <Timeline.Title>Production rollout</Timeline.Title>
          <Timeline.Description>Canary at 10%.</Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Separator />
        <Timeline.Indicator className="size-6 text-muted-foreground">
          <CircleIcon />
        </Timeline.Indicator>
        <Timeline.Content>
          <Timeline.Title>Full release</Timeline.Title>
          <Timeline.Description>Pending sign-off.</Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
  ),
});
