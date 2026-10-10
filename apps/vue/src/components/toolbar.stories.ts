import { Toolbar } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/toolbar";

const meta = preview.meta({
  component: Toolbar,
  parameters: {
    docs: {
      description: {
        component:
          "Organizes a section heading on the left and related actions on the right for list and page headers.",
      },
    },
  },
  title: "Components/Layout/Toolbar",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const WrappedActions = meta.story({
  render: exampleRender(Examples.WrappedActions),
});

export const Compound = meta.story({
  render: exampleRender(Examples.Compound),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
