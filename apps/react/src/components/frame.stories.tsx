import { Frame } from "@pisagor/react";
import preview from "#/storybook/preview";
import * as Examples from "#/react/examples/media/frame";

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
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const Sizes = meta.story({
  render: Examples.Sizes,
});

export const SeparatedPanels = meta.story({
  render: Examples.SeparatedPanels,
});

export const WithFormControls = meta.story({
  render: Examples.WithFormControls,
});

export const CustomRecipe = meta.story({
  render: Examples.CustomRecipe,
});
