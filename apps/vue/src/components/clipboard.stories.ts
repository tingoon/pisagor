import { Clipboard } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/clipboard";

const meta = preview.meta({
  component: Clipboard,
  parameters: {
    docs: {
      description: {
        component:
          "Copies text to the clipboard with clear feedback so users can reuse values without selecting manually.",
      },
    },
  },
  title: "Components/Actions/Clipboard",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const DifferentIcon = meta.story({
  render: exampleRender(Examples.DifferentIcon),
});

export const WithLabel = meta.story({
  render: exampleRender(Examples.WithLabel),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const CustomTimeout = meta.story({
  render: exampleRender(Examples.CustomTimeout),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
