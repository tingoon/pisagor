import { Tour } from "@pisagor/react";
import * as Examples from "@pisagor/react/tour/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Tour,
  parameters: {
    docs: {
      description: {
        component:
          "Walks new users through key parts of the interface step by step with guided highlights.",
      },
    },
  },
  title: "Components/Overlay/Tour",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const CustomSpacing = meta.story({
  render: Examples.CustomSpacing,
});

export const Async = meta.story({
  render: Examples.Async,
});

export const Events = meta.story({
  render: Examples.Events,
});

export const KeyboardNavigation = meta.story({
  render: Examples.KeyboardNavigation,
});

export const Progress = meta.story({
  render: Examples.Progress,
});

export const Skip = meta.story({
  render: Examples.Skip,
});

export const StepTypes = meta.story({
  render: Examples.StepTypes,
});

export const WaitForClick = meta.story({
  render: Examples.WaitForClick,
});

export const WaitForElement = meta.story({
  render: Examples.WaitForElement,
});

export const WaitForInput = meta.story({
  render: Examples.WaitForInput,
});

export const Default = meta.story({
  render: Examples.Default,
});
