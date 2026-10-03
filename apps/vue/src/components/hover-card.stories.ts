import { HoverCard } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/hover-card";

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
  tags: ["autodocs"],
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const TriggersDelays = meta.story({
  render: exampleRender(Examples.TriggersDelays),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Placements = meta.story({
  render: exampleRender(Examples.Placements),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
