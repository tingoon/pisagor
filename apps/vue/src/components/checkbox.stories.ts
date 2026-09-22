import { Checkbox } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/checkbox/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          "Lets users turn an individual option on or off, alone or as part of a multi-select list.",
      },
    },
  },
  title: "Components/Forms/Checkbox",
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

export const Indeterminate = meta.story({
  render: exampleRender(Examples.Indeterminate),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});

export const CheckboxGroup = meta.story({
  render: exampleRender(Examples.CheckboxGroup),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
