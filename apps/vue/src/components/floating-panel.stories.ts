import { FloatingPanel } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/floating-panel";

const meta = preview.meta({
  component: FloatingPanel,
  parameters: {
    docs: {
      description: {
        component:
          "Presents draggable, resizable content in a floating window for tools or inspectors.",
      },
    },
  },
  title: "Components/Overlay/Floating Panel",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const CustomSpacing = meta.story({
  render: exampleRender(Examples.CustomSpacing),
});

export const ControlledPosition = meta.story({
  render: exampleRender(Examples.ControlledPosition),
});

export const ControlledSize = meta.story({
  render: exampleRender(Examples.ControlledSize),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
