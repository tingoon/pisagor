import { Frame } from "@pisagor/react";
import * as Examples from "@pisagor/react/frame/examples";
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
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const SeparatedPanels = meta.story({
  render: Examples.SeparatedPanels,
});

export const WithFormControls = meta.story({
  render: Examples.WithFormControls,
});
