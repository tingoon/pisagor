import { Autocomplete } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/autocomplete/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

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

export const Sizes = meta.story({
  render: exampleRender(Examples.Sizes),
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const OnSurface = meta.story({
  render: exampleRender(Examples.OnSurface),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});

export const Group = meta.story({
  render: exampleRender(Examples.Group),
});

export const WithClearButton = meta.story({
  render: exampleRender(Examples.WithClearButton),
});

export const WithStartIcon = meta.story({
  render: exampleRender(Examples.WithStartIcon),
});

export const WithTrigger = meta.story({
  render: exampleRender(Examples.WithTrigger),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Compound = meta.story({
  render: exampleRender(Examples.Compound),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
