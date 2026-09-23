import { Presence } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/presence/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

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
