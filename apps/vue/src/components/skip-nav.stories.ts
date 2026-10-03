import { SkipNav } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/skip-nav";

const meta = preview.meta({
  component: SkipNav,
  parameters: {
    docs: {
      description: {
        component:
          "Lets keyboard users jump past repetitive navigation straight to the main content.",
      },
    },
  },
  title: "Components/Navigation/Skip Nav",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
