import { Tour } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/tour/examples";
import { exampleRender } from "#/storybook/example-render";
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
  tags: ["autodocs"],
});

export const CustomSpacing = meta.story({
  render: exampleRender(Examples.CustomSpacing),
});

export const Async = meta.story({
  render: exampleRender(Examples.Async),
});

export const Events = meta.story({
  render: exampleRender(Examples.Events),
});

export const KeyboardNavigation = meta.story({
  render: exampleRender(Examples.KeyboardNavigation),
});

export const Progress = meta.story({
  render: exampleRender(Examples.Progress),
});

export const Skip = meta.story({
  render: exampleRender(Examples.Skip),
});

export const StepTypes = meta.story({
  render: exampleRender(Examples.StepTypes),
});

export const WaitForClick = meta.story({
  render: exampleRender(Examples.WaitForClick),
});

export const WaitForElement = meta.story({
  render: exampleRender(Examples.WaitForElement),
});

export const WaitForInput = meta.story({
  render: exampleRender(Examples.WaitForInput),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
