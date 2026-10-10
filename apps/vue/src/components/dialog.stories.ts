import { Dialog } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/dialog";

const meta = preview.meta({
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component:
          "Focuses attention on a task or decision in a modal layer above the current page.",
      },
    },
  },
  title: "Components/Overlay/Dialog",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const ScrollArea = meta.story({
  render: exampleRender(Examples.ScrollArea),
});

export const NoCloseButton = meta.story({
  render: exampleRender(Examples.NoCloseButton),
});

export const Nested = meta.story({
  render: exampleRender(Examples.Nested),
});

export const Compound = meta.story({
  render: exampleRender(Examples.Compound),
});

export const NonModal = meta.story({
  render: exampleRender(Examples.NonModal),
});

export const InitialFocus = meta.story({
  render: exampleRender(Examples.InitialFocus),
});

export const CloseBehavior = meta.story({
  render: exampleRender(Examples.CloseBehavior),
});

export const CustomSpacing = meta.story({
  render: exampleRender(Examples.CustomSpacing),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
