import { RadioGroup } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/radio-group/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component:
          "Lets users pick exactly one option from a small set of related choices.",
      },
    },
  },
  title: "Components/Forms/Radio Group",
});

export const Playground = meta.story({
  tags: ["autodocs"],
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

export const WithField = meta.story({
  render: exampleRender(Examples.WithField),
});

export const WithDescription = meta.story({
  render: exampleRender(Examples.WithDescription),
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
