import { HoverCard } from "@pisagor/react";
import preview from "#/storybook/preview";
import * as Examples from "#/react/examples/overlay/hover-card";

const meta = preview.meta({
  component: HoverCard,
  parameters: {
    docs: {
      description: {
        component:
          "Reveals richer preview content when the user pauses over a trigger, without opening a full overlay.",
      },
    },
  },
  title: "Components/Overlay/Hover Card",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const TriggersDelays = meta.story({
  render: Examples.TriggersDelays,
});

export const Placements = meta.story({
  render: Examples.Placements,
});

export const WithoutArrow = meta.story({
  render: Examples.WithoutArrow,
});

export const CustomRecipe = meta.story({
  render: Examples.CustomRecipe,
});

export const Compound = meta.story({
  render: Examples.Compound,
});
