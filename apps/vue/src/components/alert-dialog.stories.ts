import { AlertDialog } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/alert-dialog/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: AlertDialog,
  parameters: {
    docs: {
      description: {
        component:
          "Interrupts the user with a focused confirmation before a destructive or irreversible action proceeds.",
      },
    },
  },
  title: "Components/Overlay/Alert Dialog",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
