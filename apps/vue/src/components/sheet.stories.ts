import { Sheet } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/sheet/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

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

export const CustomSpacing = meta.story({
  render: exampleRender(Examples.CustomSpacing),
});

export const Inset = meta.story({
  render: exampleRender(Examples.Inset),
});

export const NoCloseButton = meta.story({
  render: exampleRender(Examples.NoCloseButton),
});

export const NonModal = meta.story({
  render: exampleRender(Examples.NonModal),
});

export const ScrollArea = meta.story({
  render: exampleRender(Examples.ScrollArea),
});

export const Sides = meta.story({
  render: exampleRender(Examples.Sides),
});

export const CloseBehavior = meta.story({
  render: exampleRender(Examples.CloseBehavior),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
