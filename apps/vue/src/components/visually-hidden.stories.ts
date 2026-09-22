import { VisuallyHidden } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/visually-hidden/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: VisuallyHidden,
  parameters: {
    docs: {
      description: {
        component:
          "Hides text from the screen while keeping it available to screen readers and other assistive technology.",
      },
    },
  },
  title: "Components/Utilities/Visually Hidden",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
