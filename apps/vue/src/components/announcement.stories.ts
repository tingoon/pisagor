import { Announcement } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/announcement/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Announcement,
  parameters: {
    docs: {
      description: {
        component:
          "Draws attention to a short product or marketing message without blocking the rest of the interface.",
      },
    },
  },
  title: "Components/Feedback/Announcement",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const WithIcon = meta.story({
  render: exampleRender(Examples.WithIcon),
});

export const WithLink = meta.story({
  render: exampleRender(Examples.WithLink),
});

export const WithoutBadge = meta.story({
  render: exampleRender(Examples.WithoutBadge),
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "Manual composition with `Announcement.Root` when shorthand props are not enough.",
      },
    },
  },
  render: exampleRender(Examples.Compound),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
