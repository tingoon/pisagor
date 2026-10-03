import { ContextMenu } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/context-menu";

const meta = preview.meta({
  component: ContextMenu,
  parameters: {
    docs: {
      description: {
        component:
          "Opens a menu of actions at the pointer position when the user right-clicks.",
      },
    },
  },
  title: "Components/Navigation/Context Menu",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
