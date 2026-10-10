import { ToggleGroup } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/toggle-group";

const meta = preview.meta({
  component: ToggleGroup,
  parameters: {
    docs: {
      description: {
        component: "Select one or more options from a compact set.",
      },
    },
  },
  title: "Components/Forms/Toggle Group",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const Sizes = meta.story({
  render: exampleRender(Examples.Sizes),
});

export const Horizontal = meta.story({
  render: exampleRender(Examples.Horizontal),
});

export const Vertical = meta.story({
  render: exampleRender(Examples.Vertical),
});

export const Spacing = meta.story({
  render: exampleRender(Examples.Spacing),
});

export const FontWeight = meta.story({
  render: exampleRender(Examples.FontWeight),
});

export const Compound = meta.story({
  render: exampleRender(Examples.Compound),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const DisabledItem = meta.story({
  render: exampleRender(Examples.DisabledItem),
});

export const Single = meta.story({
  render: exampleRender(Examples.Single),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
