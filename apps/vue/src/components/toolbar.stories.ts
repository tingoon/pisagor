import { Toolbar } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/toolbar/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

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

export const WrappedActions = meta.story({
  render: exampleRender(Examples.WrappedActions),
});

export const Compound = meta.story({
  render: exampleRender(Examples.Compound),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
