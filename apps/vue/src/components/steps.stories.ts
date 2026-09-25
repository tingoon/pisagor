import { Steps } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/steps/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Steps,
  parameters: {
    docs: {
      description: {
        component:
          "Guides users through a multi-step flow and shows which stage they are on.",
      },
    },
  },
  title: "Components/Navigation/Steps",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Icon = meta.story({
  render: exampleRender(Examples.Icon),
});

export const Vertical = meta.story({
  render: exampleRender(Examples.Vertical),
});

export const Loading = meta.story({
  render: exampleRender(Examples.Loading),
});

export const Description = meta.story({
  render: exampleRender(Examples.Description),
});

export const Title = meta.story({
  render: exampleRender(Examples.Title),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
