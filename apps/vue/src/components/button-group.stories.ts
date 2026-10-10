import { ButtonGroup } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/button-group";

const meta = preview.meta({
  component: ButtonGroup,
  parameters: {
    docs: {
      description: {
        component:
          "Groups related actions together so users can compare choices and pick one option from a set.",
      },
    },
  },
  title: "Components/Actions/Button Group",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const OrientationHorizontal = meta.story({
  render: exampleRender(Examples.OrientationHorizontal),
});

export const OrientationVertical = meta.story({
  render: exampleRender(Examples.OrientationVertical),
});

export const Nested = meta.story({
  render: exampleRender(Examples.Nested),
});

export const WithSeparator = meta.story({
  render: exampleRender(Examples.WithSeparator),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
