import { RadioGroup } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/radio-group";

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

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const WithDescription = meta.story({
  render: exampleRender(Examples.WithDescription),
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
