import { Combobox } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/combobox/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Combobox,
  parameters: {
    docs: {
      description: {
        component: "Lets users filter options while typing and pick a single result.",
      },
    },
  },
  title: "Components/Forms/Combobox",
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

export const Autohighlight = meta.story({
  render: exampleRender(Examples.Autohighlight),
});

export const Multiple = meta.story({
  render: exampleRender(Examples.Multiple),
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

export const WithScroll = meta.story({
  render: exampleRender(Examples.WithScroll),
});

export const WithStartIcon = meta.story({
  render: exampleRender(Examples.WithStartIcon),
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
