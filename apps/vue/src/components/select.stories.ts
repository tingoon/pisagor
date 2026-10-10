import { Select } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/select";

const meta = preview.meta({
  component: Select,
  parameters: {
    docs: {
      description: {
        component:
          "Lets users choose one option from a dropdown list when screen space for all choices is limited.",
      },
    },
  },
  title: "Components/Forms/Select",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const Sizes = meta.story({
  render: exampleRender(Examples.Sizes),
});

export const Multiple = meta.story({
  render: exampleRender(Examples.Multiple),
});

export const Grouping = meta.story({
  render: exampleRender(Examples.Grouping),
});

export const WithScroll = meta.story({
  render: exampleRender(Examples.WithScroll),
});

export const Empty = meta.story({
  render: exampleRender(Examples.Empty),
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

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});

export const MaxSelection = meta.story({
  render: exampleRender(Examples.MaxSelection),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
