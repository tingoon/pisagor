import { Kbd } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/kbd/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Kbd,
  parameters: {
    docs: {
      description: {
        component:
          "Displays keyboard shortcuts in a monospace badge so users know which keys to press.",
      },
    },
  },
  title: "Components/Data Display/Kbd",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const WithButton = meta.story({
  render: exampleRender(Examples.WithButton),
});

export const KbdGroupStory = meta.story({
  render: exampleRender(Examples.KbdGroupStory),
});

export const WithTooltip = meta.story({
  render: exampleRender(Examples.WithTooltip),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
