import { Tooltip } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/tooltip/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component:
          "Explains a control or label on hover or focus with a short message that does not block interaction.",
      },
    },
  },
  title: "Components/Overlay/Tooltip",
});

export const Playground = meta.story({
  render: exampleRender(Examples.Default),
  tags: ["autodocs"],
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const WithKeyboardShortcut = meta.story({
  render: exampleRender(Examples.WithKeyboardShortcut),
});

export const Placements = meta.story({
  render: exampleRender(Examples.Placements),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
