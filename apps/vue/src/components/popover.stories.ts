import { Popover } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/popover";

const meta = preview.meta({
  component: Popover,
  parameters: {
    docs: {
      description: {
        component:
          "Anchors extra content to a trigger for compact forms, menus, or details without a full modal.",
      },
    },
  },
  title: "Components/Overlay/Popover",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const CloseButton = meta.story({
  render: exampleRender(Examples.CloseButton),
});

export const Anchor = meta.story({
  render: exampleRender(Examples.Anchor),
});

export const Nested = meta.story({
  render: exampleRender(Examples.Nested),
});

export const ScrollArea = meta.story({
  render: exampleRender(Examples.ScrollArea),
});

export const Modal = meta.story({
  render: exampleRender(Examples.Modal),
});

export const CloseBehavior = meta.story({
  render: exampleRender(Examples.CloseBehavior),
});

export const Placements = meta.story({
  render: exampleRender(Examples.Placements),
});

export const CustomSpacing = meta.story({
  render: exampleRender(Examples.CustomSpacing),
});
