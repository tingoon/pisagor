import { Presence } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/presence";

const meta = preview.meta({
  component: Presence,
  parameters: {
    docs: {
      description: {
        component:
          "Animates elements in and out of the tree so enter and exit transitions feel smooth.",
      },
    },
  },
  title: "Components/Utilities/Presence",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
