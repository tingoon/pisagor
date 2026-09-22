import { Resizable } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/resizable/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Resizable,
  parameters: {
    docs: {
      description: {
        component:
          "Splits space between panels with draggable handles so users can adjust layout to their needs.",
      },
    },
  },
  title: "Components/Layout/Resizable",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const MinMax = meta.story({
  render: exampleRender(Examples.MinMax),
});

export const OrientationHorizontal = meta.story({
  render: exampleRender(Examples.OrientationHorizontal),
});

export const OrientationVertical = meta.story({
  render: exampleRender(Examples.OrientationVertical),
});

export const Handle = meta.story({
  render: exampleRender(Examples.Handle),
});

export const EdgeHandle = meta.story({
  render: exampleRender(Examples.EdgeHandle),
});

export const MultiplePanels = meta.story({
  render: exampleRender(Examples.MultiplePanels),
});

export const Collapsible = meta.story({
  render: exampleRender(Examples.Collapsible),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
