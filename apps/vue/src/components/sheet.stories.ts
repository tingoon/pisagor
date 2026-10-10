import { Sheet } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/sheet";

const meta = preview.meta({
  component: Sheet,
  parameters: {
    docs: {
      description: {
        component:
          "Slides a panel in from the edge of the screen for secondary tasks on mobile and desktop.",
      },
    },
  },
  title: "Components/Overlay/Sheet",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const Inset = meta.story({
  render: exampleRender(Examples.Inset),
});

export const Sides = meta.story({
  render: exampleRender(Examples.Sides),
});

export const ScrollArea = meta.story({
  render: exampleRender(Examples.ScrollArea),
});

export const NoCloseButton = meta.story({
  render: exampleRender(Examples.NoCloseButton),
});

export const NonModal = meta.story({
  render: exampleRender(Examples.NonModal),
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
