import { Frame } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/frame";

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

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const SeparatedPanels = meta.story({
  render: exampleRender(Examples.SeparatedPanels),
});

export const WithFormControls = meta.story({
  render: exampleRender(Examples.WithFormControls),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
