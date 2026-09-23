import { Frame } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/frame/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Frame,
  parameters: {
    docs: {
      description: {
        component:
          "Embeds external content in a framed viewport with a consistent chrome around it.",
      },
    },
  },
  title: "Components/Media/Frame",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const SeparatedPanels = meta.story({
  render: exampleRender(Examples.SeparatedPanels),
});

export const WithFormControls = meta.story({
  render: exampleRender(Examples.WithFormControls),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
