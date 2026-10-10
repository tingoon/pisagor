import { Autocomplete } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/autocomplete";

const meta = preview.meta({
  component: Autocomplete,
  parameters: {
    docs: {
      description: {
        component: "Lets users filter options while typing.",
      },
    },
  },
  title: "Components/Forms/Autocomplete",
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

export const WithStartIcon = meta.story({
  render: exampleRender(Examples.WithStartIcon),
});

export const WithClearButton = meta.story({
  render: exampleRender(Examples.WithClearButton),
});

export const WithTrigger = meta.story({
  render: exampleRender(Examples.WithTrigger),
});

export const Group = meta.story({
  render: exampleRender(Examples.Group),
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

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
